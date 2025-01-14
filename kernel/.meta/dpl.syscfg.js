
let common = system.getScript("/common");
let soc = system.getScript(`/kernel/soc/dpl_${common.getSocName()}`);

exports = common.getSelfSysCfgCoreName().includes('pru') ? {} : {
    displayName: "TI Driver Porting Layer (DPL)",
    templates: [
        {
            name: "/kernel/dpl/dpl_config.c.xdt",
            outputPath: "ti_dpl_config.c",
            alwaysRun: true,
        },
        {
            name: "/kernel/dpl/dpl_config.h.xdt",
            outputPath: "ti_dpl_config.h",
            alwaysRun: true,
        },
    ],
    topModules: soc.getTopModules(),
    views: [{
		name: "kernel/dpl/summary_mpu",
		displayName: "MPU Setting Summary",
		viewType: "markdown",
		icon: "table-large",
        ignoreErrors: true,
	}],
};
