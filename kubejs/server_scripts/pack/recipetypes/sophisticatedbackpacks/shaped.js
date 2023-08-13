onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/sophisticatedbackpacks/shaped/';
    const recipes = [
        {
            output: 'sophisticatedbackpacks:upgrade_base',
            pattern: ['SPS', 'PLP', 'SPS'],
            key: {
                S: 'botania:mana_string',
                P: '#forge:plates/iron',
                L: 'immersiveengineering:ersatz_leather'
            },
            id: 'sophisticatedbackpacks:upgrade_base'
        },
        {
            output: 'sophisticatedbackpacks:void_upgrade',
            pattern: [' E ', 'OBO', 'ROR'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                E: 'rftoolsbase:infused_enderpearl',
                R: '#forge:dusts/redstone',
                O: 'forbidden_arcanus:processed_obsidian_block'
            },
            id: 'sophisticatedbackpacks:void_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:compacting_upgrade',
            pattern: ['IPI', 'PBP', 'RPR'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                I: '#forge:plates/iron',
                R: '#forge:dusts/redstone',
                P: 'minecraft:piston'
            },
            id: 'sophisticatedbackpacks:compacting_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:smelting_upgrade',
            pattern: ['RIR', 'IBI', 'RFR'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                I: '#forge:plates/iron',
                R: '#forge:dusts/redstone',
                F: 'minecraft:furnace'
            },
            id: 'sophisticatedbackpacks:smelting_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:smoking_upgrade',
            pattern: ['RIR', 'IBI', 'RSR'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                I: '#forge:plates/iron',
                R: '#forge:dusts/redstone',
                S: 'minecraft:smoker'
            },
            id: 'sophisticatedbackpacks:smoking_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:blasting_upgrade',
            pattern: ['RIR', 'IBI', 'RFR'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                I: '#forge:plates/iron',
                R: '#forge:dusts/redstone',
                F: 'minecraft:blast_furnace'
            },
            id: 'sophisticatedbackpacks:blasting_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:filter_upgrade',
            pattern: ['RSR', 'SBS', 'RSR'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                R: '#forge:dusts/redstone',
                S: 'botania:mana_string'
            },
            id: 'sophisticatedbackpacks:filter_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:deposit_upgrade',
            pattern: [' P ', 'IBI', 'RCR'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                C: '#forge:chests/wooden',
                P: 'minecraft:piston',
                R: '#forge:dusts/redstone',
                I: '#forge:plates/iron'
            },
            id: 'sophisticatedbackpacks:deposit_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:stonecutter_upgrade',
            pattern: [' C ', 'IBI', ' R '],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                C: 'minecraft:stonecutter',
                R: '#forge:dusts/redstone',
                I: '#forge:plates/iron'
            },
            id: 'sophisticatedbackpacks:stonecutter_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:tool_swapper_upgrade',
            pattern: ['RWR', 'PBA', 'ISI'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                A: Item.of('minecraft:wooden_axe', '{Damage:0}').weakNBT(),
                S: Item.of('minecraft:wooden_shovel', '{Damage:0}').weakNBT(),
                P: Item.of('minecraft:wooden_pickaxe', '{Damage:0}').weakNBT(),
                W: Item.of('minecraft:wooden_sword', '{Damage:0}').weakNBT(),
                R: '#forge:dusts/redstone',
                I: '#forge:plates/iron'
            },
            id: 'sophisticatedbackpacks:tool_swapper_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:jukebox_upgrade',
            pattern: [' J ', 'IBI', ' R '],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                J: 'minecraft:jukebox',
                I: '#forge:plates/iron',
                R: '#forge:dusts/redstone'
            },
            id: 'sophisticatedbackpacks:jukebox_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:everlasting_upgrade',
            pattern: ['CSC', 'SBS', 'CSC'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                C: 'minecraft:end_crystal',
                S: 'forbidden_arcanus:dark_nether_star'
            },
            id: 'sophisticatedbackpacks:everlasting_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:inception_upgrade',
            pattern: ['ESE', 'DBD', 'EDE'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                D: '#forge:plates/mana_diamond',
                E: 'rftoolsbase:infused_enderpearl',
                S: 'forbidden_arcanus:dark_nether_star'
            },
            id: 'sophisticatedbackpacks:inception_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:crafting_upgrade',
            pattern: [' T ', 'IBI', ' C '],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                C: '#forge:chests/wooden',
                T: 'minecraft:crafting_table',
                I: '#forge:plates/iron'
            },
            id: 'sophisticatedbackpacks:crafting_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:pickup_upgrade',
            pattern: [' P ', 'SBS', 'RRR'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                R: '#forge:dusts/redstone',
                S: 'botania:mana_string',
                P: 'minecraft:sticky_piston'
            },
            id: 'sophisticatedbackpacks:pickup_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:pickup_upgrade',
            pattern: [' E ', 'IBI', 'RCR'],
            key: {
                B: 'sophisticatedbackpacks:refill_upgrade',
                R: '#forge:dusts/redstone',
                C: '#forge:chests/wooden',
                E: 'rftoolsbase:infused_enderpearl',
                I: '#forge:plates/iron'
            },
            id: 'sophisticatedbackpacks:refill_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:restock_upgrade',
            pattern: [' P ', 'IBI', 'RCR'],
            key: {
                B: 'sophisticatedbackpacks:refill_upgrade',
                R: '#forge:dusts/redstone',
                C: '#forge:chests/wooden',
                P: 'minecraft:sticky_piston',
                I: '#forge:plates/iron'
            },
            id: 'sophisticatedbackpacks:restock_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:pump_upgrade',
            pattern: ['GTG', 'PBS', 'GTG'],
            key: {
                B: 'sophisticatedbackpacks:refill_upgrade',
                S: 'minecraft:sticky_piston',
                G: 'evilcraft:obscured_glass',
                P: 'minecraft:sticky_piston',
                T: 'mob_grinding_utils:xp_tap'
            },
            id: 'sophisticatedbackpacks:pump_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:tank_upgrade',
            pattern: ['MTM', 'MBM', 'MTM'],
            key: {
                B: 'sophisticatedbackpacks:refill_upgrade',
                M: 'botania:mana_glass',
                T: 'mekanism:basic_fluid_tank'
            },
            id: 'sophisticatedbackpacks:tank_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:battery_upgrade',
            pattern: ['GRG', 'RBR', 'GRG'],
            key: {
                B: 'sophisticatedbackpacks:refill_upgrade',
                R: 'thermal:rf_coil',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:battery_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:magnet_upgrade',
            pattern: ['EIE', 'IBI', 'R L'],
            key: {
                B: 'sophisticatedbackpacks:refill_upgrade',
                R: '#forge:dusts/redstone',
                L: '#forge:gems/lapis',
                I: '#forge:plates/iron',
                E: 'rftoolsbase:infused_enderpearl'
            },
            id: 'sophisticatedbackpacks:magnet_upgrade'
        },

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
