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
