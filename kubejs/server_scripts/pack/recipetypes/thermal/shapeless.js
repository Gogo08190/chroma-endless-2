onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'thermal:flux_magnet',
            inputs: ['chroma:magnet_core', 'chroma:fluxo_core'],
            id: 'thermal:flux_magnet'
        },
        {
            output: Item.of('thermal:phytogro', 4),
            inputs: ['thermal:niter', 'thermal:apatite', 'botania:fertilizer', 'minecraft:sand'],
            id: 'thermal:phytogro_4'
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
