let common = system.getScript("/common");
let pinmux = system.getScript("/drivers/pinmux/pinmux");
let hwi    = system.getScript("/kernel/dpl/hwi.js");
let soc    = system.getScript(`/drivers/mmcsd/soc/mmcsd_${common.getSocName()}`);

let gInputClkFreq = soc.getDefaultConfig().inputClkFreq;

function getConfigArr() {
	return soc.getConfigArr();
}

function getInstanceConfig(moduleInstance) {
	let solution = moduleInstance[getInterfaceName(moduleInstance)].$solution;
    let configArr = getConfigArr();
    let config = configArr.find(o => o.name === solution.peripheralName);

    config.clockFrequencies[0].clkRate = moduleInstance.inputClkFreq;
    config.clockFrequencies[0].clkId = moduleInstance.clockSource;

    return {
        ...config,
        ...moduleInstance,
    };
}

function pinmuxRequirements(instance) {
	let interfaceName = getInterfaceName(instance);
	let resources = [];
    let pinResource = {};
    if(interfaceName == "MMC")
    {
        pinResource = pinmux.getPinRequirements(interfaceName, "MMC_CLK", "MMC1 CLK Pin");
        pinmux.setConfigurableDefault( pinResource, "rx", true );
        pinmux.setConfigurableDefault( pinResource, "pu_pd", "nopull" );
        resources.push( pinResource);

        pinResource = pinmux.getPinRequirements(interfaceName, "MMC_SDWP", "MMC1 SDWP Pin");
        pinmux.setConfigurableDefault( pinResource, "rx", true );
        pinmux.setConfigurableDefault( pinResource, "pu_pd", "nopull" );
        resources.push( pinResource);

        pinResource = pinmux.getPinRequirements(interfaceName, "MMC_CMD", "MMC1 CMD Pin");
        pinmux.setConfigurableDefault( pinResource, "rx", true );
        pinmux.setConfigurableDefault( pinResource, "pu_pd", "pu" );
        resources.push( pinResource);

        pinResource = pinmux.getPinRequirements(interfaceName, "MMC_DAT0", "MMC1 DAT0 Pin");
        pinmux.setConfigurableDefault( pinResource, "rx", true );
        pinmux.setConfigurableDefault( pinResource, "pu_pd", "pu" );
        resources.push( pinResource);

        pinResource = pinmux.getPinRequirements(interfaceName, "MMC_DAT1", "MMC1 DAT1 Pin");
        pinmux.setConfigurableDefault( pinResource, "rx", true );
        pinmux.setConfigurableDefault( pinResource, "pu_pd", "pu" );
        resources.push( pinResource);

        pinResource = pinmux.getPinRequirements(interfaceName, "MMC_DAT2", "MMC1 DAT2 Pin");
        pinmux.setConfigurableDefault( pinResource, "rx", true );
        pinmux.setConfigurableDefault( pinResource, "pu_pd", "pu" );
        resources.push( pinResource);

        pinResource = pinmux.getPinRequirements(interfaceName, "MMC_DAT3", "MMC1 DAT3 Pin");
        pinmux.setConfigurableDefault( pinResource, "rx", true );
        pinmux.setConfigurableDefault( pinResource, "pu_pd", "pu" );
        resources.push( pinResource);

        pinResource = pinmux.getPinRequirements(interfaceName, "MMC_SDCD", "MMC1 SDCD Pin");
        pinmux.setConfigurableDefault( pinResource, "rx", true );
        pinmux.setConfigurableDefault( pinResource, "pu_pd", "nopull" );
        resources.push( pinResource);
    }
	let peripheral = {
		name          : interfaceName,
        displayName   : "MMCSD Instance",
        interfaceName : interfaceName,
        resources     : resources,
	}

	return [peripheral];
}

function getPeripheralPinNames(inst) {
    return ["MMC_CLK", "MMC_CMD", "MMC_DAT0", "MMC_DAT1", "MMC_DAT2", "MMC_DAT3", "MMC_SDWP", "MMC_SDCD"];
}

function getInterfaceName(inst) {
	return "MMC";
}

function getClockEnableIds(inst) {

    let instConfig = getInstanceConfig(inst);

    return instConfig.clockIds;
}

function getClockFrequencies(inst) {

    let instConfig = getInstanceConfig(inst);

    return instConfig.clockFrequencies;
}

let mmcsd_module_name = "/drivers/mmcsd/mmcsd";

let gClockSourceOptions = soc.getClockSourceOptions();

