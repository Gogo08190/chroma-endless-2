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
                T: 'mekanism:basic_control_circuit'
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
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
