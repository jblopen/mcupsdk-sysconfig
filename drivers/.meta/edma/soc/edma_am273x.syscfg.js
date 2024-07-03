let common = system.getScript("/common");

const edma_config_r5fss = [
    {
        name: "EDMA_RCSS_A",
        baseAddr: "CSL_RCSS_TPCC_A_U_BASE",
        compIntrNumber: "CSL_MSS_INTR_RCSS_TPCC_A_INTAGG",
        intrAggEnableAddr: "CSL_RCSS_CTRL_U_BASE + CSL_RCSS_CTRL_RCSS_TPCC_A_INTAGG_MASK",
        intrAggStatusAddr: "CSL_RCSS_CTRL_U_BASE + CSL_RCSS_CTRL_RCSS_TPCC_A_INTAGG_STATUS",
        maxDmaChannels: "64",
        maxTcc: "64",
        maxPaRAM: "128",
        maxRegions: "8",
        maxQueue: "2",
        supportReservedChannelConfig: true,
        /* This instance can be shared between the 2 R5 Cores and c66x core. */
        defaultOwnDmaChannelStart_r5fss0_0: "32",
        defaultOwnDmaChannelEnd_r5fss0_0: "47",
        defaultOwnDmaChannelStart_r5fss0_1: "48",
        defaultOwnDmaChannelEnd_r5fss0_1: "63",
        defaultOwnQdmaChannelStart_r5fss0_0: "4",
        defaultOwnQdmaChannelEnd_r5fss0_0: "5",
        defaultOwnQdmaChannelStart_r5fss0_1: "6",
        defaultOwnQdmaChannelEnd_r5fss0_1: "7",
        defaultOwnTccStart_r5fss0_0: "32",
        defaultOwnTccEnd_r5fss0_0: "47",
        defaultOwnTccStart_r5fss0_1: "48",
        defaultOwnTccEnd_r5fss0_1: "63",
        defaultOwnParamStart_r5fss0_0: "64",
        defaultOwnParamEnd_r5fss0_0: "95",
        defaultOwnParamStart_r5fss0_1: "96",
        defaultOwnParamEnd_r5fss0_1: "127",
        defaultReservedDmaChannelStart_r5fss0_0: "32",
        defaultReservedDmaChannelEnd_r5fss0_0: "32",
        defaultReservedDmaChannelStart_r5fss0_1: "47",
        defaultReservedDmaChannelEnd_r5fss0_1: "47",
    },
    {
        name: "EDMA_MSS_A",
        baseAddr: "CSL_MSS_TPCC_A_U_BASE",
        compIntrNumber: "CSL_MSS_INTR_MSS_TPCC_A_INTAGG",
        intrAggEnableAddr: "CSL_MSS_CTRL_U_BASE + CSL_MSS_CTRL_MSS_TPCC_A_INTAGG_MASK",
        intrAggStatusAddr: "CSL_MSS_CTRL_U_BASE + CSL_MSS_CTRL_MSS_TPCC_A_INTAGG_STATUS",
        maxDmaChannels: "64",
        maxTcc: "64",
        maxPaRAM: "128",
        maxRegions: "8",
        maxQueue: "2",
        supportReservedChannelConfig: true,
        /* This instance can be shared between the 2 R5 Cores. */
        defaultOwnDmaChannelStart_r5fss0_0: "0",
        defaultOwnDmaChannelEnd_r5fss0_0: "55",
        defaultOwnDmaChannelStart_r5fss0_1: "56",
        defaultOwnDmaChannelEnd_r5fss0_1: "63",
        defaultOwnQdmaChannelStart_r5fss0_0: "0",
        defaultOwnQdmaChannelEnd_r5fss0_0: "5",
        defaultOwnQdmaChannelStart_r5fss0_1: "6",
        defaultOwnQdmaChannelEnd_r5fss0_1: "7",
        defaultOwnTccStart_r5fss0_0: "0",
        defaultOwnTccEnd_r5fss0_0: "55",
        defaultOwnTccStart_r5fss0_1: "56",
        defaultOwnTccEnd_r5fss0_1: "63",
        defaultOwnParamStart_r5fss0_0: "0",
        defaultOwnParamEnd_r5fss0_0: "119",
        defaultOwnParamStart_r5fss0_1: "120",
        defaultOwnParamEnd_r5fss0_1: "127",
        defaultReservedDmaChannelStart_r5fss0_0: "0",
        defaultReservedDmaChannelEnd_r5fss0_0: "0",
        defaultReservedDmaChannelStart_r5fss0_1: "56",
        defaultReservedDmaChannelEnd_r5fss0_1: "56",
    },
    {
        name: "EDMA_MSS_B",
        baseAddr: "CSL_MSS_TPCC_B_U_BASE",
        compIntrNumber: "CSL_MSS_INTR_MSS_TPCC_B_INTAGG",
        intrAggEnableAddr: "CSL_MSS_CTRL_U_BASE + CSL_MSS_CTRL_MSS_TPCC_B_INTAGG_MASK",
        intrAggStatusAddr: "CSL_MSS_CTRL_U_BASE + CSL_MSS_CTRL_MSS_TPCC_B_INTAGG_STATUS",
        maxDmaChannels: "64",
        maxTcc: "64",
        maxPaRAM: "128",
        maxRegions: "8",
        maxQueue: "2",
        /* This instance can be shared between the 2 R5 Cores. */
        defaultOwnDmaChannelStart_r5fss0_0: "0",
        defaultOwnDmaChannelEnd_r5fss0_0: "40",
        defaultOwnDmaChannelStart_r5fss0_1: "41",
        defaultOwnDmaChannelEnd_r5fss0_1: "63",
        defaultOwnQdmaChannelStart_r5fss0_0: "0",
        defaultOwnQdmaChannelEnd_r5fss0_0: "5",
        defaultOwnQdmaChannelStart_r5fss0_1: "6",
        defaultOwnQdmaChannelEnd_r5fss0_1: "7",
        defaultOwnTccStart_r5fss0_0: "0",
        defaultOwnTccEnd_r5fss0_0: "55",
        defaultOwnTccStart_r5fss0_1: "56",
        defaultOwnTccEnd_r5fss0_1: "63",
        defaultOwnParamStart_r5fss0_0: "0",
        defaultOwnParamEnd_r5fss0_0: "119",
        defaultOwnParamStart_r5fss0_1: "120",
        defaultOwnParamEnd_r5fss0_1: "127",
        defaultReservedDmaChannelStart_r5fss0_0: "0",
        defaultReservedDmaChannelEnd_r5fss0_0: "0",
        defaultReservedDmaChannelStart_r5fss0_1: "56",
        defaultReservedDmaChannelEnd_r5fss0_1: "56",
    },
    {
        name: "EDMA_DSS_A",
        baseAddr: "CSL_DSS_TPCC_A_U_BASE",
        compIntrNumber: "CSL_MSS_INTR_DSS_TPCC_A_INTAGG",
        intrAggEnableAddr: "CSL_DSS_CTRL_U_BASE + CSL_DSS_CTRL_DSS_TPCC_A_INTAGG_MASK",
        intrAggStatusAddr: "CSL_DSS_CTRL_U_BASE + CSL_DSS_CTRL_DSS_TPCC_A_INTAGG_STATUS",
        maxDmaChannels: "64",
        maxTcc: "64",
        maxPaRAM: "128",
        maxRegions: "8",
        maxQueue: "2",
        /* This instance can be shared between the 2 R5 Cores and c66x core. */
        defaultOwnDmaChannelStart_r5fss0_0: "60",
        defaultOwnDmaChannelEnd_r5fss0_0: "61",
        defaultOwnQdmaChannelStart_r5fss0_0: "6",
        defaultOwnQdmaChannelEnd_r5fss0_0: "6",
        defaultOwnTccStart_r5fss0_0: "60",
        defaultOwnTccEnd_r5fss0_0: "61",
        defaultOwnParamStart_r5fss0_0: "120",
        defaultOwnParamEnd_r5fss0_0: "123",
        defaultReservedDmaChannelStart_r5fss0_0: "60",
        defaultReservedDmaChannelEnd_r5fss0_0: "60",
        defaultOwnDmaChannelStart_r5fss0_1: "62",
        defaultOwnDmaChannelEnd_r5fss0_1: "63",
        defaultOwnQdmaChannelStart_r5fss0_1: "7",
        defaultOwnQdmaChannelEnd_r5fss0_1: "7",
        defaultOwnTccStart_r5fss0_1: "62",
        defaultOwnTccEnd_r5fss0_1: "63",
        defaultOwnParamStart_r5fss0_1: "124",
        defaultOwnParamEnd_r5fss0_1: "127",
        defaultReservedDmaChannelStart_r5fss0_1: "62",
        defaultReservedDmaChannelEnd_r5fss0_1: "62",
    },
    {
        name: "EDMA_DSS_B",
        baseAddr: "CSL_DSS_TPCC_B_U_BASE",
        compIntrNumber: "CSL_MSS_INTR_DSS_TPCC_B_INTAGG",
        intrAggEnableAddr: "CSL_DSS_CTRL_U_BASE + CSL_DSS_CTRL_DSS_TPCC_B_INTAGG_MASK",
        intrAggStatusAddr: "CSL_DSS_CTRL_U_BASE + CSL_DSS_CTRL_DSS_TPCC_B_INTAGG_STATUS",
        maxDmaChannels: "64",
        maxTcc: "64",
        maxPaRAM: "128",
        maxRegions: "8",
        maxQueue: "2",
        /* This instance can be shared between the 2 R5 Cores and c66x core. */
        defaultOwnDmaChannelStart_r5fss0_0: "60",
        defaultOwnDmaChannelEnd_r5fss0_0: "61",
        defaultOwnQdmaChannelStart_r5fss0_0: "6",
        defaultOwnQdmaChannelEnd_r5fss0_0: "6",
        defaultOwnTccStart_r5fss0_0: "60",
        defaultOwnTccEnd_r5fss0_0: "61",
        defaultOwnParamStart_r5fss0_0: "120",
        defaultOwnParamEnd_r5fss0_0: "123",
        defaultReservedDmaChannelStart_r5fss0_0: "60",
        defaultReservedDmaChannelEnd_r5fss0_0: "60",
        defaultOwnDmaChannelStart_r5fss0_1: "62",
        defaultOwnDmaChannelEnd_r5fss0_1: "63",
        defaultOwnQdmaChannelStart_r5fss0_1: "7",
        defaultOwnQdmaChannelEnd_r5fss0_1: "7",
        defaultOwnTccStart_r5fss0_1: "62",
        defaultOwnTccEnd_r5fss0_1: "63",
        defaultOwnParamStart_r5fss0_1: "124",
        defaultOwnParamEnd_r5fss0_1: "127",
        defaultReservedDmaChannelStart_r5fss0_1: "62",
        defaultReservedDmaChannelEnd_r5fss0_1: "62",
    },
    {
        name: "EDMA_DSS_C",
        baseAddr: "CSL_DSS_TPCC_C_U_BASE",
        compIntrNumber: "CSL_MSS_INTR_DSS_TPCC_C_INTAGG",
        intrAggEnableAddr: "CSL_DSS_CTRL_U_BASE + CSL_DSS_CTRL_DSS_TPCC_C_INTAGG_MASK",
        intrAggStatusAddr: "CSL_DSS_CTRL_U_BASE + CSL_DSS_CTRL_DSS_TPCC_C_INTAGG_STATUS",
        maxDmaChannels: "64",
        maxTcc: "64",
        maxPaRAM: "256",
        maxRegions: "8",
        maxQueue: "2",
        /* This instance can be shared between the 2 R5 Cores and c66x core. */
        defaultOwnDmaChannelStart_r5fss0_0: "60",
        defaultOwnDmaChannelEnd_r5fss0_0: "61",
        defaultOwnQdmaChannelStart_r5fss0_0: "6",
        defaultOwnQdmaChannelEnd_r5fss0_0: "6",
        defaultOwnTccStart_r5fss0_0: "60",
        defaultOwnTccEnd_r5fss0_0: "61",
        defaultOwnParamStart_r5fss0_0: "248",
        defaultOwnParamEnd_r5fss0_0: "251",
        defaultReservedDmaChannelStart_r5fss0_0: "60",
        defaultReservedDmaChannelEnd_r5fss0_0: "60",
        defaultOwnDmaChannelStart_r5fss0_1: "62",
        defaultOwnDmaChannelEnd_r5fss0_1: "63",
        defaultOwnQdmaChannelStart_r5fss0_1: "7",
        defaultOwnQdmaChannelEnd_r5fss0_1: "7",
        defaultOwnTccStart_r5fss0_1: "62",
        defaultOwnTccEnd_r5fss0_1: "63",
        defaultOwnParamStart_r5fss0_1: "252",
        defaultOwnParamEnd_r5fss0_1: "255",
        defaultReservedDmaChannelStart_r5fss0_1: "62",
        defaultReservedDmaChannelEnd_r5fss0_1: "62",
    },
];

