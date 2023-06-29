onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/biggerreactors/shaped/';
    const recipes = [
        {
            output: 'biggerreactors:reactor_fuel_rod',
            pattern: ['SRS', 'GBG', 'SRS'],
            key: {
                S: 'powah:steel_energized',
                R: 'powah:dielectric_rod',
                G: 'botania:elf_glass',
                B: 'biggerreactors:reactor_casing'
            },
            id: 'biggerreactors:crafting/reactor/reactor_fuel_rod'
        },
        {
            output: 'biggerreactors:reactor_glass',
            pattern: ['SRS'],
            key: {
                S: 'botania:elf_glass',
                R: 'biggerreactors:reactor_casing'
            },
            id: 'biggerreactors:crafting/reactor/reactor_glass'
        },
        {
            output: Item.of('biggerreactors:reactor_manifold', 4),
            pattern: ['SRS', 'R R', 'SRS'],
            key: {
                S: 'extendedcrafting:black_iron_ingot',
                R: 'botania:elf_glass'
            },
            id: 'biggerreactors:crafting/reactor/reactor_manifold'
        },
        {
            output: 'biggerreactors:reactor_power_tap',
            pattern: ['CRC', 'RMR', 'CEC'],
            key: {
                C: 'biggerreactors:reactor_casing',
                R: 'extendedcrafting:redstone_ingot',
                M: 'pneumaticcraft:module_expansion_card',
                E: 'mekanism:elite_energy_cube'
            },
            id: 'biggerreactors:crafting/reactor/reactor_power_tap'
        },
        {
            output: 'biggerreactors:reactor_coolant_port',
            pattern: ['CAC', 'RMR', 'CEC'],
            key: {
                C: 'biggerreactors:reactor_casing',
                R: 'powah:steel_energized',
                M: 'mekanism:elite_fluid_tank',
                E: 'minecraft:piston',
                A: 'powah:dielectric_rod_horizontal'
            },
            id: 'biggerreactors:crafting/reactor/reactor_coolant_port'
        },
        {
            output: 'biggerreactors:reactor_control_rod',
            pattern: ['CAC', 'RMR', 'CEC'],
            key: {
                C: 'biggerreactors:reactor_casing',
                R: '#forge:ingots/graphite',
                M: 'extendedcrafting:redstone_ingot',
                E: '#forge:ingots/uranium',
                A: 'mekanism:elite_control_circuit'
            },
            id: 'biggerreactors:crafting/reactor/reactor_control_rod'
        },
        {
            output: 'biggerreactors:reactor_terminal',
            pattern: ['CAC', 'RMR', 'CEC'],
            key: {
                C: 'biggerreactors:reactor_casing',
                R: '#forge:ingots/uranium',
                M: '#forge:gems/mana_diamond',
                E: 'computercraft:computer_advanced',
                A: 'mekanism:ultimate_control_circuit'
            },
            id: 'biggerreactors:crafting/reactor/reactor_terminal'
        },
        {
            output: 'biggerreactors:reactor_access_port',
            pattern: ['C C', ' N ', 'CEC'],
            key: {
                C: 'biggerreactors:reactor_casing',
                N: 'expandedstorage:netherite_chest',
                E: 'minecraft:piston'
            },
            id: 'biggerreactors:crafting/reactor/reactor_access_port'
        },
        {
            output: 'biggerreactors:reactor_redstone_port',
            pattern: ['CRC', 'RNR', 'CRC'],
            key: {
                C: 'biggerreactors:reactor_casing',
                N: 'powah:steel_energized',
                R: 'thermal:rf_coil'
            },
            id: 'biggerreactors:crafting/reactor/reactor_redstone_port'
        },
        {
            output: 'biggerreactors:reactor_computer_port',
            pattern: ['CAC', 'ENE', 'CRC'],
            key: {
                C: 'biggerreactors:reactor_casing',
                N: 'thermal:redstone_servo',
                R: 'thermal:rf_coil',
                A: 'computercraft:wired_modem',
                E: 'powah:steel_energized'
            },
            id: 'biggerreactors:crafting/reactor/reactor_computer_port'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
