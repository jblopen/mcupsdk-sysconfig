let common = system.getScript("/common");

const topModules = [
    "/kernel/dpl/clock",
    "/kernel/dpl/mpu_armv7",
    "/kernel/dpl/dpl_cfg",
];

exports = {
    getTopModules: function() {
        return topModules;
    },
};
