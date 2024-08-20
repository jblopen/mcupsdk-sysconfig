
let common = system.getScript("/common");
let hwi = system.getScript("/kernel/dpl/hwi.js");
let pinmux = system.getScript("/drivers/pinmux/pinmux");
let soc = system.getScript(`/drivers/mcan/soc/mcan_${common.getSocName()}`);

function getConfigArr() {
    return system.getScript(`/drivers/mcan/soc/mcan_${common.getSocName()}`).getConfigArr();
}

function getInstanceConfig(moduleInstance) {
    let solution = moduleInstance[getInterfaceName(moduleInstance)].$solution;
    let configArr = getConfigArr();
    let config = configArr.find( o => o.name === solution.peripheralName);

    return {
        ...config,
        ...moduleInstance
    }
}

function getPeripheralPinNames(inst) {
    return [ "RX", "TX" ];
}

function pinmuxRequirements(inst) {
   let interfaceName = getInterfaceName(inst);

    let resources = [];
    let pinResource = {};

    pinResource = pinmux.getPinRequirements(interfaceName, "RX", "MCAN RX Pin");
    pinmux.setConfigurableDefault( pinResource, "rx", true );
    resources.push( pinResource);
    pinResource = pinmux.getPinRequirements(interfaceName, "TX", "MCAN TX Pin");
    pinmux.setConfigurableDefault( pinResource, "rx", false );
    resources.push( pinResource);

    let peripheral = {
        name: interfaceName,
        displayName: "MCAN Instance",
        interfaceName: interfaceName,
        resources: resources,
    };

    return [peripheral];
}

function getInterfaceName(instance) {
    return soc.getInterfaceName(instance);
}

function getClockEnableIds(instance) {
    let instConfig = getInstanceConfig(instance);
    return instConfig.clockIds;
}

function getClockFrequencies(inst) {

    let instConfig = getInstanceConfig(inst);

    return instConfig.clockFrequencies;
}

function onChangeUseTdc(inst, ui)
{
    if (inst.tdcEnable) {
        ui.tdcConfig_tdcf.hidden = false;
        ui.tdcConfig_tdco.hidden = false;
    }
    else {
        ui.tdcConfig_tdcf.hidden = true;
        ui.tdcConfig_tdco.hidden = true;
    }
}

function onChangeUseAddCon(inst, ui)
{
    if (inst.additionalCoreConfig) {
        ui.monEnable.hidden = false;
        ui.asmEnable.hidden = false;
        ui.tsPrescalar.hidden = false;
        ui.tsSelect.hidden = false;
        ui.timeoutSelect.hidden = false;
        ui.timeoutPreload.hidden = false;
        ui.timeoutCntEnable.hidden = false;
        ui.rrfs.hidden = false;
        ui.rrfe.hidden = false;
        ui.anfe.hidden = false;
        ui.anfs.hidden = false;
    }
    else {
        ui.monEnable.hidden = true;
        ui.asmEnable.hidden = true;
        ui.tsPrescalar.hidden = true;
        ui.tsSelect.hidden = true;
        ui.timeoutSelect.hidden = true;
        ui.timeoutPreload.hidden = true;
        ui.timeoutCntEnable.hidden = true;
        ui.rrfs.hidden = true;
        ui.rrfe.hidden = true;
        ui.anfe.hidden = true;
        ui.anfs.hidden = true;
    }
}

function onChangeMsgRamConfig(inst, ui)
{
    if (inst.msgRamConfig) {
        ui.flssa.hidden = false;
        ui.lss.hidden = false;
        ui.flesa.hidden = false;
        ui.lse.hidden = false;
        ui.txBufNum.hidden = false;
        ui.txFIFOSize.hidden = false;
        ui.txBufMode.hidden = false;
        ui.txBufElemSize.hidden = false;
        ui.txEventFIFOWaterMark.hidden = false;
        ui.rxFIFO0size.hidden = false;
        ui.rxFIFO0waterMark.hidden = false;
        ui.rxFIFO0OpMode.hidden = false;
        ui.rxFIFO1size.hidden = false;
        ui.rxFIFO1waterMark.hidden = false;
        ui.rxFIFO1OpMode.hidden = false;
        ui.rxBufElemSize.hidden = false;
        ui.rxFIFO0ElemSize.hidden = false;
        ui.rxFIFO1ElemSize.hidden = false;
    }
    else {
        ui.flssa.hidden = true;
        ui.lss.hidden = true;
        ui.flesa.hidden = true;
        ui.lse.hidden = true;
        ui.txBufNum.hidden = true;
        ui.txFIFOSize.hidden = true;
        ui.txBufMode.hidden = true;
        ui.txBufElemSize.hidden = true;
        ui.txEventFIFOWaterMark.hidden = true;
        ui.rxFIFO0size.hidden = true;
        ui.rxFIFO0waterMark.hidden = true;
        ui.rxFIFO0OpMode.hidden = true;
        ui.rxFIFO1size.hidden = true;
        ui.rxFIFO1waterMark.hidden = true;
        ui.rxFIFO1OpMode.hidden = true;
        ui.rxBufElemSize.hidden = true;
        ui.rxFIFO0ElemSize.hidden = true;
        ui.rxFIFO1ElemSize.hidden = true;
    }
}

