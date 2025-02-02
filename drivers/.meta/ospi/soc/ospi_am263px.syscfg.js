let common = system.getScript("/common");

let ospi_input_clk_freq = 133333333;

const ospi_config_r5fss = [
    {
        name            : "OSPI0",
        baseAddr        : "CSL_FLASH_CONFIG_REG8_U_BASE",
        dataBaseAddr0    : "CSL_FLASH_DATA_REG0_U_BASE",
        dataBaseAddr1    : "CSL_FLASH_DATA_REG1_U_BASE",
        inputClkFreq    : ospi_input_clk_freq,
        dacEnable       : false,
        baudRateDiv     : 4,
        intrNum         : 171,
        clockIds        : [ "SOC_RcmPeripheralId_OSPI0" ],
        clockFrequencies: [
            {
                moduleId: "SOC_RcmPeripheralId_OSPI0",
                clkId   : "SOC_RcmPeripheralClockSource_DPLL_CORE_HSDIV0_CLKOUT0",
                clkRate : ospi_input_clk_freq,
            },
        ],
    },
];

const ospi_phyTuning_ddr_config =
[
    {
        phyControlMode          : "PHY_MASTER_MODE",
        dllLockMode             : "HALF_CYCLE_LOCK",
        phaseDelayElement       : 1,
        rdDelayMin              : 1,
        rdDelayMax              : 3,
        txDllLowWindowStart     : 0,
        txDllLowWindowEnd       : 48,
        txDllHighWindowStart    : 20,
        txDllHighWindowEnd      : 96,
        rxLowSearchStart        : 0,
        rxLowSearchEnd          : 40,
        rxHighSearchStart       : 10,
        rxHighSearchEnd         : 127,
        txLowSearchStart        : 0,
        txLowSearchEnd          : 64,
        txHighSearchStart       : 20,
        txHighSearchEnd         : 127,
        txDLLSearchOffset       : 8,
        rxTxDLLSearchStep       : 4,
    }
];

const ospi_dma_restrict_regions = [
    { start : "CSL_MSS_TCMA_RAM_BASE"   , size : "CSL_MSS_TCMA_RAM_SIZE" },
    { start : "CSL_HSM_RAM_U_BASE"      , size : "0x2fffc" }
];

function getDefaultConfig()
{
    return ospi_config_r5fss[0];
}

function getConfigArr() {

    return ospi_config_r5fss;
}

function getSupportedDataLines() {
    if(system.deviceData.device == "AM263Px") {
        return 8;
    } else {
        return 4;
    }
}

function getDmaRestrictedRegions() {

    return ospi_dma_restrict_regions;
}

function getPhyTuningParams(protocol)
{
    return ospi_phyTuning_ddr_config[0];
}
function addModuleInstances(instance) {
    let modInstances = new Array();

    if(instance.dmaEnable == true) {
        modInstances.push({
            name: "edmaDriver",
            displayName: "edma Configuration",
            moduleName: "/drivers/edma/edma",
        });
    }

    return modInstances;
}

let ospi_module_name = "/drivers/ospi/ospi";

function getTemplates()
{
    return {
        "/drivers/system/system_config.c.xdt": {
            driver_config: "/drivers/ospi/templates/ospi_config_am263px.c.xdt",
            driver_init: "/drivers/ospi/templates/ospi_init.c.xdt",
            driver_deinit: "/drivers/ospi/templates/ospi_deinit.c.xdt",
        },
        "/drivers/system/system_config.h.xdt": {
            driver_config: "/drivers/ospi/templates/ospi.h.xdt",
        },
        "/drivers/system/drivers_open_close.c.xdt": {
            driver_open_close_config: "/drivers/ospi/templates/ospi_open_close_config.c.xdt",
            driver_open: "/drivers/ospi/templates/ospi_open.c.xdt",
            driver_close: "/drivers/ospi/templates/ospi_close.c.xdt",
        },
        "/drivers/system/drivers_open_close.h.xdt": {
            driver_open_close_config: "/drivers/ospi/templates/ospi_open_close.h.xdt",
        },
        "/drivers/pinmux/pinmux_config.c.xdt": {
            moduleName: ospi_module_name,
        },
        "/drivers/system/power_clock_config.c.xdt": {
            moduleName: ospi_module_name,
        },
    };
}

exports = {
    getDefaultConfig,
    getConfigArr,
    getDmaRestrictedRegions,
    getSupportedDataLines,
    addModuleInstances,
    getTemplates,
    getPhyTuningParams
};


