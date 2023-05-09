onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/powah/shaped/';
    const recipes = [
        {
            output: 'powah:player_transmitter_basic',
            pattern: [' A ', 'CDC', 'CPC'],
            key: {
                A: 'powah:aerial_pearl',
                C: 'powah:capacitor_basic_large',
                D: 'powah:dielectric_casing',
                P: 'chroma:dielectric_paste_block'
            },
            id: 'powah:player_transmitter_basic'
        },
        {
            output: 'powah:solar_panel_basic',
            pattern: ['PPP', 'BDB', 'S S'],
            key: {
                P: 'powah:photoelectric_pane',
                B: 'powah:capacitor_basic',
                D: 'powah:dielectric_casing',
                S: '#forge:ingots/steel',
                C: 'mekanism:basic_control_circuit'
            },
            id: 'powah:solar_panel_basic'
        },
        {
            output: 'powah:thermo_generator_basic',
            pattern: ['SIS', 'BDB', 'TRT'],
            key: {
                S: '#forge:ingots/steel',
                I: 'mekanism:alloy_infused',
                B: 'powah:capacitor_basic',
                D: 'powah:dielectric_casing',
                T: 'powah:thermoelectric_plate',
                R: 'immersiveengineering:radiator'
            },
            id: 'powah:thermo_generator_basic'
        },
        {
            output: 'powah:magmator_basic',
            pattern: ['SSS', 'BDB', 'STS'],
            key: {
                S: '#forge:ingots/steel',
                B: 'powah:capacitor_basic',
                D: 'powah:dielectric_casing',
                T: 'mob_grinding_utils:tank'
            },
            id: 'powah:magmator_basic'
        },
        {
            output: 'powah:furnator_basic',
            pattern: ['SCS', 'BDB', 'SIS'],
            key: {
                S: '#forge:ingots/steel',
                B: 'powah:capacitor_basic',
                D: 'powah:dielectric_casing',
                C: 'mekanism:basic_control_circuit',
                I: 'ironfurnaces:iron_furnace'
            },
            id: 'powah:furnator_basic'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});