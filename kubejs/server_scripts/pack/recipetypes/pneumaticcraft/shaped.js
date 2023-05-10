onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/shaped/';
    const recipes = [
        {
            output: 'pneumaticcraft:pressure_chamber_interface',
            pattern: [' W ', 'WIW', ' W '],
            key: {
                W: 'pneumaticcraft:pressure_chamber_wall',
                I: 'create:portable_storage_interface'
            },
            id: 'pneumaticcraft:pressure_chamber_interface'
        },
        {
            output: 'pneumaticcraft:heat_frame',
            pattern: ['CCC', 'RHR', 'CDC'],
            key: {
                C: '#forge:ingots/compressed_iron',
                R: 'powah:dielectric_rod',
                H: 'pneumaticcraft:heat_sink',
                D: 'powah:dielectric_paste'

            },
            id: 'pneumaticcraft:heat_frame'
        },
        {
            output: 'pneumaticcraft:heat_sink',
            pattern: ['  ', 'BBB', 'CEC'],
            key: {
                B: 'minecraft:iron_bars',
                C: '#forge:ingots/compressed_iron',
                E: 'powah:steel_energized'

            },
            id: 'pneumaticcraft:heat_sink'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
