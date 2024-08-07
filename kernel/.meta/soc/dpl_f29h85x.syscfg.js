let common = system.getScript("/common");

const topModules = [
    "/kernel/dpl/clock",
    "/kernel/dpl/mpu_armv7",
    "/kernel/dpl/dpl_cfg",
    "/kernel/dpl/debug_log",
];

exports = {
    getTopModules: function() {
        return topModules;
    },
};