let mmcsd_module = {
	displayName: "MMCSD",
	templates: {

        "/drivers/pinmux/pinmux_config.c.xdt": {
            moduleName: mmcsd_module_name,
        },
        "/drivers/system/power_clock_config.c.xdt": {
            moduleName: mmcsd_module_name,
        },
	},
	maxInstances: getConfigArr().length,
	defaultInstanceName: "CONFIG_MMCSD",
	validate: validate,
	config: [
        {
            name: "moduleSelect",
            displayName: "Select MMCSD Module",
            description: "The MMC is usually connected to the SD card slot",
            default: "MMC",
            hidden: true,
            options: [
                { name: "MMC" },
            ],
            onChange: function (inst, ui) {
                if(inst.moduleSelect == "MMC") {
                    inst.cardType = "SD";
                }
            },
        },
        {
            name: "clockSource",
            displayName: "Clock Source",
            default: "SOC_RcmPeripheralClockSource_DPLL_PER_HSDIV0_CLKOUT1",
            description: "Clock Source",
            options: gClockSourceOptions,
            onChange: function (inst, ui) {
                // if(inst.inputClkFreq == "MMC") {
                inst.inputClkFreq = soc.getClockValue(inst.clockSource);
                // }
            },
        },
		{
			name: "inputClkFreq",
			displayName: "Input Clock Frequency (Hz)",
			default: gInputClkFreq,
            // options: function(inst) {
            //     return soc.getClockValue(inst.clockSource);
            // },
            hidden: true,
		},
		{
			name: "cardType",
			displayName: "Card Type",
			default: "SD",
            options: [
                { name: "SD" },
                { name: "EMMC" },
                { name: "NO_DEVICE" },
            ],
		},
        {
            name: "autoAssignMaxBusSpeed",
            displayName: "Auto Assign Maximum Speed",
            default: true,
            onChange: function (inst, ui) {
                if(inst.sdkInfra == "LLD")
                {
                    let hideConfigs = false;
                    if(inst.autoAssignMaxBusSpeed == true) {
                        hideConfigs = true;
                    }

                    ui.modeSelectSD.hidden = hideConfigs;
                    ui.supportedBusWidth.hidden = hideConfigs;
                }
                else
                {
                    /* For HLD */
                    let hideConfigs = false;
                    if(inst.autoAssignMaxBusSpeed == true) {
                        hideConfigs = true;
                    }

                    ui.modeSelectSD.hidden = hideConfigs;
                    ui.supportedBusWidth.hidden = hideConfigs;
                }
            },
        },
        {
            /* LLD Only */
            name: "modeSelectSD",
            displayName: "SD Operating Mode",
            description: "Select the operating mode for SD",
            default: soc.getDefaultOperatingModeSD().name,
            options: soc.getOperatingModesSD(),
            hidden: true,
        },
        {
            name: "intrPriority",
            displayName: "Interrupt Priority",
            default: 4,
            hidden: false,
            description: `Interrupt Priority: 0 (highest) to ${hwi.getHwiMaxPriority()} (lowest)`,
        },
		{
            name: "intrEnable",
            displayName: "Interrupt Enable",
            default: false,
            hidden: false,
            onChange: function (inst, ui) {
                let hideConfigs = false;
                if(inst.intrEnable == false) {
                    hideConfigs = true;
                    inst.transferCallbackFxn = "NULL";
                    inst.transferMode = "BLOCKING";
                    ui.transferCallbackFxn.hidden = true;
                }
                ui.transferMode.hidden = hideConfigs;
            },
            description: "If enabled, Transfer will happen in interrupt Mode",
        },
        {
            name: "transferMode",
            displayName: "Transfer Mode",
            default: "BLOCKING",
            hidden: true,
            options: [
                {
                    name: "BLOCKING",
                    displayName: "Blocking"
                },
                {
                    name: "CALLBACK",
                    displayName: "Callback"
                },
            ],
            onChange: function (inst, ui) {
                if(inst.transferMode == "CALLBACK") {
                    ui.transferCallbackFxn.hidden = false;
                }
                else {
                    inst.transferCallbackFxn = "NULL";
                    ui.transferCallbackFxn.hidden = true;
                }
            },
            description: "This determines whether the driver operates synchronously or asynchronously",
        },
        {
            name: "transferCallbackFxn",
            displayName: "Transfer Callback",
            default: "NULL",
            hidden: true,
            description: "Transfer callback function when callback mode is selected",
        },
        {
            name: "dmaEnable",
            displayName: "DMA Enable",
            default: false,
            hidden: true,
        },
        {
            name: "supportedBusVoltages",
            displayName: "Voltage Value",
            options: [
                { name: "VOLTAGE_3_3V" },
                { name: "VOLTAGE_3_0V" },
            ],
            default: "VOLTAGE_3_3V",
            hidden: true,
        },
        {
            name: "supportedBusWidth",
            displayName: "Data Width",
            options: [
                {
                    name: "MMCSD_BUS_WIDTH_4BIT",
                    displayName: "4BIT"
                },
                {
                    name: "MMCSD_BUS_WIDTH_1BIT",
                    displayName: "1BIT"
                },
            ],
            default: "MMCSD_BUS_WIDTH_4BIT",
            hidden: true,
        },
        {
            /* HLD & LLD */
            name: "sdkInfra",
            displayName: "SDK Infra",
            default: "HLD",
            options: [
                {
                    name: "HLD",
                    displayName: "HLD"
                },
                {
                    name: "LLD",
                    displayName: "LLD"
                },
            ],
            onChange: function (inst, ui) {

                if(inst.sdkInfra == "LLD") {

                    ui.intrPriority.hidden = true;
                    ui.transferMode.hidden = true;
                    ui.intrEnable.hidden = true;
                }
                else {

                    ui.intrPriority.hidden = false;
                    ui.transferMode.hidden = false;
                    ui.intrEnable.hidden = false;
                }
            },
            description: "SDK Infra",
            hidden: false,
        },




	],
    moduleInstances: moduleInstances,
	getInstanceConfig,
	pinmuxRequirements,
	getInterfaceName,
	getPeripheralPinNames,
	getClockEnableIds,
	getClockFrequencies,
};

function validate(inst, report) {

}

/*
 *  ======== moduleInstances ========
 */
function moduleInstances(inst) {
    let modInstances = new Array();

    if(inst.sdkInfra == "HLD")
    {
        modInstances.push({
            name: "MMCSD_child",
            moduleName: '/drivers/mmcsd/v1/mmcsd_v1_template',
            },
        );
    }
    else
    {
        modInstances.push({
            name: "MMCSD_child",
            moduleName: '/drivers/mmcsd/v1/mmcsd_v1_template_lld',
            },
        );
    }

    return (modInstances);
}

exports = mmcsd_module;
