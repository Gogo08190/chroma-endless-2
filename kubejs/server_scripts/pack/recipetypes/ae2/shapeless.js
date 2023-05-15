onEvent('recipes', (event) => {

    const recipes = [
        {
            output: 'ae2:wireless_crafting_terminal',
            inputs: ['ae2:wireless_terminal', 'ae2:crafting_terminal', 'ae2:calculation_processor'],
            id: 'ae2:network/upgrade_wireless_crafting_terminal'
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