const edma_config_c66ss = [
    {
        name: "EDMA_RCSS_A",
        baseAddr: "CSL_RCSS_TPCC_A_U_BASE",
        compIntrNumber: "CSL_DSS_INTR_RCSS_TPCC_A_INTAGG",
        intrAggEnableAddr: "CSL_RCSS_CTRL_U_BASE + CSL_RCSS_CTRL_RCSS_TPCC_A_INTAGG_MASK",
        intrAggStatusAddr: "CSL_RCSS_CTRL_U_BASE + CSL_RCSS_CTRL_RCSS_TPCC_A_INTAGG_STATUS",
        maxDmaChannels: "64",
        maxTcc: "64",
        maxPaRAM: "128",
        maxRegions: "8",
        maxQueue: "2",
        /* This instance can be shared between the 2 R5 Cores and c66x core. */
        defaultOwnDmaChannelStart_c66ss0: "0",
        defaultOwnDmaChannelEnd_c66ss0: "31",
        defaultOwnQdmaChannelStart_c66ss0: "0",
        defaultOwnQdmaChannelEnd_c66ss0: "3",
        defaultOwnTccStart_c66ss0: "0",
        defaultOwnTccEnd_c66ss0: "31",
        defaultOwnParamStart_c66ss0: "0",
        defaultOwnParamEnd_c66ss0: "63",
        defaultReservedDmaChannelStart_c66ss0: "0",
        defaultReservedDmaChannelEnd_c66ss0: "5",
    },
    {
        name: "EDMA_DSS_A",
        baseAddr: "CSL_DSS_TPCC_A_U_BASE",
        compIntrNumber: "CSL_DSS_INTR_DSS_TPCC_A_INTAGG",
        intrAggEnableAddr: "CSL_DSS_CTRL_U_BASE + CSL_DSS_CTRL_DSS_TPCC_A_INTAGG_MASK",
        intrAggStatusAddr: "CSL_DSS_CTRL_U_BASE + CSL_DSS_CTRL_DSS_TPCC_A_INTAGG_STATUS",
        maxDmaChannels: "64",
        maxTcc: "64",
        maxPaRAM: "128",
        maxRegions: "8",
        maxQueue: "2",
        /* This instance can be shared between the 2 R5 Cores and c66x core. */
        defaultOwnDmaChannelStart_c66ss0: "0",
        defaultOwnDmaChannelEnd_c66ss0: "59",
        defaultOwnQdmaChannelStart_c66ss0: "0",
        defaultOwnQdmaChannelEnd_c66ss0: "5",
        defaultOwnTccStart_c66ss0: "0",
        defaultOwnTccEnd_c66ss0: "59",
        defaultOwnParamStart_c66ss0: "0",
        defaultOwnParamEnd_c66ss0: "119",
        defaultReservedDmaChannelStart_c66ss0: "0",
        defaultReservedDmaChannelEnd_c66ss0: "0",
    },
    {
        name: "EDMA_DSS_B",
        baseAddr: "CSL_DSS_TPCC_B_U_BASE",
        compIntrNumber: "CSL_DSS_INTR_DSS_TPCC_B_INTAGG",
        intrAggEnableAddr: "CSL_DSS_CTRL_U_BASE + CSL_DSS_CTRL_DSS_TPCC_B_INTAGG_MASK",
        intrAggStatusAddr: "CSL_DSS_CTRL_U_BASE + CSL_DSS_CTRL_DSS_TPCC_B_INTAGG_STATUS",
        maxDmaChannels: "64",
        maxTcc: "64",
        maxPaRAM: "128",
        maxRegions: "8",
        maxQueue: "2",
        /* This instance can be shared between the 2 R5 Cores and c66x core. */
        defaultOwnDmaChannelStart_c66ss0: "0",
        defaultOwnDmaChannelEnd_c66ss0: "59",
        defaultOwnQdmaChannelStart_c66ss0: "0",
        defaultOwnQdmaChannelEnd_c66ss0: "5",
        defaultOwnTccStart_c66ss0: "0",
        defaultOwnTccEnd_c66ss0: "59",
        defaultOwnParamStart_c66ss0: "0",
        defaultOwnParamEnd_c66ss0: "119",
        defaultReservedDmaChannelStart_c66ss0: "0",
        defaultReservedDmaChannelEnd_c66ss0: "0",
    },
    {
        name: "EDMA_DSS_C",
        baseAddr: "CSL_DSS_TPCC_C_U_BASE",
        compIntrNumber: "CSL_DSS_INTR_DSS_TPCC_C_INTAGG",
        intrAggEnableAddr: "CSL_DSS_CTRL_U_BASE + CSL_DSS_CTRL_DSS_TPCC_C_INTAGG_MASK",
        intrAggStatusAddr: "CSL_DSS_CTRL_U_BASE + CSL_DSS_CTRL_DSS_TPCC_C_INTAGG_STATUS",
        maxDmaChannels: "64",
        maxTcc: "64",
        maxPaRAM: "256",
        maxRegions: "8",
        maxQueue: "2",
        /* This instance can be shared between the 2 R5 Cores and c66x core. */
        defaultOwnDmaChannelStart_c66ss0: "0",
        defaultOwnDmaChannelEnd_c66ss0: "59",
        defaultOwnQdmaChannelStart_c66ss0: "0",
        defaultOwnQdmaChannelEnd_c66ss0: "5",
        defaultOwnTccStart_c66ss0: "0",
        defaultOwnTccEnd_c66ss0: "59",
        defaultOwnParamStart_c66ss0: "0",
        defaultOwnParamEnd_c66ss0: "247",
        defaultReservedDmaChannelStart_c66ss0: "0",
        defaultReservedDmaChannelEnd_c66ss0: "0",
    },
];

function getConfigArr() {
    let edma_config;

    if(common.getSelfSysCfgCoreName().includes("c66")) {
        edma_config = edma_config_c66ss;
    }
    else {
        edma_config = edma_config_r5fss;
    }

    return edma_config;
}

function getDefaultRegion() {
    let selfCoreName = common.getSelfSysCfgCoreName();
    let defRegion = 0;
    if (selfCoreName == "r5fss0-1") {
        defRegion = 1;
    }
    if (selfCoreName == "r5fss0-0") {
        defRegion = 2;
    }
    return defRegion;
}

function isReservedChannelSupported() {
    return true;
}

function isChannelTriggerXbarSupported() {
    return false;
}

exports = {
    getConfigArr,
    getDefaultRegion,
    isReservedChannelSupported,
    isChannelTriggerXbarSupported,
};
