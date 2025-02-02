
let common = system.getScript("/common");
let pinmux = system.getScript("/drivers/pinmux/pinmux");

function getConfigArr() {
    return system.getScript(`/usb/tinyusb/soc/tinyusb_${common.getSocName()}`).getConfigArr();
}

function getInstanceConfig(moduleInstance) {
    let solution = moduleInstance[getInterfaceName(moduleInstance)].$solution;
    let configArr = getConfigArr();
    let config = configArr.find( o => o.name === solution.peripheralName);

    return {
        ...config,
        ...moduleInstance,
    };
};

function pinmuxRequirements(instance) {
    let interfaceName = getInterfaceName(instance);

    let resources = [];

    resources.push( pinmux.getPinRequirements(interfaceName, "USB0_DM", "USB0_DM"));
    resources.push( pinmux.getPinRequirements(interfaceName, "USB0_DP", "USB0_DP"));
    resources.push( pinmux.getPinRequirements(interfaceName, "USB0_DRVVBUS", "USB0_DRVVBUS"));

    let peripheral = {
        name          : interfaceName,
        displayName   : "USB",
        interfaceName : interfaceName,
        resources     : resources,
    };

    return [peripheral];
}

function getClockEnableIds(inst) {

    let instConfig = getInstanceConfig(inst);

    return instConfig.clockIds;
}

function getClockFrequencies(inst) {

    let instConfig = getInstanceConfig(inst);

    return instConfig.clockFrequencies;
}

function getInterfaceName(instance) {
    return "USB0";
}

function getPeripheralPinNames(instance) {
    return [ "USB0_DM" , "USB0_DP", "USB0_DRVVBUS"];
}

let tinyusb_module_name = "/usb/tinyusb/tinyusb";

let tinyusb_module = {
    displayName: "TinyUSB",
    templates: {
        "/drivers/system/drivers_open_close.c.xdt": {
            driver_open_close_config: "/usb/tinyusb/templates/tinyusb_open_close_config.c.xdt",
            driver_open: "/usb/tinyusb/templates/tinyusb_open.c.xdt",
            driver_close: "/usb/tinyusb/templates/tinyusb_close.c.xdt",
        },
        "/drivers/system/drivers_open_close.h.xdt": {
            driver_open_close_config: "/usb/tinyusb/templates/tinyusb_open_close.h.xdt",
        },
        "/drivers/pinmux/pinmux_config.c.xdt": {
            moduleName: tinyusb_module_name,
        },
        "/drivers/system/power_clock_config.c.xdt": {
            moduleName: tinyusb_module_name,
        },
    },
    maxInstances: getConfigArr().length,
    defaultInstanceName: "CONFIG_TINYUSB",
    config: [

    ],
    validate: validate,
    moduleStatic: {
        modules: function(inst) {
            return [{
                name: "system_common",
                moduleName: "/system_common",
            }]
        },
    },
    getInstanceConfig,
    pinmuxRequirements,
    getInterfaceName,
    getPeripheralPinNames,
    // getClockEnableIds,
    // getClockFrequencies,
};

/*
 *  ======== validate ========
 */
function validate(instance, report) {
    common.validate.checkSameInstanceName(instance, report);
}

exports = tinyusb_module;
