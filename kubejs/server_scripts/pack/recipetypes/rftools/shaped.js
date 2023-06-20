onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/rftools/shaped/';
    const recipes = [
        {
            output: 'rftoolsbuilder:shield_block1',
            pattern: ['RMR', 'PCP', 'RER'],
            key: {
                P: 'botania:piston_relay',
                C: 'rftoolsbase:machine_frame',
                R: 'pneumaticcraft:reinforced_stone',
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                M: 'botania:mana_fluxfield'
            },
            id: 'rftoolsbuilder:shield_block1'
        },
        {
            output: 'rftoolsbuilder:shield_block2',
            pattern: ['RPR', 'PCP', 'RER'],
            key: {
                P: 'powah:capacitor_hardened',
                C: 'rftoolsbuilder:shield_block1',
                R: 'forbidden_arcanus:arcane_gold_ingot',
                E: Item.of('mekanism:energy_tablet').weakNBT()
            },
            id: 'rftoolsbuilder:shield_block2'
        },
        {
            output: 'rftoolsbuilder:shield_block3',
            pattern: ['RPR', 'PCP', 'RER'],
            key: {
                P: 'mekanism:elite_control_circuit',
                C: 'rftoolsbuilder:shield_block2',
                R: 'rftoolsbase:infused_diamond',
                E: Item.of('solarpanels:improved_energy_tablet').weakNBT()
            },
            id: 'rftoolsbuilder:shield_block3'
        },
        {
            output: 'rftoolsbuilder:shield_block4',
            pattern: ['RDR', 'PCP', 'RER'],
            key: {
                P: 'evilcraft:blood_infusion_core',
                D: 'forbidden_arcanus:dark_nether_star',
                C: 'rftoolsbuilder:shield_block3',
                R: 'mekanism:ingot_refined_glowstone',
                E: Item.of('solarpanels:improved_energy_tablet').weakNBT()
            },
            id: 'rftoolsbuilder:shield_block4'
        },
        {
            output: 'rftoolspower:dimensionalcell_simple',
            pattern: ['BPB', 'EME', 'BCB'],
            key: {
                B: 'extendedcrafting:black_iron_slate',
                C: 'powah:capacitor_basic_large',
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                M: 'rftoolsbase:machine_frame',
                P: 'powah:ender_core'
            },
            id: 'rftoolspower:dimensionalcell_simple'
        },
        {
            output: 'rftoolspower:dimensionalcell',
            pattern: ['RCR', 'CDC', 'RCR'],
            key: {
                D: 'rftoolspower:dimensionalcell_simple',
                R: 'extendedcrafting:redstone_ingot',
                C: 'mekanism:advanced_control_circuit'
            },
            id: 'rftoolspower:dimensionalcell'
        },
        {
            output: 'rftoolspower:dimensionalcell_advanced',
            pattern: ['ICI', 'CDC', 'ICI'],
            key: {
                D: 'rftoolspower:dimensionalcell',
                I: 'rftoolsbase:infused_diamond',
                C: 'mekanism:elite_control_circuit'
            },
            id: 'rftoolspower:dimensionalcell_advanced'
        },
        {
            output: 'rftoolspower:powercell_card',
            pattern: ['RER', 'EPE', 'RER'],
            key: {
                P: 'minecraft:paper',
                R: 'minecraft:redstone',
                E: 'thermal:electrum_nugget'
            },
            id: 'rftoolspower:powercell_card'
        },
        {
            output: 'rftoolspower:cell1',
            pattern: ['RPR', 'PMP', 'RPR'],
            key: {
                M: 'rftoolsbase:machine_frame',
                P: 'rftoolspower:power_core1',
                R: 'mekanism:alloy_infused'
            },
            id: 'rftoolspower:cell1'
        },
        {
            output: 'rftoolspower:cell2',
            pattern: ['RPR', 'PMP', 'RPR'],
            key: {
                M: 'rftoolspower:cell1',
                P: 'rftoolspower:power_core2',
                R: 'mekanism:alloy_reinforced'
            },
            id: 'rftoolspower:cell2'
        },
        {
            output: 'rftoolspower:cell3',
            pattern: ['EPR', 'PMP', 'RPE'],
            key: {
                M: 'rftoolspower:cell2',
                P: 'rftoolspower:power_core3',
                R: 'rftoolsbase:infused_diamond',
                E: Item.of('solarpanels:improved_energy_tablet').weakNBT()
            },
            id: 'rftoolspower:cell3'
        },
        {
            output: 'rftoolsutility:crafter1',
            pattern: ['SCS', 'CMC', 'SES'],
            key: {
                M: 'rftoolsbase:machine_frame',
                S: 'thermal:redstone_servo',
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                C: 'create:mechanical_crafter'
            },
            id: 'rftoolsutility:crafter1'
        },
        {
            output: 'rftoolsutility:crafter2',
            pattern: ['SCS', 'CMC', 'SES'],
            key: {
                M: 'rftoolsutility:crafter1',
                S: 'thermal:redstone_servo',
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                C: 'create:mechanical_crafter'
            },
            id: 'rftoolsutility:crafter2'
        },
        {
            output: 'rftoolsutility:crafter3',
            pattern: ['SCS', 'CMC', 'SES'],
            key: {
                M: 'rftoolsutility:crafter2',
                S: 'thermal:redstone_servo',
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                C: 'create:mechanical_crafter'
            },
            id: 'rftoolsutility:crafter3'
        },
        {
            output: 'rftoolsutility:matter_beamer',
            pattern: ['ELE', 'LMS', 'ELE'],
            key: {
                M: 'rftoolsbase:machine_frame',
                E: 'botania:elementium_ingot',
                L: 'extendedcrafting:luminessence',
                S: 'botania:elven_spreader'
            },
            id: 'rftoolsutility:matter_beamer'
        },
        {
            output: 'rftoolspower:ender_monitor',
            pattern: [' E ', 'SMS', 'TRT'],
            key: {
                M: 'rftoolsbase:machine_base',
                T: 'minecraft:redstone_torch',
                R: 'minecraft:redstone',
                S: 'thermal:redstone_servo',
                E: 'rftoolsbase:infused_enderpearl'
            },
            id: 'rftoolspower:ender_monitor'
        },
        {
            output: 'rftoolspower:pearl_injector',
            pattern: ['HBH', 'RMR', 'HOH'],
            key: {
                M: 'rftoolsbase:machine_frame',
                H: 'immersiveengineering:ingot_hop_graphite',
                R: 'mekanism:alloy_reinforced',
                O: 'pneumaticcraft:omnidirectional_hopper',
                B: Item.of('mekanism:basic_bin').ignoreNBT()
            },
            id: 'rftoolspower:pearl_injector'
        },
        {
            output: 'rftoolspower:endergenic',
            pattern: ['RER', 'IMI', 'RER'],
            key: {
                M: 'rftoolsbase:machine_frame',
                R: 'mekanism:alloy_reinforced',
                I: 'rftoolsbase:infused_enderpearl',
                E: Item.of('solarpanels:improved_energy_tablet').weakNBT()
            },
            id: 'rftoolspower:endergenic'
        },
        {
            output: 'rftoolspower:blazing_agitator',
            pattern: ['BBB', 'AMA', 'RER'],
            key: {
                M: 'rftoolsbase:machine_frame',
                R: 'mekanism:alloy_reinforced',
                E: Item.of('solarpanels:improved_energy_tablet').weakNBT(),
                B: 'botania:blaze_block',
                A: 'forbidden_arcanus:arcane_golden_glass'
            },
            id: 'rftoolspower:blazing_agitator'
        },
        {
            output: 'rftoolspower:blazing_infuser',
            pattern: ['SBS', 'DMD', 'SES'],
            key: {
                M: 'rftoolsbase:machine_frame',
                S: '#forge:ingots/steel',
                E: Item.of('solarpanels:improved_energy_tablet').weakNBT(),
                D: 'rftoolsbase:infused_diamond',
                B: 'botania:blaze_block'
            },
            id: 'rftoolspower:blazing_infuser'
        },
        {
            output: 'rftoolspower:blazing_generator',
            pattern: ['BDB', 'EME', 'BDB'],
            key: {
                M: 'rftoolsbase:machine_frame',
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                D: 'rftoolsbase:infused_diamond',
                B: 'minecraft:blaze_rod'
            },
            id: 'rftoolspower:blazing_generator'
        },
        {
            output: 'rftoolsutility:matter_transmitter',
            pattern: ['PWP', 'RMR', 'SES'],
            key: {
                M: 'rftoolsbase:machine_frame',
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                S: '#forge:ingots/steel',
                R: 'thermal:redstone_servo',
                P: 'minecraft:ender_pearl',
                W: Item.of('waystones:warp_stone').weakNBT()
            },
            id: 'rftoolsutility:matter_transmitter'
        },
        {
            output: 'rftoolsutility:matter_receiver',
            pattern: ['SES', 'RMR', 'PWP'],
            key: {
                M: 'rftoolsbase:machine_frame',
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                S: '#forge:ingots/steel',
                R: 'thermal:redstone_servo',
                P: 'minecraft:ender_pearl',
                W: Item.of('waystones:warp_stone').weakNBT()
            },
            id: 'rftoolsutility:matter_receiver'
        },
        {
            output: 'rftoolsutility:dialing_device',
            pattern: ['SRS', 'WMW', 'SES'],
            key: {
                M: 'rftoolsbase:machine_frame',
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                S: 'minecraft:redstone',
                R: 'thermal:redstone_servo',
                W: Item.of('waystones:warp_stone').weakNBT()
            },
            id: 'rftoolsutility:dialing_device'
        },
        {
            output: 'rftoolsutility:charged_porter',
            pattern: [' I ', 'IWI', 'SES'],
            key: {
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                W: Item.of('waystones:warp_stone').weakNBT(),
                I: 'rftoolsbase:infused_enderpearl',
                S: '#forge:ingots/steel'
            },
            id: 'rftoolsutility:charged_porter'
        },
        {
            output: 'rftoolsutility:advanced_charged_porter',
            pattern: ['IRI', 'RCR', 'IEI'],
            key: {
                E: Item.of('solarpanels:improved_energy_tablet').weakNBT(),
                I: 'rftoolsbase:infused_diamond',
                R: 'mekanism:alloy_reinforced',
                C: Item.of('rftoolsutility:charged_porter').weakNBT()
            },
            id: 'rftoolsutility:advanced_charged_porter'
        },
        {
            output: 'rftoolsbase:infused_enderpearl',
            pattern: ['DDD', 'DPD', 'DDD'],
            key: {
                P: 'botania:mana_pearl',
                D: 'rftoolsbase:dimensionalshard'
            },
            id: 'rftoolsbase:infused_enderpearl'
        },
        {
            output: 'rftoolsbase:infused_diamond',
            pattern: ['DDD', 'DMD', 'DDD'],
            key: {
                M: 'botania:mana_diamond',
                D: 'rftoolsbase:dimensionalshard'
            },
            id: 'rftoolsbase:infused_diamond'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
