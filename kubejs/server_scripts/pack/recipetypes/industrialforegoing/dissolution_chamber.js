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
