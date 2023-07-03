onEvent('recipes', (event) => {
    const recipes = [
        {
            output: '8x ironfurnaces:rainbow_plating',
            inputs: ['ironfurnaces:diamond_furnace', 'ironfurnaces:gold_furnace', 'ironfurnaces:iron_furnace', 'ironfurnaces:emerald_furnace', 'ironfurnaces:obsidian_furnace', 'ironfurnaces:copper_furnace', 'ironfurnaces:silver_furnace'],
            id: 'ironfurnaces:rainbow_plating'
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
