onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mysticalagriculture/shaped/';
    const recipes = [
        {
            output: 'mysticalagriculture:inferium_farmland',
            pattern: ['FEF', 'FDF', 'FEF'],
            key: {
                F: 'mysticalagriculture:mystical_fertilizer',
                E: 'mysticalagriculture:inferium_essence',
                D: 'thermal:phytosoil'
            },
            id: 'mysticalagriculture:inferium_farmland'
        },
        {
            output: 'mysticalagriculture:prudentium_farmland',
            pattern: ['FEF', 'FDF', 'FEF'],
            key: {
                F: 'mysticalagriculture:mystical_fertilizer',
                E: 'mysticalagriculture:prudentium_essence',
                D: 'mysticalagriculture:inferium_farmland'
            },
            id: 'mysticalagriculture:prudentium_farmland'
        },
        {
            output: 'mysticalagriculture:tertium_farmland',
            pattern: ['FEF', 'FDF', 'FEF'],
            key: {
                F: 'mysticalagriculture:mystical_fertilizer',
                E: 'mysticalagriculture:tertium_essence',
                D: 'mysticalagriculture:prudentium_farmland'
            },
            id: 'mysticalagriculture:tertium_farmland'
        },
        {
            output: 'mysticalagriculture:imperium_farmland',
            pattern: ['FEF', 'FDF', 'FEF'],
            key: {
                F: 'mysticalagriculture:mystical_fertilizer',
                E: 'mysticalagriculture:imperium_essence',
                D: 'mysticalagriculture:tertium_farmland'
            },
            id: 'mysticalagriculture:imperium_farmland'
        },
        {
            output: 'mysticalagriculture:supremium_farmland',
            pattern: ['FEF', 'FDF', 'FEF'],
            key: {
                F: 'mysticalagriculture:mystical_fertilizer',
                E: 'mysticalagriculture:supremium_essence',
                D: 'mysticalagriculture:imperium_farmland'
            },
            id: 'mysticalagriculture:supremium_farmland'
        },
        {
            output: 'mysticalagradditions:insanium_farmland',
            pattern: ['FEF', 'FDF', 'FEF'],
            key: {
                F: 'mysticalagriculture:mystical_fertilizer',
                E: 'mysticalagradditions:insanium_essence',
                D: 'mysticalagriculture:supremium_farmland'
            },
            id: 'mysticalagradditions:insanium_farmland'
        },
        {
            output: Item.of('mysticalagriculture:mystical_fertilizer', 4),
            pattern: ['FEF', 'FDF', 'FEF'],
            key: {
                F: 'industrialforegoing:fertilizer',
                E: 'mysticalagriculture:fertilized_essence',
                D: '#forge:gems/mana_diamond'
            },
            id: 'mysticalagriculture:mystical_fertilizer_better'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
