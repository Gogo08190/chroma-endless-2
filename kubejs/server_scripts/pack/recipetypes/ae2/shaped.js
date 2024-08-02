onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/ae2/shaped/';
    const recipes = [
        {
            output: 'ae2:charger',
            pattern: ['STS', 'S  ', 'SCS'],
            key: {
                S: '#forge:ingots/steel',
                T: 'create:electron_tube',
                C: 'immersiveengineering:tesla_coil'
            },
            id: 'ae2:network/blocks/crystal_processing_charger'
        },
        {
            output: 'ae2:quartz_growth_accelerator',
            pattern: ['SCS', 'EFE', 'SCS'],
            key: {
                S: '#forge:ingots/steel',
                E: 'immersiveengineering:component_electronic',
                C: '#ae2:glass_cable',
                F: 'ae2:fluix_block'
            },
            id: 'ae2:network/blocks/crystal_processing_quartz_growth_accelerator'
        },
        {
            output: 'ae2:crafting_terminal',
            pattern: [' CG', ' PT', ' CG'],
            key: {
                C: 'immersiveengineering:craftingtable',
                G: 'ae2:quartz_glass',
                P: 'ae2:calculation_processor',
                T: 'ae2:terminal'
            },
            id: 'ae2:network/parts/terminals_crafting'
        },
        {
            output: 'ae2:terminal',
            pattern: [' CG', ' PT', ' DG'],
            key: {
                C: 'ae2:annihilation_core',
                G: 'ae2:quartz_glass',
                P: 'ae2:logic_processor',
                T: 'ae2:semi_dark_monitor',
                D: 'ae2:formation_core'
            },
            id: 'ae2:network/parts/terminals'
        },
        {
            output: 'ae2:storage_bus',
            pattern: ['GIG', 'PTP'],
            key: {
                G: 'ae2:quartz_glass',
                I: '#ae2:interface',
                P: '#forge:plates/lead',
                T: 'create:electron_tube'
            },
            id: 'ae2:network/parts/storage_bus'
        },
        {
            output: 'ae2:interface',
            pattern: ['SGS', 'ALF', 'SGS'],
            key: {
                S: '#forge:ingots/steel',
                G: 'ae2:quartz_glass',
                A: 'ae2:annihilation_core',
                L: 'immersiveengineering:light_engineering',
                F: 'ae2:formation_core'
            },
            id: 'ae2:network/blocks/interfaces_interface'
        },
        {
            output: 'ae2:semi_dark_monitor',
            pattern: [' DG', 'BRG', ' DG'],
            key: {
                D: '#forge:dusts/glowstone',
                G: 'ae2:quartz_vibrant_glass',
                B: '#forge:ingots/brass',
                R: '#forge:dusts/redstone'
            },
            id: 'ae2:network/parts/panels_semi_dark_monitor'
        },
        {
            output: 'ae2:formation_core',
            pattern: ['QFP'],
            key: {
                Q: '#forge:gems/certus_quartz',
                F: '#forge:dusts/fluix',
                P: 'ae2:logic_processor'
            },
            id: 'ae2:materials/formationcore'
        },
        {
            output: 'ae2:annihilation_core',
            pattern: ['QFP'],
            key: {
                Q: '#forge:gems/quartz',
                F: '#forge:dusts/fluix',
                P: 'ae2:logic_processor'
            },
            id: 'ae2:materials/annihilationcore'
        },
        {
            output: 'ae2:inscriber',
            pattern: ['CPC', 'TAT', 'CBC'],
            key: {
                C: '#forge:ingots/compressed_iron',
                P: 'create:mechanical_press',
                T: 'pneumaticcraft:transistor',
                A: 'mekanism:elite_control_circuit',
                B: Item.of('solarpanels:improved_energy_tablet').weakNBT()
            },
            id: 'ae2:network/blocks/inscribers'
        },
        {
            output: 'ae2:drive',
            pattern: ['CPC', 'TAT', 'CPC'],
            key: {
                C: '#forge:ingots/compressed_iron',
                P: 'ae2:engineering_processor',
                T: '#forge:ingots/fluix_steel',
                A: 'mekanism:alloy_infused'
            },
            id: 'ae2:network/blocks/storage_drive'
        },
        {
            output: 'ae2:chest',
            pattern: ['GTG', 'CAC', 'INI'],
            key: {
                I: '#forge:ingots/compressed_iron',
                G: 'ae2:quartz_vibrant_glass',
                T: 'ae2:terminal',
                C: 'ae2:fluix_glass_cable',
                A: 'pneumaticcraft:reinforced_chest',
                N: 'mekanism:basic_control_circuit'
            },
            id: 'ae2:network/blocks/storage_chest'
        },
        {
            output: 'ae2:security_station',
            pattern: ['GTG', 'CAC', 'INI'],
            key: {
                I: '#forge:ingots/compressed_iron',
                G: 'powah:steel_energized',
                T: 'ae2:chest',
                C: 'ae2:fluix_glass_cable',
                A: 'ae2:cell_component_16k',
                N: 'ae2:engineering_processor'
            },
            id: 'ae2:network/blocks/security_station'
        },
        {
            output: 'ae2:wireless_access_point',
            pattern: [' A ', 'CPC', 'GCG'],
            key: {
                C: '#forge:ingots/compressed_iron',
                A: 'ae2:wireless_receiver',
                P: 'ae2:calculation_processor',
                G: 'ae2:fluix_glass_cable'
            },
            id: 'ae2:network/wireless_access_point'
        },
        {
            output: 'ae2:cell_workbench',
            pattern: ['QPQ', 'THT', 'CCC'],
            key: {
                C: '#forge:ingots/compressed_iron',
                Q: '#ae2:all_certus_quartz',
                T: 'pneumaticcraft:transistor',
                P: 'ae2:calculation_processor',
                H: 'ae2:item_cell_housing'
            },
            id: 'ae2:network/blocks/cell_workbench'
        },
        {
            output: 'ae2:energy_cell',
            pattern: ['QEQ', 'EHE', 'QEQ'],
            key: {
                Q: '#ae2:all_certus_quartz',
                E: 'powah:steel_energized',
                H: 'pneumaticcraft:capacitor'
            },
            id: 'ae2:network/blocks/energy_energy_cell'
        },
        {
            output: 'ae2:condenser',
            pattern: ['CGC', 'GPG', 'CGC'],
            key: {
                C: '#forge:ingots/compressed_iron',
                G: 'ae2:quartz_vibrant_glass',
                P: 'ae2:fluix_pearl'
            },
            id: 'ae2:network/blocks/io_condenser'
        },
        {
            output: 'ae2:wireless_terminal',
            pattern: ['ENE', 'CTC', 'EBE'],
            key: {
                E: 'powah:steel_energized',
                N: 'ae2:wireless_receiver',
                C: 'powah:capacitor_basic_large',
                T: 'ae2:terminal',
                B: 'ae2:dense_energy_cell'
            },
            id: 'ae2:network/wireless_terminal'
        },
        {
            output: 'ae2:item_cell_housing',
            pattern: ['GRG', 'R R', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: '#forge:dusts/redstone',
                S: '#forge:plates/steel'
            },
            id: 'ae2:network/cells/item_cell_housing'
        },
        {
            output: 'ae2:fluid_cell_housing',
            pattern: ['GRG', 'R R', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: '#forge:dusts/redstone',
                S: '#forge:plates/copper'
            },
            id: 'ae2:network/cells/fluid_cell_housing'
        },
        {
            output: 'ae2:wireless_receiver',
            pattern: [' F ', 'PQP', ' P '],
            key: {
                F: 'ae2:fluix_pearl',
                P: 'pneumaticcraft:plastic',
                Q: 'ae2:quartz_fiber'
            },
            id: 'ae2:network/wireless_part'
        },
        {
            output: 'ae2:wireless_booster',
            pattern: ['EEE', 'CFC', ' C '],
            key: {
                E: '#forge:dusts/ender_pearl',
                C: '#forge:ingots/compressed_iron',
                F: 'ae2:fluix_pearl'
            },
            id: 'ae2:network/wireless_booster'
        },
        {
            output: 'ae2:cell_component_1k',
            pattern: ['RQR', 'QPQ', 'RQR'],
            key: {
                R: 'extendedcrafting:redstone_ingot',
                Q: 'ae2:certus_quartz_crystal',
                P: 'ae2:logic_processor'
            },
            id: 'ae2:network/cells/item_storage_components_cell_1k_part'
        },
        {
            output: 'ae2:spatial_cell_component_2',
            pattern: ['RQR', 'QPQ', 'RQR'],
            key: {
                R: 'mna:superheated_purified_vinteum_ingot',
                Q: 'ae2:fluix_pearl',
                P: '#lazierae2:processors'
            },
            id: 'ae2:network/cells/spatial_components'
        },
        {
            output: 'ae2:item_storage_cell_1k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: '#forge:dusts/redstone',
                S: '#forge:plates/steel',
                A: 'ae2:cell_component_1k'
            },
            id: 'ae2:network/cells/item_storage_cell_1k'
        },
        {
            output: 'ae2:item_storage_cell_4k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: '#forge:dusts/redstone',
                S: '#forge:plates/steel',
                A: 'ae2:cell_component_4k'
            },
            id: 'ae2:network/cells/item_storage_cell_4k'
        },
        {
            output: 'ae2:item_storage_cell_16k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: '#forge:dusts/redstone',
                S: '#forge:plates/steel',
                A: 'ae2:cell_component_16k'
            },
            id: 'ae2:network/cells/item_storage_cell_16k'
        },
        {
            output: 'ae2:item_storage_cell_64k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: '#forge:dusts/redstone',
                S: '#forge:plates/steel',
                A: 'ae2:cell_component_64k'
            },
            id: 'ae2:network/cells/item_storage_cell_64k'
        },
        {
            output: 'ae2:item_storage_cell_256k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: '#forge:dusts/redstone',
                S: '#forge:plates/steel',
                A: 'ae2:cell_component_256k'
            },
            id: 'ae2:network/cells/item_storage_cell_256k'
        },
        {
            output: 'ae2:fluid_storage_cell_1k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: '#forge:dusts/redstone',
                S: '#forge:plates/copper',
                A: 'ae2:cell_component_1k'
            },
            id: 'ae2:network/cells/fluid_storage_cell_1k'
        },
        {
            output: 'ae2:fluid_storage_cell_4k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: '#forge:dusts/redstone',
                S: '#forge:plates/copper',
                A: 'ae2:cell_component_4k'
            },
            id: 'ae2:network/cells/fluid_storage_cell_4k'
        },
        {
            output: 'ae2:fluid_storage_cell_16k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: '#forge:dusts/redstone',
                S: '#forge:plates/copper',
                A: 'ae2:cell_component_16k'
            },
            id: 'ae2:network/cells/fluid_storage_cell_16k'
        },
        {
            output: 'ae2:fluid_storage_cell_64k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: '#forge:dusts/redstone',
                S: '#forge:plates/copper',
                A: 'ae2:cell_component_64k'
            },
            id: 'ae2:network/cells/fluid_storage_cell_64k'
        },
        {
            output: 'ae2:fluid_storage_cell_256k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: '#forge:dusts/redstone',
                S: '#forge:plates/copper',
                A: 'ae2:cell_component_256k'
            },
            id: 'ae2:network/cells/fluid_storage_cell_256k'
        },
        {
            output: 'appmek:chemical_cell_housing',
            pattern: ['GRG', 'R R', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: 'mekanism:alloy_infused',
                S: 'mekanism:hdpe_sheet'
            },
            id: 'appmek:chemical_cell_housing'
        },
        {
            output: 'appmek:chemical_storage_cell_1k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: 'mekanism:alloy_infused',
                S: 'mekanism:hdpe_sheet',
                A: 'ae2:cell_component_1k'
            },
            id: `${id_prefix}chemical_storage_cell_1k`
        },
        {
            output: 'appmek:chemical_storage_cell_4k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: 'mekanism:alloy_infused',
                S: 'mekanism:hdpe_sheet',
                A: 'ae2:cell_component_4k'
            },
            id: `${id_prefix}chemical_storage_cell_4k`
        },
        {
            output: 'appmek:chemical_storage_cell_16k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: 'mekanism:alloy_infused',
                S: 'mekanism:hdpe_sheet',
                A: 'ae2:cell_component_16k'
            },
            id: `${id_prefix}chemical_storage_cell_16k`
        },
        {
            output: 'appmek:chemical_storage_cell_64k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: 'mekanism:alloy_infused',
                S: 'mekanism:hdpe_sheet',
                A: 'ae2:cell_component_64k'
            },
            id: `${id_prefix}chemical_storage_cell_64k`
        },
        {
            output: 'appmek:chemical_storage_cell_256k',
            pattern: ['GRG', 'RAR', 'SSS'],
            key: {
                G: 'ae2:quartz_glass',
                R: 'mekanism:alloy_infused',
                S: 'mekanism:hdpe_sheet',
                A: 'ae2:cell_component_256k'
            },
            id: `${id_prefix}chemical_storage_cell_256k`
        },
        {
            output: 'ae2:molecular_assembler',
            pattern: ['PUP', 'AVF', 'PUP'],
            key: {
                V: 'ae2:quartz_vibrant_glass',
                P: 'mekanism:hdpe_sheet',
                U: 'mekanism:ultimate_control_circuit',
                A: 'ae2:annihilation_core',
                F: 'ae2:formation_core'
            },
            id: 'ae2:network/crafting/molecular_assembler'
        },
        {
            output: 'ae2:pattern_provider',
            pattern: ['RAR', 'HTH', 'RFR'],
            key: {
                T: 'mekanism:alloy_atomic',
                A: 'ae2:annihilation_core',
                F: 'ae2:formation_core',
                H: 'mekanism:hdpe_rod',
                R: 'undergarden:regalium_crystal'
            },
            id: 'ae2:network/blocks/pattern_providers_interface'
        },
        {
            output: Item.of('ae2:blank_pattern', 2),
            pattern: ['VRV', 'RCR', 'HHH'],
            key: {
                C: 'ae2:certus_quartz_crystal',
                H: 'mekanism:hdpe_sheet',
                R: 'undergarden:regalium_crystal',
                V: 'ae2:quartz_vibrant_glass'
            },
            id: 'ae2:network/crafting/patterns_blank'
        },
        {
            output: 'ae2additions:me_wireless_transceiver',
            pattern: ['SPS', 'WAW', 'SPS'],
            key: {
                S: '#forge:ingots/fluix_steel',
                P: 'ae2:engineering_processor',
                W: 'ae2:wireless_receiver',
                A: 'ae2:singularity'
            },
            id: 'ae2additions:blocks/wireless_transceiver'
        },
        {
            output: 'ae2:sky_stone_tank',
            pattern: ['SSS', 'STS', 'SSS'],
            key: {
                S: 'ae2:sky_stone_block',
                T: 'create:fluid_tank'
            },
            id: 'ae2:misc/tank_sky_stone'
        },
        {
            output: 'ae2wtlib:infinity_booster_card',
            pattern: ['PSP', 'CWC'],
            key: {
                S: 'aeinfinitybooster:infinity_card',
                P: 'ae2:fluix_pearl',
                W: 'ae2:wireless_receiver',
                C: 'ae2:advanced_card'
            },
            id: 'ae2wtlib:infinity_booster_card'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
