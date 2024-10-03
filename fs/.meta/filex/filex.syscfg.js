let common = system.getScript("/common");

let filex_module_name = "/fs/filex/filex";

let filex_module = {
	displayName: "FileX",
    templates: {
        "/board/board/board_config.h.xdt": {
            stack_config: "/fs/filex/templates/filex.h.xdt",
        },
        "/board/board/board_open_close.c.xdt": {
            stack_open_close_config: "/fs/filex/templates/filex_open_close_config.c.xdt",
            stack_open: "/fs/filex/templates/filex_open.c.xdt",
            stack_close: "/fs/filex/templates/filex_close.c.xdt",
        },
        "/board/board/board_open_close.h.xdt": {
            stack_open_close_config: "/fs/filex/templates/filex_open_close.h.xdt",
        },
    },
	defaultInstanceName: "FILEX",
	config: [
		{
			name: "media",
			displayName: "Select Media",
			description: "Select the media which is to be used underneath the virtual file system provided by FileX",
			default: "RAMDISK",
			options: [
                { name: "RAMDISK"},
				{ name: "SD" },
                { name: "EMMC" },
                { name: "FLASH"}
			],
            onChange: function (inst, ui) {
                if(inst.media == "RAMDISK") {
                    inst.auto_format = true;
                    ui.ramdisk_size.hidden = false;
                } else {
                    inst.auto_format = false;
                    ui.ramdisk_size.hidden = true;
                }
                if(inst.media == "FLASH") {
                    inst.fs_offset = 0x200000;
                } else {
                    inst.fs_offset = 0;
                }
            }
		},
        {
            name: "ramdisk_size",
            hidden: false,
            displayName: "RAM Disk Size",
            description: "Size of the RAM disk in bytes.",
            default: 32768,
        },
        {
            name: "fs_size",
            displayName: "File System Size",
            description: "File system size in bytes. -1 to use all available space.",
            default: -1
        },
        {
            name: "fs_offset",
            displayName: "File System Offset",
            description: "File system offset from the start of the media in bytes.",
            default: 0x200000
        },
        {
            name: "auto_format",
            displayName: "Auto-Format",
            description: "Automatically format the media if no file system is found.",
            default: true,
        },
        {
            name: "sector_size",
            displayName: "Sector Size",
            description: "Sector size.",
            default: 4096,
            options: [
                { name: 512},
                { name: 1024},
                { name: 2048},
                { name: 4096},
            ]
        },
        {
            name: "fat_cnt",
            displayName: "Number of FATs",
            description: "Number of FATs.",
            default: 1,
            options: [
                { name: 1},
                { name: 2},
            ]
        },
        {
            name: "dir_entry_cnt",
            displayName: "Directory entries",
            description: "Number of directory entries in the root director.",
            default: 32,
        },
        {
            name: "hidden_sec_cnt",
            displayName: "Hidden Sectors",
            description: "Number sectors hidden before the media boot sector.",
            default: 0,
        },
        {
            name: "sectors_per_cluster",
            displayName: "Sectors Per Cluster",
            description: "Number of sectors per FAT clusters.",
            default: 1,
            options: [
                { name: 1},
                { name: 2},
                { name: 3},
                { name: 4},
            ]
        }
	],
    validate: validate,
	moduleInstances: moduleInstances,
};

function moduleInstances(inst) {

    let modInstances = new Array();
    let moduleSelectName = "";

    switch(inst.media) {
        case "RAMDISK":
            // No driver needed.
            break;
    	case "SD":
            moduleSelectName = "MMC1";
            if ((common.getSocName() == "am263x") || (common.getSocName() == "am263px"))
            {
                moduleSelectName = "MMC";
            }
    		modInstances.push({
    		    name: "peripheralDriver",
    		    displayName: "MMCSD Configuration",
    		    moduleName: '/drivers/mmcsd/mmcsd',
    		    useArray: false,
    		    requiredArgs: {
    		        moduleSelect: moduleSelectName,
                    cardType : "SD",
    		    },
    		});
    		break;
    	case "EMMC":
            moduleSelectName = "MMC0";
            if ((common.getSocName() == "am263x") || (common.getSocName() == "am263px"))
            {
                moduleSelectName = "MMC";
            }
    		modInstances.push({
    		    name: "peripheralDriver",
    		    displayName: "MMCSD Configuration",
    		    moduleName: '/drivers/mmcsd/mmcsd',
    		    useArray: false,
    		    requiredArgs: {
    		        moduleSelect: moduleSelectName,
                    cardType : "EMMC",
    		    },
    		});
            break;
        case "FLASH":
            modInstances.push({
                name: "peripheralDriver",
                displayName: "Flash Configuration",
                moduleName: '/board/flash/flash',
                useArray: false,
            });
            break;
    }

    return (modInstances);
}

function validate(inst, report) {
    if (inst.auto_format && (inst.media != "RAMDISK")) {
        report.logInfo("Be careful: content will be lost!", inst, "auto_format");
    }
}

exports = filex_module;