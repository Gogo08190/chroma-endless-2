onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/shaped/';
    const recipes = [
        {
            output: 'mekanism:metallurgic_infuser',
            pattern: ['SES', 'FCA', 'SGS'],
            key: {
                S: '#forge:ingots/steel',
                E: 'immersiveengineering:furnace_heater',
                F: 'ae2:formation_core',
                C: 'mekanism:steel_casing',
                A: 'ae2:annihilation_core',
                G: 'immersiveengineering:component_electronic_adv'
            },
            id: 'mekanism:metallurgic_infuser'
        },
        {
            output: 'mekanism:energized_smelter',
            pattern: ['SES', 'FCF', 'SES'],
            key: {
                S: '#forge:ingots/steel',
                E: 'mekanism:basic_control_circuit',
                F: 'ironfurnaces:silver_furnace',
                C: 'mekanism:steel_casing'
            },
            id: 'mekanism:energized_smelter'
        },
        {
            output: 'mekanism:crusher',
            pattern: ['SES', 'FCF', 'SAS'],
            key: {
                S: '#forge:ingots/steel',
                F: 'mekanism:basic_control_circuit',
                E: 'create:crushing_wheel',
                C: 'mekanism:steel_casing',
                A: 'immersiveengineering:component_electronic_adv'
            },
            id: 'mekanism:crusher'
        },
        {
            output: 'mekanism:combiner',
            pattern: ['SES', 'FCF', 'SAS'],
            key: {
                S: 'mekanism:alloy_infused',
                F: 'mekanism:basic_control_circuit',
                E: 'create:mechanical_press',
                C: 'mekanism:steel_casing',
                A: 'immersiveengineering:component_electronic_adv'
            },
            id: 'mekanism:combiner'
        },
        {
            output: Item.of('mekanism:basic_universal_cable', 8),
            pattern: ['QQQ', 'STS', 'QQQ'],
            key: {
                Q: 'ae2:quartz_fiber',
                S: '#forge:ingots/steel',
                T: 'create:electron_tube'
            },
            id: 'mekanism:transmitter/universal_cable/basic'
        },
        {
            output: Item.of('mekanism:basic_thermodynamic_conductor', 8),
            pattern: ['QQQ', 'STS', 'QQQ'],
            key: {
                Q: 'ae2:quartz_fiber',
                S: '#forge:ingots/steel',
                T: '#forge:plates/copper'
            },
            id: 'mekanism:transmitter/thermodynamic_conductor/basic'
        },
        {
            output: Item.of('mekanism:basic_pressurized_tube', 8),
            pattern: ['QQQ', 'STS', 'QQQ'],
            key: {
                Q: 'ae2:quartz_fiber',
                S: '#forge:ingots/steel',
                T: 'mekanism:alloy_infused'
            },
            id: 'mekanism:transmitter/pressurized_tube/basic'
        },
        {
            output: Item.of('mekanism:basic_logistical_transporter', 8),
            pattern: ['QQQ', 'STS', 'QQQ'],
            key: {
                Q: 'ae2:quartz_fiber',
                S: '#forge:ingots/steel',
                T: 'mekanism:basic_control_circuit'
            },
            id: 'mekanism:transmitter/logistical_transporter/basic'
        },
        {
            output: Item.of('mekanism:basic_mechanical_pipe', 8),
            pattern: ['QQQ', 'STS', 'QQQ'],
            key: {
                Q: 'ae2:quartz_fiber',
                S: '#forge:ingots/steel',
                T: 'immersiveengineering:fluid_pipe'
            },
            id: 'mekanism:transmitter/mechanical_pipe/basic'
        },
        {
            output: 'mekanism:basic_tier_installer',
            pattern: ['RCR', 'HIH', 'RCR'],
            key: {
                R: '#forge:dusts/redstone',
                C: 'mekanism:basic_control_circuit',
                H: '#forge:ingots/hop_graphite',
                I: '#forge:storage_blocks/iron'
            },
            id: 'mekanism:tier_installer/basic'
        },
        {
            output: 'mekanism:advanced_tier_installer',
            pattern: ['RCR', 'HIH', 'RCR'],
            key: {
                R: 'mekanism:alloy_infused',
                C: 'mekanism:advanced_control_circuit',
                H: '#blue_skies:ingots/ventium',
                I: '#forge:storage_blocks/iron'
            },
            id: 'mekanism:tier_installer/advanced'
        },
        {
            output: 'mekanism:elite_tier_installer',
            pattern: ['RCR', 'HIH', 'RCR'],
            key: {
                R: 'mekanism:alloy_reinforced',
                C: 'mekanism:elite_control_circuit',
                H: '#forge:ingots/scandium',
                I: '#forge:storage_blocks/iron'
            },
            id: 'mekanism:tier_installer/elite'
        },
        {
            output: 'mekanism:upgrade_energy',
            pattern: [' G ', 'AQA', ' G '],
            key: {
                G: '#thermal:glass/hardened',
                A: 'mekanism:alloy_infused',
                Q: 'ae2:charged_certus_quartz_crystal'
            },
            id: 'mekanism:upgrade/energy'
        },
        {
            output: 'mekanism:upgrade_speed',
            pattern: [' G ', 'AQA', ' G '],
            key: {
                G: '#thermal:glass/hardened',
                A: 'mekanism:alloy_infused',
                Q: 'extendedcrafting:luminessence'
            },
            id: 'mekanism:upgrade/speed'
        },
        {
            output: 'solarpanels:improved_energy_tablet',
            pattern: ['EGE', 'ATA', 'EGE'],
            key: {
                E: 'chroma:enriched_essence_of_darkness',
                G: 'chroma:enriched_refined_glowstone',
                A: 'mekanism:alloy_reinforced',
                T: 'mekanism:energy_tablet'
            },
            id: 'solarpanels:improved_energy_tablet'
        },
        {
            output: 'mekanism:energy_tablet',
            pattern: ['RER', 'CEC', 'RER'],
            key: {
                R: 'extendedcrafting:redstone_ingot',
                E: 'powah:steel_energized',
                C: 'mekanism:alloy_infused'
            },
            id: 'mekanism:energy_tablet'
        },
        {
            output: 'mekanismgenerators:solar_panel',
            pattern: ['GGG', 'RAR', 'CCC'],
            key: {
                R: 'extendedcrafting:redstone_ingot',
                G: 'botania:mana_glass_pane',
                A: 'mekanism:alloy_infused',
                C: '#forge:ingots/compressed_iron'
            },
            id: 'mekanismgenerators:solar_panel'
        },
        {
            output: 'mekanism:electric_pump',
            pattern: [' P ', 'ASA', 'OOO'],
            key: {
                P: 'pneumaticcraft:vacuum_pump',
                A: 'mekanism:alloy_infused',
                S: 'mekanism:steel_casing',
                O: '#forge:ingots/osmium'
            },
            id: 'mekanism:electric_pump'
        },
        {
            output: 'mekanismgenerators:heat_generator',
            pattern: ['RRR', 'ESE', 'ICI'],
            key: {
                S: 'mekanism:steel_casing',
                R: 'pneumaticcraft:heat_sink',
                E: 'immersiveengineering:furnace_heater',
                I: '#forge:ingots/steel',
                C: 'mekanism:advanced_control_circuit'
            },
            id: 'mekanismgenerators:generator/heat'
        },
        {
            output: 'mekanism:fuelwood_heater',
            pattern: ['ICI', 'RSR', 'III'],
            key: {
                S: 'mekanism:steel_casing',
                R: 'pneumaticcraft:heat_sink',
                I: '#forge:ingots/steel',
                C: 'mekanism:advanced_control_circuit'
            },
            id: 'mekanism:fuelwood_heater'
        },
        {
            output: 'mekanism:osmium_compressor',
            pattern: ['ACA', 'BSB', 'ACA'],
            key: {
                S: 'mekanism:steel_casing',
                A: 'pneumaticcraft:capacitor',
                C: 'mekanism:advanced_control_circuit',
                B: '#forge:storage_blocks/osmium'
            },
            id: 'mekanism:osmium_compressor'
        },
        {
            output: 'mekanism:enrichment_chamber',
            pattern: ['RCR', 'HSH', 'RCR'],
            key: {
                R: 'extendedcrafting:redstone_ingot',
                H: 'pneumaticcraft:capacitor',
                C: 'mekanism:advanced_control_circuit',
                S: 'mekanism:crusher'
            },
            id: 'mekanism:enrichment_chamber'
        },
        {
            output: 'mekanism:precision_sawmill',
            pattern: ['RCR', 'HSH', 'RCR'],
            key: {
                R: 'powah:energized_steel_block',
                H: Item.of('immersiveengineering:sawblade', '{Damage:0}').ignoreNBT(),
                C: 'mekanism:advanced_control_circuit',
                S: 'mekanism:steel_casing'
            },
            id: 'mekanism:precision_sawmill'
        },
        {
            output: 'mekanismgenerators:bio_generator',
            pattern: ['RAR', 'BSB', 'ICI'],
            key: {
                S: 'mekanism:steel_casing',
                I: '#forge:ingots/steel',
                C: 'powah:capacitor_blazing',
                B: 'mekanism:bio_fuel',
                R: 'extendedcrafting:redstone_ingot',
                A: 'mekanism:alloy_reinforced'
            },
            id: 'mekanismgenerators:generator/bio'
        },
        {
            output: 'mekanismgenerators:advanced_solar_generator',
            pattern: ['SAS', 'SES', 'ICI'],
            key: {
                E: Item.of('solarpanels:improved_energy_tablet').weakNBT(),
                I: '#forge:ingots/refined_obsidian',
                C: 'powah:capacitor_blazing',
                A: 'mekanism:alloy_reinforced',
                S: Item.of('mekanismgenerators:solar_generator').ignoreNBT()
            },
            id: 'mekanismgenerators:generator/advanced_solar'
        },
        {
            output: 'mekanism:resistive_heater',
            pattern: ['IAI', 'CSC', 'IEI'],
            key: {
                E: Item.of('solarpanels:improved_energy_tablet').weakNBT(),
                I: '#forge:ingots/steel',
                C: 'powah:capacitor_blazing',
                A: 'pneumaticcraft:heat_sink',
                S: 'mekanism:steel_casing'
            },
            id: 'mekanism:resistive_heater'
        },
        {
            output: 'mekanism:electrolytic_core',
            pattern: ['ISI', 'LAC', 'ISI'],
            key: {
                A: 'ae2:annihilation_core',
                I: 'mekanism:alloy_infused',
                S: '#forge:ingots/steel',
                L: 'chemlib:lutetium_ingot',
                C: 'chemlib:iridium_ingot'
            },
            id: 'mekanism:electrolytic_core'
        },
        {
            output: 'mekanism:electrolytic_separator',
            pattern: ['IEI', 'RSR', 'ITI'],
            key: {
                S: 'mekanism:steel_casing',
                I: 'powah:crystal_blazing',
                R: 'mekanism:alloy_reinforced',
                E: 'mekanism:electrolytic_core',
                T: Item.of('solarpanels:improved_energy_tablet').weakNBT()
            },
            id: 'mekanism:electrolytic_separator'
        },
        {
            output: 'mekanism:pressurized_reaction_chamber',
            pattern: ['IAI', 'UEU', 'CDC'],
            key: {
                E: Item.of('mekanism:enrichment_chamber').ignoreNBT(),
                D: 'mekanism:dynamic_tank',
                C: Item.of('mekanism:basic_chemical_tank').ignoreNBT(),
                U: 'mekanism:ultimate_control_circuit',
                I: '#forge:ingots/steel',
                A: 'mekanism:alloy_atomic'
            },
            id: 'mekanism:pressurized_reaction_chamber'
        },
        {
            output: 'mekanism:purification_chamber',
            pattern: ['AUA', 'SES', 'AUA'],
            key: {
                E: Item.of('mekanism:enrichment_chamber').ignoreNBT(),
                U: 'mekanism:ultimate_control_circuit',
                A: 'mekanism:alloy_atomic',
                S: 'mna:superheated_purified_vinteum_ingot'
            },
            id: 'mekanism:purification_chamber'
        },
        {
            output: Item.of('mekanism:dynamic_valve', 2),
            pattern: [' D ', 'DUD', ' D '],
            key: {
                D: 'mekanism:dynamic_tank',
                U: 'mekanism:ultimate_control_circuit'
            },
            id: 'mekanism:dynamic_valve'
        },
        {
            output: 'mekanism:basic_energy_cube',
            pattern: ['BEB', 'CSC', 'BEB'],
            key: {
                S: 'mekanism:steel_casing',
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                B: 'powah:capacitor_hardened',
                C: 'mekanism:basic_control_circuit'
            },
            id: 'mekanism:energy_cube/basic'
        },
        {
            output: 'mekanism:advanced_energy_cube',
            pattern: ['BEB', 'CSC', 'BEB'],
            key: {
                S: Item.of('mekanism:basic_energy_cube').ignoreNBT(),
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                B: 'mekanism:alloy_infused',
                C: 'mekanism:advanced_control_circuit'
            },
            id: 'mekanism:energy_cube/advanced'
        },
        {
            output: 'mekanism:elite_energy_cube',
            pattern: ['BEB', 'CSC', 'BEB'],
            key: {
                S: Item.of('mekanism:advanced_energy_cube').ignoreNBT(),
                E: Item.of('solarpanels:improved_energy_tablet').weakNBT(),
                B: 'mekanism:alloy_reinforced',
                C: 'mekanism:elite_control_circuit'
            },
            id: 'mekanism:energy_cube/elite'
        },
        {
            output: 'mekanism:ultimate_energy_cube',
            pattern: ['BEB', 'CSC', 'BEB'],
            key: {
                S: Item.of('mekanism:elite_energy_cube').ignoreNBT(),
                E: Item.of('solarpanels:quantum_energy_tablet').weakNBT(),
                B: 'mekanism:alloy_atomic',
                C: 'mekanism:ultimate_control_circuit'
            },
            id: 'mekanism:energy_cube/ultimate'
        },
        {
            output: 'mekanism:teleportation_core',
            pattern: ['DAI', 'BEB', 'IAD'],
            key: {
                E: 'powah:ender_core',
                B: 'powah:crystal_blazing',
                A: 'mekanism:alloy_atomic',
                D: 'rftoolsbase:infused_diamond',
                I: 'rftoolsbase:infused_enderpearl'
            },
            id: 'mekanism:teleportation_core'
        },
        {
            output: 'solarpanels:quantum_energy_tablet',
            pattern: ['URU', 'AEA', 'URU'],
            key: {
                E: Item.of('solarpanels:improved_energy_tablet').weakNBT(),
                U: 'mekanism:ultimate_control_circuit',
                A: 'mekanism:alloy_atomic',
                R: 'mekanism:enriched_refined_obsidian'
            },
            id: 'solarpanels:quantum_energy_tablet'
        },
        {
            output: Item.of('mekanism:thermal_evaporation_block', 4),
            pattern: [' S ', 'SCS', ' S '],
            key: {
                S: 'immersiveengineering:plate_steel',
                C: '#forge:plates/copper'
            },
            id: 'mekanism:thermal_evaporation/block'
        },
        {
            output: 'mekanism:thermal_evaporation_valve',
            pattern: [' S ', 'SCS', ' S '],
            key: {
                S: 'mekanism:thermal_evaporation_block',
                C: 'mekanism:ultimate_control_circuit'
            },
            id: 'mekanism:thermal_evaporation/valve'
        },
        {
            output: Item.of('mekanism:induction_casing', 4),
            pattern: ['HSH', 'SES', 'HSH'],
            key: {
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                S: 'beyond_earth:compressed_steel',
                H: 'mekanism:hdpe_sheet'
            },
            id: 'mekanism:induction/casing'
        },
        {
            output: Item.of('mekanism:induction_port', 2),
            pattern: [' S ', 'SCS', ' S '],
            key: {
                S: 'mekanism:induction_casing',
                C: 'mekaevolution:absolute_control_circuit'
            },
            id: 'mekanism:induction/port'
        },
        {
            output: 'mekanism:basic_induction_cell',
            pattern: ['LTL', 'TET', 'LTL'],
            key: {
                E: Item.of('mekanism:ultimate_energy_cube').ignoreNBT(),
                T: Item.of('solarpanels:improved_energy_tablet').weakNBT(),
                L: 'mekanism:dust_lithium'
            },
            id: 'mekanism:induction/cell/basic'
        },
        {
            output: 'mekanism:basic_induction_provider',
            pattern: ['LTL', 'TET', 'LTL'],
            key: {
                E: Item.of('mekanism:basic_energy_cube').ignoreNBT(),
                T: 'mekanism:basic_control_circuit',
                L: 'beyond_earth:compressed_desh'
            },
            id: 'mekanism:induction/provider/basic'
        },
        {
            output: 'mekanism:advanced_induction_cell',
            pattern: ['LTL', 'TET', 'LTL'],
            key: {
                E: Item.of('mekanism:basic_induction_cell').ignoreNBT(),
                T: Item.of('solarpanels:quantum_energy_tablet').weakNBT(),
                L: 'mekanism:dust_lithium'
            },
            id: 'mekanism:induction/cell/advanced'
        },
        {
            output: 'mekanism:advanced_induction_provider',
            pattern: ['LTL', 'TET', 'LTL'],
            key: {
                E: Item.of('mekanism:basic_induction_provider').ignoreNBT(),
                T: 'mekanism:advanced_control_circuit',
                L: 'beyond_earth:compressed_desh'
            },
            id: 'mekanism:induction/provider/advanced'
        },
        {
            output: 'mekanism:elite_induction_provider',
            pattern: ['LTL', 'TET', 'LTL'],
            key: {
                E: Item.of('mekanism:advanced_induction_provider').ignoreNBT(),
                T: 'mekanism:elite_control_circuit',
                L: 'beyond_earth:compressed_desh'
            },
            id: 'mekanism:induction/provider/elite'
        },
        {
            output: 'mekanism:elite_induction_cell',
            pattern: ['LTL', 'TET', 'LTL'],
            key: {
                E: Item.of('mekanism:advanced_induction_cell').ignoreNBT(),
                T: Item.of('solarpanels:spectral_energy_tablet').weakNBT(),
                L: 'mekanism:dust_lithium'
            },
            id: 'mekanism:induction/cell/elite'
        },
        {
            output: 'mekanism:ultimate_induction_cell',
            pattern: ['LTL', 'TET', 'LTL'],
            key: {
                E: Item.of('mekanism:elite_induction_cell').ignoreNBT(),
                T: Item.of('solarpanels:singular_energy_tablet').weakNBT(),
                L: 'mekanism:dust_lithium'
            },
            id: 'mekanism:induction/cell/ultimate'
        },
        {
            output: 'mekanism:ultimate_induction_provider',
            pattern: ['LTL', 'TET', 'LTL'],
            key: {
                E: Item.of('mekanism:elite_induction_provider').ignoreNBT(),
                T: 'mekanism:ultimate_control_circuit',
                L: 'beyond_earth:compressed_desh'
            },
            id: 'mekanism:induction/provider/ultimate'
        },
        {
            output: Item.of('mekaevolution:absolute_mechanical_pipe', 8),
            pattern: ['UUU', 'UAU', 'UUU'],
            key: {
                U: Item.of('mekanism:ultimate_mechanical_pipe').ignoreNBT(),
                A: 'chroma:absolute_alloy'
            },
            id: 'mekaevolution:absolute_mechanical_pipe'
        },
        {
            output: Item.of('mekaevolution:absolute_logistical_transporter', 8),
            pattern: ['UUU', 'UAU', 'UUU'],
            key: {
                U: Item.of('mekanism:ultimate_logistical_transporter').ignoreNBT(),
                A: 'chroma:absolute_alloy'
            },
            id: 'mekaevolution:absolute_logistical_transporter'
        },
        {
            output: Item.of('mekaevolution:absolute_universal_cable', 8),
            pattern: ['UUU', 'UAU', 'UUU'],
            key: {
                U: Item.of('mekanism:ultimate_universal_cable').ignoreNBT(),
                A: 'chroma:absolute_alloy'
            },
            id: 'mekaevolution:absolute_universal_cable'
        },
        {
            output: 'mekanism:ultimate_tier_installer',
            pattern: ['LUP', 'DID', 'PUL'],
            key: {
                I: 'minecraft:iron_block',
                U: 'mekanism:ultimate_control_circuit',
                P: 'lazierae2:parallel_processor',
                D: 'beyond_earth:compressed_desh',
                L: 'biggerreactors:ludicrite_ingot'
            },
            id: 'mekanism:tier_installer/ultimate'
        },
        {
            output: 'solarpanels:spectral_energy_tablet',
            pattern: ['CLC', 'AEA', 'CLC'],
            key: {
                E: Item.of('solarpanels:quantum_energy_tablet').weakNBT(),
                C: 'mekaevolution:absolute_control_circuit',
                L: 'chroma:enriched_lunaris_nova',
                A: 'chroma:absolute_alloy'
            },
            id: 'solarpanels:spectral_energy_tablet'
        },
        {
            output: 'mekanism:rotary_condensentrator',
            pattern: ['AUA', 'TFS', 'AEA'],
            key: {
                E: Item.of('solarpanels:improved_energy_tablet').ignoreNBT(),
                U: 'mekanism:ultimate_control_circuit',
                A: 'mekanism:alloy_atomic',
                S: 'mekanism:basic_fluid_tank',
                T: 'mekanism:basic_chemical_tank',
                F: 'mekanism:steel_casing'
            },
            id: 'mekanism:rotary_condensentrator'
        },
        {
            output: 'mekanism:chemical_crystallizer',
            pattern: ['ASA', 'UFU', 'AEA'],
            key: {
                E: Item.of('solarpanels:improved_energy_tablet').ignoreNBT(),
                U: 'mekanism:ultimate_control_circuit',
                A: '#forge:ingots/refined_obsidian',
                S: '#forge:storage_blocks/fluorite',
                F: 'mekanism:steel_casing'
            },
            id: 'mekanism:chemical_crystallizer'
        },
        {
            output: 'solarpanels:advanced_solar_panel',
            pattern: ['SSS', 'CPC', 'AEA'],
            key: {
                E: Item.of('mekanism:energy_tablet').ignoreNBT(),
                S: 'solarpanels:carbone_solar_element',
                C: 'powah:capacitor_hardened',
                P: 'mekanismgenerators:solar_generator',
                A: '#forge:circuits/basic'
            },
            id: 'solarpanels:advanced_solar_panel'
        },
        {
            output: 'solarpanels:hybrid_solar_panel',
            pattern: ['SSS', 'CPC', 'AEA'],
            key: {
                E: Item.of('mekanism:energy_tablet').ignoreNBT(),
                S: 'solarpanels:hybrid_solar_element',
                C: 'powah:capacitor_blazing',
                P: 'solarpanels:advanced_solar_panel',
                A: '#forge:circuits/advanced'
            },
            id: 'solarpanels:hybrid_solar_panel'
        },
        {
            output: 'solarpanels:ultimate_hybrid_solar_panel',
            pattern: ['SSS', 'CPC', 'AEA'],
            key: {
                E: Item.of('solarpanels:improved_energy_tablet').ignoreNBT(),
                S: 'solarpanels:improved_hybrid_solar_element',
                C: 'extendedcrafting:luminessence',
                P: 'solarpanels:hybrid_solar_panel',
                A: '#forge:circuits/elite'
            },
            id: 'solarpanels:ultimate_hybrid_solar_panel'
        },
        {
            output: 'solarpanels:carbone_solar_element',
            pattern: ['GGG', 'LLL', 'CCC'],
            key: {
                G: '#forge:glass_panes/black',
                L: '#forge:dusts/lapis',
                C: 'chroma:enriched_compressed_steel'
            },
            id: 'solarpanels:carbone_solar_element'
        },
        {
            output: 'solarpanels:improved_hybrid_solar_element',
            pattern: ['GGG', 'LLL', 'CCC'],
            key: {
                G: '#forge:glass_panes/colorless',
                L: '#forge:dusts/lapis',
                C: 'extendedcrafting:black_iron_slate'
            },
            id: 'solarpanels:improved_hybrid_solar_element'
        },
        {
            output: 'solarpanels:hybrid_solar_element',
            pattern: ['GGG', 'LLL', 'CCC'],
            key: {
                G: '#forge:glass_panes/colorless',
                L: '#forge:dusts/lapis',
                C: 'chroma:enriched_essence_of_darkness'
            },
            id: 'solarpanels:hybrid_solar_element'
        },
        {
            output: 'solarpanels:quantum_solar_panel',
            pattern: ['SSS', 'CPC', 'AEA'],
            key: {
                E: Item.of('solarpanels:quantum_energy_tablet').ignoreNBT(),
                S: 'solarpanels:quantum_solar_element',
                C: 'powah:capacitor_blazing',
                P: 'solarpanels:ultimate_hybrid_solar_panel',
                A: '#forge:circuits/ultimate'
            },
            id: 'solarpanels:quantum_solar_panel'
        },
        {
            output: 'solarpanels:spectral_solar_panel',
            pattern: ['SSS', 'CPC', 'AEA'],
            key: {
                E: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT(),
                S: 'solarpanels:spectral_solar_element',
                C: 'powah:capacitor_niotic',
                P: 'solarpanels:quantum_solar_panel',
                A: 'mekaevolution:absolute_control_circuit'
            },
            id: 'solarpanels:spectral_solar_panel'
        },
        {
            output: 'solarpanels:singular_energy_tablet',
            pattern: ['URU', 'AEA', 'URU'],
            key: {
                E: Item.of('solarpanels:spectral_energy_tablet').weakNBT(),
                U: 'mekaevolution:supreme_control_circuit',
                A: 'chroma:supreme_alloy',
                R: 'chroma:enriched_marsova_ignis'
            },
            id: 'solarpanels:singular_energy_tablet'
        },
        {
            output: 'mekanismgenerators:gas_burning_generator',
            pattern: ['URU', 'ACA', 'UEU'],
            key: {
                E: Item.of('solarpanels:singular_energy_tablet').weakNBT(),
                U: '#forge:ingots/ostrum',
                A: 'chroma:supreme_alloy',
                R: 'mekanism:electrolytic_core',
                C: 'mekanism:steel_casing'
            },
            id: 'mekanismgenerators:generator/gas_burning'
        },
        {
            output: 'mekanism:chemical_injection_chamber',
            pattern: ['URU', 'ACA', 'UEU'],
            key: {
                E: Item.of('solarpanels:singular_energy_tablet').weakNBT(),
                U: 'chroma:supreme_alloy',
                A: 'mekaevolution:supreme_control_circuit',
                R: '#beyond_earth:compresseds/ostrum',
                C: Item.of('mekanism:purification_chamber').ignoreNBT()
            },
            id: 'mekanism:chemical_injection_chamber'
        },
        {
            output: 'mekanism:isotopic_centrifuge',
            pattern: ['UUU', 'ACA', 'UEU'],
            key: {
                E: Item.of('solarpanels:singular_energy_tablet').weakNBT(),
                U: '#forge:ingots/ostrum',
                A: 'mekaevolution:supreme_control_circuit',
                C: 'mekanism:ultimate_chemical_tank'
            },
            id: 'mekanism:isotopic_centrifuge'
        },
        {
            output: 'mekanism:solar_neutron_activator',
            pattern: ['BSB', 'ACA', 'UEU'],
            key: {
                E: Item.of('solarpanels:singular_energy_tablet').weakNBT(),
                U: '#forge:ingots/ostrum',
                A: 'mekaevolution:supreme_control_circuit',
                C: 'mekanism:steel_casing',
                S: Item.of('mekanismgenerators:solar_generator').ignoreNBT(),
                B: 'chroma:supreme_alloy'
            },
            id: 'mekanism:solar_neutron_activator'
        },
        {
            output: 'mekanism:chemical_infuser',
            pattern: ['BAB', 'SCS', 'BAB'],
            key: {
                A: 'mekaevolution:supreme_control_circuit',
                C: 'mekanism:steel_casing',
                S: 'mekanism:basic_chemical_tank',
                B: 'chroma:supreme_alloy'
            },
            id: 'mekanism:chemical_infuser'
        },
        {
            output: Item.of('mekaevolution:supreme_universal_cable', 4),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'mekaevolution:absolute_universal_cable',
                B: 'chroma:supreme_alloy'
            },
            id: 'mekaevolution:supreme_universal_cable'
        },
        {
            output: Item.of('mekaevolution:supreme_mechanical_pipe', 4),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'mekaevolution:absolute_mechanical_pipe',
                B: 'chroma:supreme_alloy'
            },
            id: 'mekaevolution:supreme_mechanical_pipe'
        },
        {
            output: Item.of('mekaevolution:supreme_logistical_transporter', 4),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'mekaevolution:absolute_logistical_transporter',
                B: 'chroma:supreme_alloy'
            },
            id: 'mekaevolution:supreme_logistical_transporter'
        },
        {
            output: 'mekanism:radioactive_waste_barrel',
            pattern: ['ABA', 'B B', 'ABA'],
            key: {
                A: 'chroma:isolated_compressed_desh',
                B: '#forge:ingots/lead'
            },
            id: 'mekanism:radioactive_waste_barrel'
        },
        {
            output: Item.of('mekanism:boiler_valve', 2),
            pattern: [' C ', 'CAC', ' C '],
            key: {
                A: 'mekaevolution:supreme_control_circuit',
                C: 'mekanism:boiler_casing'
            },
            id: 'mekanism:boiler_valve'
        },
        {
            output: 'mekanism:superheating_element',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:ingots/ludicrite',
                B: '#forge:ingots/ostrum',
                C: 'mekanism:steel_casing'
            },
            id: 'mekanism:superheating_element'
        },
        {
            output: 'mekanism:pressure_disperser',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                B: 'minecraft:iron_bars',
                A: '#forge:ingots/ostrum',
                C: 'chroma:supreme_alloy'
            },
            id: 'mekanism:pressure_disperser'
        },
        {
            output: Item.of('mekanismgenerators:turbine_vent', 2),
            pattern: [' C ', 'CAC', ' C '],
            key: {
                A: 'createdeco:iron_mesh_fence',
                C: 'mekanismgenerators:turbine_casing'
            },
            id: 'mekanismgenerators:turbine/vent'
        },
        {
            output: 'mekanismgenerators:saturating_condenser',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                B: '#forge:ingots/tin',
                A: '#forge:ingots/ostrum',
                C: 'mekanism:basic_fluid_tank'
            },
            id: 'mekanismgenerators:saturating_condenser'
        },
        {
            output: Item.of('mekanismgenerators:turbine_valve', 2),
            pattern: [' C ', 'CAC', ' C '],
            key: {
                A: 'mekaevolution:supreme_control_circuit',
                C: 'mekanismgenerators:turbine_casing'
            },
            id: 'mekanismgenerators:turbine/valve'
        },
        {
            output: 'mekanismgenerators:electromagnetic_coil',
            pattern: ['ABA', 'BEB', 'ABA'],
            key: {
                E: Item.of('solarpanels:singular_energy_tablet').weakNBT(),
                A: '#forge:ingots/ostrum',
                B: 'powah:crystal_blazing'
            },
            id: 'mekanismgenerators:electromagnetic_coil'
        },
        {
            output: 'mekanismgenerators:rotational_complex',
            pattern: ['ABA', 'CBC', 'ABA'],
            key: {
                C: 'mekaevolution:supreme_control_circuit',
                A: '#forge:ingots/ostrum',
                B: 'chroma:supreme_alloy'
            },
            id: 'mekanismgenerators:rotational_complex'
        },
        {
            output: 'mekanismgenerators:turbine_blade',
            pattern: [' C ', 'CAC', ' C '],
            key: {
                A: 'chroma:supreme_alloy',
                C: '#forge:ingots/steel'
            },
            id: 'mekanismgenerators:turbine/blade'
        },
        {
            output: 'mekanismgenerators:turbine_rotor',
            pattern: ['CAC', 'CAC', 'CAC'],
            key: {
                A: 'chroma:supreme_alloy',
                C: '#forge:ingots/steel'
            },
            id: 'mekanismgenerators:turbine/rotor'
        },
        {
            output: 'mekanismgenerators:control_rod_assembly',
            pattern: ['ABA', 'CAC', 'CAC'],
            key: {
                A: '#forge:ingots/lead',
                C: '#forge:ingots/ostrum',
                B: 'mekaevolution:supreme_control_circuit'
            },
            id: 'mekanismgenerators:fission_reactor/control_rod_assembly'
        },
        {
            output: 'mekanismgenerators:fission_fuel_assembly',
            pattern: ['ACA', 'ABA', 'ACA'],
            key: {
                A: '#forge:ingots/lead',
                C: '#forge:ingots/ostrum',
                B: 'mekanism:basic_chemical_tank'
            },
            id: 'mekanismgenerators:fission_reactor/fuel_assembly'
        },
        {
            output: Item.of('mekanismgenerators:fission_reactor_port', 2),
            pattern: [' C ', 'CAC', ' C '],
            key: {
                A: 'mekaevolution:supreme_control_circuit',
                C: 'mekanismgenerators:fission_reactor_casing'
            },
            id: 'mekanismgenerators:fission_reactor/port'
        },
        {
            output: 'solarpanels:singular_solar_element',
            pattern: ['GGG', 'LLL', 'PPP'],
            key: {
                G: '#forge:glass_panes/pink',
                L: 'chroma:marsova_ignis',
                P: 'mekanism:hdpe_sheet'
            },
            id: 'solarpanels:singular_solar_element'
        },
        {
            output: 'solarpanels:singular_solar_panel',
            pattern: ['GGG', 'LAL', 'PEP'],
            key: {
                G: 'solarpanels:singular_solar_element',
                L: 'powah:capacitor_spirited',
                P: 'mekaevolution:supreme_control_circuit',
                E: Item.of('solarpanels:singular_energy_tablet').weakNBT(),
                A: 'solarpanels:spectral_solar_panel'
            },
            id: 'solarpanels:singular_solar_panel'
        },
        {
            output: Item.of('mekanismgenerators:fusion_reactor_frame', 4),
            pattern: ['APA', 'PFP', 'APA'],
            key: {
                A: 'chroma:cosmic_alloy',
                P: '#forge:pellets/polonium',
                F: 'mekanism:steel_casing'
            },
            id: 'mekanismgenerators:reactor/frame'
        },
        {
            output: Item.of('mekanismgenerators:fusion_reactor_port', 2),
            pattern: [' F ', 'FCF', ' F '],
            key: {
                F: 'mekanismgenerators:fusion_reactor_frame',
                C: 'mekaevolution:cosmic_control_circuit'
            },
            id: 'mekanismgenerators:reactor/port'
        },
        {
            output: 'mekanismgenerators:fusion_reactor_logic_adapter',
            pattern: [' F ', 'FCF', ' F '],
            key: {
                C: 'mekanismgenerators:fusion_reactor_frame',
                F: 'thermal:redstone_servo'
            },
            id: 'mekanismgenerators:reactor/logic_adapter'
        },
        {
            output: 'mekanism:laser',
            pattern: ['AT ', 'AFC', 'AT '],
            key: {
                A: 'chroma:cosmic_alloy',
                T: Item.of('solarpanels:light_absorbing_energy_tablet').weakNBT(),
                F: 'mekanism:steel_casing',
                C: 'draconicevolution:draconium_core'
            },
            id: 'mekanism:laser'
        },
        {
            output: 'mekanism:laser_amplifier',
            pattern: ['SSS', 'ETA', 'SSS'],
            key: {
                A: 'chroma:cosmic_alloy',
                T: Item.of('solarpanels:light_absorbing_energy_tablet').weakNBT(),
                S: '#forge:plates/steel',
                E: 'draconicevolution:wyvern_energy_core'
            },
            id: 'mekanism:laser_amplifier'
        },
        {
            output: Item.of('mekanismgenerators:laser_focus_matrix', 2),
            pattern: [' G ', 'GAG', ' G '],
            key: {
                A: 'chroma:cosmic_alloy',
                G: 'mekanismgenerators:reactor_glass'
            },
            id: 'mekanismgenerators:laser_focus_matrix'
        },
        {
            output: 'mekanism:chemical_oxidizer',
            pattern: ['ACA', 'PFT', 'ACA'],
            key: {
                A: 'chroma:supreme_alloy',
                C: 'mekaevolution:supreme_control_circuit',
                P: '#mekanism:personal_storage',
                F: 'mekanism:dynamic_tank',
                T: 'mekanism:basic_chemical_tank'
            },
            id: 'mekanism:chemical_oxidizer'
        },
        {
            output: 'mekanism:chemical_dissolution_chamber',
            pattern: ['ATA', 'CFC', 'ATA'],
            key: {
                A: '#forge:ingots/refined_obsidian',
                C: 'mekaevolution:supreme_control_circuit',
                F: 'mekanism:steel_casing',
                T: 'mekanism:basic_chemical_tank'
            },
            id: 'mekanism:chemical_dissolution_chamber'
        },
        {
            output: 'solarpanels:light_absorbing_energy_tablet',
            pattern: ['CEC', 'AFA', 'CEC'],
            key: {
                A: 'chroma:cosmic_alloy',
                C: 'mekaevolution:cosmic_control_circuit',
                F: Item.of('solarpanels:singular_energy_tablet').weakNBT(),
                E: 'chroma:enriched_venustar_luminae'
            },
            id: 'solarpanels:light_absorbing_energy_tablet'
        },
        {
            output: 'mekanism:chemical_washer',
            pattern: ['ABA', 'CFC', 'ATA'],
            key: {
                A: '#forge:ingots/refined_obsidian',
                C: 'mekaevolution:cosmic_control_circuit',
                F: 'mekanism:steel_casing',
                T: 'mekanism:basic_chemical_tank',
                B: 'mekanism:basic_fluid_tank'
            },
            id: 'mekanism:chemical_washer'
        },
        {
            output: Item.of('mekaevolution:cosmic_universal_cable', 8),
            pattern: ['AAA', 'ACA', 'AAA'],
            key: {
                A: 'mekaevolution:supreme_universal_cable',
                C: 'chroma:cosmic_alloy'
            },
            id: 'mekaevolution:cosmic_universal_cable'
        },
        {
            output: Item.of('mekaevolution:cosmic_mechanical_pipe', 8),
            pattern: ['AAA', 'ACA', 'AAA'],
            key: {
                A: 'mekaevolution:supreme_mechanical_pipe',
                C: 'chroma:cosmic_alloy'
            },
            id: 'mekaevolution:cosmic_mechanical_pipe'
        },
        {
            output: Item.of('mekaevolution:cosmic_logistical_transporter', 8),
            pattern: ['AAA', 'ACA', 'AAA'],
            key: {
                A: 'mekaevolution:supreme_logistical_transporter',
                C: 'chroma:cosmic_alloy'
            },
            id: 'mekaevolution:cosmic_logistical_transporter'
        },
        {
            output: 'solarpanels:light_absorbing_solar_element',
            pattern: ['AAA', 'BBB', 'SCS'],
            key: {
                A: '#forge:glass_panes/red',
                B: 'chroma:venustar_luminae',
                S: 'mekanism:hdpe_sheet',
                C: 'draconicevolution:draconium_core'
            },
            id: 'solarpanels:light_absorbing_solar_element'
        },
        {
            output: 'mekanism:sps_casing',
            pattern: ['SPS', 'ACA', 'SPS'],
            key: {
                P: '#forge:pellets/plutonium',
                A: '#forge:pellets/polonium',
                C: 'extendedcrafting:crystaltine_ingot',
                S: 'mekanism:hdpe_sheet'
            },
            id: 'mekanism:sps_casing'
        },
        {
            output: 'mekanism:sps_port',
            pattern: [' F ', 'FAF', ' F '],
            key: {
                F: 'mekanism:sps_casing',
                A: 'mekaevolution:infinite_control_circuit'
            },
            id: 'mekanism:sps_port'
        },
        {
            output: 'mekanism:sps_port',
            pattern: ['CCC', 'IAI', 'PLP'],
            key: {
                C: 'extendedcrafting:crystaltine_ingot',
                I: 'mekaevolution:infinite_control_circuit',
                A: Item.of('solarpanels:photonic_energy_tablet').weakNBT(),
                P: '#forge:pellets/polonium',
                L: Item.of('mekanism:laser').ignoreNBT()
            },
            id: 'mekanism:sps_port'
        },
        {
            output: 'solarpanels:photonic_energy_tablet',
            pattern: ['CEC', 'AFA', 'CEC'],
            key: {
                A: 'chroma:cosmic_alloy',
                C: 'mekaevolution:infinite_control_circuit',
                F: Item.of('solarpanels:light_absorbing_energy_tablet').weakNBT(),
                E: 'chroma:enriched_eternal_cryostella_polaris'
            },
            id: 'solarpanels:photonic_energy_tablet'
        },
        {
            output: Item.of('mekaevolution:infinite_universal_cable', 4),
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: 'chroma:infinite_alloy',
                B: 'mekaevolution:cosmic_universal_cable',
            },
            id: 'mekaevolution:infinite_universal_cable'
        },
        {
            output: Item.of('mekaevolution:infinite_mechanical_pipe', 4),
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: 'chroma:infinite_alloy',
                B: 'mekaevolution:cosmic_mechanical_pipe',
            },
            id: 'mekaevolution:infinite_mechanical_pipe'
        },
        {
            output: Item.of('mekaevolution:infinite_logistical_transporter', 4),
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: 'chroma:infinite_alloy',
                B: 'mekaevolution:cosmic_logistical_transporter',
            },
            id: 'mekaevolution:infinite_logistical_transporter'
        },
        {
            output: 'mekanism:antiprotonic_nucleosynthesizer',
            pattern: ['ACA', 'PFP', 'ACA'],
            key: {
                A: 'chroma:infinite_alloy',
                C: 'mekaevolution:infinite_control_circuit',
                P: '#forge:pellets/antimatter',
                F: 'mekanism:steel_casing'
            },
            id: 'mekanism:antiprotonic_nucleosynthesizer'
        },
        {
            output: 'solarpanels:photonic_solar_element',
            pattern: ['GGG', 'SSS', 'CNC'],
            key: {
                G: '#forge:glass_panes/lime',
                S: 'chroma:eternal_cryostella_polaris',
                C: '#mekanism:crystals/uranium',
                N: 'forbidden_arcanus:dark_nether_star'
            },
            id: 'solarpanels:photonic_solar_element'
        },
        {
            output: 'mekanism:basic_fluid_tank',
            pattern: ['RPR', 'PTP', 'RPR'],
            key: {
                R: '#forge:dusts/redstone',
                P: '#forge:plates/iron',
                T: 'thermal:fluid_cell_frame'
            },
            id: 'mekanism:fluid_tank/basic'
        },
        {
            output: 'mekanism:basic_chemical_tank',
            pattern: ['RPR', 'PTP', 'RPR'],
            key: {
                R: '#forge:dusts/redstone',
                P: '#forge:ingots/osmium',
                T: '#mekanism:alloys/infused'
            },
            id: 'mekanism:chemical_tank/basic'
        },
        {
            output: 'solarpanels:creative_solar_element',
            pattern: ['PPP', 'III', 'CAC'],
            key: {
                P: '#forge:glass_panes/pink',
                I: '#forge:ingots/rubidium',
                C: '#mekanism:crystals/elementium',
                A: '#forge:pellets/antimatter'
            },
            id: 'solarpanels:creative_solar_element'
        },
        {
            output: 'mekanismgenerators:wind_generator',
            pattern: [' O ', 'OBO', 'TCT'],
            key: {
                O: '#forge:ingots/osmium',
                B: 'pneumaticcraft:turbine_rotor',
                T: Item.of('mekanism:energy_tablet').weakNBT(),
                C: '#forge:circuits/advanced'
            },
            id: 'mekanismgenerators:generator/wind'
        },
        {
            output: 'mekanismgenerators:solar_generator',
            pattern: ['PPP', 'ABA', 'CTC'],
            key: {
                P: 'mekanismgenerators:solar_panel',
                A: '#mekanism:alloys/reinforced',
                B: 'powah:capacitor_hardened',
                T: Item.of('mekanism:energy_tablet').weakNBT(),
                C: '#forge:ingots/compressed_iron'
            },
            id: 'mekanismgenerators:generator/solar'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
