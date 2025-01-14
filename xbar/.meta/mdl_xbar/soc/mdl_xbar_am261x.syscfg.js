let common = system.getScript("/common");
let xbarSoc = system.getScript(`/xbar/soc/xbar_${common.getSocName()}`);

const internal_list = [
    {  name: "EPWM0A_SCLK", displayName: "EPWM0A_SCLK", path: "mdl_xbar", group: 0 },
    {  name: "EPWM1A_SCLK", displayName: "EPWM1A_SCLK", path: "mdl_xbar", group: 0 },
    {  name: "EPWM2A_SCLK", displayName: "EPWM2A_SCLK", path: "mdl_xbar", group: 0 },
    {  name: "EPWM3A_SCLK", displayName: "EPWM3A_SCLK", path: "mdl_xbar", group: 0 },
    {  name: "EPWM4A_SCLK", displayName: "EPWM4A_SCLK", path: "mdl_xbar", group: 0 },
    {  name: "EPWM5A_SCLK", displayName: "EPWM5A_SCLK", path: "mdl_xbar", group: 0 },
    {  name: "EPWM6A_SCLK", displayName: "EPWM6A_SCLK", path: "mdl_xbar", group: 0 },
    {  name: "EPWM7A_SCLK", displayName: "EPWM7A_SCLK", path: "mdl_xbar", group: 0 },
    {  name: "EPWM8A_SCLK", displayName: "EPWM8A_SCLK", path: "mdl_xbar", group: 0 },
    {  name: "EPWM9A_SCLK", displayName: "EPWM9A_SCLK", path: "mdl_xbar", group: 0 },
    {  name: "EPWM0B_SCLK", displayName: "EPWM0B_SCLK", path: "mdl_xbar", group: 1 },
    {  name: "EPWM1B_SCLK", displayName: "EPWM1B_SCLK", path: "mdl_xbar", group: 1 },
    {  name: "EPWM2B_SCLK", displayName: "EPWM2B_SCLK", path: "mdl_xbar", group: 1 },
    {  name: "EPWM3B_SCLK", displayName: "EPWM3B_SCLK", path: "mdl_xbar", group: 1 },
    {  name: "EPWM4B_SCLK", displayName: "EPWM4B_SCLK", path: "mdl_xbar", group: 1 },
    {  name: "EPWM5B_SCLK", displayName: "EPWM5B_SCLK", path: "mdl_xbar", group: 1 },
    {  name: "EPWM6B_SCLK", displayName: "EPWM6B_SCLK", path: "mdl_xbar", group: 1 },
    {  name: "EPWM7B_SCLK", displayName: "EPWM7B_SCLK", path: "mdl_xbar", group: 1 },
    {  name: "EPWM8B_SCLK", displayName: "EPWM8B_SCLK", path: "mdl_xbar", group: 1 },
    {  name: "EPWM9B_SCLK", displayName: "EPWM9B_SCLK", path: "mdl_xbar", group: 1 },
    {  name: "ICSSGPO0_PORT0", displayName: "ICSSGPO0_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO1_PORT0", displayName: "ICSSGPO1_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO2_PORT0", displayName: "ICSSGPO2_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO3_PORT0", displayName: "ICSSGPO3_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO4_PORT0", displayName: "ICSSGPO4_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO5_PORT0", displayName: "ICSSGPO5_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO6_PORT0", displayName: "ICSSGPO6_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO7_PORT0", displayName: "ICSSGPO7_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO8_PORT0", displayName: "ICSSGPO8_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO9_PORT0", displayName: "ICSSGPO9_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO10_PORT0", displayName: "ICSSGPO10_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO11_PORT0", displayName: "ICSSGPO11_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO12_PORT0", displayName: "ICSSGPO12_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO13_PORT0", displayName: "ICSSGPO13_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO14_PORT0", displayName: "ICSSGPO14_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO15_PORT0", displayName: "ICSSGPO15_PORT0", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO0_PORT1", displayName: "ICSSGPO0_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO1_PORT1", displayName: "ICSSGPO1_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO2_PORT1", displayName: "ICSSGPO2_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO3_PORT1", displayName: "ICSSGPO3_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO4_PORT1", displayName: "ICSSGPO4_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO5_PORT1", displayName: "ICSSGPO5_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO6_PORT1", displayName: "ICSSGPO6_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO7_PORT1", displayName: "ICSSGPO7_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO8_PORT1", displayName: "ICSSGPO8_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO9_PORT1", displayName: "ICSSGPO9_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO10_PORT1", displayName: "ICSSGPO10_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO11_PORT1", displayName: "ICSSGPO11_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO12_PORT1", displayName: "ICSSGPO12_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO13_PORT1", displayName: "ICSSGPO13_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO14_PORT1", displayName: "ICSSGPO14_PORT1", path: "mdl_xbar", group: 2 },
    {  name: "ICSSGPO15_PORT1", displayName: "ICSSGPO15_PORT1", path: "mdl_xbar", group: 2 },
];

let xbarProperties = {
    masterXbarList: [],
    outputInstanceList: [
        { name: "MDL_XBAR", count: 16},
    ],
    duplicatesPresent: false,
    moduleString: "mdl_xbar",
}

function getOptionList(calledBy) {
    return xbarSoc.getOptionListSoc(calledBy, xbarProperties, internal_list);
}

function getConfigArr() {
    return xbarSoc.getXbarInstanceConfig(xbarProperties);
}

exports = {
    getConfigArr,
    getOptionList,
};
