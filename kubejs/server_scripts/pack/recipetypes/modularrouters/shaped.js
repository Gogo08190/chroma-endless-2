onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/modularrouters/shaped/';
    const recipes = [
        {
            output: Item.of('modularrouters:modular_router', 2),
            pattern: ['SSS', 'SBR', 'SSS'],
            key: {
                S: '#forge:sheetmetals/iron',
                B: 'modularrouters:blank_module',
                R: 'extendedcrafting:redstone_ingot'
            },
            id: 'modularrouters:modular_router'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
