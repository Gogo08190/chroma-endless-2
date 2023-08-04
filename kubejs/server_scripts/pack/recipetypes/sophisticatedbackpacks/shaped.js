onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/sophisticatedbackpacks/shaped/';
    const recipes = [
        {
            output: 'sophisticatedbackpacks:upgrade_base',
            pattern: ['SPS', 'PLP', 'SPS'],
            key: {
                S: 'botania:mana_string',
                P: '#forge:plates/iron',
                L: 'immersiveengineering:ersatz_leather'
            },
            id: 'sophisticatedbackpacks:upgrade_base'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
