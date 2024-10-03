let common = system.getScript("/common");

let topModules = [
];

const topModulesNull = [
];

function getTopModules() {
    const filexSocList = ["am243x"];
    const fsSocList = ["am64x", "am243x", "am263x", "am263px", "am65x"];
    const lfsSocList = ["am64x", "am243x","am263px","am263x", "am273x"];
    const lfsPath = "/fs/littlefs/littlefs";
    const fsPath = "/fs/freertos_fat/freertos_fat";

    if(fsSocList.includes(common.getSocName())){
        topModules.push(fsPath);
    }

    if(lfsSocList.includes(common.getSocName())){
        topModules.push(lfsPath);
    }

    if (filexSocList.includes(common.getSocName())) {
        topModules.push('/fs/filex/filex');
    }

	if((fsSocList.includes(common.getSocName()) || lfsSocList.includes(common.getSocName())) &&
    !common.getSelfSysCfgCoreName().includes("hsm")) {
		return topModules;
	} else {
		return topModulesNull;
	}
}

exports = common.getSelfSysCfgCoreName().includes('pru') ? {} : {
    displayName: "File System",
    topModules: getTopModules(),
};
