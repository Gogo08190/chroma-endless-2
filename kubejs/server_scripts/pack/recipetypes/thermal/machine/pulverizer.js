onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/pulverizer/';
    const recipes = [

    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.pulverizer(recipe.outputs, recipe.input).experience(recipe.experience).id(recipe.id);
    });
});
