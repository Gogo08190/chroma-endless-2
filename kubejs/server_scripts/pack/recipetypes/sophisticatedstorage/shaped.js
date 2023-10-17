onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/sophisticatedstorage/shaped/';
    const recipes = [
        {
            output: 'sophisticatedstorage:upgrade_base',
            pattern: ['SPS', 'PSP', 'SPS'],
            key: {
                S: '#minecraft:planks',
                P: '#forge:plates/iron'
            },
            id: 'sophisticatedstorage:upgrade_base'
        },
        {
            output: 'sophisticatedstorage:controller',
            pattern: ['SRS', 'CBC', 'SRS'],
            key: {
                S: 'minecraft:smooth_stone',
                R: 'minecraft:comparator',
                C: '#forge:chests/wooden',
                B: '#forge:circuits/basic'
            },
            id: 'sophisticatedstorage:controller'
        },
        {
            output: Item.of('sophisticatedstorage:storage_link', 3),
            pattern: [' P ', 'PCP', ' P '],
            key: {
                P: 'minecraft:ender_pearl',
                C: 'sophisticatedstorage:controller'
            },
            id: 'sophisticatedstorage:storage_link_from_controller'
        },
        {
            output: 'sophisticatedstorage:crafting_upgrade',
            pattern: [' P ', 'IBI', ' C '],
            key: {
                P: 'minecraft:crafting_table',
                I: '#forge:plates/iron',
                B: 'sophisticatedstorage:upgrade_base',
                C: '#forge:chests/wooden'
            },
            id: 'sophisticatedstorage:crafting_upgrade'
        },
        {
            output: 'sophisticatedstorage:jukebox_upgrade',
            pattern: [' P ', 'IBI', ' C '],
            key: {
                P: 'minecraft:jukebox',
                I: '#forge:plates/iron',
                B: 'sophisticatedstorage:upgrade_base',
                C: '#forge:dusts/redstone'
            },
            id: 'sophisticatedstorage:jukebox_upgrade'
        },
        {
            output: 'sophisticatedstorage:smelting_upgrade',
            pattern: ['RIR', 'IBI', 'RFR'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/iron',
                B: 'sophisticatedstorage:upgrade_base',
                F: 'minecraft:furnace'
            },
            id: 'sophisticatedstorage:smelting_upgrade'
        },
        {
            output: 'sophisticatedstorage:hopper_upgrade',
            pattern: [' H ', 'IBI', 'RRR'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/iron',
                B: 'sophisticatedstorage:upgrade_base',
                H: 'pneumaticcraft:omnidirectional_hopper'
            },
            id: 'sophisticatedstorage:hopper_upgrade'
        },
        {
            output: 'sophisticatedstorage:compacting_upgrade',
            pattern: ['IPI', 'PBP', 'RPR'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/iron',
                B: 'sophisticatedstorage:upgrade_base',
                P: 'minecraft:piston'
            },
            id: 'sophisticatedstorage:compacting_upgrade'
        },
        {
            output: 'sophisticatedstorage:stonecutter_upgrade',
            pattern: [' S ', 'IBI', ' R '],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/iron',
                B: 'sophisticatedstorage:upgrade_base',
                S: 'minecraft:stonecutter'
            },
            id: 'sophisticatedstorage:stonecutter_upgrade'
        },
        {
            output: 'sophisticatedstorage:feeding_upgrade',
            pattern: [' S ', 'ABC', ' D '],
            key: {
                B: 'sophisticatedstorage:upgrade_base',
                S: 'minecraft:golden_carrot',
                A: 'minecraft:golden_apple',
                C: 'minecraft:glistering_melon_slice',
                D: 'rftoolsbase:infused_enderpearl'
            },
            id: 'sophisticatedstorage:feeding_upgrade'
        },
        {
            output: 'sophisticatedstorage:compression_upgrade',
            pattern: [' I ', 'PBP', 'RIR'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/iron',
                B: 'sophisticatedstorage:upgrade_base',
                P: 'minecraft:piston'
            },
            id: 'sophisticatedstorage:compression_upgrade'
        },
        {
            output: 'sophisticatedstorage:filter_upgrade',
            pattern: ['RIR', 'IBI', 'RIR'],
            key: {
                R: '#forge:dusts/redstone',
                I: 'botania:mana_string',
                B: 'sophisticatedstorage:upgrade_base'
            },
            id: 'sophisticatedstorage:filter_upgrade'
        },
        {
            output: 'sophisticatedstorage:blasting_upgrade',
            pattern: ['RIR', 'IBI', 'RFR'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/iron',
                B: 'sophisticatedstorage:upgrade_base',
                F: 'minecraft:blast_furnace'
            },
            id: 'sophisticatedstorage:blasting_upgrade'
        },
        {
            output: 'sophisticatedstorage:pickup_upgrade',
            pattern: [' P ', 'IBI', 'RRR'],
            key: {
                R: '#forge:dusts/redstone',
                I: 'botania:mana_string',
                B: 'sophisticatedstorage:upgrade_base',
                P: 'minecraft:sticky_piston'
            },
            id: 'sophisticatedstorage:pickup_upgrade'
        },
        {
            output: 'sophisticatedstorage:void_upgrade',
            pattern: [' P ', 'IBI', 'RIR'],
            key: {
                R: '#forge:dusts/redstone',
                I: 'forbidden_arcanus:processed_obsidian_block',
                B: 'sophisticatedstorage:upgrade_base',
                P: 'rftoolsbase:infused_enderpearl'
            },
            id: 'sophisticatedstorage:void_upgrade'
        },
        {
            output: 'sophisticatedstorage:smoking_upgrade',
            pattern: ['RIR', 'IBI', 'RFR'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/iron',
                B: 'sophisticatedstorage:upgrade_base',
                F: 'minecraft:smoker'
            },
            id: 'sophisticatedstorage:smoking_upgrade'
        },
        {
            output: 'sophisticatedstorage:advanced_pickup_upgrade',
            pattern: [' D ', 'IBI', 'RRR'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/steel',
                B: 'sophisticatedstorage:pickup_upgrade',
                D: 'rftoolsbase:infused_diamond'
            },
            id: 'sophisticatedstorage:advanced_pickup_upgrade'
        },
        {
            output: 'sophisticatedstorage:advanced_filter_upgrade',
            pattern: [' D ', 'IBI', 'RRR'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/steel',
                B: 'sophisticatedstorage:filter_upgrade',
                D: 'rftoolsbase:infused_diamond'
            },
            id: 'sophisticatedstorage:advanced_filter_upgrade'
        },
        {
            output: 'sophisticatedstorage:advanced_magnet_upgrade',
            pattern: [' D ', 'IBI', 'RRR'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/steel',
                B: 'sophisticatedstorage:magnet_upgrade',
                D: 'rftoolsbase:infused_diamond'
            },
            id: 'sophisticatedstorage:advanced_magnet_upgrade'
        },
        {
            output: 'sophisticatedstorage:advanced_feeding_upgrade',
            pattern: [' D ', 'IBI', 'RRR'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/steel',
                B: 'sophisticatedstorage:feeding_upgrade',
                D: 'rftoolsbase:infused_diamond'
            },
            id: 'sophisticatedstorage:advanced_feeding_upgrade'
        },
        {
            output: 'sophisticatedstorage:advanced_compacting_upgrade',
            pattern: [' D ', 'IBI', 'RRR'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/steel',
                B: 'sophisticatedstorage:compacting_upgrade',
                D: 'rftoolsbase:infused_diamond'
            },
            id: 'sophisticatedstorage:advanced_compacting_upgrade'
        },
        {
            output: 'sophisticatedstorage:advanced_void_upgrade',
            pattern: [' D ', 'IBI', 'RRR'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/steel',
                B: 'sophisticatedstorage:void_upgrade',
                D: 'rftoolsbase:infused_diamond'
            },
            id: 'sophisticatedstorage:advanced_void_upgrade'
        },
        {
            output: 'sophisticatedstorage:auto_smelting_upgrade',
            pattern: ['DHD', 'RBH', 'IHI'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/steel',
                B: 'sophisticatedstorage:smelting_upgrade',
                D: 'rftoolsbase:infused_diamond',
                H: 'pneumaticcraft:omnidirectional_hopper'
            },
            id: 'sophisticatedstorage:auto_smelting_upgrade'
        },
        {
            output: 'sophisticatedstorage:auto_smoking_upgrade',
            pattern: ['DHD', 'RBH', 'IHI'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/steel',
                B: 'sophisticatedstorage:smoking_upgrade',
                D: 'rftoolsbase:infused_diamond',
                H: 'pneumaticcraft:omnidirectional_hopper'
            },
            id: 'sophisticatedstorage:auto_smoking_upgrade'
        },
        {
            output: 'sophisticatedstorage:auto_blasting_upgrade',
            pattern: ['DHD', 'RBH', 'IHI'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/steel',
                B: 'sophisticatedstorage:blasting_upgrade',
                D: 'rftoolsbase:infused_diamond',
                H: 'pneumaticcraft:omnidirectional_hopper'
            },
            id: 'sophisticatedstorage:auto_blasting_upgrade'
        },
        {
            output: 'sophisticatedstorage:stack_upgrade_tier_3',
            pattern: ['DDD', 'DBD', 'DDD'],
            key: {
                D: '#forge:storage_blocks/arcane_gold',
                B: 'sophisticatedstorage:stack_upgrade_tier_2'
            },
            id: 'sophisticatedstorage:stack_upgrade_tier_3'
        },
        {
            output: 'sophisticatedstorage:stack_upgrade_tier_4',
            pattern: ['DDD', 'DBD', 'DDD'],
            key: {
                D: '#forge:storage_blocks/mana_diamond',
                B: 'sophisticatedstorage:stack_upgrade_tier_3'
            },
            id: 'sophisticatedstorage:stack_upgrade_tier_4'
        },
        {
            output: 'sophisticatedstorage:advanced_hopper_upgrade',
            pattern: [' D ', 'IBI', 'RFR'],
            key: {
                D: 'rftoolsbase:infused_diamond',
                B: 'sophisticatedstorage:hopper_upgrade',
                I: '#forge:plates/steel',
                R: '#forge:dusts/redstone',
                F: 'minecraft:dropper'
            },
            id: 'sophisticatedstorage:advanced_hopper_upgrade'
        },
        {
            output: 'sophisticatedstorage:magnet_upgrade',
            pattern: [' D ', 'IBI', 'IFI'],
            key: {
                D: 'rftoolsbase:infused_enderpearl',
                B: 'sophisticatedstorage:upgrade_base',
                I: '#forge:plates/iron',
                F: Item.of('thermal:flux_magnet').weakNBT()
            },
            id: 'sophisticatedstorage:magnet_upgrade'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
