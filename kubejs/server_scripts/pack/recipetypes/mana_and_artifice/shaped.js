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
        {
            output: 'mna:inscription_table',
            pattern: [' C ', 'FBV', ' T '],
            key: {
                V: 'mna:vellum',
                C: '#chipped:blue_carpet',
                F: 'mna:animated_quill',
                B: 'mna:guide_book',
                T: 'mna:ornate_table'
            },
            id: 'mna:inscription_table'
        },
        {
            output: 'mna:manaweaving_altar',
            pattern: ['CVC', 'VSV', 'CDC'],
            key: {
                C: '#mna:gems/chimerite',
                V: '#mna:ingots/vinteum',
                S: 'tetra:forged_beam',
                D: 'minecraft:polished_deepslate_slab'
            },
            id: 'mna:manaweaving_altar'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
