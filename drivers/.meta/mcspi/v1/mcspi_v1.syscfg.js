
let common = system.getScript("/common");
let hwi = system.getScript("/kernel/dpl/hwi.js");
let pinmux = system.getScript("/drivers/pinmux/pinmux");
let soc = system.getScript(`/drivers/mcspi/soc/mcspi_${common.getSocName()}`);

function getConfigArr() {
    return system.getScript(`/drivers/mcspi/soc/mcspi_${common.getSocName()}`).getConfigArr();
}

function getInstanceConfig(moduleInstance) {
    let solution = moduleInstance[getInterfaceName(moduleInstance)].$solution;
    let configArr = getConfigArr();
    let config = configArr.find(o => o.name === solution.peripheralName);

    return {
        ...config,
        ...moduleInstance,
    };
};

function getMaxChannels(inst) {
    if((inst.mode == "SINGLE_CONTROLLER") || (inst.mode == "PERIPHERAL")) {
        return 1;
    }
    else {
        return soc.getMaxChannels(inst);
    }
}

function pinmuxRequirements(inst) {

    let interfaceName = getInterfaceName(inst);

    let misoRequired = false;
    let mosiRequired = false;
    let txRequired = true;
    let rxRequired = true;

    switch (inst.trMode) {
        case "TX_RX":
            misoRequired = true;
            mosiRequired = true;
            break;
        case "TX_ONLY":
            if(inst.mode == "PERIPHERAL") {
                misoRequired = true;
                mosiRequired = false;
            }
            else {
                misoRequired = false;
                mosiRequired = true;
            }
            rxRequired = false;
            break;
        case "RX_ONLY":
            if(inst.mode == "PERIPHERAL") {
                misoRequired = false;
                mosiRequired = true;
            }
            else {
                misoRequired = true;
                mosiRequired = false;
            }
            txRequired = false;
            break;
    }

    let resources = [];
    resources.push( pinmux.getPinRequirements(interfaceName, "CLK", "SPI Clock Pin") );
    resources.push( pinmux.getPinRequirements(interfaceName, "D0", "SPI D0 Pin") );
    resources.push( pinmux.getPinRequirements(interfaceName, "D1", "SPI D1 Pin") );

    let spi = {
        name: interfaceName,
        displayName: "SPI Instance",
        interfaceName: interfaceName,
        resources: resources,
    };

    return [spi];
}

function getInterfaceName(inst) {

    return "SPI";
}

function getPeripheralPinNames(inst) {

    return [ "CLK", "D0", "D1", "CS0", "CS1", "CS2", "CS3", "CSn" ];
}

function getClockEnableIds(inst) {

    let instConfig = getInstanceConfig(inst);

    return instConfig.clockIds;
}

let mcspi_module_name = "/drivers/mcspi/mcspi";

let mcspi_module = {
    displayName: "MCSPI",

    templates: {
        "/drivers/pinmux/pinmux_config.c.xdt": {
            moduleName: mcspi_module_name,
        },
        "/drivers/system/power_clock_config.c.xdt": {
            moduleName: mcspi_module_name,
        },
    },
    defaultInstanceName: "CONFIG_MCSPI",
    config: getConfigurables(),
    validate: validate,
    moduleInstances: moduleInstances,
    moduleStatic: {
        modules: function(inst) {
            return [{
                name: "system_common",
                moduleName: "/system_common",
            }]
        },
    },
    sharedModuleInstances: addModuleInstances,
    getInstanceConfig,
    pinmuxRequirements,
    getMaxChannels,
    getInterfaceName,
    getPeripheralPinNames,
    getClockEnableIds,
    onMigrate,
};

function onMigrate(newInst, oldInst, oldSystem) {
    let pins = getPeripheralPinNames(oldInst)
    let interfaceName = getInterfaceName(oldInst)
    common.onMigrate(newInst, oldInst, oldSystem, pins, interfaceName)
}

function addModuleInstances(instance) {
    let modInstances = new Array();

    if(instance.sdkInfra == "HLD") {
        modInstances.push({
            name: "edmaDriver",
            displayName: "EDMA Configuration",
            moduleName: "/drivers/edma/edma",
        });
    }

    if((instance.intrEnable == "DMA") && (instance.sdkInfra == "LLD")) {
        modInstances.push({
            name: "edmaDriver",
            displayName: "EDMA Configuration",
            moduleName: "/drivers/edma/edma",
        });
    }

    return modInstances;
}

function checkTrigLevel(instance, report, property) {
    let flag = 0;
    let trigLevel = instance[property];
    if((trigLevel == 2) | (trigLevel == 4) | (trigLevel == 8) |(trigLevel == 16) |(trigLevel == 32)) {
        flag = 1;
    }

    if ((flag != 1) & (property == "txFifoTrigLevel")) {
        report.logError("Trigger level must be in power of 2", instance, "txFifoTrigLevel");
    }
    if ((flag != 1) & (property == "rxFifoTrigLevel")) {
        report.logError("Trigger level must be in power of 2", instance, "rxFifoTrigLevel");
    }
}

