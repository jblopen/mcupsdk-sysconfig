let common = system.getScript("/common");
let xbarSoc = system.getScript(`/xbar/soc/xbar_${common.getSocName()}`);

const internal_list = [
    {  name: "EPWM0_TRIPOUT", displayName: "EPWM0_TRIPOUT", path: "output_xbar", group: 0 },
    {  name: "EPWM1_TRIPOUT", displayName: "EPWM1_TRIPOUT", path: "output_xbar", group: 0 },
    {  name: "EPWM2_TRIPOUT", displayName: "EPWM2_TRIPOUT", path: "output_xbar", group: 0 },
    {  name: "EPWM3_TRIPOUT", displayName: "EPWM3_TRIPOUT", path: "output_xbar", group: 0 },
    {  name: "EPWM4_TRIPOUT", displayName: "EPWM4_TRIPOUT", path: "output_xbar", group: 0 },
    {  name: "EPWM5_TRIPOUT", displayName: "EPWM5_TRIPOUT", path: "output_xbar", group: 0 },
    {  name: "EPWM6_TRIPOUT", displayName: "EPWM6_TRIPOUT", path: "output_xbar", group: 0 },
    {  name: "EPWM7_TRIPOUT", displayName: "EPWM7_TRIPOUT", path: "output_xbar", group: 0 },
    {  name: "EPWM8_TRIPOUT", displayName: "EPWM8_TRIPOUT", path: "output_xbar", group: 0 },
    {  name: "EPWM9_TRIPOUT", displayName: "EPWM9_TRIPOUT", path: "output_xbar", group: 0 },
    {  name: "EPWM0_SOCA", displayName: "EPWM0_SOCA", path: "output_xbar", group: 1 },
    {  name: "EPWM1_SOCA", displayName: "EPWM1_SOCA", path: "output_xbar", group: 1 },
    {  name: "EPWM2_SOCA", displayName: "EPWM2_SOCA", path: "output_xbar", group: 1 },
    {  name: "EPWM3_SOCA", displayName: "EPWM3_SOCA", path: "output_xbar", group: 1 },
    {  name: "EPWM4_SOCA", displayName: "EPWM4_SOCA", path: "output_xbar", group: 1 },
    {  name: "EPWM5_SOCA", displayName: "EPWM5_SOCA", path: "output_xbar", group: 1 },
    {  name: "EPWM6_SOCA", displayName: "EPWM6_SOCA", path: "output_xbar", group: 1 },
    {  name: "EPWM7_SOCA", displayName: "EPWM7_SOCA", path: "output_xbar", group: 1 },
    {  name: "EPWM8_SOCA", displayName: "EPWM8_SOCA", path: "output_xbar", group: 1 },
    {  name: "EPWM9_SOCA", displayName: "EPWM9_SOCA", path: "output_xbar", group: 1 },
    {  name: "EPWM0_SOCB", displayName: "EPWM0_SOCB", path: "output_xbar", group: 2 },
    {  name: "EPWM1_SOCB", displayName: "EPWM1_SOCB", path: "output_xbar", group: 2 },
    {  name: "EPWM2_SOCB", displayName: "EPWM2_SOCB", path: "output_xbar", group: 2 },
    {  name: "EPWM3_SOCB", displayName: "EPWM3_SOCB", path: "output_xbar", group: 2 },
    {  name: "EPWM4_SOCB", displayName: "EPWM4_SOCB", path: "output_xbar", group: 2 },
    {  name: "EPWM5_SOCB", displayName: "EPWM5_SOCB", path: "output_xbar", group: 2 },
    {  name: "EPWM6_SOCB", displayName: "EPWM6_SOCB", path: "output_xbar", group: 2 },
    {  name: "EPWM7_SOCB", displayName: "EPWM7_SOCB", path: "output_xbar", group: 2 },
    {  name: "EPWM8_SOCB", displayName: "EPWM8_SOCB", path: "output_xbar", group: 2 },
    {  name: "EPWM9_SOCB", displayName: "EPWM9_SOCB", path: "output_xbar", group: 2 },
    {  name: "DEL0_ACTIVE", displayName: "DEL0_ACTIVE", path: "output_xbar", group: 3 },
    {  name: "DEL1_ACTIVE", displayName: "DEL1_ACTIVE", path: "output_xbar", group: 3 },
    {  name: "DEL2_ACTIVE", displayName: "DEL2_ACTIVE", path: "output_xbar", group: 3 },
    {  name: "DEL3_ACTIVE", displayName: "DEL3_ACTIVE", path: "output_xbar", group: 3 },
    {  name: "DEL4_ACTIVE", displayName: "DEL4_ACTIVE", path: "output_xbar", group: 3 },
    {  name: "DEL5_ACTIVE", displayName: "DEL5_ACTIVE", path: "output_xbar", group: 3 },
    {  name: "DEL6_ACTIVE", displayName: "DEL6_ACTIVE", path: "output_xbar", group: 3 },
    {  name: "DEL7_ACTIVE", displayName: "DEL7_ACTIVE", path: "output_xbar", group: 3 },
    {  name: "DEL8_ACTIVE", displayName: "DEL8_ACTIVE", path: "output_xbar", group: 3 },
    {  name: "DEL9_ACTIVE", displayName: "DEL9_ACTIVE", path: "output_xbar", group: 3 },
    {  name: "DEL0_TRIP", displayName: "DEL0_TRIP", path: "output_xbar", group: 4 },
    {  name: "DEL1_TRIP", displayName: "DEL1_TRIP", path: "output_xbar", group: 4 },
    {  name: "DEL2_TRIP", displayName: "DEL2_TRIP", path: "output_xbar", group: 4 },
    {  name: "DEL3_TRIP", displayName: "DEL3_TRIP", path: "output_xbar", group: 4 },
    {  name: "DEL4_TRIP", displayName: "DEL4_TRIP", path: "output_xbar", group: 4 },
    {  name: "DEL5_TRIP", displayName: "DEL5_TRIP", path: "output_xbar", group: 4 },
    {  name: "DEL6_TRIP", displayName: "DEL6_TRIP", path: "output_xbar", group: 4 },
    {  name: "DEL7_TRIP", displayName: "DEL7_TRIP", path: "output_xbar", group: 4 },
    {  name: "DEL8_TRIP", displayName: "DEL8_TRIP", path: "output_xbar", group: 4 },
    {  name: "DEL9_TRIP", displayName: "DEL9_TRIP", path: "output_xbar", group: 4 },
    {  name: "SD0_FILT0_CEVT1", displayName: "SD0_FILT0_CEVT1", path: "output_xbar", group: 5 },
    {  name: "SD0_FILT0_CEVT2", displayName: "SD0_FILT0_CEVT2", path: "output_xbar", group: 5 },
    {  name: "SD0_FILT0_CMPHZ", displayName: "SD0_FILT0_CMPHZ", path: "output_xbar", group: 5 },
    {  name: "SD0_FILT1_CEVT1", displayName: "SD0_FILT1_CEVT1", path: "output_xbar", group: 5 },
    {  name: "SD0_FILT1_CEVT2", displayName: "SD0_FILT1_CEVT2", path: "output_xbar", group: 5 },
    {  name: "SD0_FILT1_CMPHZ", displayName: "SD0_FILT1_CMPHZ", path: "output_xbar", group: 5 },
    {  name: "SD0_FILT2_CEVT1", displayName: "SD0_FILT2_CEVT1", path: "output_xbar", group: 5 },
    {  name: "SD0_FILT2_CEVT2", displayName: "SD0_FILT2_CEVT2", path: "output_xbar", group: 5 },
    {  name: "SD0_FILT2_CMPHZ", displayName: "SD0_FILT2_CMPHZ", path: "output_xbar", group: 5 },
    {  name: "SD0_FILT3_CEVT1", displayName: "SD0_FILT3_CEVT1", path: "output_xbar", group: 5 },
    {  name: "SD0_FILT3_CEVT2", displayName: "SD0_FILT3_CEVT2", path: "output_xbar", group: 5 },
    {  name: "SD0_FILT3_CMPHZ", displayName: "SD0_FILT3_CMPHZ", path: "output_xbar", group: 5 },
    {  name: "SD1_FILT0_CEVT1", displayName: "SD1_FILT0_CEVT1", path: "output_xbar", group: 5 },
    {  name: "SD1_FILT0_CEVT2", displayName: "SD1_FILT0_CEVT2", path: "output_xbar", group: 5 },
    {  name: "SD1_FILT0_CMPHZ", displayName: "SD1_FILT0_CMPHZ", path: "output_xbar", group: 5 },
    {  name: "SD1_FILT1_CEVT1", displayName: "SD1_FILT1_CEVT1", path: "output_xbar", group: 5 },
    {  name: "SD1_FILT1_CEVT2", displayName: "SD1_FILT1_CEVT2", path: "output_xbar", group: 5 },
    {  name: "SD1_FILT1_CMPHZ", displayName: "SD1_FILT1_CMPHZ", path: "output_xbar", group: 5 },
    {  name: "SD1_FILT2_CEVT1", displayName: "SD1_FILT2_CEVT1", path: "output_xbar", group: 5 },
    {  name: "SD1_FILT2_CEVT2", displayName: "SD1_FILT2_CEVT2", path: "output_xbar", group: 5 },
    {  name: "SD1_FILT2_CMPHZ", displayName: "SD1_FILT2_CMPHZ", path: "output_xbar", group: 5 },
    {  name: "SD1_FILT3_CEVT1", displayName: "SD1_FILT3_CEVT1", path: "output_xbar", group: 5 },
    {  name: "SD1_FILT3_CEVT2", displayName: "SD1_FILT3_CEVT2", path: "output_xbar", group: 5 },
    {  name: "SD1_FILT3_CMPHZ", displayName: "SD1_FILT3_CMPHZ", path: "output_xbar", group: 5 },
    {  name: "CMPSSA0_CTRIPL", displayName: "CMPSSA0_CTRIPL", path: "output_xbar", group: 6 },
    {  name: "CMPSSA0_CTRIPH", displayName: "CMPSSA0_CTRIPH", path: "output_xbar", group: 6 },
    {  name: "CMPSSA1_CTRIPL", displayName: "CMPSSA1_CTRIPL", path: "output_xbar", group: 6 },
    {  name: "CMPSSA1_CTRIPH", displayName: "CMPSSA1_CTRIPH", path: "output_xbar", group: 6 },
    {  name: "CMPSSA2_CTRIPL", displayName: "CMPSSA2_CTRIPL", path: "output_xbar", group: 6 },
    {  name: "CMPSSA2_CTRIPH", displayName: "CMPSSA2_CTRIPH", path: "output_xbar", group: 6 },
    {  name: "CMPSSA3_CTRIPL", displayName: "CMPSSA3_CTRIPL", path: "output_xbar", group: 6 },
    {  name: "CMPSSA3_CTRIPH", displayName: "CMPSSA3_CTRIPH", path: "output_xbar", group: 6 },
    {  name: "CMPSSA4_CTRIPL", displayName: "CMPSSA4_CTRIPL", path: "output_xbar", group: 6 },
    {  name: "CMPSSA4_CTRIPH", displayName: "CMPSSA4_CTRIPH", path: "output_xbar", group: 6 },
    {  name: "CMPSSA5_CTRIPL", displayName: "CMPSSA5_CTRIPL", path: "output_xbar", group: 6 },
    {  name: "CMPSSA5_CTRIPH", displayName: "CMPSSA5_CTRIPH", path: "output_xbar", group: 6 },
    {  name: "CMPSSA6_CTRIPL", displayName: "CMPSSA6_CTRIPL", path: "output_xbar", group: 6 },
    {  name: "CMPSSA6_CTRIPH", displayName: "CMPSSA6_CTRIPH", path: "output_xbar", group: 6 },
    {  name: "CMPSSA7_CTRIPL", displayName: "CMPSSA7_CTRIPL", path: "output_xbar", group: 6 },
    {  name: "CMPSSA7_CTRIPH", displayName: "CMPSSA7_CTRIPH", path: "output_xbar", group: 6 },
    {  name: "CMPSSA8_CTRIPL", displayName: "CMPSSA8_CTRIPL", path: "output_xbar", group: 6 },
    {  name: "CMPSSA8_CTRIPH", displayName: "CMPSSA8_CTRIPH", path: "output_xbar", group: 6 },
    {  name: "ADC0_EVT1", displayName: "ADC0_EVT1", path: "output_xbar", group: 8 },
    {  name: "ADC0_EVT2", displayName: "ADC0_EVT2", path: "output_xbar", group: 8 },
    {  name: "ADC0_EVT3", displayName: "ADC0_EVT3", path: "output_xbar", group: 8 },
    {  name: "ADC0_EVT4", displayName: "ADC0_EVT4", path: "output_xbar", group: 8 },
    {  name: "ADC1_EVT1", displayName: "ADC1_EVT1", path: "output_xbar", group: 8 },
    {  name: "ADC1_EVT2", displayName: "ADC1_EVT2", path: "output_xbar", group: 8 },
    {  name: "ADC1_EVT3", displayName: "ADC1_EVT3", path: "output_xbar", group: 8 },
    {  name: "ADC1_EVT4", displayName: "ADC1_EVT4", path: "output_xbar", group: 8 },
    {  name: "ADC2_EVT1", displayName: "ADC2_EVT1", path: "output_xbar", group: 8 },
    {  name: "ADC2_EVT2", displayName: "ADC2_EVT2", path: "output_xbar", group: 8 },
    {  name: "ADC2_EVT3", displayName: "ADC2_EVT3", path: "output_xbar", group: 8 },
    {  name: "ADC2_EVT4", displayName: "ADC2_EVT4", path: "output_xbar", group: 8 },

    {  name: "EPWM_SYNCOUT_XBAR0", displayName: "EPWM_SYNCOUT_XBAR0", path: "output_xbar", group: 9 },
    {  name: "EPWM_SYNCOUT_XBAR1", displayName: "EPWM_SYNCOUT_XBAR1", path: "output_xbar", group: 9 },
    {  name: "EPWM_SYNCOUT_XBAR2", displayName: "EPWM_SYNCOUT_XBAR2", path: "output_xbar", group: 9 },
    {  name: "EPWM_SYNCOUT_XBAR3", displayName: "EPWM_SYNCOUT_XBAR3", path: "output_xbar", group: 9 },

    {  name: "EQEP0_I_OUT", displayName: "EQEP0_I_OUT", path: "output_xbar", group: 9 },
    {  name: "EQEP0_S_OUT", displayName: "EQEP0_S_OUT", path: "output_xbar", group: 9 },
    {  name: "EQEP1_I_OUT", displayName: "EQEP1_I_OUT", path: "output_xbar", group: 9 },
    {  name: "EQEP1_S_OUT", displayName: "EQEP1_S_OUT", path: "output_xbar", group: 9 },
    {  name: "ECAP0_OUT", displayName: "ECAP0_OUT", path: "output_xbar", group: 9 },
    {  name: "ECAP1_OUT", displayName: "ECAP1_OUT", path: "output_xbar", group: 9 },
    {  name: "ECAP2_OUT", displayName: "ECAP2_OUT", path: "output_xbar", group: 9 },
    {  name: "ECAP3_OUT", displayName: "ECAP3_OUT", path: "output_xbar", group: 9 },
    {  name: "ECAP4_OUT", displayName: "ECAP4_OUT", path: "output_xbar", group: 9 },
    {  name: "ECAP5_OUT", displayName: "ECAP5_OUT", path: "output_xbar", group: 9 },
    {  name: "ECAP6_OUT", displayName: "ECAP6_OUT", path: "output_xbar", group: 9 },
    {  name: "ECAP7_OUT", displayName: "ECAP7_OUT", path: "output_xbar", group: 9 },
    {  name: "FSIRX0_RX_TRIG0", displayName: "FSIRX0_RX_TRIG0", path: "output_xbar", group: 10 },
    {  name: "FSIRX0_RX_TRIG1", displayName: "FSIRX0_RX_TRIG1", path: "output_xbar", group: 10 },
    {  name: "FSIRX0_RX_TRIG2", displayName: "FSIRX0_RX_TRIG2", path: "output_xbar", group: 10 },
    {  name: "FSIRX0_RX_TRIG3", displayName: "FSIRX0_RX_TRIG3", path: "output_xbar", group: 10 },
    {  name: "INPUTXBAR_OUT7 ", displayName: "INPUTXBAR_OUT7", path: "output_xbar", group: 10 },
    {  name: "INPUTXBAR_OUT15", displayName: "INPUTXBAR_OUT15", path: "output_xbar", group: 10 },
    {  name: "INPUTXBAR_OUT23", displayName: "INPUTXBAR_OUT23", path: "output_xbar", group: 10 },
    {  name: "INPUTXBAR_OUT31", displayName: "INPUTXBAR_OUT31", path: "output_xbar", group: 10 },
    {  name: "INTXBAR_OUT7", displayName: "INTXBAR_OUT7", path: "output_xbar", group: 10 },
    {  name: "INTXBAR_OUT15", displayName: "INTXBAR_OUT15", path: "output_xbar", group: 10 },
];

