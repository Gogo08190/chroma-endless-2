onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/kubejs/shapeless/';
    const recipes = [
        {
            output: '3x chroma:black_bone_meal',
            inputs: ['architects_palette:withered_bone'],
            id: `${id_prefix}black_bone_meal`
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
