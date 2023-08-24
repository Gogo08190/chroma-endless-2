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
                I: 'ironfurnaces:gold_furnace'
            },
            id: 'powah:crafting/furnator_basic'
        },
        {
            output: Item.of('powah:capacitor_basic', 4),
            pattern: [' SD', 'SIS', 'DS '],
            key: {
                S: 'immersiveengineering:ingot_steel',
                D: 'powah:dielectric_paste',
                I: 'mekanism:alloy_infused'
            },
            id: 'powah:crafting/capacitor_basic'
        },
        {
            output: Item.of('powah:dielectric_rod_horizontal', 3),
            pattern: ['DDD', 'RRR', 'DDD'],
            key: {
                D: 'powah:dielectric_paste',
                R: 'immersiveengineering:stick_steel'
            },
            id: 'powah:crafting/dielectric_rod_h'
        },
        {
            output: Item.of('powah:dielectric_rod', 3),
            pattern: ['DRD', 'DRD', 'DRD'],
            key: {
                D: 'powah:dielectric_paste',
                R: 'immersiveengineering:stick_steel'
            },
            id: 'powah:crafting/dielectric_rod'
        },
        {
            output: Item.of('powah:ender_gate_basic', 4),
            pattern: ['ACA', 'CEC', 'ACA'],
            key: {
                A: 'mekanism:alloy_infused',
                C: Item.of('powah:energy_cable_basic').ignoreNBT(),
                E: 'powah:ender_core'
            },
            id: 'powah:crafting/ender_gate_basic'
        },
        {
            output: Item.of('powah:energy_cable_basic', 6),
            pattern: ['DDD', 'ECE', 'DDD'],
            key: {
                D: 'powah:dielectric_rod_horizontal',
                C: 'powah:capacitor_basic',
                E: '#forge:ingots/electrum'
            },
            id: 'powah:crafting/cable_basic'
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
        {
            output: 'powah:energy_hopper_basic',
            pattern: ['RBR', 'CDC', 'RHR'],
            key: {
                C: 'powah:capacitor_basic_large',
                D: 'powah:dielectric_casing',
                R: 'powah:dielectric_rod',
                H: 'immersiveengineering:coil_hv',
                B: Item.of('powah:battery_basic').weakNBT()
            },
            id: 'powah:crafting/energy_hopper_basic'
        },
        {
            output: 'powah:energy_discharger_basic',
            pattern: ['RBR', 'CDC', 'RHR'],
            key: {
                C: 'powah:capacitor_basic_large',
                D: 'powah:dielectric_casing',
                R: 'powah:dielectric_rod',
                H: Item.of('powah:energy_hopper_basic').ignoreNBT(),
                B: Item.of('powah:battery_basic').weakNBT()
            },
            id: 'powah:crafting/energy_discharger_basic'
        },
        {
            output: Item.of('powah:reactor_basic', 4),
            pattern: ['PBP', 'CDC', 'PBP'],
            key: {
                C: 'powah:capacitor_basic_large',
                D: 'powah:dielectric_casing',
                P: 'chroma:dielectric_paste_block',
                B: 'mekanism:basic_control_circuit'
            },
            id: 'powah:crafting/reactor_basic'
        },
        {
            output: 'powah:solar_panel_hardened',
            pattern: ['PPP', 'CSC', 'IBI'],
            key: {
                C: 'powah:capacitor_hardened',
                S: Item.of('powah:solar_panel_basic').ignoreNBT(),
                P: 'powah:photoelectric_pane',
                B: 'mekanism:basic_control_circuit',
                I: 'powah:steel_energized'
            },
            id: 'powah:crafting/solar_panel_hardened'
        },
        {
            output: 'powah:thermo_generator_hardened',
            pattern: ['IAI', 'CTC', 'PRP'],
            key: {
                C: 'powah:capacitor_hardened',
                T: Item.of('powah:thermo_generator_basic').ignoreNBT(),
                R: 'immersiveengineering:radiator',
                I: 'powah:steel_energized',
                A: 'mekanism:alloy_infused',
                P: 'powah:thermoelectric_plate'
            },
            id: 'powah:crafting/thermo_generator_hardened'
        },
        {
            output: 'powah:magmator_hardened',
            pattern: ['III', 'CRC', 'ATA'],
            key: {
                C: 'powah:capacitor_hardened',
                T: Item.of('powah:magmator_basic').ignoreNBT(),
                R: 'powah:dielectric_casing',
                I: 'powah:steel_energized',
                A: 'mekanism:alloy_infused'
            },
            id: 'powah:crafting/magmator_hardened'
        },
        {
            output: 'powah:furnator_hardened',
            pattern: ['IMI', 'CTC', 'IRI'],
            key: {
                C: 'powah:capacitor_hardened',
                T: Item.of('powah:furnator_basic').ignoreNBT(),
                R: 'ironfurnaces:gold_furnace',
                I: 'powah:steel_energized',
                M: 'mekanism:basic_control_circuit'
            },
            id: 'powah:crafting/furnator_hardened'
        },
        {
            output: Item.of('powah:ender_gate_hardened', 4),
            pattern: ['ACA', 'CEC', 'ACA'],
            key: {
                A: 'mekanism:alloy_infused',
                C: Item.of('powah:energy_cable_hardened').ignoreNBT(),
                E: 'powah:ender_core'
            },
            id: 'powah:crafting/ender_gate_hardened'
        },
        {
            output: 'powah:energy_cell_hardened',
            pattern: ['SMS', 'CDC', 'SMS'],
            key: {
                S: '#forge:plates/steel',
                C: 'powah:capacitor_hardened',
                D: Item.of('powah:energy_cell_basic').ignoreNBT(),
                M: 'mekanism:basic_control_circuit'
            },
            id: 'powah:crafting/energy_cell_hardened'
        },
        {
            output: 'powah:ender_cell_hardened',
            pattern: ['SFS', 'CEC', 'SFS'],
            key: {
                S: '#forge:plates/steel',
                C: 'powah:capacitor_hardened',
                E: Item.of('powah:ender_cell_basic').ignoreNBT(),
                F: 'ae2:fluix_pearl'
            },
            id: 'powah:crafting/ender_cell_hardened'
        },
        {
            output: Item.of('powah:reactor_hardened', 4),
            pattern: ['PBP', 'CDC', 'PBP'],
            key: {
                C: 'powah:capacitor_hardened',
                D: 'powah:dielectric_casing',
                P: Item.of('powah:reactor_basic').ignoreNBT(),
                B: 'mekanism:basic_control_circuit'
            },
            id: 'powah:crafting/reactor_hardened'
        },
        {
            output: 'powah:energy_discharger_hardened',
            pattern: ['RBR', 'CDC', 'RHR'],
            key: {
                C: 'powah:capacitor_hardened',
                D: Item.of('powah:energy_discharger_basic').ignoreNBT(),
                R: 'powah:dielectric_rod',
                H: Item.of('powah:energy_hopper_hardened').ignoreNBT(),
                B: Item.of('powah:battery_hardened').weakNBT()
            },
            id: 'powah:crafting/energy_discharger_hardened'
        },
        {
            output: 'powah:energy_hopper_hardened',
            pattern: ['RBR', 'CDC', 'RHR'],
            key: {
                C: 'powah:capacitor_hardened',
                D: Item.of('powah:energy_hopper_basic').ignoreNBT(),
                R: 'powah:dielectric_rod',
                H: 'immersiveengineering:coil_hv',
                B: Item.of('powah:battery_hardened').weakNBT()
            },
            id: 'powah:crafting/energy_hopper_hardened'
        },
        {
            output: 'powah:player_transmitter_hardened',
            pattern: [' A ', 'CDC', 'CPC'],
            key: {
                A: 'powah:aerial_pearl',
                C: 'powah:capacitor_hardened',
                D: Item.of('powah:player_transmitter_basic').ignoreNBT(),
                P: 'chroma:dielectric_paste_block'
            },
            id: 'powah:crafting/player_tranmitter_hardened'
        },
        {
            output: 'powah:photoelectric_pane',
            pattern: ['DAD', 'AGA', 'DAD'],
            key: {
                A: 'mekanism:alloy_infused',
                D: 'powah:dielectric_paste',
                G: '#forge:glass_panes'
            },
            id: 'powah:crafting/photoelectric_pane'
        },
        {
            output: 'powah:energy_cell_blazing',
            pattern: ['PCP', 'BEB', 'PCP'],
            key: {
                E: Item.of('powah:energy_cell_hardened').ignoreNBT(),
                P: 'industrialforegoing:pink_slime_ingot',
                B: 'powah:capacitor_blazing',
                C: 'mekanism:advanced_control_circuit'
            },
            id: 'powah:crafting/energy_cell_blazing'
        },
        {
            output: 'powah:ender_cell_blazing',
            pattern: ['PCP', 'BEB', 'PCP'],
            key: {
                E: Item.of('powah:ender_cell_hardened').ignoreNBT(),
                P: 'industrialforegoing:pink_slime_ingot',
                B: 'powah:capacitor_blazing',
                C: 'ae2:fluix_pearl'
            },
            id: 'powah:crafting/ender_cell_blazing'
        },
        {
            output: 'powah:battery_blazing',
            pattern: ['DRD', 'PBP', 'DCD'],
            key: {
                B: Item.of('powah:battery_hardened').weakNBT(),
                D: 'powah:dielectric_paste',
                C: 'mekanism:advanced_control_circuit',
                P: 'powah:capacitor_blazing',
                R: 'powah:crystal_blazing'
            },
            id: 'powah:crafting/battery_blazing'
        },
        {
            output: Item.of('powah:ender_gate_blazing', 4),
            pattern: ['RCR', 'CEC', 'RCR'],
            key: {
                E: 'powah:ender_core',
                R: 'mekanism:alloy_reinforced',
                C: Item.of('powah:energy_cable_blazing').ignoreNBT()
            },
            id: 'powah:crafting/ender_gate_blazing'
        },
        {
            output: 'powah:energizing_rod_blazing',
            pattern: [' B ', 'CDC', ' E '],
            key: {
                D: 'powah:dielectric_casing',
                C: 'powah:capacitor_blazing',
                E: Item.of('powah:energizing_rod_hardened').ignoreNBT(),
                B: Item.of('powah:battery_blazing').weakNBT()
            },
            id: 'powah:crafting/energizing_rod_blazing'
        },
        {
            output: 'powah:furnator_blazing',
            pattern: ['PAP', 'CFC', 'PGP'],
            key: {
                F: Item.of('powah:furnator_hardened').ignoreNBT(),
                G: 'ironfurnaces:diamond_furnace',
                P: 'powah:crystal_blazing',
                C: 'powah:capacitor_blazing',
                A: 'mekanism:advanced_control_circuit'
            },
            id: 'powah:crafting/furnator_blazing'
        },
        {
            output: 'powah:magmator_blazing',
            pattern: ['BBB', 'CDC', 'RMR'],
            key: {
                D: 'powah:dielectric_casing',
                M: Item.of('powah:magmator_hardened').ignoreNBT(),
                R: 'mekanism:alloy_reinforced',
                C: 'powah:capacitor_blazing',
                B: 'powah:crystal_blazing'
            },
            id: 'powah:crafting/magmator_blazing'
        },
        {
            output: 'powah:thermo_generator_blazing',
            pattern: ['BRB', 'CMC', 'TDT'],
            key: {
                D: 'immersiveengineering:radiator',
                M: Item.of('powah:thermo_generator_hardened').ignoreNBT(),
                R: 'mekanism:alloy_reinforced',
                C: 'powah:capacitor_blazing',
                B: 'powah:crystal_blazing',
                T: 'powah:thermoelectric_plate'
            },
            id: 'powah:crafting/thermo_generator_blazing'
        },
        {
            output: 'powah:solar_panel_blazing',
            pattern: ['PPP', 'CMC', 'BDB'],
            key: {
                M: Item.of('powah:solar_panel_hardened').ignoreNBT(),
                P: 'powah:photoelectric_pane',
                C: 'powah:capacitor_blazing',
                B: 'powah:crystal_blazing',
                D: 'mekanism:advanced_control_circuit'
            },
            id: 'powah:crafting/solar_panel_blazing'
        },
        {
            output: 'powah:player_transmitter_blazing',
            pattern: [' A ', 'CPC', 'CDC'],
            key: {
                P: Item.of('powah:player_transmitter_hardened').ignoreNBT(),
                C: 'powah:capacitor_blazing',
                D: 'chroma:dielectric_paste_block',
                A: 'powah:aerial_pearl'
            },
            id: 'powah:crafting/player_tranmitter_blazing'
        },
        {
            output: 'powah:energy_hopper_blazing',
            pattern: ['DBD', 'CHC', 'DVD'],
            key: {
                H: Item.of('powah:energy_hopper_hardened').ignoreNBT(),
                V: 'immersiveengineering:coil_hv',
                D: 'powah:dielectric_rod',
                C: 'powah:capacitor_blazing',
                B: Item.of('powah:battery_blazing').weakNBT()
            },
            id: 'powah:crafting/energy_hopper_blazing'
        },
        {
            output: 'powah:energy_discharger_blazing',
            pattern: ['DBD', 'CHC', 'DVD'],
            key: {
                H: Item.of('powah:energy_discharger_hardened').ignoreNBT(),
                V: Item.of('powah:energy_hopper_blazing').ignoreNBT(),
                D: 'powah:dielectric_rod',
                C: 'powah:capacitor_blazing',
                B: Item.of('powah:battery_blazing').weakNBT()
            },
            id: 'powah:crafting/energy_discharger_blazing'
        },
        {
            output: 'powah:energy_cell_niotic',
            pattern: ['PCP', 'BEB', 'PCP'],
            key: {
                E: Item.of('powah:energy_cell_blazing').ignoreNBT(),
                P: 'undergarden:utherium_crystal',
                B: 'powah:capacitor_niotic',
                C: 'mekanism:ultimate_control_circuit'
            },
            id: 'powah:crafting/energy_cell_niotic'
        },
        {
            output: 'powah:ender_cell_niotic',
            pattern: ['PCP', 'BEB', 'PCP'],
            key: {
                E: Item.of('powah:ender_cell_blazing').ignoreNBT(),
                P: 'undergarden:utherium_crystal',
                B: 'powah:capacitor_niotic',
                C: 'ae2:fluix_pearl'
            },
            id: 'powah:crafting/ender_cell_niotic'
        },
        {
            output: 'powah:battery_niotic',
            pattern: ['DRD', 'PBP', 'DCD'],
            key: {
                B: Item.of('powah:battery_blazing').weakNBT(),
                D: 'powah:dielectric_paste',
                C: 'mekanism:ultimate_control_circuit',
                P: 'powah:capacitor_niotic',
                R: 'powah:crystal_niotic'
            },
            id: 'powah:crafting/battery_niotic'
        },
        {
            output: Item.of('powah:ender_gate_niotic', 4),
            pattern: ['RCR', 'CEC', 'RCR'],
            key: {
                E: 'powah:ender_core',
                R: 'mekanism:alloy_atomic',
                C: Item.of('powah:energy_cable_niotic').ignoreNBT()
            },
            id: 'powah:crafting/ender_gate_niotic'
        },
        {
            output: 'powah:energizing_rod_niotic',
            pattern: [' B ', 'CDC', ' E '],
            key: {
                D: 'powah:dielectric_casing',
                C: 'powah:capacitor_niotic',
                E: Item.of('powah:energizing_rod_blazing').ignoreNBT(),
                B: Item.of('powah:battery_niotic').weakNBT()
            },
            id: 'powah:crafting/energizing_rod_niotic'
        },
        {
            output: 'powah:furnator_niotic',
            pattern: ['PAP', 'CFC', 'PGP'],
            key: {
                F: Item.of('powah:furnator_blazing').ignoreNBT(),
                G: 'ironfurnaces:diamond_furnace',
                P: 'powah:crystal_niotic',
                C: 'powah:capacitor_niotic',
                A: 'mekanism:ultimate_control_circuit'
            },
            id: 'powah:crafting/furnator_niotic'
        },
        {
            output: 'powah:magmator_niotic',
            pattern: ['BBB', 'CDC', 'RMR'],
            key: {
                D: 'powah:dielectric_casing',
                M: Item.of('powah:magmator_blazing').ignoreNBT(),
                R: 'mekanism:alloy_atomic',
                C: 'powah:capacitor_niotic',
                B: 'powah:crystal_niotic'
            },
            id: 'powah:crafting/magmator_niotic'
        },
        {
            output: 'powah:thermo_generator_niotic',
            pattern: ['BRB', 'CMC', 'TDT'],
            key: {
                D: 'immersiveengineering:radiator',
                M: Item.of('powah:thermo_generator_blazing').ignoreNBT(),
                R: 'mekanism:alloy_atomic',
                C: 'powah:capacitor_niotic',
                B: 'powah:crystal_niotic',
                T: 'powah:thermoelectric_plate'
            },
            id: 'powah:crafting/thermo_generator_niotic'
        },
        {
            output: 'powah:solar_panel_niotic',
            pattern: ['PPP', 'CMC', 'BDB'],
            key: {
                M: Item.of('powah:solar_panel_blazing').ignoreNBT(),
                P: 'powah:photoelectric_pane',
                C: 'powah:capacitor_niotic',
                B: 'powah:crystal_niotic',
                D: 'mekanism:ultimate_control_circuit'
            },
            id: 'powah:crafting/solar_panel_niotic'
        },
        {
            output: 'powah:player_transmitter_niotic',
            pattern: [' A ', 'CPC', 'CDC'],
            key: {
                P: Item.of('powah:player_transmitter_blazing').ignoreNBT(),
                C: 'powah:capacitor_niotic',
                D: 'chroma:dielectric_paste_block',
                A: 'powah:aerial_pearl'
            },
            id: 'powah:crafting/player_tranmitter_niotic'
        },
        {
            output: 'powah:energy_hopper_niotic',
            pattern: ['DBD', 'CHC', 'DVD'],
            key: {
                H: Item.of('powah:energy_hopper_blazing').ignoreNBT(),
                V: 'immersiveengineering:coil_hv',
                D: 'powah:dielectric_rod',
                C: 'powah:capacitor_niotic',
                B: Item.of('powah:battery_niotic').weakNBT()
            },
            id: 'powah:crafting/energy_hopper_niotic'
        },
        {
            output: 'powah:energy_discharger_niotic',
            pattern: ['DBD', 'CHC', 'DVD'],
            key: {
                H: Item.of('powah:energy_discharger_blazing').ignoreNBT(),
                V: Item.of('powah:energy_hopper_niotic').ignoreNBT(),
                D: 'powah:dielectric_rod',
                C: 'powah:capacitor_niotic',
                B: Item.of('powah:battery_niotic').weakNBT()
            },
            id: 'powah:crafting/energy_discharger_niotic'
        },
        {
            output: 'powah:battery_spirited',
            pattern: ['DSD', 'CBC', 'DAD'],
            key: {
                D: 'powah:dielectric_paste',
                C: 'powah:capacitor_spirited',
                A: 'mekaevolution:absolute_control_circuit',
                S: 'powah:crystal_spirited',
                B: Item.of('powah:battery_niotic').weakNBT()
            },
            id: 'powah:crafting/battery_spirited'
        },
        {
            output: 'powah:energy_cell_spirited',
            pattern: ['PCP', 'BEB', 'PCP'],
            key: {
                E: Item.of('powah:energy_cell_niotic').ignoreNBT(),
                P: '#forge:ingots/desh',
                B: 'powah:capacitor_spirited',
                C: 'mekaevolution:absolute_control_circuit'
            },
            id: 'powah:crafting/energy_cell_spirited'
        },
        {
            output: 'powah:ender_cell_spirited',
            pattern: ['PCP', 'BEB', 'PCP'],
            key: {
                E: Item.of('powah:ender_cell_niotic').ignoreNBT(),
                P: '#forge:ingots/desh',
                B: 'powah:capacitor_spirited',
                C: 'ae2:fluix_pearl'
            },
            id: 'powah:crafting/ender_cell_spirited'
        },
        {
            output: Item.of('powah:ender_gate_spirited', 4),
            pattern: ['RCR', 'CEC', 'RCR'],
            key: {
                E: 'powah:ender_core',
                R: 'chroma:absolute_alloy',
                C: Item.of('powah:energy_cable_spirited').ignoreNBT()
            },
            id: 'powah:crafting/ender_gate_spirited'
        },
        {
            output: 'powah:energizing_rod_spirited',
            pattern: [' B ', 'CDC', ' E '],
            key: {
                D: 'powah:dielectric_casing',
                C: 'powah:capacitor_spirited',
                E: Item.of('powah:energizing_rod_niotic').ignoreNBT(),
                B: Item.of('powah:battery_spirited').weakNBT()
            },
            id: 'powah:crafting/energizing_rod_spirited'
        },
        {
            output: 'powah:furnator_spirited',
            pattern: ['PAP', 'CFC', 'PGP'],
            key: {
                F: Item.of('powah:furnator_niotic').ignoreNBT(),
                G: 'ironfurnaces:emerald_furnace',
                P: 'powah:crystal_spirited',
                C: 'powah:capacitor_spirited',
                A: 'mekaevolution:absolute_control_circuit'
            },
            id: 'powah:crafting/furnator_spirited'
        },
        {
            output: 'powah:magmator_spirited',
            pattern: ['BBB', 'CDC', 'RMR'],
            key: {
                D: 'powah:dielectric_casing',
                M: Item.of('powah:magmator_niotic').ignoreNBT(),
                R: 'chroma:absolute_alloy',
                C: 'powah:capacitor_spirited',
                B: 'powah:crystal_spirited'
            },
            id: 'powah:crafting/magmator_spirited'
        },
        {
            output: 'powah:thermo_generator_spirited',
            pattern: ['BRB', 'CMC', 'TDT'],
            key: {
                D: 'immersiveengineering:radiator',
                M: Item.of('powah:thermo_generator_niotic').ignoreNBT(),
                R: 'chroma:absolute_alloy',
                C: 'powah:capacitor_spirited',
                B: 'powah:crystal_spirited',
                T: 'powah:thermoelectric_plate'
            },
            id: 'powah:crafting/thermo_generator_spirited'
        },
        {
            output: 'powah:solar_panel_spirited',
            pattern: ['PPP', 'CMC', 'BDB'],
            key: {
                M: Item.of('powah:solar_panel_niotic').ignoreNBT(),
                P: 'powah:photoelectric_pane',
                C: 'powah:capacitor_spirited',
                B: 'powah:crystal_spirited',
                D: 'mekaevolution:absolute_control_circuit'
            },
            id: 'powah:crafting/solar_panel_spirited'
        },
        {
            output: 'powah:player_transmitter_spirited',
            pattern: [' A ', 'CPC', 'CDC'],
            key: {
                P: Item.of('powah:player_transmitter_niotic').ignoreNBT(),
                C: 'powah:capacitor_spirited',
                D: 'chroma:dielectric_paste_block',
                A: 'powah:aerial_pearl'
            },
            id: 'powah:crafting/player_tranmitter_spirited'
        },
        {
            output: 'powah:energy_hopper_spirited',
            pattern: ['DBD', 'CHC', 'DVD'],
            key: {
                H: Item.of('powah:energy_hopper_niotic').ignoreNBT(),
                V: 'immersiveengineering:coil_hv',
                D: 'powah:dielectric_rod',
                C: 'powah:capacitor_spirited',
                B: Item.of('powah:battery_spirited').weakNBT()
            },
            id: 'powah:crafting/energy_hopper_spirited'
        },
        {
            output: 'powah:energy_discharger_spirited',
            pattern: ['DBD', 'CHC', 'DVD'],
            key: {
                H: Item.of('powah:energy_discharger_niotic').ignoreNBT(),
                V: Item.of('powah:energy_hopper_spirited').ignoreNBT(),
                D: 'powah:dielectric_rod',
                C: 'powah:capacitor_spirited',
                B: Item.of('powah:battery_spirited').weakNBT()
            },
            id: 'powah:crafting/energy_discharger_spirited'
        },

        {
            output: 'powah:battery_nitro',
            pattern: ['DSD', 'CBC', 'DAD'],
            key: {
                D: 'powah:dielectric_paste',
                C: 'powah:capacitor_nitro',
                A: 'mekaevolution:supreme_control_circuit',
                S: 'powah:crystal_nitro',
                B: Item.of('powah:battery_spirited').weakNBT()
            },
            id: 'powah:crafting/battery_nitro'
        },
        {
            output: 'powah:energy_cell_nitro',
            pattern: ['PCP', 'BEB', 'PCP'],
            key: {
                E: Item.of('powah:energy_cell_spirited').ignoreNBT(),
                P: 'fluxnetworks:flux_core',
                B: 'powah:capacitor_nitro',
                C: 'mekaevolution:supreme_control_circuit'
            },
            id: 'powah:crafting/energy_cell_nitro'
        },
        {
            output: 'powah:ender_cell_nitro',
            pattern: ['PCP', 'BEB', 'PCP'],
            key: {
                E: Item.of('powah:ender_cell_spirited').ignoreNBT(),
                P: 'fluxnetworks:flux_core',
                B: 'powah:capacitor_nitro',
                C: 'ae2:fluix_pearl'
            },
            id: 'powah:crafting/ender_cell_nitro'
        },
        {
            output: Item.of('powah:ender_gate_nitro', 4),
            pattern: ['RCR', 'CEC', 'RCR'],
            key: {
                E: 'powah:ender_core',
                R: 'chroma:supreme_alloy',
                C: Item.of('powah:energy_cable_nitro').ignoreNBT()
            },
            id: 'powah:crafting/ender_gate_nitro'
        },
        {
            output: 'powah:energizing_rod_nitro',
            pattern: [' B ', 'CDC', ' E '],
            key: {
                D: 'powah:dielectric_casing',
                C: 'powah:capacitor_nitro',
                E: Item.of('powah:energizing_rod_spirited').ignoreNBT(),
                B: Item.of('powah:battery_nitro').weakNBT()
            },
            id: 'powah:crafting/energizing_rod_nitro'
        },
        {
            output: 'powah:furnator_nitro',
            pattern: ['PAP', 'CFC', 'PGP'],
            key: {
                F: Item.of('powah:furnator_spirited').ignoreNBT(),
                G: 'ironfurnaces:netherite_furnace',
                P: 'powah:crystal_nitro',
                C: 'powah:capacitor_nitro',
                A: 'mekaevolution:supreme_control_circuit'
            },
            id: 'powah:crafting/furnator_nitro'
        },
        {
            output: 'powah:magmator_nitro',
            pattern: ['BBB', 'CDC', 'RMR'],
            key: {
                D: 'powah:dielectric_casing',
                M: Item.of('powah:magmator_spirited').ignoreNBT(),
                R: 'chroma:supreme_alloy',
                C: 'powah:capacitor_nitro',
                B: 'powah:crystal_nitro'
            },
            id: 'powah:crafting/magmator_nitro'
        },
        {
            output: 'powah:thermo_generator_nitro',
            pattern: ['BRB', 'CMC', 'TDT'],
            key: {
                D: 'immersiveengineering:radiator',
                M: Item.of('powah:thermo_generator_spirited').ignoreNBT(),
                R: 'chroma:supreme_alloy',
                C: 'powah:capacitor_nitro',
                B: 'powah:crystal_nitro',
                T: 'powah:thermoelectric_plate'
            },
            id: 'powah:crafting/thermo_generator_nitro'
        },
        {
            output: 'powah:solar_panel_nitro',
            pattern: ['PPP', 'CMC', 'BDB'],
            key: {
                M: Item.of('powah:solar_panel_spirited').ignoreNBT(),
                P: 'powah:photoelectric_pane',
                C: 'powah:capacitor_nitro',
                B: 'powah:crystal_nitro',
                D: 'mekaevolution:supreme_control_circuit'
            },
            id: 'powah:crafting/solar_panel_nitro'
        },
        {
            output: 'powah:player_transmitter_nitro',
            pattern: [' A ', 'CPC', 'CDC'],
            key: {
                P: Item.of('powah:player_transmitter_spirited').ignoreNBT(),
                C: 'powah:capacitor_nitro',
                D: 'chroma:dielectric_paste_block',
                A: 'powah:aerial_pearl'
            },
            id: 'powah:crafting/player_tranmitter_nitro'
        },
        {
            output: 'powah:energy_hopper_nitro',
            pattern: ['DBD', 'CHC', 'DVD'],
            key: {
                H: Item.of('powah:energy_hopper_spirited').ignoreNBT(),
                V: 'immersiveengineering:coil_hv',
                D: 'powah:dielectric_rod',
                C: 'powah:capacitor_nitro',
                B: Item.of('powah:battery_nitro').weakNBT()
            },
            id: 'powah:crafting/energy_hopper_nitro'
        },
        {
            output: 'powah:energy_discharger_nitro',
            pattern: ['DBD', 'CHC', 'DVD'],
            key: {
                H: Item.of('powah:energy_discharger_spirited').ignoreNBT(),
                V: Item.of('powah:energy_hopper_nitro').ignoreNBT(),
                D: 'powah:dielectric_rod',
                C: 'powah:capacitor_nitro',
                B: Item.of('powah:battery_nitro').weakNBT()
            },
            id: 'powah:crafting/energy_discharger_nitro'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
