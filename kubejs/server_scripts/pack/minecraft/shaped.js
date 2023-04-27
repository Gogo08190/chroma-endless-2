onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: ['CCC', 'CBC', 'CFC'],
            key: {
                C: '#forge:cobblestone',
                B: '#forge:storage_blocks/coal',
                F: 'minecraft:campfire'
            },
            id: 'quark:building/crafting/furnaces/cobblestone_furnace'
        },
        {
            output: 'minecraft:blast_furnace',
            pattern: ['DDD', 'IFB', 'SSS'],
            key: {
                D: 'minecraft:polished_deepslate',
                I: '#forge:storage_blocks/iron',
                F: 'minecraft:furnace',
                B: 'minecraft:iron_bars',
                S: 'minecraft:smooth_stone'
            },
            id: 'minecraft:blast_furnace'
        },
        {
            output: 'minecraft:smoker',
            pattern: ['WTW', 'CFC', 'WPW'],
            key: {
                W: '#minecraft:logs',
                T: 'dustrial_decor:iron_bar_trapdoor',
                C: '#chipped:cobblestone',
                F: 'minecraft:furnace',
                P: 'minecraft:campfire'
            },
            id: 'minecraft:smoker'
        },
        {
            output: 'minecraft:piston',
            pattern: ['WIW', 'SPS', 'SRS'],
            key: {
                W: '#minecraft:planks',
                I: '#forge:ingots/iron',
                S: 'minecraft:smooth_stone',
                P: 'create:piston_extension_pole',
                R: '#forge:dusts/redstone'
            },
            id: 'minecraft:piston'
        },
        {
            output: 'minecraft:smithing_table',
            pattern: ['III', 'WFW', 'WWW'],
            key: {
                W: '#minecraft:planks',
                I: 'dustrial_decor:rusty_iron_ingot',
                F: '#minecraft:anvil',
            },
            id: 'minecraft:smithing_table'
        },
        {
            output: 'minecraft:enchanting_table',
            pattern: [' B ', 'DCD', 'OPO'],
            key: {
                B: 'tombstone:book_of_magic_impregnation',
                D: 'tombstone:impregnated_diamond',
                C: 'minecraft:red_carpet',
                O: 'forbidden_arcanus:processed_obsidian_block',
                P: 'spirit:pedestal'
            },
            id: 'minecraft:enchanting_table'
        },
        {
            output: 'minecraft:grindstone',
            pattern: [' S ', 'PSP', 'P P'],
            key: {
                S: 'minecraft:smooth_stone',
                P: '#valhelsia_structures:posts'
            },
            id: 'minecraft:grindstone'
        },
        {
            output: 'minecraft:stonecutter',
            pattern: [' S ', 'PRP'],
            key: {
                S: 'thermal:saw_blade',
                P: '#valhelsia_structures:posts',
                R: 'minecraft:stone'
            },
            id: 'minecraft:stonecutter'
        },
        {
            output: 'minecraft:hopper',
            pattern: ['I I', 'ICI', ' I '],
            key: {
                I: 'dustrial_decor:sheet_metal',
                C: '#forge:chests'
            },
            id: 'minecraft:hopper'
        },
        {
            output: 'minecraft:beacon',
            pattern: ['GGG', 'GNG', 'OOO'],
            key: {
                G: 'glassential:glass_light',
                N: 'minecraft:nether_star',
                O: 'forbidden_arcanus:processed_obsidian_block'
            },
            id: 'minecraft:beacon'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
