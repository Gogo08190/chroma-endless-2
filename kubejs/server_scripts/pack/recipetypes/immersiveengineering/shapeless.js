onEvent('recipes', (event) => {
    const recipes = [
        {
            output: '6x immersiveengineering:sawdust',
            inputs: ['6x #forge:dusts/wood'],
            id: 'immersiveengineering:crafting/sawdust'
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
