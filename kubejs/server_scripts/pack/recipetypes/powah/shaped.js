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
        {
            output: 'powah:ender_gate_basic',
            pattern: ['ACA', 'CEC', 'ACA'],
            key: {
                A: 'mekanism:alloy_infused',
                C: Item.of('powah:energy_cable_basic').ignoreNBT(),
                E: 'powah:ender_core'
            },
            id: 'powah:crafting/ender_gate_basic'
        },
        {
            output: 'powah:energy_cable_basic',
            pattern: ['DDD', 'ECE', 'DDD'],
            key: {
                D: 'powah:dielectric_rod_horizontal',
                C: 'powah:capacitor_basic',
                E: '#forge:ingots/electrum'
            },
            id: 'powah:crafting/energy_cable_basic'
        },
        {
            output: 'powah:ender_cell_basic',
            pattern: ['SFS', 'CEC', 'SFS'],
            key: {
                S: '#forge:plates/steel',
                C: 'powah:capacitor_basic_large',
                E: 'powah:ender_core',
                F: 'ae2:fluix_pearl'
            },
            id: 'powah:crafting/ender_cell_basic'
        },
        {
            output: 'powah:energy_cell_basic',
            pattern: ['SMS', 'CDC', 'SMS'],
            key: {
                S: '#forge:plates/steel',
                C: 'powah:capacitor_basic_large',
                D: 'powah:dielectric_casing',
                M: 'mekanism:basic_control_circuit'
            },
            id: 'powah:crafting/energy_cell_basic'
        },
        {
            output: 'powah:battery_hardened',
            pattern: ['DED', 'CBC', 'DMD'],
            key: {
                D: 'powah:dielectric_paste',
                C: 'powah:capacitor_hardened',
                B: Item.of('powah:battery_basic').weakNBT(),
                M: 'mekanism:basic_control_circuit',
                E: 'powah:steel_energized'
            },
            id: 'powah:crafting/battery_hardened'
        },
        {
            output: 'powah:battery_basic',
            pattern: ['DSD', 'CIC', 'DMD'],
            key: {
                D: 'powah:dielectric_paste',
                C: 'powah:capacitor_basic_large',
                I: Item.of('immersiveengineering:capacitor_mv').ignoreNBT(),
                M: 'mekanism:basic_control_circuit',
                S: '#forge:ingots/steel'
            },
            id: 'powah:crafting/battery_basic'
        },
        {
            output: 'powah:energizing_rod_hardened',
            pattern: [' B ', 'CDC', ' R '],
            key: {
                C: 'powah:capacitor_hardened',
                D: 'powah:dielectric_casing',
                R: Item.of('powah:energizing_rod_basic').ignoreNBT(),
                B: Item.of('powah:battery_hardened').weakNBT()
            },
            id: 'powah:crafting/energizing_rod_hardened'
        },
        {
            output: 'powah:energizing_rod_basic',
            pattern: [' B ', 'CDC', ' P '],
            key: {
                C: 'powah:capacitor_basic_large',
                D: 'powah:dielectric_casing',
                P: 'chroma:dielectric_paste_block',
                B: Item.of('powah:battery_basic').weakNBT()
            },
            id: 'powah:crafting/energizing_rod_basic'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
