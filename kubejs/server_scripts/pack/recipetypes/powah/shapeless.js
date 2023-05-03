onEvent('recipes', (event) => {
    const recipes = [

    ];

    powahTiers.forEach((tier) => {
        if (tier == 'starter') {
            return;
        }
        event.shapeless(`powah:reactor_${tier}`, `powah:reactor_${tier}`);
    });

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