function onChangeHideHLDParams(inst, ui)
{
    if(inst.sdkInfra == "LLD") {
        ui.operMode.hidden = true;
        ui.transferMode.hidden = true;
        ui.transferCallbackFxn.hidden = true;
        ui.errorCallbackFxn.hidden = true;
        ui.fdMode.hidden = true;
        ui.brsEnable.hidden = true;
        ui.enableLoopback.hidden = true;
        ui.loopbackMode.hidden = true;
        ui.txpEnable.hidden = true;
        ui.efbi.hidden = true;
        ui.pxhddisable.hidden = true;
        ui.darEnable.hidden = true;
        ui.wkupReqEnable.hidden = true;
        ui.autoWkupEnable.hidden = true;
        ui.emulationEnable.hidden = true;
        ui.emulationFAck.hidden = true;
        ui.clkStopFAck.hidden = true;
        ui.enableTransmitPause.hidden = true;
        ui.enableEdgeFiltering.hidden = true;
        ui.enableProtocolExceptionHandling.hidden = true;
        ui.disableAutomaticRetransmission.hidden = true;
        ui.enableWakeupRequest.hidden = true;
        ui.enableAutoWakeup.hidden = true;
        ui.wdcPreload.hidden = true;
        ui.errInterruptEnable.hidden = true;
        ui.dataInterruptEnable.hidden = true;
        ui.tdcEnable.hidden = true;
        ui.tdcConfig_tdcf.hidden = true;
        ui.tdcConfig_tdco.hidden = true;
        ui.additionalCoreConfig.hidden = true;
        ui.monEnable.hidden = true;
        ui.asmEnable.hidden = true;
        ui.tsPrescalar.hidden = true;
        ui.tsSelect.hidden = true;
        ui.timeoutSelect.hidden = true;
        ui.timeoutPreload.hidden = true;
        ui.timeoutCntEnable.hidden = true;
        ui.rrfe.hidden = true;
        ui.rrfs.hidden = true;
        ui.anfe.hidden = true;
        ui.anfs.hidden = true;
        ui.msgRamConfig.hidden = true;
        ui.flssa.hidden = true;
        ui.lss.hidden = true;
        ui.flesa.hidden = true;
        ui.lse.hidden = true;
        ui.txBufNum.hidden = true;
        ui.txFIFOSize.hidden = true;
        ui.txBufMode.hidden = true;
        ui.txBufElemSize.hidden = true;
        ui.txEventFIFOSize.hidden = true;
        ui.txEventFIFOWaterMark.hidden = true;
        ui.rxFIFO0size.hidden = true;
        ui.rxFIFO0waterMark.hidden = true;
        ui.rxFIFO0OpMode.hidden = true;
        ui.rxFIFO1size.hidden = true;
        ui.rxFIFO1waterMark.hidden = true;
        ui.rxFIFO1OpMode.hidden = true;
        ui.rxBufElemSize.hidden = true;
        ui.rxFIFO0ElemSize.hidden = true;
        ui.rxFIFO1ElemSize.hidden = true;
        ui.eccEnable.hidden = true;
        ui.enableChk.hidden = true;
        ui.enableRdModWr.hidden = true;
        ui.errInterruptEnable.hidden = true;
        ui.dataInterruptEnable.hidden = true;
        ui.nomBrp.hidden = true;
        ui.nomPropSeg.hidden = true;
        ui.nomPseg1.hidden = true;
        ui.nomPseg2.hidden = true;
        ui.nomSjw.hidden = true;
        ui.dataBrp.hidden = true;
        ui.dataPropSeg.hidden = true;
        ui.dataPseg1.hidden = true;
        ui.dataPseg2.hidden = true;
        ui.dataSjw.hidden = true;
        ui.canfdNomBitRate.hidden = true;
        ui.canfdSamplingNomBitRate.hidden = true;
        ui.canfdDataBitRate.hidden = true;
        ui.canfdSamplingDataBitRate.hidden = true;

        ui.nomRatePrescalar.hidden = false;
        ui.nomTimeSeg1.hidden = false;
        ui.nomTimeSeg2.hidden = false;
        ui.dataRatePrescalar.hidden = false;
        ui.dataTimeSeg1.hidden = false;
        ui.dataTimeSeg2.hidden = false;
        ui.dataSynchJumpWidth.hidden = false;
        ui.nomBitRate.hidden = false;
        ui.samplingNomBitRate.hidden = false;
        ui.dataBitRate.hidden = false;
        ui.samplingDataBitRate.hidden = false;
    }
    else {
        ui.operMode.hidden = false;
        ui.transferMode.hidden = false;
        if((inst.intrEnable == "INTERRUPT") || (inst.intrEnable == "DMA"))
        {
            ui.transferCallbackFxn.hidden = false;
            ui.errorCallbackFxn.hidden = false;
            if(inst.transferMode != "CALLBACK")
            {
                ui.transferCallbackFxn.hidden = true;
                ui.errorCallbackFxn.hidden = true;
            }
        }
        else
        {
            ui.transferCallbackFxn.hidden = true;
            ui.errorCallbackFxn.hidden = true;
        }
        ui.fdMode.hidden = false;
        ui.brsEnable.hidden = false;
        ui.enableLoopback.hidden = false;
        ui.loopbackMode.hidden = false;
        ui.txpEnable.hidden = false;
        ui.efbi.hidden = false;
        ui.pxhddisable.hidden = false;
        ui.darEnable.hidden = false;
        ui.wkupReqEnable.hidden = false;
        ui.autoWkupEnable.hidden = false;
        ui.emulationEnable.hidden = false;
        ui.emulationFAck.hidden = false;
        ui.clkStopFAck.hidden = false;
        ui.enableTransmitPause.hidden = false;
        ui.enableEdgeFiltering.hidden = false;
        ui.enableProtocolExceptionHandling.hidden = false;
        ui.disableAutomaticRetransmission.hidden = false;
        ui.enableWakeupRequest.hidden = false;
        ui.enableAutoWakeup.hidden = false;
        ui.wdcPreload.hidden = false;
        ui.errInterruptEnable.hidden = false;
        ui.dataInterruptEnable.hidden = false;
        ui.tdcEnable.hidden = false;
        ui.tdcConfig_tdcf.hidden = false;
        ui.tdcConfig_tdco.hidden = false;
        ui.additionalCoreConfig.hidden = false;
        ui.monEnable.hidden = false;
        ui.asmEnable.hidden = false;
        ui.tsPrescalar.hidden = false;
        ui.tsSelect.hidden = false;
        ui.timeoutSelect.hidden = false;
        ui.timeoutPreload.hidden = false;
        ui.timeoutCntEnable.hidden = false;
        ui.rrfe.hidden = false;
        ui.rrfs.hidden = false;
        ui.anfe.hidden = false;
        ui.anfs.hidden = false;
        ui.msgRamConfig.hidden = false;
        ui.flssa.hidden = false;
        ui.lss.hidden = false;
        ui.flesa.hidden = false;
        ui.lse.hidden = false;
        ui.txBufNum.hidden = false;
        ui.txFIFOSize.hidden = false;
        ui.txBufMode.hidden = false;
        ui.txBufElemSize.hidden = false;
        ui.txEventFIFOSize.hidden = false;
        ui.txEventFIFOWaterMark.hidden = false;
        ui.rxFIFO0size.hidden = false;
        ui.rxFIFO0waterMark.hidden = false;
        ui.rxFIFO0OpMode.hidden = false;
        ui.rxFIFO1size.hidden = false;
        ui.rxFIFO1waterMark.hidden = false;
        ui.rxFIFO1OpMode.hidden = false;
        ui.rxBufElemSize.hidden = false;
        ui.rxFIFO0ElemSize.hidden = false;
        ui.rxFIFO1ElemSize.hidden = false;
        ui.eccEnable.hidden = false;
        ui.enableChk.hidden = false;
        ui.enableRdModWr.hidden = false;
        ui.errInterruptEnable.hidden = false;
        ui.dataInterruptEnable.hidden = false;
        ui.nomBrp.hidden = false;
        ui.nomPropSeg.hidden = false;
        ui.nomPseg1.hidden = false;
        ui.nomPseg2.hidden = false;
        ui.nomSjw.hidden = false;
        ui.dataBrp.hidden = false;
        ui.dataPropSeg.hidden = false;
        ui.dataPseg1.hidden = false;
        ui.dataPseg2.hidden = false;
        ui.dataSjw.hidden = false;
        ui.canfdNomBitRate.hidden = false;
        ui.canfdSamplingNomBitRate.hidden = false;
        ui.canfdDataBitRate.hidden = false;
        ui.canfdSamplingDataBitRate.hidden = false;

        ui.nomRatePrescalar.hidden = true;
        ui.nomTimeSeg1.hidden = true;
        ui.nomTimeSeg2.hidden = true;
        ui.nomSynchJumpWidth.hidden = true;
        ui.dataRatePrescalar.hidden = true;
        ui.dataTimeSeg1.hidden = true;
        ui.dataTimeSeg2.hidden = true;
        ui.dataSynchJumpWidth.hidden = true;
        ui.nomBitRate.hidden = true;
        ui.samplingNomBitRate.hidden = true;
        ui.dataBitRate.hidden = true;
        ui.samplingDataBitRate.hidden = true;
    }
}

