let common = system.getScript("/common");

const topModules = [
    "/kernel/dpl/clock",
    "/kernel/dpl/debug_log",
    "/kernel/dpl/mpu_armv7",
    "/kernel/dpl/timer",
    "/kernel/dpl/dpl_cfg",
];

exports = {
    getTopModules: function() {
        return topModules;
    },
};
