onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('compactmachines:wall', 8),
            pattern: ['DSD', 'S S', 'DSD'],
            key: {
                D: 'minecraft:polished_deepslate',
                S: 'ae2:smooth_sky_stone_block'
            },
            id: 'compactmachines:wall'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