function validate(inst, report) {
    /* None. Verified by SYSCFG based on selected pin */
    common.validate.checkValidCName(inst, report, "transferCallbackFxn");
    common.validate.checkValidCName(inst, report, "errorCallbackFxn");
    if((inst.transferMode == "CALLBACK") &&
        ((inst.transferCallbackFxn == "NULL") || (inst.transferCallbackFxn == "") )) {
        report.logError("Callback function MUST be provided for callback transfer mode", inst, "transferCallbackFxn");
    }
    common.validate.checkNumberRange(inst, report, "intrPriority", 0, hwi.getHwiMaxPriority(), "dec");
}

let MCAN_elemSize = [
    {name: "MCAN_ELEM_SIZE_8BYTES", displayName : "8 byte data field "},
    {name: "MCAN_ELEM_SIZE_12BYTES", displayName : "12 byte data field "},
    {name: "MCAN_ELEM_SIZE_16BYTES", displayName : "16 byte data field"},
    {name: "MCAN_ELEM_SIZE_20BYTES", displayName : "20 byte data field"},
    {name: "MCAN_ELEM_SIZE_24BYTES", displayName : "24 byte data field "},
    {name: "MCAN_ELEM_SIZE_32BYTES", displayName : "32 byte data field "},
    {name: "MCAN_ELEM_SIZE_48BYTES", displayName : "48 byte data field "},
    {name: "MCAN_ELEM_SIZE_64BYTES", displayName : "64 byte data field"},
];

let MCAN_fifoOPMode = [
    {name: "0", displayName : "FIFO blocking mode "},
    {name: "1", displayName : "FIFO overwrite mode"},
];

