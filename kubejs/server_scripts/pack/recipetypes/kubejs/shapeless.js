onEvent('recipes', (event) => {
    const recipes = [
        {
            output: '3x chroma:black_bone_meal',
            inputs: ['architects_palette:withered_bone'],
            id: 'architects_palette:bone_meal'
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
