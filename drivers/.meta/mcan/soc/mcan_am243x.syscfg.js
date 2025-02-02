let common = system.getScript("/common");

let mcan_func_clk = 80 * 1000 * 1000;

const mcan_config_r5fss = [
    {
        name            : "MCAN0",
        baseAddr        : "CSL_MCAN0_MSGMEM_RAM_BASE",
        intrNum0        : "CSLR_GICSS0_SPI_MCAN0_MCANSS_MCAN_LVL_INT_0",
        intrNum1        : "CSLR_GICSS0_SPI_MCAN0_MCANSS_MCAN_LVL_INT_1",
        clockIds        : [ "TISCI_DEV_MCAN0" ],
        clockFrequencies: [
            {
                moduleId: "TISCI_DEV_MCAN0",
                clkId   : "TISCI_DEV_MCAN0_MCANSS_CCLK_CLK",
                clkRate : mcan_func_clk,
            },
        ],
    },
    {
        name            : "MCAN1",
        baseAddr        : "CSL_MCAN1_MSGMEM_RAM_BASE",
        intrNum0        : "CSLR_GICSS0_SPI_MCAN1_MCANSS_MCAN_LVL_INT_0",
        intrNum1        : "CSLR_GICSS0_SPI_MCAN1_MCANSS_MCAN_LVL_INT_1",
        clockIds        : [ "TISCI_DEV_MCAN1" ],
        clockFrequencies: [
            {
                moduleId: "TISCI_DEV_MCAN1",
                clkId   : "TISCI_DEV_MCAN1_MCANSS_CCLK_CLK",
                clkRate : mcan_func_clk,
            },
        ],
    },
];

function getConfigArr() {
    let mcan_config;

    mcan_config = mcan_config_r5fss;

    return mcan_config;
}

function getInterfaceName(instance) {
    return "MCAN";
}

function getDmaType() {
    return "UDMA";
}

exports = {
    getConfigArr,
    getInterfaceName,
    getDmaType,
};
