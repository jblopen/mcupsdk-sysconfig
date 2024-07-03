let common = system.getScript("/common");
let xbarSoc = system.getScript(`/xbar/soc/xbar_${common.getSocName()}`);

const internal_list = [
    {  name: "CMPSSA0_CTRIPL", displayName: "CMPSSA0_CTRIPL", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA0_CTRIPH", displayName: "CMPSSA0_CTRIPH", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA1_CTRIPL", displayName: "CMPSSA1_CTRIPL", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA1_CTRIPH", displayName: "CMPSSA1_CTRIPH", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA2_CTRIPL", displayName: "CMPSSA2_CTRIPL", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA2_CTRIPH", displayName: "CMPSSA2_CTRIPH", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA3_CTRIPL", displayName: "CMPSSA3_CTRIPL", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA3_CTRIPH", displayName: "CMPSSA3_CTRIPH", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA4_CTRIPL", displayName: "CMPSSA4_CTRIPL", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA4_CTRIPH", displayName: "CMPSSA4_CTRIPH", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA5_CTRIPL", displayName: "CMPSSA5_CTRIPL", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA5_CTRIPH", displayName: "CMPSSA5_CTRIPH", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA6_CTRIPL", displayName: "CMPSSA6_CTRIPL", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA6_CTRIPH", displayName: "CMPSSA6_CTRIPH", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA7_CTRIPL", displayName: "CMPSSA7_CTRIPL", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA7_CTRIPH", displayName: "CMPSSA7_CTRIPH", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA8_CTRIPL", displayName: "CMPSSA8_CTRIPL", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA8_CTRIPH", displayName: "CMPSSA8_CTRIPH", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA9_CTRIPL", displayName: "CMPSSA9_CTRIPL", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSA9_CTRIPH", displayName: "CMPSSA9_CTRIPH", path: "epwm_xbar", group: 0 },
    {  name: "CMPSSB0_CTRIPL", displayName: "CMPSSB0_CTRIPL", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB0_CTRIPH", displayName: "CMPSSB0_CTRIPH", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB1_CTRIPL", displayName: "CMPSSB1_CTRIPL", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB1_CTRIPH", displayName: "CMPSSB1_CTRIPH", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB2_CTRIPL", displayName: "CMPSSB2_CTRIPL", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB2_CTRIPH", displayName: "CMPSSB2_CTRIPH", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB3_CTRIPL", displayName: "CMPSSB3_CTRIPL", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB3_CTRIPH", displayName: "CMPSSB3_CTRIPH", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB4_CTRIPL", displayName: "CMPSSB4_CTRIPL", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB4_CTRIPH", displayName: "CMPSSB4_CTRIPH", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB5_CTRIPL", displayName: "CMPSSB5_CTRIPL", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB5_CTRIPH", displayName: "CMPSSB5_CTRIPH", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB6_CTRIPL", displayName: "CMPSSB6_CTRIPL", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB6_CTRIPH", displayName: "CMPSSB6_CTRIPH", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB7_CTRIPL", displayName: "CMPSSB7_CTRIPL", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB7_CTRIPH", displayName: "CMPSSB7_CTRIPH", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB8_CTRIPL", displayName: "CMPSSB8_CTRIPL", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB8_CTRIPH", displayName: "CMPSSB8_CTRIPH", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB9_CTRIPL", displayName: "CMPSSB9_CTRIPL", path: "epwm_xbar", group: 1 },
    {  name: "CMPSSB9_CTRIPH", displayName: "CMPSSB9_CTRIPH", path: "epwm_xbar", group: 1 },
    {  name: "SD0_FILT0_EVT1", displayName: "SD0_FILT0_EVT1", path: "epwm_xbar", group: 2 },
    {  name: "SD0_FILT0_EVT2", displayName: "SD0_FILT0_EVT2", path: "epwm_xbar", group: 2 },
    {  name: "SD0_FILT0_CMPHZ", displayName: "SD0_FILT0_CMPHZ", path: "epwm_xbar", group: 2 },
    {  name: "SD0_FILT1_EVT1", displayName: "SD0_FILT1_EVT1", path: "epwm_xbar", group: 2 },
    {  name: "SD0_FILT1_EVT2", displayName: "SD0_FILT1_EVT2", path: "epwm_xbar", group: 2 },
    {  name: "SD0_FILT1_CMPHZ", displayName: "SD0_FILT1_CMPHZ", path: "epwm_xbar", group: 2 },
    {  name: "SD0_FILT2_EVT1", displayName: "SD0_FILT2_EVT1", path: "epwm_xbar", group: 2 },
    {  name: "SD0_FILT2_EVT2", displayName: "SD0_FILT2_EVT2", path: "epwm_xbar", group: 2 },
    {  name: "SD0_FILT2_CMPHZ", displayName: "SD0_FILT2_CMPHZ", path: "epwm_xbar", group: 2 },
    {  name: "SD0_FILT3_EVT1", displayName: "SD0_FILT3_EVT1", path: "epwm_xbar", group: 2 },
    {  name: "SD0_FILT3_EVT2", displayName: "SD0_FILT3_EVT2", path: "epwm_xbar", group: 2 },
    {  name: "SD0_FILT3_CMPHZ", displayName: "SD0_FILT3_CMPHZ", path: "epwm_xbar", group: 2 },
    {  name: "SD1_FILT0_EVT1", displayName: "SD1_FILT0_EVT1", path: "epwm_xbar", group: 2 },
    {  name: "SD1_FILT0_EVT2", displayName: "SD1_FILT0_EVT2", path: "epwm_xbar", group: 2 },
    {  name: "SD1_FILT0_CMPHZ", displayName: "SD1_FILT0_CMPHZ", path: "epwm_xbar", group: 2 },
    {  name: "SD1_FILT1_EVT1", displayName: "SD1_FILT1_EVT1", path: "epwm_xbar", group: 2 },
    {  name: "SD1_FILT1_EVT2", displayName: "SD1_FILT1_EVT2", path: "epwm_xbar", group: 2 },
    {  name: "SD1_FILT1_CMPHZ", displayName: "SD1_FILT1_CMPHZ", path: "epwm_xbar", group: 2 },
    {  name: "SD1_FILT2_EVT1", displayName: "SD1_FILT2_EVT1", path: "epwm_xbar", group: 2 },
    {  name: "SD1_FILT2_EVT2", displayName: "SD1_FILT2_EVT2", path: "epwm_xbar", group: 2 },
    {  name: "SD1_FILT2_CMPHZ", displayName: "SD1_FILT2_CMPHZ", path: "epwm_xbar", group: 2 },
    {  name: "SD1_FILT3_EVT1", displayName: "SD1_FILT3_EVT1", path: "epwm_xbar", group: 2 },
    {  name: "SD1_FILT3_EVT2", displayName: "SD1_FILT3_EVT2", path: "epwm_xbar", group: 2 },
    {  name: "SD1_FILT3_CMPHZ", displayName: "SD1_FILT3_CMPHZ", path: "epwm_xbar", group: 2 },
    {  name: "ADC0_EVT1", displayName: "ADC0_EVT1", path: "epwm_xbar", group: 3 },
    {  name: "ADC0_EVT2", displayName: "ADC0_EVT2", path: "epwm_xbar", group: 3 },
    {  name: "ADC0_EVT3", displayName: "ADC0_EVT3", path: "epwm_xbar", group: 3 },
    {  name: "ADC0_EVT4", displayName: "ADC0_EVT4", path: "epwm_xbar", group: 3 },
    {  name: "ADC1_EVT1", displayName: "ADC1_EVT1", path: "epwm_xbar", group: 3 },
    {  name: "ADC1_EVT2", displayName: "ADC1_EVT2", path: "epwm_xbar", group: 3 },
    {  name: "ADC1_EVT3", displayName: "ADC1_EVT3", path: "epwm_xbar", group: 3 },
    {  name: "ADC1_EVT4", displayName: "ADC1_EVT4", path: "epwm_xbar", group: 3 },
    {  name: "ADC2_EVT1", displayName: "ADC2_EVT1", path: "epwm_xbar", group: 3 },
    {  name: "ADC2_EVT2", displayName: "ADC2_EVT2", path: "epwm_xbar", group: 3 },
    {  name: "ADC2_EVT3", displayName: "ADC2_EVT3", path: "epwm_xbar", group: 3 },
    {  name: "ADC2_EVT4", displayName: "ADC2_EVT4", path: "epwm_xbar", group: 3 },
    {  name: "ADC3_EVT1", displayName: "ADC3_EVT1", path: "epwm_xbar", group: 3 },
    {  name: "ADC3_EVT2", displayName: "ADC3_EVT2", path: "epwm_xbar", group: 3 },
    {  name: "ADC3_EVT3", displayName: "ADC3_EVT3", path: "epwm_xbar", group: 3 },
    {  name: "ADC3_EVT4", displayName: "ADC3_EVT4", path: "epwm_xbar", group: 3 },
    {  name: "ADC4_EVT1", displayName: "ADC4_EVT1", path: "epwm_xbar", group: 3 },
    {  name: "ADC4_EVT2", displayName: "ADC4_EVT2", path: "epwm_xbar", group: 3 },
    {  name: "ADC4_EVT3", displayName: "ADC4_EVT3", path: "epwm_xbar", group: 3 },
    {  name: "ADC4_EVT4", displayName: "ADC4_EVT4", path: "epwm_xbar", group: 3 },
    {  name: "ADC_R0_EVT1", displayName: "ADC_R0_EVT1", path: "epwm_xbar", group: 3 },
    {  name: "ADC_R0_EVT2", displayName: "ADC_R0_EVT2", path: "epwm_xbar", group: 3 },
    {  name: "ADC_R0_EVT3", displayName: "ADC_R0_EVT3", path: "epwm_xbar", group: 3 },
    {  name: "ADC_R0_EVT4", displayName: "ADC_R0_EVT4", path: "epwm_xbar", group: 3 },
    {  name: "ADC_R1_EVT1", displayName: "ADC_R1_EVT1", path: "epwm_xbar", group: 3 },
    {  name: "ADC_R1_EVT2", displayName: "ADC_R1_EVT2", path: "epwm_xbar", group: 3 },
    {  name: "ADC_R1_EVT3", displayName: "ADC_R1_EVT3", path: "epwm_xbar", group: 3 },
    {  name: "ADC_R1_EVT4", displayName: "ADC_R1_EVT4", path: "epwm_xbar", group: 3 },
    {  name: "EPWM0_TRIPOUT", displayName: "EPWM0_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM1_TRIPOUT", displayName: "EPWM1_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM2_TRIPOUT", displayName: "EPWM2_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM3_TRIPOUT", displayName: "EPWM3_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM4_TRIPOUT", displayName: "EPWM4_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM5_TRIPOUT", displayName: "EPWM5_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM6_TRIPOUT", displayName: "EPWM6_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM7_TRIPOUT", displayName: "EPWM7_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM8_TRIPOUT", displayName: "EPWM8_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM9_TRIPOUT", displayName: "EPWM9_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM10_TRIPOUT", displayName: "EPWM10_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM11_TRIPOUT", displayName: "EPWM11_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM12_TRIPOUT", displayName: "EPWM12_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM13_TRIPOUT", displayName: "EPWM13_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM14_TRIPOUT", displayName: "EPWM14_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM15_TRIPOUT", displayName: "EPWM15_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM16_TRIPOUT", displayName: "EPWM16_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM17_TRIPOUT", displayName: "EPWM17_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM18_TRIPOUT", displayName: "EPWM18_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM19_TRIPOUT", displayName: "EPWM19_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM20_TRIPOUT", displayName: "EPWM20_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM21_TRIPOUT", displayName: "EPWM21_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM22_TRIPOUT", displayName: "EPWM22_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM23_TRIPOUT", displayName: "EPWM23_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM24_TRIPOUT", displayName: "EPWM24_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM25_TRIPOUT", displayName: "EPWM25_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM26_TRIPOUT", displayName: "EPWM26_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM27_TRIPOUT", displayName: "EPWM27_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM28_TRIPOUT", displayName: "EPWM28_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM29_TRIPOUT", displayName: "EPWM29_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM30_TRIPOUT", displayName: "EPWM30_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "EPWM31_TRIPOUT", displayName: "EPWM31_TRIPOUT", path: "epwm_xbar", group: 5 },
    {  name: "DEL0_TRIP", displayName: "DEL0_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL1_TRIP", displayName: "DEL1_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL2_TRIP", displayName: "DEL2_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL3_TRIP", displayName: "DEL3_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL4_TRIP", displayName: "DEL4_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL5_TRIP", displayName: "DEL5_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL6_TRIP", displayName: "DEL6_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL7_TRIP", displayName: "DEL7_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL8_TRIP", displayName: "DEL8_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL9_TRIP", displayName: "DEL9_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL10_TRIP", displayName: "DEL10_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL11_TRIP", displayName: "DEL11_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL12_TRIP", displayName: "DEL12_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL13_TRIP", displayName: "DEL13_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL14_TRIP", displayName: "DEL14_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL15_TRIP", displayName: "DEL15_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL16_TRIP", displayName: "DEL16_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL17_TRIP", displayName: "DEL17_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL18_TRIP", displayName: "DEL18_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL19_TRIP", displayName: "DEL19_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL20_TRIP", displayName: "DEL20_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL21_TRIP", displayName: "DEL21_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL22_TRIP", displayName: "DEL22_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL23_TRIP", displayName: "DEL23_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL24_TRIP", displayName: "DEL24_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL25_TRIP", displayName: "DEL25_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL26_TRIP", displayName: "DEL26_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL27_TRIP", displayName: "DEL27_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL28_TRIP", displayName: "DEL28_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL29_TRIP", displayName: "DEL29_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL30_TRIP", displayName: "DEL30_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL31_TRIP", displayName: "DEL31_TRIP", path: "epwm_xbar", group: 6 },
    {  name: "DEL0_ACTIVE", displayName: "DEL0_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL1_ACTIVE", displayName: "DEL1_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL2_ACTIVE", displayName: "DEL2_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL3_ACTIVE", displayName: "DEL3_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL4_ACTIVE", displayName: "DEL4_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL5_ACTIVE", displayName: "DEL5_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL6_ACTIVE", displayName: "DEL6_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL7_ACTIVE", displayName: "DEL7_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL8_ACTIVE", displayName: "DEL8_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL9_ACTIVE", displayName: "DEL9_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL10_ACTIVE", displayName: "DEL10_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL11_ACTIVE", displayName: "DEL11_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL12_ACTIVE", displayName: "DEL12_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL13_ACTIVE", displayName: "DEL13_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL14_ACTIVE", displayName: "DEL14_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL15_ACTIVE", displayName: "DEL15_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL16_ACTIVE", displayName: "DEL16_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL17_ACTIVE", displayName: "DEL17_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL18_ACTIVE", displayName: "DEL18_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL19_ACTIVE", displayName: "DEL19_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL20_ACTIVE", displayName: "DEL20_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL21_ACTIVE", displayName: "DEL21_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL22_ACTIVE", displayName: "DEL22_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL23_ACTIVE", displayName: "DEL23_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL24_ACTIVE", displayName: "DEL24_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL25_ACTIVE", displayName: "DEL25_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL26_ACTIVE", displayName: "DEL26_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL27_ACTIVE", displayName: "DEL27_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL28_ACTIVE", displayName: "DEL28_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL29_ACTIVE", displayName: "DEL29_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL30_ACTIVE", displayName: "DEL30_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "DEL31_ACTIVE", displayName: "DEL31_ACTIVE", path: "epwm_xbar", group: 7 },
    {  name: "EQEP0_ERR", displayName: "EQEP0_ERR", path: "epwm_xbar", group: 8 },
    {  name: "EQEP1_ERR", displayName: "EQEP1_ERR", path: "epwm_xbar", group: 8 },
    {  name: "EQEP2_ERR", displayName: "EQEP2_ERR", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX0_RX_TRIG0", displayName: "FSIRX0_RX_TRIG0", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX0_RX_TRIG1", displayName: "FSIRX0_RX_TRIG1", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX0_RX_TRIG2", displayName: "FSIRX0_RX_TRIG2", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX0_RX_TRIG3", displayName: "FSIRX0_RX_TRIG3", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX1_RX_TRIG0", displayName: "FSIRX1_RX_TRIG0", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX1_RX_TRIG1", displayName: "FSIRX1_RX_TRIG1", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX1_RX_TRIG2", displayName: "FSIRX1_RX_TRIG2", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX1_RX_TRIG3", displayName: "FSIRX1_RX_TRIG3", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX2_RX_TRIG0", displayName: "FSIRX2_RX_TRIG0", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX2_RX_TRIG1", displayName: "FSIRX2_RX_TRIG1", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX2_RX_TRIG2", displayName: "FSIRX2_RX_TRIG2", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX2_RX_TRIG3", displayName: "FSIRX2_RX_TRIG3", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX3_RX_TRIG0", displayName: "FSIRX3_RX_TRIG0", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX3_RX_TRIG1", displayName: "FSIRX3_RX_TRIG1", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX3_RX_TRIG2", displayName: "FSIRX3_RX_TRIG2", path: "epwm_xbar", group: 8 },
    {  name: "FSIRX3_RX_TRIG3", displayName: "FSIRX3_RX_TRIG3", path: "epwm_xbar", group: 8 },
    {  name: "ECAP0_TRIPOUT", displayName: "ECAP0_TRIPOUT", path: "epwm_xbar", group: 8 },
    {  name: "ECAP1_TRIPOUT", displayName: "ECAP1_TRIPOUT", path: "epwm_xbar", group: 8 },
    {  name: "ECAP2_TRIPOUT", displayName: "ECAP2_TRIPOUT", path: "epwm_xbar", group: 8 },
    {  name: "ECAP3_TRIPOUT", displayName: "ECAP3_TRIPOUT", path: "epwm_xbar", group: 8 },
    {  name: "ECAP4_TRIPOUT", displayName: "ECAP4_TRIPOUT", path: "epwm_xbar", group: 8 },
    {  name: "ECAP5_TRIPOUT", displayName: "ECAP5_TRIPOUT", path: "epwm_xbar", group: 8 },
    {  name: "ECAP6_TRIPOUT", displayName: "ECAP6_TRIPOUT", path: "epwm_xbar", group: 8 },
    {  name: "ECAP7_TRIPOUT", displayName: "ECAP7_TRIPOUT", path: "epwm_xbar", group: 8 },
    {  name: "ECAP8_TRIPOUT", displayName: "ECAP8_TRIPOUT", path: "epwm_xbar", group: 8 },
    {  name: "ECAP9_TRIPOUT", displayName: "ECAP9_TRIPOUT", path: "epwm_xbar", group: 8 },
    {  name: "ECAP10_TRIPOUT", displayName: "ECAP10_TRIPOUT", path: "epwm_xbar", group: 8 },
    {  name: "ECAP11_TRIPOUT", displayName: "ECAP11_TRIPOUT", path: "epwm_xbar", group: 8 },
    {  name: "ECAP12_TRIPOUT", displayName: "ECAP12_TRIPOUT", path: "epwm_xbar", group: 8 },
    {  name: "ECAP13_TRIPOUT", displayName: "ECAP13_TRIPOUT", path: "epwm_xbar", group: 9 },
    {  name: "ECAP14_TRIPOUT", displayName: "ECAP14_TRIPOUT", path: "epwm_xbar", group: 9 },
    {  name: "ECAP15_TRIPOUT", displayName: "ECAP15_TRIPOUT", path: "epwm_xbar", group: 9 },
    {  name: "SYNCOUTXBAR0", displayName: "SYNCOUTXBAR0", path: "epwm_xbar", group: 9 },
    {  name: "SYNCOUTXBAR1", displayName: "SYNCOUTXBAR1", path: "epwm_xbar", group: 9 },
    {  name: "SOCAXBAR_SOCA", displayName: "SOCAXBAR_SOCA", path: "epwm_xbar", group: 9 },
    {  name: "SOCAXBAR_SOCB", displayName: "SOCAXBAR_SOCB", path: "epwm_xbar", group: 9 },
];

let xbarProperties = {
    masterXbarList: ["input_xbar"],
    outputInstanceList: [
        { name: "EPWM_XBAR", count: 30},
    ],
    duplicatesPresent: false,
    moduleString: "epwm_xbar",
}

function getOptionList(calledBy) {
    return xbarSoc.getOptionListSoc(calledBy, xbarProperties, internal_list);
}

function getConfigArr() {
    return xbarSoc.getXbarInstanceConfig(xbarProperties);
}

function supportXbarConfig(outputSelected, instance, count) {
    return xbarSoc.supportXbarConfigSoc(outputSelected, instance, xbarProperties, count);
}

exports = {
    getConfigArr,
    getOptionList,
    supportXbarConfig,
};