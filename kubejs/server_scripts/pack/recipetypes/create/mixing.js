onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/mixing/';
    const recipes = [
        {
            inputs: ['minecraft:andesite', '#forge:nuggets/zinc'],
            output: 'chroma:andesite_with_zinc',
            id: 'create:mixing/andesite_alloy_from_zinc'
        },
        {
            inputs: ['minecraft:andesite', '#forge:nuggets/iron'],
            output: 'chroma:andesite_with_iron',
            id: 'create:mixing/andesite_alloy'
        },
        {
            inputs: [Item.of('minecraft:sand', 4), Item.of('minecraft:gravel', 4), 'minecraft:clay'],
            output: Item.of('tconstruct:grout', 8),
            heated: true,
            id: 'tconstruct:smeltery/seared/grout_multiple'
        },
        {
            inputs: ['minecraft:sand', 'minecraft:gravel', 'minecraft:clay_ball'],
            output: Item.of('tconstruct:grout', 2),
            heated: true,
            id: 'tconstruct:smeltery/seared/grout'
        },
        {
            inputs: [Item.of('minecraft:soul_sand', 4), Item.of('minecraft:gravel', 4), 'minecraft:magma_block'],
            output: Item.of('tconstruct:nether_grout', 8),
            heated: true,
            id: 'tconstruct:smeltery/scorched/nether_grout_multiple'
        },
        {
            inputs: ['minecraft:soul_sand', 'minecraft:gravel', 'minecraft:magma_block'],
            output: Item.of('tconstruct:nether_grout', 2),
            heated: true,
            id: 'tconstruct:smeltery/scorched/nether_grout'
        },
        {
            inputs: ['pneumaticcraft:ingot_iron_compressed', Item.of('blue_skies:lunar_stone', 8)],
            output: Item.of('pneumaticcraft:reinforced_stone', 8),
            heated: true,
            id: 'pneumaticcraft:reinforced_stone'
        },
        {
            inputs: ['mysticalagriculture:prosperity_seed_base', Item.of('mysticalagriculture:inferium_essence', 4), 'mysticalagriculture:water_essence', 'mysticalagriculture:fire_essence', 'mysticalagriculture:earth_essence', 'mysticalagriculture:air_essence'],
            output: 'chroma:inferium_seed_base',
            superheated: true,
            id: `${id_prefix}inferium_seed_base`
        },
    ];

    recipes.forEach((recipe) => {
        if (recipe.heated) {
            event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id).heated();
        } else if (recipe.superheated) {
            event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id).superheated();
        } else {
            event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id);
        }
    });
});
