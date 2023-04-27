onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tetra/shaped/';
    const recipes = [
        {
            output: 'tetra:vent_plate',
            pattern: ['SS', 'SS'],
            key: {
                S: 'tetra:forged_mesh'
            },
            id: 'tetra:temp/vent_plate'
        },
        {
            output: 'tetra:forged_bolt',
            pattern: ['N', 'S'],
            key: {
                S: 'tetra:forged_mesh',
                N: '#forge:ingots/netherite_scrap'
            },
            id: 'tetra:temp/bolt'
        },
        {
            output: 'tetra:forged_beam',
            pattern: ['  S', ' S ', 'S  '],
            key: {
                S: 'tetra:forged_mesh'
            },
            id: 'tetra:temp/beam'
        },
        {
            output: 'tetra:stonecutter',
            pattern: [' SS', 'SS ', 'B  '],
            key: {
                S: 'tetra:forged_mesh',
                B: 'tetra:forged_beam'
            },
            id: 'tetra:temp/stonecutter'
        },
        {
            output: 'tetra:earthpiercer',
            pattern: ['SS', 'IS'],
            key: {
                S: 'tetra:forged_mesh',
                B: '#forge:ingots/iron'
            },
            id: 'tetra:temp/earthpiercer'
        },
        {
            output: 'tetra:planar_stabilizer',
            pattern: ['B  ', ' T ', '  B'],
            key: {
                T: 'create:electron_tube',
                B: 'tetra:forged_beam'
            },
            id: 'tetra:temp/planar_stabilizer'
        },
        {
            output: 'tetra:chthonic_extractor',
            pattern: ['T', 'B', 'B'],
            key: {
                T: 'tetra:forged_bolt',
                B: 'tetra:forged_beam'
            },
            id: 'tetra:temp/chthonic_extractor'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
