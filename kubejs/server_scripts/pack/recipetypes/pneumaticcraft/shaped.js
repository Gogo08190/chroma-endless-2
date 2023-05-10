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
            output: 'pneumaticcraft:pressure_chamber_interface',
            pattern: ['CCC', 'RHR', 'CDC'],
            key: {
                C: 'pneumaticcraft:ingot_iron_compressed',
                R: 'powah:dielectric_rod',
                H: 'pneumaticcraft:heat_sink',
                D: 'powah:dielectric_paste'

            },
            id: 'pneumaticcraft:pressure_chamber_interface'
        },
        {
            output: 'pneumaticcraft:heat_sink',
            pattern: ['  ', 'BBB', 'CEC'],
            key: {
                B: 'minecraft:iron_bars',
                C: 'pneumaticcraft:ingot_iron_compressed',
                E: 'powah:steel_energized'

            },
            id: 'pneumaticcraft:heat_sink'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
