onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'thermal:flux_magnet',
            inputs: ['chroma:magnet_core', 'chroma:fluxo_core'],
            id: 'thermal:flux_magnet'
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
