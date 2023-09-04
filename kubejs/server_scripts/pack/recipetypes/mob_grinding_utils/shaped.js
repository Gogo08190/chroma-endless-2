onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mob_grinding_utils/shaped/';
    const recipes = [
        {
            output: 'mob_grinding_utils:saw',
            pattern: ['SDS', 'PRP', 'DAD'],
            key: {
                S: Item.of('forbidden_arcanus:arcane_golden_sword', '{Damage:0}').weakNBT(),
                D: '#forge:gems/mana_diamond',
                P: 'mob_grinding_utils:spikes',
                R: 'botania:rune_wrath',
                A: '#blue_skies:storage_blocks/horizonite'
            },
            id: 'mob_grinding_utils:recipe_saw'
        },
        {
            output: 'mob_grinding_utils:fan',
            pattern: ['SPS', 'PRF', 'SPS'],
            key: {
                S: 'minecraft:smooth_stone',
                P: '#forge:plates/iron',
                R: '#forge:storage_blocks/redstone',
                F: 'create:encased_fan'
            },
            id: 'mob_grinding_utils:recipe_fan'
        },
        {
            output: 'mob_grinding_utils:absorption_hopper',
            pattern: [' T ', 'POP', 'OHO'],
            key: {
                T: 'immersiveengineering:electron_tube',
                P: 'minecraft:ender_eye',
                O: '#forge:obsidian',
                H: 'minecraft:hopper'
            },
            id: 'mob_grinding_utils:recipe_absorbtion_hopper'
        },
        {
            output: 'mob_grinding_utils:mob_swab',
            pattern: ['  B', ' R ', 'B  '],
            key: {
                B: 'botania:manaweave_cloth',
                R: 'mna:constructs/rune_rod'
            },
            id: 'mob_grinding_utils:recipe_mob_swab'
        },
        {
            output: 'mob_grinding_utils:fan_upgrade_width',
            pattern: ['P P', 'FBF', 'P P'],
            key: {
                P: '#forge:plates/iron',
                F: 'forbidden_arcanus:golden_feather',
                B: 'chroma:blank_upgrade'
            },
            id: 'mob_grinding_utils:recipe_fan_upgrade_width'
        },
        {
            output: 'mob_grinding_utils:fan_upgrade_height',
            pattern: ['PFP', ' B ', 'PFP'],
            key: {
                P: '#forge:plates/iron',
                F: 'forbidden_arcanus:golden_feather',
                B: 'chroma:blank_upgrade'
            },
            id: 'mob_grinding_utils:recipe_fan_upgrade_height'
        },
        {
            output: 'mob_grinding_utils:fan_upgrade_speed',
            pattern: ['FPF', 'PBP', 'FPF'],
            key: {
                P: '#forge:plates/iron',
                F: 'forbidden_arcanus:golden_feather',
                B: 'chroma:blank_upgrade'
            },
            id: 'mob_grinding_utils:recipe_fan_upgrade_speed'
        },
        {
            output: 'mob_grinding_utils:saw_upgrade_arthropod',
            pattern: ['FPF', 'PBP', 'FPF'],
            key: {
                P: 'minecraft:fermented_spider_eye',
                F: '#forge:nuggets/arcane_gold',
                B: 'chroma:blank_upgrade'
            },
            id: 'mob_grinding_utils:recipe_saw_upgrade_arthropod'
        },
        {
            output: 'mob_grinding_utils:saw_upgrade_fire',
            pattern: ['FPF', 'PBP', 'FPF'],
            key: {
                P: 'botania:rune_fire',
                F: '#forge:nuggets/arcane_gold',
                B: 'chroma:blank_upgrade'
            },
            id: 'mob_grinding_utils:recipe_saw_upgrade_fire'
        },
        {
            output: 'mob_grinding_utils:absorption_upgrade',
            pattern: [' P ', 'PBP', 'OHO'],
            key: {
                P: 'rftoolsbase:infused_enderpearl',
                B: 'chroma:blank_upgrade',
                O: '#forge:ingots/obsidian',
                H: 'pneumaticcraft:omnidirectional_hopper'
            },
            id: 'mob_grinding_utils:recipe_absorbtion_upgrade'
        },
        {
            output: 'mob_grinding_utils:saw_upgrade_beheading',
            pattern: ['FAF', 'PBP', 'FAF'],
            key: {
                P: Item.of('blue_skies:aquite_helmet', '{Damage:0}').weakNBT(),
                F: '#forge:nuggets/arcane_gold',
                B: 'chroma:blank_upgrade',
                A: Item.of('blue_skies:pyrope_helmet', '{Damage:0}').weakNBT()
            },
            id: 'mob_grinding_utils:recipe_saw_upgrade_beheading'
        },
        {
            output: 'mob_grinding_utils:saw_upgrade_looting',
            pattern: ['FAF', 'PBP', 'FAF'],
            key: {
                P: 'botania:rune_lust',
                F: '#forge:nuggets/arcane_gold',
                B: 'chroma:blank_upgrade',
                A: 'pneumaticcraft:upgrade_matrix'
            },
            id: 'mob_grinding_utils:recipe_saw_upgrade_looting'
        },
        {
            output: 'mob_grinding_utils:saw_upgrade_smite',
            pattern: ['FPF', 'PBP', 'FPF'],
            key: {
                P: 'architects_palette:rotten_flesh_block',
                F: '#forge:nuggets/arcane_gold',
                B: 'chroma:blank_upgrade'
            },
            id: 'mob_grinding_utils:recipe_saw_upgrade_smite'
        },
        {
            output: 'mob_grinding_utils:saw_upgrade_sharpness',
            pattern: ['FPF', 'QBR', 'FSF'],
            key: {
                P: Item.of('blue_skies:pyrope_sword', '{Damage:0}').weakNBT(),
                Q: Item.of('blue_skies:aquite_sword', '{Damage:0}').weakNBT(),
                R: Item.of('blue_skies:diopside_sword', '{Damage:0}').weakNBT(),
                S: Item.of('blue_skies:charoite_sword', '{Damage:0}').weakNBT(),
                F: '#forge:nuggets/arcane_gold',
                B: 'chroma:blank_upgrade'
            },
            id: 'mob_grinding_utils:recipe_saw_upgrade_sharpness'
        },
        {
            output: 'mob_grinding_utils:tank',
            pattern: ['PGP', 'GTG', 'PGP'],
            key: {
                P: '#forge:plates/iron',
                G: 'botania:mana_glass',
                T: 'thermal:fluid_cell_frame'
            },
            id: 'mob_grinding_utils:recipe_tank'
        },
      ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