const XBAR_Latch_Source = [
    {  name: "NON_LATCHED_OUTPUT", displayName: "Select Non Latched Output" },
    {  name: "LATCHED_OUTPUT", displayName: "Select Latched Output" },
];

const XBAR_Stretched_Pulse_Source = [
    {  name: "NON_STRETCHED_OUTPUT", displayName: "Select Non Stretched Output" },
    {  name: "STRETCHED_OUTPUT", displayName: "Select Stretched Output" },
];

const XBAR_Stretched_Pulse_Length = [
    {  name: "PULSE_LENGTH_16_SYSCLK", displayName: "Output Signal Stretched Pulse Length is 16 SYSCLK" },
    {  name: "PULSE_LENGTH_32_SYSCLK", displayName: "Output Signal Stretched Pulse Length is 32 SYSCLK" },
];

let xbarProperties = {
    masterXbarList: ["epwm_syncout_xbar"],
    outputInstanceList: [
        { name: "OUTPUT_XBAR", count: 16},
    ],
    duplicatesPresent: false,
    moduleString: "output_xbar",
}

function getOptionList(calledBy) {
    return xbarSoc.getOptionListSoc(calledBy, xbarProperties, internal_list);
}

function getConfigArr() {
    return xbarSoc.getXbarInstanceConfig(xbarProperties);
}

function getInterfaceName(instance) {
    return "OUTPUTXBAR";
}

function supportXbarConfig(outputSelected, instance, count) {
    return xbarSoc.supportXbarConfigSoc(outputSelected, instance, xbarProperties, count);
}

exports = {
    getConfigArr,
    getOptionList,
    XBAR_Latch_Source: XBAR_Latch_Source,
    XBAR_Stretched_Pulse_Source: XBAR_Stretched_Pulse_Source,
    XBAR_Stretched_Pulse_Length: XBAR_Stretched_Pulse_Length,
    getInterfaceName,
    supportXbarConfig,
};
