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
            inputs: [Item.of('#forge:sand', 4), Item.of('#forge:gravel', 4), 'minecraft:clay'],
            output: Item.of('tconstruct:grout', 8),
            heated: true,
            id: 'tconstruct:smeltery/seared/grout_multiple'
        },
        {
            inputs: ['#forge:sand', '#forge:gravel', 'minecraft:clay_ball'],
            output: Item.of('tconstruct:grout', 2),
            heated: true,
            id: 'tconstruct:smeltery/seared/grout'
        },
        {
            inputs: [Item.of('minecraft:soul_sand', 4), Item.of('#forge:gravel', 4), 'minecraft:magma_block'],
            output: Item.of('tconstruct:nether_grout', 8),
            heated: true,
            id: 'tconstruct:smeltery/scorched/nether_grout_multiple'
        },
        {
            inputs: ['minecraft:soul_sand', '#forge:gravel', 'minecraft:magma_block'],
            output: Item.of('tconstruct:nether_grout', 2),
            heated: true,
            id: 'tconstruct:smeltery/scorched/nether_grout'
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