function getConfigurables()
{
    let config = [];

    config.push(
        {
            name: "mode",
            displayName: "Mode of Operation",
            default: "SINGLE_CONTROLLER",
            options: [
                {
                    name: "SINGLE_CONTROLLER",
                    displayName: "Single Channel Controller"
                },
                {
                    name: "MULTI_CONTROLLER",
                    displayName: "Multi Channel Controller"
                },
                {
                    name: "PERIPHERAL",
                    displayName: "Peripheral"
                },
            ],
            description: 'Controller/Peripheral or Single/Multi channel mode of operation. '+
                         'Configure other channels in case of multi controller mode. ',
            onChange: function (inst, ui) {
                /* Init delay applicable only for single controller mode */
                if((inst.advanced == true) &&
                   (inst.mode == "SINGLE_CONTROLLER")) {
                    ui.initDelay.hidden = false;
                }
                else {
                    ui.initDelay.hidden = true;
                }
                /* 3/4 pin mode applicable only in single channel mode */
                if(inst.mode == "SINGLE_CONTROLLER") {
                    ui.pinMode.hidden = false;
                }
                else {
                    ui.pinMode.hidden = true;
                }
                if(inst.mode == "SINGLE_CONTROLLER") {
                    ui.advanced.hidden = false;
                }
                else {
                    ui.advanced.hidden = true;
                }
            },
        },
        {
            name: "pinMode",
            displayName: "Pin Mode",
            default: 4,
            options: [
                {
                    name: 3,
                    displayName: "3 Pin Mode"
                },
                {
                    name: 4,
                    displayName: "4 Pin Mode"
                },
            ],
            description: "3 pin mode: Chip-select (CS) is not used and all related options to CS have no meaning. 4 pin mode: CS is used. This is selectable only in single channel mode",
        },
        {
            name: "trMode",
            displayName: "TR Mode",
            default: "TX_RX",
            options: [
                {
                    name: "TX_RX",
                    displayName: "TX and RX"
                },
                {
                    name: "RX_ONLY",
                    displayName: "RX Only"
                },
                {
                    name: "TX_ONLY",
                    displayName: "TX Only"
                },
            ],
            description: "Channel transmit/receive mode",
            onChange: function (inst, ui) {
                if(inst.trMode == "TX_RX") {
                    inst.txFifoTrigLevel = 16;
                    inst.rxFifoTrigLevel = 16;
                    ui.txFifoTrigLevel.hidden = false;
                    ui.rxFifoTrigLevel.hidden = false;
                }
                else if(inst.trMode == "TX_ONLY") {
                    inst.txFifoTrigLevel = 32;
                    inst.rxFifoTrigLevel = 1;
                    ui.txFifoTrigLevel.hidden = false;
                    ui.rxFifoTrigLevel.hidden = true;
                }
                else if(inst.trMode == "RX_ONLY") {
                    inst.txFifoTrigLevel = 1;
                    inst.rxFifoTrigLevel = 32;
                    ui.txFifoTrigLevel.hidden = true;
                    ui.rxFifoTrigLevel.hidden = false;
                }
            },
        },
        {
            name: "inputSelect",
            displayName: "Input Select",
            default: "1",
            options: [
                {
                    name: "0",
                    displayName: "D0"
                },
                {
                    name: "1",
                    displayName: "D1"
                },
            ],
            description: "Input selected on D0 or D1 line",
        },
        {
            name: "dpe0",
            displayName: "D0 TX Enable",
            default: "ENABLE",
            options: [
                {
                    name: "ENABLE",
                    displayName: "TX ENABLED"
                },
                {
                    name: "DISABLE",
                    displayName: "TX DISABLED"
                },
            ],
            description: "Transmission enable/disable for D0",
        },
        {
            name: "dpe1",
            displayName: "D1 TX Enable",
            default: "DISABLE",
            options: [
                {
                    name: "ENABLE",
                    displayName: "TX ENABLED"
                },
                {
                    name: "DISABLE",
                    displayName: "TX DISABLED"
                },
            ],
            description: "Transmission enable/disable for D1",
        },
        {
            name: "txFifoTrigLevel",
            displayName: "Fifo Trigger Level for TX",
            default: 16,
            hidden: false,
            description: "Fifo Trigger Level for TX",
            longDescription: 'FIFO trigger level must be a multiple of SPI Word Length. ' +
                             'Recommended to set the trigger level to half the availabel FIFO. ' +
                             'For every Tx Empty event, trigger level number of bytes are transmitted. ' +
                             'If the trigger level is small the time spent in every ISR is small but number of interrupts are more. ' +
                             'If the trigger level is large the time spent in every ISR is more but number of interrupts are less.' ,
        },
        {
            name: "rxFifoTrigLevel",
            displayName: "Fifo Trigger Level for RX",
            default: 16,
            hidden: false,
            description: "Fifo Trigger Level for RX",
            longDescription: 'FIFO trigger level must be a multiple of SPI Word Length. ' +
                             'Recommended to set the trigger level to half the availabel FIFO. ' +
                             'For every Rx Full event, trigger level number of bytes are read from Rx Fifo. ' +
                             'If the trigger level is small the time spent in every ISR is small but number of interrupts are more. ' +
                             'If the trigger level is large the time spent in every ISR is more but number of interrupts are less.' ,
        },
        {
            name: "intrEnable", /* Did not change name to avoid interface break */
            displayName: "Transfer Mode",
            default: "INTERRUPT",
            hidden: false,
            options: [
                {
                    name: "POLLED",
                    displayName: "Polled Mode"
                },
                {
                    name: "INTERRUPT",
                    displayName: "Interrupt Mode"
                },
                {
                    name: "DMA",
                    displayName: "DMA Mode"
                },
            ],
            onChange: function (inst, ui) {
                if(inst.intrEnable == "POLLED") {
                    ui.intrPriority.hidden = true;
                    ui.transferMode.hidden = true;
                    ui.transferTimeout.hidden = true;
                    ui.transferCallbackFxn.hidden = true;
                    if(inst.sdkInfra == "LLD")
                    {
                        ui.errorCallbackFxn.hidden = true;
                    }
                }
                if((inst.intrEnable == "INTERRUPT") || (inst.intrEnable == "DMA")) {
                    ui.intrPriority.hidden = false;
                    ui.transferMode.hidden = false;
                    ui.transferTimeout.hidden = false;
                    if(inst.transferMode == "CALLBACK")
                    {
                        ui.transferCallbackFxn.hidden = false;
                    }
                    if(inst.sdkInfra == "LLD")
                    {
                        ui.errorCallbackFxn.hidden = false;
                    }
                }
            },
            description: "Driver Operating Mode. In case of DMA mode, Default TX Data feature is not supported"
        },
        {
            name: "intrPriority",
            displayName: "Interrupt Priority",
            default: 4,
            hidden: false,
            description: `Interrupt Priority: 0 (highest) to ${hwi.getHwiMaxPriority()} (lowest)`,
        },
        {
            name: "transferMode",
            displayName: "Transfer Mode",
            default: "BLOCKING",
            hidden: false,
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
                    ui.transferTimeout.hidden = true;
                    if(inst.transferCallbackFxn == "NULL") {
                        /* Clear NULL entry as user need to provide a fxn */
                        inst.transferCallbackFxn = "";
                    }
                }
                else {
                    ui.transferCallbackFxn.hidden = true;
                    ui.errorCallbackFxn.hidden = true;
                    inst.transferCallbackFxn = "NULL";
                    ui.transferTimeout.hidden = false;
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
            name: "errorCallbackFxn",
            displayName: "Error Callback",
            default: "NULL",
            hidden: true,
            description: "Error callback function when callback mode is selected",
        },
        {
            name: "transferTimeout",
            displayName: "Transfer Timeout",
            default: 0xFFFFFFFF,
            hidden: false,
            description: "Transfer timeout in system ticks. Provide 0xFFFFFFFF to wait forever",
            displayFormat: "hex",
        },
        {
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
                if((inst.sdkInfra == "LLD")) {
                    ui.transferMode.hidden = true;
                    ui.transferCallbackFxn.hidden = false;
                    ui.errorCallbackFxn.hidden = false;
                    if(inst.intrEnable == "POLLED")
                    {
                        ui.transferCallbackFxn.hidden = true;
                        ui.errorCallbackFxn.hidden = true;
                    }
                    else
                    {
                        ui.transferCallbackFxn.hidden = false;
                        ui.errorCallbackFxn.hidden = false;
                    }
                }
                else
                {
                    if((inst.intrEnable == "INTERRUPT") || (inst.intrEnable == "DMA"))
                    {
                        ui.transferMode.hidden = false;
                        if(inst.transferMode == "CALLBACK")
                        {
                            ui.transferCallbackFxn.hidden = false;
                        }
                        else
                        {
                            ui.transferCallbackFxn.hidden = true;
                        }
                    }
                    else
                    {
                        ui.transferMode.hidden = true;
                        ui.transferCallbackFxn.hidden = false;
                    }
                    ui.errorCallbackFxn.hidden = true;
                }
            },
            description: "SDK Infra",
        },
        {
            name: "multiWordAccess",
            displayName: "Enable Multi Word Access",
            default: "false",
            options: [
                {
                    name: "false",
                    displayName: "false"
                },
                {
                    name: "true",
                    displayName: "true"
                },
            ],
            description: "Perform multiple MCSPI word access"
        },
        /* Advanced parameters */
        {
            name: "advanced",
            displayName: "Show Advanced Config",
            default: false,
            description: "This feature is only applicable for Single Controller Mode of Operation",
            onChange: function (inst, ui) {
                /* Init delay applicable only for single controller mode */
                if((inst.advanced == true) &&
                   (inst.mode == "SINGLE_CONTROLLER")) {
                    ui.initDelay.hidden = false;
                }
                else {
                    ui.initDelay.hidden = true;
                }
            },
        },
        /* Advance Instance attributes */
        {
            name: "initDelay",
            displayName: "Init Delay",
            default: "0",
            hidden: true,
            options: [
                {
                    name: "0",
                },
                {
                    name: "4",
                },
                {
                    name: "8",
                },
                {
                    name: "16",
                },
                {
                    name: "32",
                },
            ],
            description: "Initial delay for first transfer in bus clock cycles. Applicable only for single controller mode",
        },
    )

    return config;
}
/*
 *  ======== validate ========
 */
