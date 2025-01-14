let common = system.getScript("/common");

const maxInstances = 2;

const pcie_config_r5fss = [
    {
        name                : "PCIE0",
        legacyIntrNum       : 234,
    },
    {
        name: "PCIE1",
        legacyIntrNum: 235,
    }
]

const pcie_config = [
    {
        instName: {
            name:"0",
            displayName: "PCIE 0"
        },
        operationSpeed: [
            {
                name: "PCIE_GEN1",
                displayName: "Gen 1",
                description: "2.5 GT/s"
            },
            {
                name: "PCIE_GEN2",
                displayName: "Gen 2",
                description: "5 GT/s"
            }
        ],
        maxNumLanes : 2,
        clockIds: ["TISCI_DEV_SERDES0", "TISCI_DEV_SERDES1", "TISCI_DEV_PCIE0"],
    },
    {
        instName: {
            name: "1",
            displayName: "PCIE 1"
        },
        operationSpeed: [
            {
                name: "PCIE_GEN1",
                displayName: "Gen 1",
                description: "2.5 GT/s"
            },
            {
                name: "PCIE_GEN2",
                displayName: "Gen 2",
                description: "5 GT/s"
            }
        ],
        maxNumLanes: 1,
        clockIds: ["TISCI_DEV_SERDES1", "TISCI_DEV_PCIE1"],
    },
]

function getPcieInstArr() {
    return [{
                name: "0",
                displayName: "PCIE_0",
            },
            {
                name: "1",
                displayName: "PCIE_1",
            },
        ];
}

function getPcieGenArr() {
    return [{
        name: "PCIE_GEN1",
        displayName: "Gen 1",
        description: "2.5 GT/s"
    },
    {
        name: "PCIE_GEN2",
        displayName: "Gen 2",
        description: "5 GT/s"
    },
    {
        name: "PCIE_GEN3",
        displayName: "Gen 3",
        description: "8 GT/s"
    }];
}

function getPcieInst() {
    let inst = [];

    for (var i = 0; i < pcie_config.length; i++) {
        inst.push(pcie_config[i].instName);
    }

    return inst;
}

function getConfigArr() {
    let pcie_config;

    if (common.getSelfSysCfgCoreName().includes("r5f")) {
        pcie_config = pcie_config_r5fss;
    }

    return pcie_config;
}

function getMaxLanes(device) {
    return pcie_config[device].maxNumLanes;
}

function getMaxInstances() {
    return maxInstances;
}

function getPcieInstGen(device) {
    let gen = [];

    for (var i = 0; i < pcie_config[device].operationSpeed.length; i++) {
        gen.push(pcie_config[device].operationSpeed[i].name);
    }

    return gen;
}


function getClockIds(device) {
    return pcie_config[device].clockIds;
}

exports = {
    getConfigArr,
    getPcieGenArr,
    getPcieInst,
    getMaxLanes,
    getMaxInstances,
    getPcieInstGen,
    getClockIds,
    getPcieInstArr
};
