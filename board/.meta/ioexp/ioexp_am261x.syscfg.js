
let common = system.getScript("/common");

let ioexp_devices = [
    {
        name        : "TCA6408ARGTR",
        type        : "I2C",
        instance    : "I2C0",
        pinSet      : [
            {portNumber : 0, pinNumber : 0, pinName : "USB2.0_MUX_SEL0"},
            {portNumber : 0, pinNumber : 1, pinName : "VPP_LDO_EN"},
            {portNumber : 0, pinNumber : 2, pinName : "LED_DRIVER_EN"},
            {portNumber : 0, pinNumber : 3, pinName : "MCAN_MUX_SEL"},
            {portNumber : 0, pinNumber : 4, pinName : "BP_BO_MUX_EN"},
            {portNumber : 0, pinNumber : 5, pinName : "BP_MUX_SW_S1"},
            {portNumber : 0, pinNumber : 6, pinName : "BP_BO_MUX_EN_N"},
            {portNumber : 0, pinNumber : 7, pinName : "BP_MUX_SW_SO"},
        ],
        i2cAddress  : 0x20,
        driverName  : "ioexp_tca6408"
    },
    {
        name        : "TCA6408ARGTR",
        type        : "I2C",
        instance    : "I2C0",
        pinSet      : [
            {portNumber : 0, pinNumber : 0, pinName : "CPSW/ICSS_BRD_CONN_DET1"},
            {portNumber : 0, pinNumber : 1, pinName : "ETH0_CPSW2_RST"},
            {portNumber : 0, pinNumber : 2, pinName : "ETH1_CPSW1_RST"},
            {portNumber : 0, pinNumber : 3, pinName : "MDIO/MDC_MUX_SEL1"},
            {portNumber : 0, pinNumber : 4, pinName : "MDIO/MDC_MUX_SEL2"},
            {portNumber : 0, pinNumber : 5, pinName : "CPSW/ICSS_BRD_CONN_DET2"},
            {portNumber : 0, pinNumber : 6, pinName : "FSI_EQEP_MUX_SEL"},
            {portNumber : 0, pinNumber : 7, pinName : "OSPI1_MUX_SEL"},
        ],
        i2cAddress  : 0x21,
        driverName  : "ioexp_tca6408"
    },
];

function getConfigArr() {
    return ioexp_devices;
}

exports = {
    getConfigArr,
};