function validate(inst, report) {
    common.validate.checkNumberRange(inst, report, "transferTimeout", 0x0, 0xFFFFFFFF, "hex");
    common.validate.checkValidCName(inst, report, "transferCallbackFxn");
    common.validate.checkValidCName(inst, report, "errorCallbackFxn");
    if((inst.transferMode == "CALLBACK") && ((inst.transferCallbackFxn == "NULL") || (inst.transferCallbackFxn == ""))) {
        report.logError("Callback function MUST be provided for callback transfer mode", inst, "transferCallbackFxn");
    }
    if(((inst.sdkInfra == "LLD") && ((inst.errorCallbackFxn == "NULL") || (inst.errorCallbackFxn == ""))) && (inst.intrEnable != "POLLED")) {
        report.logError("Callback function MUST be provided for callback transfer mode", inst, "errorCallbackFxn");
    }
    common.validate.checkNumberRange(inst, report, "intrPriority", 0, hwi.getHwiMaxPriority(), "dec");
    if(inst.intrEnable == "DMA")
    {
        if(inst.edmaDriver.intrEnable == "FALSE")
        {
            report.logError(`Interrupt must be enabled in `+system.getReference(inst.edmaDriver,"intrEnable"), inst, "intrEnable");
        }
    }
    if (inst.trMode == "TX_RX") {
        common.validate.checkNumberRange(inst, report, "txFifoTrigLevel", 1, 32, "dec");
        common.validate.checkNumberRange(inst, report, "rxFifoTrigLevel", 1, 32, "dec");
        checkTrigLevel(inst, report, "txFifoTrigLevel");
        checkTrigLevel(inst, report, "rxFifoTrigLevel");
    }
    if (inst.trMode == "TX_ONLY") {
        common.validate.checkNumberRange(inst, report, "txFifoTrigLevel", 1, 64, "dec");
        checkTrigLevel(inst, report, "txFifoTrigLevel");
    }
    if (inst.trMode == "RX_ONLY") {
        common.validate.checkNumberRange(inst, report, "rxFifoTrigLevel", 1, 64, "dec");
        checkTrigLevel(inst, report, "rxFifoTrigLevel");
    }
}

