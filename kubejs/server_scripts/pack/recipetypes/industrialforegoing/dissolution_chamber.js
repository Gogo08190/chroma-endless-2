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
                'mekanism:elite_control_circuit',
                'powah:reactor_blazing',
                'powah:capacitor_niotic',
                'powah:capacitor_niotic',
                'powah:reactor_blazing',
                'mekanism:elite_control_circuit',
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
