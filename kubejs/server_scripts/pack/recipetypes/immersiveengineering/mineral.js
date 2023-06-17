onEvent('recipes', (event) => {
    let data = {
        recipes: [
            {
                ores: [
                    { chance: 0.4, output: { item: 'minecraft:gravel' } },
                    { chance: 0.4, output: { item: 'minecraft:ancient_debris' } }
                ],
                dimensions: ['minecraft:the_nether'],
                weight: 8,
                fail_chance: 0.7,
                sample_background: 'minecraft:netherrack',
                id: 'ancient_debris'
            },
            {
                ores: [
                    { chance: 0.5, output: { tag: 'forge:ores/quartz' } },
                    { chance: 0.3, output: { tag: 'forge:ores/fluorite' } },
                    { chance: 0.1, output: { tag: 'forge:ores/gold' } },
                    { chance: 0.1, output: { tag: 'forge:dusts/sulfur' } }
                ],
                dimensions: ['minecraft:the_nether'],
                weight: 20,
                fail_chance: 0.15,
                sample_background: 'minecraft:nether_quartz_ore',
                id: 'mephitic_quarzite'
            },
            {
                ores: [
                    { chance: 0.75, output: { tag: 'forge:ores/copper' } },
                    { chance: 0.25, output: { tag: 'forge:ores/gold' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 30,
                fail_chance: 0.1,
                sample_background: 'minecraft:stone',
                id: 'auricupride'
            },
            {
                ores: [
                    { chance: 0.45, output: { item: 'minecraft:prismarine' } },
                    { chance: 0.25, output: { tag: 'forge:ores/emerald' } },
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 5,
                fail_chance: 0.2,
                sample_background: 'minecraft:prismarine',
                id: 'beryl'
            },
            {
                ores: [
                    { chance: 0.7, output: { tag: 'forge:ores/coal' } },
                    { chance: 0.1, output: { tag: 'forge:dusts/sulfur' } },
                    { chance: 0.2, output: { item: 'thermal:oil_sand' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 25,
                fail_chance: 0.05,
                sample_background: 'minecraft:andesite',
                id: 'bituminous_coal'
            },
            {
                ores: [
                    { chance: 7.0, output: { tag: 'forge:ores/tin' } },
                    { chance: 3.0, output: { tag: 'forge:ores/osmium' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 20,
                fail_chance: 0.05,
                sample_background: 'create:limestone',
                id: 'cassiterite'
            },
            {
                ores: [
                    { chance: 0.35, output: { tag: 'forge:ores/iron' } },
                    { chance: 0.35, output: { tag: 'forge:ores/copper' } },
                    { chance: 0.3, output: { tag: 'forge:dusts/sulfur' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 20,
                fail_chance: 0.05,
                sample_background: 'quark:jasper',
                id: 'chalcopyrite'
            },
            {
                ores: [
                    { chance: 0.5, output: { tag: 'forge:ores/redstone' } },
                    { chance: 0.4, output: { tag: 'forge:ores/cinnabar' } },
                    { chance: 0.1, output: { tag: 'forge:dusts/sulfur' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 15,
                fail_chance: 0.1,
                sample_background: 'minecraft:granite',
                id: 'cinnabar'
            },
            {
                ores: [
                    { chance: 0.4, output: { tag: 'forge:ores/lead' } },
                    { chance: 0.2, output: { tag: 'forge:ores/silver' } },
                    { chance: 0.4, output: { tag: 'forge:dusts/sulfur' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 15,
                fail_chance: 0.05,
                sample_background: 'minecraft:cobbled_deepslate',
                id: 'galena'
            },
            {
                ores: [
                    { chance: 0.3, output: { item: 'minecraft:granite' } },
                    { chance: 0.3, output: { item: 'minecraft:diorite' } },
                    { chance: 0.3, output: { item: 'minecraft:andesite' } },
                    { chance: 0.1, output: { item: 'minecraft:obsidian' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 25,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'igneous_rock'
            },
            {
                ores: [
                    { chance: 0.2, output: { item: 'botania:metamorphic_swamp_cobblestone' } },
                    { chance: 0.2, output: { item: 'botania:metamorphic_fungal_cobblestone' } },
                    { chance: 0.2, output: { item: 'botania:metamorphic_plains_cobblestone' } },
                    { chance: 0.2, output: { item: 'botania:metamorphic_forest_cobblestone' } },
                    { chance: 0.2, output: { item: 'botania:metamorphic_taiga_cobblestone' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 10,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'vivacious_metamorphic_rock'
            },
            {
                ores: [
                    { chance: 0.33, output: { item: 'botania:metamorphic_mesa_cobblestone' } },
                    { chance: 0.33, output: { item: 'botania:metamorphic_mountain_cobblestone' } },
                    { chance: 0.33, output: { item: 'botania:metamorphic_desert_cobblestone' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 10,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'arid_metamorphic_rock'
            },
            {
                ores: [
                    { chance: 0.1, output: { item: 'quark:red_corundum_cluster' } },
                    { chance: 0.1, output: { item: 'quark:orange_corundum_cluster' } },
                    { chance: 0.1, output: { item: 'quark:yellow_corundum_cluster' } },
                    { chance: 0.1, output: { item: 'quark:green_corundum_cluster' } },
                    { chance: 0.1, output: { item: 'quark:blue_corundum_cluster' } },
                    { chance: 0.1, output: { item: 'quark:indigo_corundum_cluster' } },
                    { chance: 0.1, output: { item: 'quark:violet_corundum_cluster' } },
                    { chance: 0.1, output: { item: 'quark:white_corundum_cluster' } },
                    { chance: 0.1, output: { item: 'quark:black_corundum_cluster' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 5,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'prismatic_corundum_cluster'
            },
            {
                ores: [
                    { chance: 0.7, output: { tag: 'forge:ores/aluminum' } },
                    { chance: 0.2, output: { tag: 'forge:ores/iron' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 20,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'laterite'
            },
            {
                ores: [
                    { chance: 0.35, output: { tag: 'forge:ores/iron' } },
                    { chance: 0.35, output: { tag: 'forge:ores/nickel' } },
                    { chance: 0.3, output: { tag: 'forge:dusts/sulfur' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 25,
                fail_chance: 0.05,
                sample_background: 'quark:jasper',
                id: 'pentlandite'
            },
            {
                ores: [
                    { chance: 0.5, output: { item: 'minecraft:clay' } },
                    { chance: 0.3, output: { item: 'minecraft:sand' } },
                    { chance: 0.2, output: { item: 'minecraft:gravel' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 25,
                fail_chance: 0.05,
                sample_background: 'minecraft:clay',
                id: 'silt'
            },
            {
                ores: [
                    { chance: 0.7, output: { tag: 'forge:ores/uranium' } },
                    { chance: 0.3, output: { tag: 'forge:ores/lead' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 10,
                fail_chance: 0.15,
                sample_background: 'create:weathered_limestone',
                id: 'uraninite'
            },
            {
                ores: [
                    { chance: 0.5, output: { item: 'minecraft:bone_block' } },
                    { chance: 0.125, output: { item: 'aquaculture:neptunium_nugget' } },
                    { chance: 0.125, output: { item: 'aquaculture:driftwood' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 10,
                fail_chance: 0.15,
                sample_background: 'minecraft:smooth_sandstone',
                id: 'thymarian_fossil_bed'
            },
            {
                ores: [
                    { chance: 0.23, output: { item: 'minecraft:basalt' } },
                    { chance: 0.33, output: { tag: 'forge:ores/diamond' } },
                    { chance: 0.33, output: { tag: 'forge:ores/apatite' } },
                    { chance: 0.1, output: { tag: 'forge:ores/fluorite' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 5,
                fail_chance: 0.7,
                sample_background: 'minecraft:basalt',
                id: 'kimberlite'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'forge:ores/cloggrum' } }],
                dimensions: ['undergarden:undergarden'],
                weight: 20,
                fail_chance: 0.1,
                sample_background: 'undergarden:depthrock',
                id: 'cloggranite'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'forge:ores/froststeel' } }],
                dimensions: ['undergarden:undergarden'],
                weight: 15,
                fail_chance: 0.1,
                sample_background: 'undergarden:shiverstone',
                id: 'erythrite'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'forge:ores/utherium' } }],
                dimensions: ['undergarden:undergarden'],
                weight: 10,
                fail_chance: 0.1,
                sample_background: 'undergarden:depthrock',
                id: 'camlannite'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'forge:ores/regalium' } }],
                dimensions: ['undergarden:undergarden'],
                weight: 20,
                fail_chance: 0.1,
                sample_background: 'undergarden:depthrock',
                id: 'myrddinite'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'blue_skies:ores/diopside' } }],
                dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                weight: 20,
                fail_chance: 0.1,
                sample_background: 'blue_skies:turquoise_stone',
                id: 'everopside'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'blue_skies:ores/pyrope' } }],
                dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                weight: 15,
                fail_chance: 0.1,
                sample_background: 'blue_skies:turquoise_stone',
                id: 'everpyrope'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'blue_skies:ores/aquite' } }],
                dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                weight: 10,
                fail_chance: 0.1,
                sample_background: 'blue_skies:turquoise_stone',
                id: 'aquiever'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'blue_skies:ores/charoite' } }],
                dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                weight: 25,
                fail_chance: 0.1,
                sample_background: 'blue_skies:turquoise_stone',
                id: 'charoplagne'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'blue_skies:ores/moonstone' } }],
                dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                weight: 30,
                fail_chance: 0.1,
                sample_background: 'blue_skies:turquoise_stone',
                id: 'moonslater'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'blue_skies:ores/falsite' } }],
                dimensions: ['blue_skies:everbright'],
                weight: 5,
                fail_chance: 0.1,
                sample_background: 'blue_skies:turquoise_stone',
                id: 'falldeepstrate'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'blue_skies:ores/ventium' } }],
                dimensions: ['blue_skies:everbright'],
                weight: 5,
                fail_chance: 0.1,
                sample_background: 'blue_skies:turquoise_stone',
                id: 'vendiparline'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'blue_skies:ores/horizonite' } }],
                dimensions: ['blue_skies:everdawn'],
                weight: 5,
                fail_chance: 0.1,
                sample_background: 'blue_skies:lunar_stone',
                id: 'horimitron'
            },
            {
                ores: [
                    { chance: 0.23, output: { item: 'beyond_earth:mars_ostrum_ore' } },
                    { chance: 0.6, output: { item: 'beyond_earth:mars_ice_shard_ore' } }
                ],
                dimensions: ['beyond_earth:mars'],
                weight: 5,
                fail_chance: 0.1,
                sample_background: 'beyond_earth:mars_sand',
                id: 'ostrystellarite'
            },
            {
                ores: [
                    { chance: 0.23, output: { item: 'beyond_earth:moon_desh_ore' } },
                    { chance: 0.6, output: { item: 'beyond_earth:moon_ice_shard_ore' } },
                    { chance: 0.7, output: { item: 'beyond_earth:moon_cheese_ore' } }
                ],
                dimensions: ['beyond_earth:moon'],
                weight: 5,
                fail_chance: 0.1,
                sample_background: 'beyond_earth:moon_sand',
                id: 'lunarisium'
            },
            {
                ores: [
                    { chance: 0.23, output: { item: 'beyond_earth:venus_calorite_ore' } }
                ],
                dimensions: ['beyond_earth:venus'],
                weight: 5,
                fail_chance: 0.1,
                sample_background: 'beyond_earth:venus_sand',
                id: 'venusium'
            },
            {
                ores: [
                    { chance: 0.6, output: { item: 'beyond_earth:glacio_ice_shard_ore' } }
                ],
                dimensions: ['beyond_earth:glacio'],
                weight: 5,
                fail_chance: 0.1,
                sample_background: 'minecraft:snow_block',
                id: 'glaciorite'
            },
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:mineral_mix';
        const re = event.custom(recipe);
        if (recipe.id) {
            re.id(`immersiveengineering:mineral/${recipe.id}`);
        }
    });
});