/*
 *  ======== moduleInstances ========
 */
function moduleInstances(inst) {
    let modInstances = new Array();

    let maxCh = getMaxChannels(inst);
    modInstances.push({
        name: "mcspiChannel",
        displayName: "MCSPI Channel Configuration",
        moduleName: '/drivers/mcspi/v1/mcspi_v1_channel',
        useArray: true,
        maxInstanceCount: maxCh,
        minInstanceCount: 1,
        defaultInstanceCount: 1,
        args: {
            interfaceName: getInterfaceName(inst),
            dmaEnable: inst.intrEnable,
            pinMode: inst.pinMode,
            mode : inst.mode,
        },
    });

    if( inst.sdkInfra == "HLD")
    {
        modInstances.push({
            name: "child",
            moduleName: '/drivers/mcspi/v1/mcspi_v1_template',
            },
        );
    }
    else
    {
        modInstances.push({
            name: "child",
            moduleName: '/drivers/mcspi/v1/mcspi_v1_template_lld',
            },
        );
    }

    return (modInstances);
}

function getClockFrequencies(inst) {

    let instConfig = getInstanceConfig(inst);

    return instConfig.clockFrequencies;
}

function getModule()
{
    let module = mcspi_module;
    if(soc.isFrequencyDefined())
    {
        module.getClockFrequencies = getClockFrequencies;
    }
    return module;
}

exports = getModule();