/* Array of CAN configurables that are common across device families */
let config = [
    {
        name: "sdkInfra",
        displayName: "SDK Infra",
        default: "LLD",
        description: "SDK Infra",
        onChange: onChangeHideHLDParams,
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
    },
    {
        name: "GROUP_GENERAL_CONFIGURATION",
        displayName: "General Configuration",
        config: [
            {
                name: "operMode", /* Do not change name to avoid interface break */
                displayName: "Operating Mode",
                default: "INTERRUPT",
                hidden: true,
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
                    if(inst.operMode == "POLLED") {
                        ui.intrPriority.hidden = true;
                        inst.transferMode = "BLOCKING";
                        inst.transferCallbackFxn = "NULL";
                        inst.errorCallbackFxn = "NULL";
                        ui.transferMode.hidden = true;
                        ui.transferCallbackFxn.hidden = true;
                        ui.errorCallbackFxn.hidden = true;
                    }
                    if((inst.operMode == "INTERRUPT") || (inst.operMode == "DMA")) {
                        ui.intrPriority.hidden = false;
                        ui.transferMode.hidden = false;
                        ui.transferCallbackFxn.hidden = false;
                        ui.errorCallbackFxn.hidden = false;
                        if(inst.transferMode != "CALLBACK")
                        {
                            ui.transferCallbackFxn.hidden = true;
                            ui.errorCallbackFxn.hidden = true;
                        }
                    }
                },
                description: "Driver Operating Mode. In case of DMA mode, Default TX Data feature is not supported"
            },
            {
                name: "transferMode",
                displayName: "Transfer Mode",
                default: "BLOCKING",
                hidden: true,
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
                        ui.errorCallbackFxn.hidden = false;
                        if(inst.transferCallbackFxn == "NULL") {
                            /* Clear NULL entry as user need to provide a fxn */
                            inst.transferCallbackFxn = "";
                            inst.errorCallbackFxn = "";
                        }
                    }
                    else {
                        ui.transferCallbackFxn.hidden = true;
                        ui.errorCallbackFxn.hidden = true;
                        inst.transferCallbackFxn = "NULL";
                        inst.errorCallbackFxn = "NULL";
                    }
                },
                description: "This determines whether the driver operates synchronously or asynchronously",
            },
            {
                name: "intrPriority",
                displayName: "Interrupt Priority",
                default: 4,
                hidden: true,
                description: `Interrupt Priority: 0 (highest) to ${hwi.getHwiMaxPriority()} (lowest)`,
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
                name        : "fdMode",
                displayName : "Enable CAN FD Mode",
                description : 'Whether CAN flexible data mode to be enabled.',
                hidden      : true,
                default     : true,
            },
            {
                name: "brsEnable",
                displayName: "Enable Bit Rate Switching",
                description: `This enables the bit rate switching for MCAN.`,
                default: true,
                hidden : true,
            },
            {
                name: "enableLoopback",
                displayName: "Enable Loopback mode ",
                description: `This enables internal loopback mode for MCAN.`,
                default: true,
                hidden : true,
            },
            {
                name: "loopbackMode",
                displayName: "Loopback mode ",
                description: `This enables internal loopback mode for MCAN.`,
                default: "INTERNAL",
                hidden : true,
                options: [
                    {
                        name: "INTERNAL",
                        displayName: "Internal"
                    },
                    {
                        name: "EXTERNAL",
                        displayName: "External"
                    },
                ],
            },
            {
                name        : "txpEnable",
                displayName : "Enable Transmit pause",
                description : 'Enable Transmit pause.',
                hidden      : true,
                default     : false,
            },
            {
                name        : "efbi",
                displayName : "Enable Edge filtering",
                description : 'Enable Edge filtering.',
                hidden      : true,
                default     : false,
            },
            {
                name        : "pxhddisable",
                displayName : "Enable Protocol exception handling",
                description : 'Enable Protocol exception handling',
                hidden      : true,
                default     : false,
            },
            {
                name        : "darEnable",
                displayName : "Disable Automatic retransmission",
                description : 'Disable Automatic retransmission of message.',
                hidden      : true,
                default     : false,
            },
            {
                name        : "wkupReqEnable",
                displayName : "Enable Wakeup request",
                description : 'Enable Wakeup request.',
                hidden      : true,
                default     : false,
            },
            {
                name        : "autoWkupEnable",
                displayName : "Enable Auto-Wakeup",
                description : 'Enable Auto-Wakeup.',
                hidden      : true,
                default     : false,
            },
            {
                name        : "emulationEnable",
                displayName : "Enable Emulation/Debug Suspend",
                description : 'Enable Emulation/Debug Suspend.',
                hidden      : true,
                default     : false,
            },
            {
                name        : "emulationFAck",
                displayName : "Enable Emulation Suspend Fast Ack",
                description : 'Enable Emulation/Debug Suspend Fast Ack.',
                hidden      : true,
                default     : false,
            },
            {
                name        : "clkStopFAck",
                displayName : "Enable Clock Stop Fast Acke",
                description : 'Enable Clock Stop Fast Ack.',
                hidden      : true,
                default     : false,
            },
            {
                name: "enableTransmitPause",
                displayName: "Enable Transmit pause",
                description: `This enables Transmit pause for MCAN.`,
                default: false,
                hidden : true,
            },
            {
                name: "enableEdgeFiltering",
                displayName: "Enable Edge filtering",
                description: `This enables Edge filtering for MCAN.`,
                default: false,
                hidden : true,
            },
            {
                name: "enableProtocolExceptionHandling",
                displayName: "Enable Protocol exception handling",
                description: `This enables Protocol exception handling for MCAN.`,
                default: false,
                hidden : true,
            },
            {
                name: "disableAutomaticRetransmission",
                displayName: "Disable Automatic retransmission",
                description: `This Disables Automatic retransmission of message for MCAN.`,
                default: false,
                hidden: true,
            },
            {
                name: "enableWakeupRequest",
                displayName: "Enable Wakeup request",
                description: `This enables Wakeup request for MCAN.`,
                default: false,
                hidden : true,
            },
            {
                name: "enableAutoWakeup",
                displayName: "Enable Auto-Wakeup",
                description: `This Enables Auto-Wakeup for MCAN.`,
                default: false,
                hidden : true,
            },
            {
                name        : "wdcPreload",
                displayName : "Watchdog Counter preload Value",
                description : 'Message RAM Watchdog Counter preload Value.',
                hidden      : true,
                default     : 0xFF,
            },
            {
                name            : "errInterruptEnable",
                displayName     : "Enable/Disable error/status intr",
                longDescription : 'Enable/Disable error/status interrupts. Must be enabled to receive error and status interrupts.',
                hidden          : true,
                default         : true,
            },
            {
                name            : "dataInterruptEnable",
                displayName     : "Enable/Disable data interrupts.",
                longDescription : 'Enable/Disable data interrupts. Must be enabled to receive transmit complete and data receive interrupts.',
                hidden          : true,
                default         : true,
            },
        ]
    },
    {
        name: "GROUP_TDC",
        displayName: "Transmitter Delay Compensation",
        config: [
            {
                name        : "tdcEnable",
                displayName : "Enable TDC",
                description : 'Enable Transmitter Delay Compensation.',
                hidden      : true,
                onChange    : onChangeUseTdc,
                default     : false,
            },
            {
                name        : "tdcConfig_tdcf",
                displayName : "TDC Filter Window Length",
                description : 'Transmitter Delay Compensation Filter Window Length (CAN Module Clk Cycles).',
                hidden      : true,
                default     : 0xA,
            },
            {
                name        : "tdcConfig_tdco",
                displayName : "TDC Offset",
                description : 'Transmitter Delay Compensation Offset (CAN Module Clk Cycles).',
                hidden      : true,
                default     : 0x6,
            },
        ]
    },
    {
        name: "GROUP_CORECONFIG",
        displayName: "Additional Core Configuration",
        config: [
            {
                name        : "additionalCoreConfig",
                displayName : "Enable Additional Core Configuration",
                description : 'Enable Additional Core Configuration.',
                hidden      : true,
                onChange    : onChangeUseAddCon,
                default     : false,
            },
            {
                name        : "monEnable",
                displayName : "Enable Bus Monitoring Mode",
                description : 'Enable Bus Monitoring Mode.',
                hidden      : true,
                default     : false,
            },
            {
                name        : "asmEnable",
                displayName : "Enable Restricted Operation Mode",
                description : 'Enable Restricted Operation Mode',
                hidden      : true,
                default     : false,
            },
            {
                name        : "tsPrescalar",
                displayName : "Time stamp Prescaler Value",
                description : 'Time stamp Prescaler Value.',
                hidden      : true,
                default     : 0xF,
            },
            {
                name        : "tsSelect",
                displayName : "Timestamp counter value",
                description : 'Timestamp counter value.',
                hidden      : true,
                default     : "0",
                options     : [
                    {name: "0", displayName : "Timestamp counter value always 0x0000"},
                    {name: "1", displayName : "Timestamp counter value incremented according to tsPrescalar"},
                    {name: "2", displayName : "External timestamp counter value used"},
                ],
            },
            {
                name        : "timeoutSelect",
                displayName : "Time-out counter source select",
                description : 'Time-out counter source select.',
                hidden      : true,
                default     : "MCAN_TIMEOUT_SELECT_CONT",
                options     : [
                    {name: "MCAN_TIMEOUT_SELECT_CONT", displayName : "Continuous operation Mode"},
                    {name: "MCAN_TIMEOUT_SELECT_TX_EVENT_FIFO", displayName : "Timeout controlled by Tx Event FIFO"},
                    {name: "MCAN_TIMEOUT_SELECT_RX_FIFO0", displayName : "Timeout controlled by Rx FIFO 0"},
                    {name: "MCAN_TIMEOUT_SELECT_RX_FIFO1", displayName : "Timeout controlled by Rx FIFO 1"},
                ],
            },
            {
                name        : "timeoutPreload",
                displayName : "Start value of the Timeout Counter",
                description : 'Start value of the Timeout Counter.',
                hidden      : true,
                default     : 0xFFFF,
            },
            {
                name        : "timeoutCntEnable",
                displayName : "Enable Time-out Counter",
                description : 'Enable Time-out Counter.',
                hidden      : true,
                default     : false,
            },
            {
                name        : "rrfe",
                displayName : "Reject Remote Frames Extended",
                description : 'Reject Remote Frames Extended.',
                hidden      : true,
                default     : false,
            },
            {
                name        : "rrfs",
                displayName : "Reject Remote Frames Standard",
                description : 'Reject Remote Frames Standard.',
                hidden      : true,
                default     : false,
            },
            {
                name        : "anfe",
                displayName : "Accept Non-matching Frames Extended",
                description : 'Accept Non-matching Frames Extended.',
                hidden      : true,
                default     : "0",
                options     : [
                    {name: "0", displayName : "Accept in Rx FIFO 0"},
                    {name: "1", displayName : "Accept in Rx FIFO 1"},
                    {name: "2", displayName : "Reject"},
                ],
            },
            {
                name        : "anfs",
                displayName : "Accept Non-matching Frames Standard",
                description : 'Accept Non-matching Frames Standard.',
                hidden      : true,
                default     : "0",
                options     : [
                    {name: "0", displayName : "Accept in Rx FIFO 0"},
                    {name: "1", displayName : "Accept in Rx FIFO 1"},
                    {name: "2", displayName : "Reject"},
                ],
            },
        ]
    },
    {
        name: "GROUP_MSGRAMCONFIG",
        displayName: "Message RAM Configuration",
        longDescription: "These parameters configure the MCAN Message RAM for multiple sections. Make sure that none of the sections are overlapping by comparing their start address and end address with each other.",
        config: [
            {
                name        : "msgRamConfig",
                displayName : "Enable Message RAM Configuration",
                description : 'Enable Message RAM Configuration.',
                hidden      : true,
                onChange    : onChangeMsgRamConfig,
                default     : true,
            },
            {
                name        : "flssa",
                displayName : "Standard ID Filter List Start Addr",
                description : 'Standard ID Filter List Start Address.',
                hidden      : true,
                default     : 0x0,
            },
            {
                name        : "lss",
                displayName : "No of Standard ID Filters",
                description : 'No of Standard ID Filters.',
                hidden      : true,
                default     : 0x1,
            },
            {
                name        : "flesa",
                displayName : "Extended ID Filter List Start Addr",
                description : 'Extended ID Filter List Start Address.',
                hidden      : true,
                default     : 48,
            },
            {
                name        : "lse",
                displayName : "No of Extended ID Filters",
                description : 'No of Extended ID Filters.',
                hidden      : true,
                default     : 1,
            },
            {
                name: "GROUP_MSGRAMCONFIG_TX",
                displayName: "TX MSG RAM",
                config : [
                    {
                        name        : "txBufNum",
                        displayName : "Number of Dedicated Transmit Buffers",
                        description : 'Number of Dedicated Transmit Buffers.',
                        hidden      : true,
                        default     : 10,
                    },
                    {
                        name        : "txFIFOSize",
                        displayName : "No of Tx FIFO Elements",
                        description : 'No of Tx FIFO Elements.',
                        hidden      : true,
                        default     : 0,
                    },
                    {
                        name        : "txBufMode",
                        displayName : "Tx FIFO operation Mode",
                        description : 'Tx FIFO operation Mode.',
                        hidden      : true,
                        default     : "0",
                        options     : [
                            {name: "0", displayName : "Tx FIFO operation"},
                            {name: "1", displayName : "Tx Queue operation"},
                        ],
                    },
                    {
                        name        : "txBufElemSize",
                        displayName : "Tx Buffer Element Size",
                        description : 'Tx Buffer Element Size.',
                        hidden      : true,
                        default     : MCAN_elemSize[7].name,
                        options     : MCAN_elemSize,
                    },
                    {
                        name        : "txEventFIFOSize",
                        displayName : "Tx Event FIFO Size",
                        description : 'Tx Event FIFO Size.',
                        hidden      : true,
                        default     : 10,
                    },
                    {
                        name        : "txEventFIFOWaterMark",
                        displayName : "Tx Event FIFO Level watermark intr",
                        description : 'Level for Tx Event FIFO watermark interrupt.',
                        hidden      : true,
                        default     : 3,
                    },
                ]
            },
            {
                name: "GROUP_MSGRAMCONFIG_RX",
                displayName: "RX MSG RAM",
                config : [
                    {
                        name        : "rxFIFO0size",
                        displayName : "Number of Rx FIFO0 elements",
                        description : 'Number of Rx FIFO0 elements.',
                        hidden      : true,
                        default     : 10,
                    },
                    {
                        name        : "rxFIFO0waterMark",
                        displayName : "Rx FIFO0 Watermark",
                        description : 'Rx FIFO0 Watermark.',
                        hidden      : true,
                        default     : 3,
                    },
                    {
                        name        : "rxFIFO0OpMode",
                        displayName : "FIFO0 operation mode",
                        description : 'FIFO0 operation mode.',
                        hidden      : true,
                        default     : MCAN_fifoOPMode[0].name,
                        options     : MCAN_fifoOPMode,
                    },
                    {
                        name        : "rxFIFO1size",
                        displayName : "Number of Rx FIFO1 elements",
                        description : 'Number of Rx FIFO1 elements.',
                        hidden      : true,
                        default     : 10,
                    },
                    {
                        name        : "rxFIFO1waterMark",
                        displayName : "Rx FIFO1 Watermark",
                        description : 'Rx FIFO1 Watermark.',
                        hidden      : true,
                        default     : 3,
                    },
                    {
                        name        : "rxFIFO1OpMode",
                        displayName : "FIFO1 operation mode",
                        description : 'FIFO1 operation mode.',
                        hidden      : true,
                        default     : MCAN_fifoOPMode[0].name,
                        options     : MCAN_fifoOPMode,
                    },
                    {
                        name        : "rxBufElemSize",
                        displayName : "Rx Buffer Element Size",
                        description : 'Rx Buffer Element Size.',
                        hidden      : true,
                        default     : MCAN_elemSize[7].name,
                        options     : MCAN_elemSize,
                    },
                    {
                        name        : "rxFIFO0ElemSize",
                        displayName : "Rx FIFO0 Element Size",
                        description : 'Rx FIFO0 Element Size.',
                        hidden      : true,
                        default     : MCAN_elemSize[7].name,
                        options     : MCAN_elemSize,
                    },
                    {
                        name        : "rxFIFO1ElemSize",
                        displayName : "Rx FIFO1 Element Size",
                        description : 'Rx FIFO1 Element Size.',
                        hidden      : true,
                        default     : MCAN_elemSize[7].name,
                        options     : MCAN_elemSize,
                    },
                ]
            },
        ]
    },
    {
        name: "GROUP_ECCCONFIG",
        displayName: "Ecc Config",
        config : [
            {
                name        : "eccEnable",
                displayName : "Enable ECC Configuration",
                description : 'Enable ECC Configuration.',
                hidden      : true,
                default     : true,
            },
            {
                name        : "enableChk",
                displayName : "Enable/disable ECC Check",
                description : 'Enable/disable ECC Check.',
                hidden      : true,
                default     : true,

            },
            {
                name        : "enableRdModWr",
                displayName : "Enable Read Modify Write",
                description : 'Enable/disable Read Modify Write operation',
                hidden      : true,
                default     : true,
            },
        ]
    },
    {
        name: "GROUP_BITRATECONFIG",
        displayName: "Bit-rate Config",
        longDescription: "The parameters for bit timing calculation. Bit timing related to data phase will be valid only in case where MCAN is put in CANFD mode and will be '0' otherwise.",
        config : [
        {
            name: "nomBrp",
            displayName: "Nominal Baud Rate Pre-scaler",
            default: 4,
            displayFormat: "dec",
            hidden: true,
            onChange: function (inst, ui) {
                inst.canfdNomBitRate = (80000 / (inst.nomBrp) / (1 + (inst.nomPropSeg + inst.nomPseg1) + inst.nomPseg2))
                inst.canfdSamplingNomBitRate = (100 * (1 + (inst.nomPropSeg + inst.nomPseg1)) / (1 + (inst.nomPropSeg + inst.nomPseg1) + inst.nomPseg2))
            }
        },
        {
            name: "nomPropSeg",
            displayName: "NominalProp Segment value ",
            default: 8,
            displayFormat: "dec",
            hidden: true,
            onChange: function (inst, ui) {
                inst.canfdNomBitRate = (80000 / (inst.nomBrp) / (1 + (inst.nomPropSeg + inst.nomPseg1) + inst.nomPseg2))
                inst.canfdSamplingNomBitRate = (100 * (1 + (inst.nomPropSeg + inst.nomPseg1)) / (1 + (inst.nomPropSeg + inst.nomPseg1) + inst.nomPseg2))
            }
        },
        {
            name: "nomPseg1",
            displayName: "NominalPhase Segment1 value",
            default: 6,
            displayFormat: "dec",
            hidden: true,
            onChange: function (inst, ui) {
                inst.canfdNomBitRate = (80000 / (inst.nomBrp) / (1 + (inst.nomPropSeg + inst.nomPseg1) + inst.nomPseg2))
                inst.canfdSamplingNomBitRate = (100 * (1 + (inst.nomPropSeg + inst.nomPseg1)) / (1 + (inst.nomPropSeg + inst.nomPseg1) + inst.nomPseg2))
            }
        },
        {
            name: "nomPseg2",
            displayName: "NominalPhase Segment2 value",
            default: 5,
            displayFormat: "dec",
            hidden: true,
            onChange: function (inst, ui) {
                inst.canfdNomBitRate = (80000 / (inst.nomBrp) / (1 + (inst.nomPropSeg + inst.nomPseg1) + inst.nomPseg2))
                inst.canfdSamplingNomBitRate = (100 * (1 + (inst.nomPropSeg + inst.nomPseg1)) / (1 + (inst.nomPropSeg + inst.nomPseg1) + inst.nomPseg2))
}
        },
        {
            name: "nomSjw",
            displayName: "Nominal (Re)Sync Jump Width",
            description: "Nominal (Re)Synchronization Jump Width",
            default: 1,
            hidden: true,
            displayFormat: "dec",
        },
        {
            name: "canfdNomBitRate",
            displayName: "Effective Nom Bitrate (Kbps)",
            default: 1000,
            description: "Recommended sampling point should be between 85 to 90 percent",
            readOnly: true,
            hidden: true,
            displayFormat: "dec",
            longDescription: `Bit rate (bits per second) = (CAN clock in Hz) / BRP / (1 + TSEG1 + TSEG2). \t
                              CAN clock is functional clock of CAN module (80MHz by default in TDA4) \t
                              BRP: Bit rate pre-scalar value. \t
                              TSEG1, TSEG2: Time segments used to define sampling point for the bit \t
                              TSEG1: Time before the sampling point = Prop_Seg + Phase_Seg1 \t
                              TSEG2: Time after the sampling point = Phase_Seg2.`,
        },
        {
            name: "canfdSamplingNomBitRate",
            displayName: "Sampling Point For Nom Bitrate",
            default: 85,
            description: "Recommended sampling point should be between 85 to 90 percent",
            readOnly: true,
            hidden: true,
            displayFormat: "dec",
            longDescription: " Sampling Point(%) = 100 * (1 + TSEG1) / (1 + TSEG1 + TSEG2) "
        },
        {
            name: "dataBrp",
            displayName: "Prescalar Value for Data Bitrate",
            description: "Prescalar Value for Data Bitrate",
            default: 2,
            hidden: true,
            displayFormat: "dec",
            onChange: function (inst, ui) {
                inst.canfdDataBitRate = (80000 / (inst.dataBrp) / (1 + (inst.dataPropSeg + inst.dataPseg1) + inst.dataPseg2))
            }
        },
        {
            name: "dataPropSeg",
            displayName: "Prop Segment value",
            description: "Prop Segment value for Data Bitrate",
            default: 2,
            hidden: true,
            displayFormat: "dec",
            onChange: function (inst, ui) {
                inst.canfdDataBitRate = (80000 / (inst.dataBrp) / (1 + (inst.dataPropSeg + inst.dataPseg1) + inst.dataPseg2))
                inst.canfdSamplingDataBitRate = (100 * (1 + (inst.dataPropSeg + inst.dataPseg1)) / (1 + (inst.dataPropSeg + inst.dataPseg1) + inst.dataPseg2))
            }
        },
        {
            name: "dataPseg1",
            displayName: "Phase Segment1 value",
            description: "Phase Segment1 value for Data Bitrate",
            default: 2,
            hidden: true,
            displayFormat: "dec",
            onChange: function (inst, ui) {
                inst.canfdDataBitRate = (80000 / (inst.dataBrp) / (1 + (inst.dataPropSeg + inst.dataPseg1) + inst.dataPseg2))
                inst.canfdSamplingDataBitRate = (100 * (1 + (inst.dataPropSeg + inst.dataPseg1)) / (1 + (inst.dataPropSeg + inst.dataPseg1) + inst.dataPseg2))
            }
        },
        {
            name: "dataPseg2",
            displayName: "Phase Segment2 value",
            description: "Phase Segment2 value for Data Bitrate",
            default: 3,
            hidden: true,
            displayFormat: "dec",
            onChange: function (inst, ui) {
                inst.canfdDataBitRate = (80000 / (inst.dataBrp) / (1 + (inst.dataPropSeg + inst.dataPseg1) + inst.dataPseg2))
                inst.canfdSamplingDataBitRate = (100 * (1 + (inst.dataPropSeg + inst.dataPseg1)) / (1 + (inst.dataPropSeg + inst.dataPseg1) + inst.dataPseg2))
            }
        },
        {
            name: "dataSjw",
            displayName: "Data Sync Jump Width",
            description: "(Re)Synchronization Jump Width for Data Bitrate ",
            default: 1,
            hidden: true,
            displayFormat: "dec",
        },
        {
            name: "canfdDataBitRate",
            displayName: "Effective Data Bitrate (Kbps)",
            default: 5000,
            description: "Recommended sampling point should be between 85 to 90 percent",
            readOnly: true,
            hidden: true,
            displayFormat: "dec",
        },
        {
            name: "canfdSamplingDataBitRate",
            displayName: "Data Bitrate Sampling Point",
            default: 87.5,
            description: "Recommended sampling point should be between 85 to 90 percent",
            readOnly: true,
            hidden: true,
            displayFormat: "dec",
        },
        ],
    },
    {
        name: "GROUP_LLD_BITRATECONFIG",
        displayName: "Config Bit-rate for LLD",
        longDescription: "The parameters for bit timing calculation. Bit timing related to data phase will be valid only in case where MCAN is put in CANFD mode and will be '0' otherwise.",
        config : [
        {
            name: "nomRatePrescalar",
            displayName: "Prescalar Value for Nom Bitrate",
            default: 3,
            hidden: false,
            displayFormat: "dec",
            onChange: function (inst, ui) {
                inst.nomBitRate = 80000 / (inst.nomRatePrescalar + 1) / (3 + inst.nomTimeSeg1 + inst.nomTimeSeg2)
            }
        },
        {
            name: "nomTimeSeg1",
            displayName: "Time Seg 1 Value for Nom Bitrate",
            default: 15,
            hidden: false,
            displayFormat: "dec",
            onChange: function (inst, ui) {
                inst.nomBitRate = 80000 / (inst.nomRatePrescalar + 1) / (3 + inst.nomTimeSeg1 + inst.nomTimeSeg2)
                inst.samplingNomBitRate = (2 + inst.nomTimeSeg1) / (3 + inst.nomTimeSeg1 + inst.nomTimeSeg2) * 100
            }
        },
        {
            name: "nomTimeSeg2",
            displayName: "Time Seg 2 Value for Nom Bitrate",
            default: 2,
            hidden: false,
            displayFormat: "dec",
            onChange: function (inst, ui) {
                inst.nomBitRate = 80000 / (inst.nomRatePrescalar + 1) / (3 + inst.nomTimeSeg1 + inst.nomTimeSeg2)
                inst.samplingNomBitRate = (2 + inst.nomTimeSeg1) / (3 + inst.nomTimeSeg1 + inst.nomTimeSeg2) * 100
            }
        },
        {
            name: "nomSynchJumpWidth",
            displayName: "Synch Jump Width for Nom Bitrate",
            default: 0,
            hidden: false,
            displayFormat: "dec",
        },
        {
            name: "nomBitRate",
            displayName: "Effective Nom Bitrate (Kbps)",
            default: 1000,
            description: "Recommended sampling point should be between 85 to 90 percent",
            readOnly: true,
            hidden: false,
            displayFormat: "dec",
            longDescription: `Bit rate (bits per second) = (CAN clock in Hz) / BRP / (1 + TSEG1 + TSEG2). \t
                              CAN clock is functional clock of CAN module (80MHz by default in TDA4) \t
                              BRP: Bit rate pre-scalar value. \t
                              TSEG1, TSEG2: Time segments used to define sampling point for the bit \t
                              TSEG1: Time before the sampling point \t
                              TSEG2: Time after the sampling point \t `,
        },
        {
            name: "samplingNomBitRate",
            displayName: "Sampling Point For Nom Bitrate",
            default: 85,
            description: "Recommended sampling point should be between 85 to 90 percent",
            readOnly: true,
            hidden: false,
            displayFormat: "dec",
            longDescription: ` Sampling Point(%) = 100 * (1 + TSEG1) / (1 + TSEG1 + TSEG2) \t
                               NOTE: +1 needs to be added in this formula to the BRP, TSEG1 and TSEG2 values while computing the sampling point due to implementation details.`,
        },
        {
            name: "dataRatePrescalar",
            displayName: "Prescalar Value for Data Bitrate",
            default: 1,
            displayFormat: "dec",
            hidden: false,
            onChange: function (inst, ui) {
                inst.dataBitRate = 80000 / (inst.dataRatePrescalar + 1) / (3 + inst.dataTimeSeg1 + inst.dataTimeSeg2)
            }
        },
        {
            name: "dataTimeSeg1",
            displayName: "Time Seg 1 Value for Data Bitrate",
            default: 5,
            displayFormat: "dec",
            hidden: false,
            onChange: function (inst, ui) {
                inst.dataBitRate = 80000 / (inst.dataRatePrescalar + 1) / (3 + inst.dataTimeSeg1 + inst.dataTimeSeg2)
                inst.samplingDataBitRate = (2 + inst.dataTimeSeg1) / (3 + inst.dataTimeSeg1 + inst.dataTimeSeg2) * 100
            }
        },
        {
            name: "dataTimeSeg2",
            displayName: "Time Seg 2 Value for Data Bitrate",
            default: 0,
            hidden: false,
            displayFormat: "dec",
            onChange: function (inst, ui) {
                inst.dataBitRate = 80000 / (inst.dataRatePrescalar + 1) / (3 + inst.dataTimeSeg1 + inst.dataTimeSeg2)
                inst.samplingDataBitRate = (2 + inst.dataTimeSeg1) / (3 + inst.dataTimeSeg1 + inst.dataTimeSeg2) * 100
            }
        },
        {
            name: "dataSynchJumpWidth",
            displayName: "Synch Jump Width for Data Bitrate",
            default: 0,
            hidden: false,
            displayFormat: "dec",
        },
        {
            name: "dataBitRate",
            displayName: "Effective Data Bitrate (Kbps)",
            default: 5000,
            description: "Recommended sampling point should be between 85 to 90 percent",
            readOnly: false,
            displayFormat: "dec",
        },
        {
            name: "samplingDataBitRate",
            displayName: "Sampling Point For Data Bitrate",
            default: 87.5,
            description: "Recommended sampling point should be between 85 to 90 percent",
            readOnly: false,
            displayFormat: "dec",
        },
        ],
    }
]

