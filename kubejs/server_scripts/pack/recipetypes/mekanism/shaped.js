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
                F: 'ironfurnaces:netherite_furnace',
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
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
