onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'scannable:range_module',
            inputs: ['scannable:blank_module', 'ae2:fluix_pearl'],
            id: 'scannable:range_module'
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