let mcan_module_name = "/drivers/mcan/mcan";

let mcan_module = {
    displayName: "MCAN",

    templates: {
        "/drivers/pinmux/pinmux_config.c.xdt": {
            moduleName: mcan_module_name,
        },
        "/drivers/system/power_clock_config.c.xdt": {
            moduleName: mcan_module_name,
        },
    },

    defaultInstanceName: "CONFIG_MCAN",
    moduleStatic: {
        name: "mcanGlobal",
        displayName: "MCAN Global",
        config: [],

        validate : function (instance, report) {
            common.validate.checkNumberRange(instance, report, "nomBrp", 0, 511, "dec");
            common.validate.checkNumberRange(instance, report, "nomPropSeg", 1, 127, "dec");
            common.validate.checkNumberRange(instance, report, "nomPseg1", 1, 127, "dec");
            common.validate.checkNumberRange(instance, report, "nomPseg2", 0, 127, "dec");
            common.validate.checkNumberRange(instance, report, "nomSjw", 0, 127, "dec");

            common.validate.checkNumberRange(instance, report, "dataBrp", 0, 15, "dec");
            common.validate.checkNumberRange(instance, report, "dataPropSeg", 0, 15, "dec");
            common.validate.checkNumberRange(instance, report, "dataPseg1", 0, 31, "dec");
            common.validate.checkNumberRange(instance, report, "dataPseg2", 0, 15, "dec");
            common.validate.checkNumberRange(instance, report, "dataSjw", 0, 15, "dec");
        },
    },

    validate: validate,
    modules: function(instance) {
        return [{
            name: "system_common",
            moduleName: "/system_common",
        }]
    },
    config: config,
    sharedModuleInstances: addModuleInstances,
    getInstanceConfig,
    pinmuxRequirements,
    getInterfaceName,
    getPeripheralPinNames,
    getClockEnableIds,
    getClockFrequencies,
    onMigrate,
};

function onMigrate(newInst, oldInst, oldSystem) {
    let pins = getPeripheralPinNames(oldInst);
    let interfaceName = getInterfaceName(oldInst);
    common.onMigrate(newInst, oldInst, oldSystem, pins, interfaceName)
}

/*
 *  ======== addModuleInstances ========
 */
function addModuleInstances(inst) {
    let modInstances = new Array();

    if( inst.sdkInfra == "HLD")
    {
        modInstances.push({
            name: "child",
            moduleName: '/drivers/mcan/v0/mcan_v0_template_hld',
            },
        );

        modInstances.push({
            name: "udmaDriver",
            displayName: "UDMA Configuration",
            moduleName: "/drivers/udma/udma",
            requiredArgs: {
                instance: "PKTDMA_0",
            }
        });
    }
    else
    {
        modInstances.push({
            name: "child",
            moduleName: '/drivers/mcan/v0/mcan_v0_template',
            },
        );

    }

    return (modInstances);
}

exports = mcan_module;
