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
                B: 'sophisticatedbackpacks:upgrade_base',
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
                B: 'sophisticatedbackpacks:upgrade_base',
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
                B: 'sophisticatedbackpacks:upgrade_base',
                S: 'minecraft:sticky_piston',
                G: 'evilcraft:obscured_glass',
                P: 'minecraft:piston',
                T: 'mob_grinding_utils:xp_tap'
            },
            id: 'sophisticatedbackpacks:pump_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:tank_upgrade',
            pattern: ['MTM', 'MBM', 'MTM'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                M: 'botania:mana_glass',
                T: 'mekanism:basic_fluid_tank'
            },
            id: 'sophisticatedbackpacks:tank_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:battery_upgrade',
            pattern: ['GRG', 'RBR', 'GRG'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                R: 'thermal:rf_coil',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:battery_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:magnet_upgrade',
            pattern: ['EIE', 'IBI', 'R L'],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                R: '#forge:dusts/redstone',
                L: '#forge:gems/lapis',
                I: '#forge:plates/iron',
                E: 'rftoolsbase:infused_enderpearl'
            },
            id: 'sophisticatedbackpacks:magnet_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:feeding_upgrade',
            pattern: [' C ', 'ABM', ' E '],
            key: {
                B: 'sophisticatedbackpacks:upgrade_base',
                C: 'minecraft:golden_carrot',
                A: 'minecraft:golden_apple',
                M: 'minecraft:glistering_melon_slice',
                E: 'rftoolsbase:infused_enderpearl'
            },
            id: 'sophisticatedbackpacks:feeding_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_filter_upgrade',
            pattern: ['   ', 'GBG', 'RRR'],
            key: {
                B: 'sophisticatedbackpacks:filter_upgrade',
                R: '#forge:dusts/redstone',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:advanced_filter_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_magnet_upgrade',
            pattern: [' D ', 'GBG', 'RRR'],
            key: {
                B: 'sophisticatedbackpacks:magnet_upgrade',
                R: '#forge:dusts/redstone',
                D: 'rftoolsbase:infused_diamond',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:advanced_magnet_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_feeding_upgrade',
            pattern: [' D ', 'GBG', 'RRR'],
            key: {
                B: 'sophisticatedbackpacks:feeding_upgrade',
                R: '#forge:dusts/redstone',
                D: 'rftoolsbase:infused_diamond',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:advanced_feeding_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_compacting_upgrade',
            pattern: [' D ', 'GBG', 'RRR'],
            key: {
                B: 'sophisticatedbackpacks:compacting_upgrade',
                R: '#forge:dusts/redstone',
                D: 'rftoolsbase:infused_diamond',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:advanced_compacting_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_void_upgrade',
            pattern: [' D ', 'GBG', 'RRR'],
            key: {
                B: 'sophisticatedbackpacks:void_upgrade',
                R: '#forge:dusts/redstone',
                D: 'rftoolsbase:infused_diamond',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:advanced_void_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_restock_upgrade',
            pattern: [' D ', 'GBG', 'RRR'],
            key: {
                B: 'sophisticatedbackpacks:restock_upgrade',
                R: '#forge:dusts/redstone',
                D: 'rftoolsbase:infused_diamond',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:advanced_restock_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_deposit_upgrade',
            pattern: [' D ', 'GBG', 'RRR'],
            key: {
                B: 'sophisticatedbackpacks:deposit_upgrade',
                R: '#forge:dusts/redstone',
                D: 'rftoolsbase:infused_diamond',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:advanced_deposit_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_refill_upgrade',
            pattern: [' D ', 'GBG', 'RRR'],
            key: {
                B: 'sophisticatedbackpacks:refill_upgrade',
                R: '#forge:dusts/redstone',
                D: 'rftoolsbase:infused_diamond',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:advanced_refill_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
            pattern: [' D ', 'GBG', 'RRR'],
            key: {
                B: 'sophisticatedbackpacks:tool_swapper_upgrade',
                R: '#forge:dusts/redstone',
                D: 'rftoolsbase:infused_diamond',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:advanced_tool_swapper_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_pickup_upgrade',
            pattern: [' D ', 'GBG', 'RRR'],
            key: {
                B: 'sophisticatedbackpacks:pickup_upgrade',
                R: '#forge:dusts/redstone',
                D: 'rftoolsbase:infused_diamond',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:advanced_pickup_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:auto_smelting_upgrade',
            pattern: ['DOD', 'RBO', 'GOG'],
            key: {
                B: 'sophisticatedbackpacks:smelting_upgrade',
                R: '#forge:dusts/redstone',
                O: 'pneumaticcraft:omnidirectional_hopper',
                D: 'rftoolsbase:infused_diamond',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:auto_smelting_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:auto_smoking_upgrade',
            pattern: ['DOD', 'RBO', 'GOG'],
            key: {
                B: 'sophisticatedbackpacks:smoking_upgrade',
                R: '#forge:dusts/redstone',
                O: 'pneumaticcraft:omnidirectional_hopper',
                D: 'rftoolsbase:infused_diamond',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:auto_smoking_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:auto_blasting_upgrade',
            pattern: ['DOD', 'RBO', 'GOG'],
            key: {
                B: 'sophisticatedbackpacks:blasting_upgrade',
                R: '#forge:dusts/redstone',
                O: 'pneumaticcraft:omnidirectional_hopper',
                D: 'rftoolsbase:infused_diamond',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:auto_blasting_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_pump_upgrade',
            pattern: ['DSD', 'GBG', 'RRR'],
            key: {
                B: 'sophisticatedbackpacks:pump_upgrade',
                R: '#forge:dusts/redstone',
                S: 'minecraft:dispenser',
                D: 'rftoolsbase:infused_diamond',
                G: '#forge:plates/gold'
            },
            id: 'sophisticatedbackpacks:advanced_pump_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:xp_pump_upgrade',
            pattern: ['RER', 'XBX', 'RER'],
            key: {
                B: 'sophisticatedbackpacks:pump_upgrade',
                R: '#forge:dusts/redstone',
                E: 'rftoolsbase:infused_enderpearl',
                X: 'thermal:xp_crystal'
            },
            id: 'sophisticatedbackpacks:xp_pump_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_2',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                B: 'sophisticatedbackpacks:stack_upgrade_tier_1',
                A: '#forge:storage_blocks/arcane_gold'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_2'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_3',
            pattern: ['DDD', 'DAD', 'DDD'],
            key: {
                B: 'sophisticatedbackpacks:stack_upgrade_tier_2',
                D: '#forge:storage_blocks/mana_diamond'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_3'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
