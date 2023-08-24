onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/industrialforegoing/dissolution_chamber/';

    /*
    {
        inputs: [
            '', // top left
            '', // top
            '', // top right
            '', // left
            '', // right
            '', // bottom left
            '', // bottom
            ''  // bottom right
        ],
        inputFluid: '', // optionnel
        inputFluidAmount: 0, // 0 si pas de fluid
        processingTime: 50,
        outputItem: { item: '', count: 1 },
        outputFluid: '', // optionnel
        outputFluidAmount: 0, // 0 si pas de fluid
        id: ''
    }
    */

    const recipes = [
        {
            inputs: [
                'industrialforegoing:plastic',
                'industrialforegoing:machine_frame_pity',
                'industrialforegoing:plastic',
                'mekanism:alloy_reinforced',
                'mekanism:alloy_reinforced',
                'chemlib:platinum_ingot',
                'thermal:constantan_gear',
                'chemlib:platinum_ingot'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 250,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:machine_frame_simple', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/simple_machine_frame'
        },
        {
            inputs: [
                'chemlib:scandium_ingot',
                'chemlib:magnesium_ingot',
                'chemlib:scandium_ingot',
                'chemlib:magnesium_ingot',
                'chemlib:magnesium_ingot',
                'chemlib:scandium_ingot',
                'chemlib:magnesium_ingot',
                'chemlib:scandium_ingot'
            ],
            inputFluid: 'chroma:molten_mana',
            inputFluidAmount: 3000,
            processingTime: 300,
            outputItem: { item: 'undergarden:catalyst', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'undergarden:catalyst'
        },
        {
            inputs: [
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall'
            ],
            inputFluid: 'tconstruct:molten_copper',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'compactmachines:machine_tiny', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'compactmachines:machine_tiny'
        },
        {
            inputs: [
                'compactmachines:wall',
                'thermal:redstone_servo',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:machine_tiny',
                'compactmachines:wall'
            ],
            inputFluid: 'tconstruct:molten_iron',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'compactmachines:machine_small', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'compactmachines:machine_small'
        },
        {
            inputs: [
                'compactmachines:wall',
                'mekanism:alloy_infused',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:machine_small',
                'compactmachines:wall'
            ],
            inputFluid: 'tconstruct:molten_gold',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'compactmachines:machine_normal', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'compactmachines:machine_normal'
        },
        {
            inputs: [
                'compactmachines:wall',
                'mekanism:alloy_reinforced',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:machine_normal',
                'compactmachines:wall'
            ],
            inputFluid: 'tconstruct:molten_obsidian',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'compactmachines:machine_large', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'compactmachines:machine_large'
        },
        {
            inputs: [
                'compactmachines:wall',
                'industrialforegoing:machine_frame_pity',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:machine_large',
                'compactmachines:wall'
            ],
            inputFluid: 'tconstruct:molten_diamond',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'compactmachines:machine_giant', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'compactmachines:machine_giant'
        },
        {
            inputs: [
                'compactmachines:wall',
                'industrialforegoing:machine_frame_simple',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:wall',
                'compactmachines:machine_giant',
                'compactmachines:wall'
            ],
            inputFluid: 'tconstruct:molten_netherite',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'compactmachines:machine_maximum', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'compactmachines:machine_maximum'
        },
        {
            inputs: [
                'powah:reactor_hardened',
                'mekanism:advanced_control_circuit',
                'powah:reactor_hardened',
                'powah:capacitor_blazing',
                'powah:capacitor_blazing',
                'powah:reactor_hardened',
                'mekanism:advanced_control_circuit',
                'powah:reactor_hardened'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 500,
            processingTime: 300,
            outputItem: { item: 'powah:reactor_blazing', count: 4 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'powah:crafting/reactor_blazing'
        },
        {
            inputs: [
                'powah:reactor_blazing',
                'mekanism:ultimate_control_circuit',
                'powah:reactor_blazing',
                'powah:capacitor_niotic',
                'powah:capacitor_niotic',
                'powah:reactor_blazing',
                'mekanism:ultimate_control_circuit',
                'powah:reactor_blazing'
            ],
            inputFluid: 'materialis:molten_utherium',
            inputFluidAmount: 500,
            processingTime: 300,
            outputItem: { item: 'powah:reactor_niotic', count: 4 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'powah:crafting/reactor_niotic'
        },
        {
            inputs: [
                'pneumaticcraft:plastic',
                '#forge:ingots/steel',
                'pneumaticcraft:plastic',
                '#forge:ingots/steel',
                '#forge:ingots/steel',
                'pneumaticcraft:plastic',
                '#forge:ingots/steel',
                'pneumaticcraft:plastic'
            ],
            inputFluid: 'tconstruct:molten_copper',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:dynamic_tank', count: 4 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:dynamic_tank'
        },
        {
            inputs: [
                'ae2:fluix_glass_cable',
                'mekanism:hdpe_sheet',
                'ae2:calculation_processor',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'ae2:engineering_processor',
                'mekanism:hdpe_sheet',
                'ae2:logic_processor'
            ],
            inputFluid: 'jaopca:molten.certus_quartz',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'ae2:crafting_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'ae2:network/crafting/cpu_crafting_unit'
        },
        {
            inputs: [
                'extendedcrafting:elite_component',
                'extendedcrafting:elite_catalyst',
                'extendedcrafting:elite_component',
                'extendedcrafting:advanced_table',
                'extendedcrafting:advanced_table',
                'extendedcrafting:elite_component',
                'undergarden:forgotten_block',
                'extendedcrafting:elite_component'
            ],
            inputFluid: 'materialis:molten_utherium',
            inputFluidAmount: 4000,
            processingTime: 300,
            outputItem: { item: 'extendedcrafting:elite_table', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'extendedcrafting:elite_table'
        },
        {
            inputs: [
                'biggerreactors:blutonium_ingot',
                'thermal:enderium_block',
                'biggerreactors:blutonium_ingot',
                'minecraft:blaze_rod',
                'minecraft:blaze_rod',
                'biggerreactors:blutonium_ingot',
                'thermal:enderium_block',
                'biggerreactors:blutonium_ingot'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'biggerreactors:ludicrite_block', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'biggerreactors:crafting/ludicrite_block_enderium'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'industrialforegoing:machine_frame_simple',
                'industrialforegoing:plastic',
                'mekaevolution:absolute_control_circuit',
                'mekaevolution:absolute_control_circuit',
                'beyond_earth:desh_ingot',
                'thermal:lumium_gear',
                'beyond_earth:desh_ingot'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 500,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:machine_frame_advanced', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'mekaevolution:plasma_pickaxe',
                'industrialforegoing:plastic',
                'beyond_earth:compressed_desh',
                'beyond_earth:compressed_desh',
                'chroma:absolute_alloy',
                'industrialforegoing:machine_frame_advanced',
                'chroma:absolute_alloy'
            ],
            inputFluid: 'mekanism:lithium',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:ore_laser_base', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:ore_laser_base'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'mekanism:ultimate_fluid_tank',
                'industrialforegoing:plastic',
                'beyond_earth:compressed_desh',
                'beyond_earth:compressed_desh',
                'chroma:absolute_alloy',
                'industrialforegoing:machine_frame_advanced',
                'chroma:absolute_alloy'
            ],
            inputFluid: 'mekanism:lithium',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:fluid_laser_base', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:fluid_laser_base'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'mekaevolution:plasma_sword',
                'industrialforegoing:plastic',
                'mob_grinding_utils:saw',
                'mob_grinding_utils:saw',
                'solarpanels:spectral_energy_tablet',
                'industrialforegoing:machine_frame_advanced',
                'solarpanels:spectral_energy_tablet'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:mob_crusher', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:mob_crusher'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'industrialforegoing:mob_imprisonment_tool',
                'mekanism:hdpe_sheet',
                'upgradednetherite:ender_upgraded_netherite_ingot',
                'upgradednetherite:ender_upgraded_netherite_ingot',
                'mekaevolution:absolute_control_circuit',
                'extendedcrafting:redstone_ingot',
                'mekaevolution:absolute_control_circuit'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 500,
            processingTime: 300,
            outputItem: { item: 'hostilenetworks:blank_data_model', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'hostilenetworks:framework'
        },
        {
            inputs: [
                'ae2:silicon',
                'powah:crystal_niotic',
                'ae2:silicon',
                'minecraft:clay_ball',
                'minecraft:clay_ball',
                'ae2:silicon',
                'powah:crystal_niotic',
                'ae2:silicon'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 125,
            processingTime: 300,
            outputItem: { item: 'hostilenetworks:empty_prediction', count: 16 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'hostilenetworks:matrix'
        },
        {
            inputs: [
                'minecraft:polished_blackstone',
                'computercraft:computer_advanced',
                'minecraft:polished_blackstone',
                'lazierae2:parallel_processor',
                'lazierae2:parallel_processor',
                'solarpanels:spectral_energy_tablet',
                'industrialforegoing:machine_frame_advanced',
                'solarpanels:spectral_energy_tablet'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'hostilenetworks:sim_chamber', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'hostilenetworks:sim_chamber'
        },
        {
            inputs: [
                'mekanism:ingot_osmium',
                'chemlib:platinum_ingot',
                'mekanism:ingot_osmium',
                'chemlib:platinum_ingot',
                'chemlib:platinum_ingot',
                'mekanism:ingot_osmium',
                'chemlib:platinum_ingot',
                'mekanism:ingot_osmium'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 200,
            processingTime: 300,
            outputItem: { item: 'alchemistry:reactor_casing', count: 4 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'alchemistry:reactor_casing'
        },
        {
            inputs: [
                'biggerreactors:heat_exchanger_casing',
                'powah:capacitor_spirited',
                'biggerreactors:heat_exchanger_casing',
                'biggerreactors:ludicrite_block',
                'biggerreactors:ludicrite_block',
                'biggerreactors:heat_exchanger_casing',
                'powah:capacitor_spirited',
                'biggerreactors:heat_exchanger_casing'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'biggerreactors:heat_exchanger_terminal', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'biggerreactors:crafting/heat_exchanger/terminal'
        },
        {
            inputs: [
                'biggerreactors:turbine_casing',
                'powah:capacitor_spirited',
                'biggerreactors:turbine_casing',
                'biggerreactors:blutonium_block',
                'biggerreactors:blutonium_block',
                'biggerreactors:turbine_casing',
                'powah:capacitor_spirited',
                'biggerreactors:turbine_casing'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'biggerreactors:turbine_terminal', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'biggerreactors:crafting/turbine/turbine_terminal'
        },
        {
            inputs: [
                'lazierae2:carbonic_fluix_dust',
                'ae2:calculation_processor',
                'lazierae2:carbonic_fluix_dust',
                'megacells:cell_component_1m',
                'megacells:cell_component_1m',
                'lazierae2:carbonic_fluix_dust',
                'megacells:cell_component_1m',
                'lazierae2:carbonic_fluix_dust'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 200,
            processingTime: 300,
            outputItem: { item: 'megacells:cell_component_4m', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'megacells:cell_component_4m'
        },
        {
            inputs: [
                'fluxnetworks:flux_block',
                'mekanism:pellet_polonium',
                'fluxnetworks:flux_block',
                'fluxnetworks:flux_dust',
                'fluxnetworks:flux_dust',
                'fluxnetworks:flux_block',
                'mekaevolution:supreme_control_circuit',
                'fluxnetworks:flux_block'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 500,
            processingTime: 300,
            outputItem: { item: 'fluxnetworks:flux_controller', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'fluxnetworks:fluxcontroller'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'industrialforegoing:machine_frame_advanced',
                'industrialforegoing:plastic',
                'mekaevolution:supreme_control_circuit',
                'mekaevolution:supreme_control_circuit',
                'fluxnetworks:flux_core',
                'mekanism:pellet_plutonium',
                'fluxnetworks:flux_core'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 135,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:machine_frame_supreme', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/supreme_machine_frame'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'industrialforegoing:machine_frame_advanced',
                'industrialforegoing:plastic',
                'mekanism:pellet_polonium',
                'mekanism:pellet_polonium',
                'fluxnetworks:flux_core',
                'solarpanels:singular_energy_tablet',
                'fluxnetworks:flux_core'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 500,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:mycelial_reactor', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/mycelial_reactor'
        },
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event.custom({
                type: 'industrialforegoing:dissolution_chamber',
                input: ingredients,
                inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
                processingTime: recipe.processingTime,
                output: recipe.outputItem,
                outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
            })
            .id(recipe.id);
    });
});
