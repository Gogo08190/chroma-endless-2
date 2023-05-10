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
            id: 'powah:crafting/player_tranmitter_basic'
        },
        {
            output: 'powah:solar_panel_basic',
            pattern: ['PPP', 'BDB', 'SCS'],
            key: {
                P: 'powah:photoelectric_pane',
                B: 'powah:capacitor_basic',
                D: 'powah:dielectric_casing',
                S: '#forge:ingots/steel',
                C: 'mekanism:basic_control_circuit'
            },
            id: 'powah:crafting/solar_panel_basic'
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
            id: 'powah:crafting/thermo_generator_basic'
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
            id: 'powah:crafting/magmator_basic'
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
            id: 'powah:crafting/furnator_basic'
        },
        {
            output: 'chroma:dielectric_paste_block',
            pattern: ['DDD', 'DDD', 'DDD'],
            key: {
                D: 'powah:dielectric_paste',
            },
            id: 'chroma:crafting/dielectric_paste_block'
        },
        {
            output: 'powah:capacitor_basic',
            pattern: [' SD', 'SIS', 'DS '],
            key: {
                S: 'immersiveengineering:ingot_steel',
                D: 'powah:dielectric_paste',
                I: 'mekanism:alloy_infused'
            },
            id: 'powah:crafting/capacitor_basic'
        },
        {
            output: 'powah:dielectric_rod_horizontal',
            pattern: ['DDD', 'RRR', 'DDD'],
            key: {
                D: 'powah:dielectric_paste',
                R: 'immersiveengineering:stick_steel'
            },
            id: 'powah:crafting/dielectric_rod_h'
        },
        {
            output: 'powah:dielectric_rod',
            pattern: ['DRD', 'DRD', 'DRD'],
            key: {
                D: 'powah:dielectric_paste',
                R: 'immersiveengineering:stick_steel'
            },
            id: 'powah:crafting/dielectric_rod'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
