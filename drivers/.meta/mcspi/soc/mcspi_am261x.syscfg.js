let common = system.getScript("/common");


let mcspi_input_clk_freq = 50000000;

const mcspi_config_r5fss = [
    {
        name            : "SPI0",
        baseAddr        : "CSL_MCSPI0_U_BASE",
        inputClkFreq    : mcspi_input_clk_freq,
        intrNum         : "CSLR_R5FSS0_CORE0_INTR_MCSPI0_INTR",
        clockIds        : [ "SOC_RcmPeripheralId_MCSPI0" ],
        clockFrequencies: [
            {
                moduleId: "SOC_RcmPeripheralId_MCSPI0",
                clkId   : "SOC_RcmPeripheralClockSource_SYS_CLK",
                clkRate : mcspi_input_clk_freq,
            },
        ],
    },
    {
        name            : "SPI1",
        baseAddr        : "CSL_MCSPI1_U_BASE",
        inputClkFreq    : mcspi_input_clk_freq,
        intrNum         : "CSLR_R5FSS0_CORE0_INTR_MCSPI1_INTR",
        clockIds        : [ "SOC_RcmPeripheralId_MCSPI1" ],
        clockFrequencies: [
            {
                moduleId: "SOC_RcmPeripheralId_MCSPI1",
                clkId   : "SOC_RcmPeripheralClockSource_SYS_CLK",
                clkRate : mcspi_input_clk_freq,
            },
        ],
    },
    {
        name            : "SPI2",
        baseAddr        : "CSL_MCSPI2_U_BASE",
        inputClkFreq    : mcspi_input_clk_freq,
        intrNum         : "CSLR_R5FSS0_CORE0_INTR_MCSPI2_INTR",
        clockIds        : [ "SOC_RcmPeripheralId_MCSPI2" ],
        clockFrequencies: [
            {
                moduleId: "SOC_RcmPeripheralId_MCSPI2",
                clkId   : "SOC_RcmPeripheralClockSource_SYS_CLK",
                clkRate : mcspi_input_clk_freq,
            },
        ],
    },
    {
        name            : "SPI3",
        baseAddr        : "CSL_MCSPI3_U_BASE",
        inputClkFreq    : mcspi_input_clk_freq,
        intrNum         : "CSLR_R5FSS0_CORE0_INTR_MCSPI3_INTR",
        clockIds        : [ "SOC_RcmPeripheralId_MCSPI3" ],
        clockFrequencies: [
            {
                moduleId: "SOC_RcmPeripheralId_MCSPI3",
                clkId   : "SOC_RcmPeripheralClockSource_SYS_CLK",
                clkRate : mcspi_input_clk_freq,
            },
        ],
    },
];

function getMaxChannels(inst) {
    return 2;   /* max number of channels per MCSPI */
}

function getConfigArr() {
    return mcspi_config_r5fss;
}

function isFrequencyDefined()
{
    return true;
}

exports = {
    getConfigArr,
    getMaxChannels,
    isFrequencyDefined,
};
