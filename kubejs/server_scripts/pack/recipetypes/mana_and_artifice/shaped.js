onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mna/shaped/';
    const recipes = [
        {
            output: 'mna:guide_book',
            pattern: ['IVI', 'VCV', 'IVI'],
            key: {
                V: 'mna:vellum',
                I: '#mna:ingots/vinteum',
                C: 'tetra:planar_stabilizer'
            },
            id: `${id_prefix}guide_book`
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
