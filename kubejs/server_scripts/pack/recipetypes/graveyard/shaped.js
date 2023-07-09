onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/graveyard/shaped/';
    const recipes = [

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
