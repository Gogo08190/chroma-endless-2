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
        {
            output: 'biggerreactors:heat_exchanger_evaporator_channel',
            pattern: ['PGP', 'PGP', 'PGP'],
            key: {
                P: '#forge:plates/copper',
                G: 'alchemistry:reactor_glass'
            },
            id: 'biggerreactors:crafting/heat_exchanger/evaporator_channel'
        },
        {
            output: 'biggerreactors:heat_exchanger_fluid_port',
            pattern: ['C C', 'STS', 'CPC'],
            key: {
                C: 'biggerreactors:heat_exchanger_casing',
                S: 'powah:crystal_spirited',
                T: 'mekanism:ultimate_fluid_tank',
                P: 'minecraft:piston'
            },
            id: 'biggerreactors:crafting/heat_exchanger/fluid_port'
        },
        {
            output: 'biggerreactors:heat_exchanger_glass',
            pattern: ['GCG'],
            key: {
                C: 'biggerreactors:heat_exchanger_casing',
                G: 'botania:elf_glass'
            },
            id: 'biggerreactors:crafting/heat_exchanger/glass'
        },
        {
            output: 'biggerreactors:heat_exchanger_computer_port',
            pattern: ['CWC', 'STS', 'CPC'],
            key: {
                C: 'biggerreactors:heat_exchanger_casing',
                S: 'powah:crystal_spirited',
                T: 'thermal:redstone_servo',
                P: 'thermal:rf_coil',
                W: 'computercraft:wired_modem'
            },
            id: 'biggerreactors:crafting/heat_exchanger/computer_port'
        },
        {
            output: Item.of('biggerreactors:heat_exchanger_casing', 2),
            pattern: ['PGP', 'PSP', 'PGP'],
            key: {
                P: '#forge:plates/copper',
                G: 'chemlib:molybdenum',
                S: 'powah:crystal_spirited'
            },
            id: 'biggerreactors:crafting/heat_exchanger/casing'
        },
        {
            output: 'biggerreactors:turbine_computer_port',
            pattern: ['CWC', 'STS', 'CPC'],
            key: {
                C: 'biggerreactors:turbine_casing',
                S: 'powah:crystal_spirited',
                T: 'thermal:redstone_servo',
                P: 'thermal:rf_coil',
                W: 'computercraft:wired_modem'
            },
            id: 'biggerreactors:crafting/turbine/turbine_computer_port'
        },
        {
            output: 'biggerreactors:turbine_glass',
            pattern: ['GCG'],
            key: {
                C: 'biggerreactors:turbine_casing',
                G: 'botania:elf_glass'
            },
            id: 'biggerreactors:crafting/turbine/turbine_glass'
        },
        {
            output: 'biggerreactors:turbine_fluid_port',
            pattern: ['C C', 'STS', 'CPC'],
            key: {
                C: 'biggerreactors:turbine_casing',
                S: 'powah:crystal_spirited',
                T: 'mekanism:ultimate_fluid_tank',
                P: 'minecraft:piston'
            },
            id: 'biggerreactors:crafting/turbine/turbine_fluid_port'
        },
        {
            output: 'biggerreactors:turbine_power_tap',
            pattern: ['CSC', 'STS', 'CPC'],
            key: {
                C: 'biggerreactors:turbine_casing',
                S: 'extendedcrafting:redstone_ingot',
                T: 'pneumaticcraft:module_expansion_card',
                P: Item.of('mekaevolution:absolute_energy_cube').ignoreNBT()
            },
            id: 'biggerreactors:crafting/turbine/turbine_power_tap'
        },
        {
            output: 'biggerreactors:turbine_rotor_bearing',
            pattern: ['CPC', 'STS', 'CPC'],
            key: {
                C: 'biggerreactors:turbine_casing',
                S: 'chroma:absolute_alloy',
                T: 'powah:capacitor_spirited',
                P: 'biggerreactors:turbine_rotor_shaft'
            },
            id: 'biggerreactors:crafting/turbine/turbine_rotor_bearing'
        },
        {
            output: 'biggerreactors:turbine_rotor_blade',
            pattern: ['BEE'],
            key: {
                B: 'biggerreactors:blutonium_ingot',
                E: 'powah:steel_energized'
            },
            id: 'biggerreactors:crafting/turbine/turbine_rotor_blade'
        },
        {
            output: 'biggerreactors:turbine_rotor_shaft',
            pattern: ['EBE'],
            key: {
                B: 'biggerreactors:blutonium_ingot',
                E: 'powah:steel_energized'
            },
            id: 'biggerreactors:crafting/turbine/turbine_rotor_shaft'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
