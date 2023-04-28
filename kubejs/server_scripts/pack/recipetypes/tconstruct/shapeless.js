onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tconstruct/shapeless/';
    const recipes = [
        {
            output: Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_paver"}').weakNBT(),
            inputs: ['tconstruct:smeltery_controller'],
            id: `${id_prefix}smeltery_controller_1`
        },
        {
            output: Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_stone"}').weakNBT(),
            inputs: ['tconstruct:smeltery_controller'],
            id: `${id_prefix}smeltery_controller_2`
        },
        {
            output: Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_triangle_bricks"}').weakNBT(),
            inputs: ['tconstruct:smeltery_controller'],
            id: `${id_prefix}smeltery_controller_3`
        },
        {
            output: Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_cracked_bricks"}').weakNBT(),
            inputs: ['tconstruct:smeltery_controller'],
            id: `${id_prefix}smeltery_controller_4`
        },
        {
            output: Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_fancy_bricks"}').weakNBT(),
            inputs: ['tconstruct:smeltery_controller'],
            id: `${id_prefix}smeltery_controller_5`
        },
        {
            output: Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_cobble"}').weakNBT(),
            inputs: ['tconstruct:smeltery_controller'],
            id: `${id_prefix}smeltery_controller_6`
        },
        {
            output: 'tconstruct:smeltery_controller',
            inputs: ['tconstruct:smeltery_controller'],
            id: `${id_prefix}smeltery_controller`
        },

        {
            output: Item.of('tconstruct:foundry_controller', '{texture:"tconstruct:chiseled_scorched_bricks"}').weakNBT(),
            inputs: ['tconstruct:foundry_controller'],
            id: `${id_prefix}foundry_controller_1`
        },
        {
            output: Item.of('tconstruct:foundry_controller', '{texture:"tconstruct:scorched_road"}').weakNBT(),
            inputs: ['tconstruct:foundry_controller'],
            id: `${id_prefix}foundry_controller_2`
        },
        {
            output: Item.of('tconstruct:foundry_controller', '{texture:"tconstruct:polished_scorched_stone"}').weakNBT(),
            inputs: ['tconstruct:foundry_controller'],
            id: `${id_prefix}foundry_controller_3`
        },
        {
            output: Item.of('tconstruct:foundry_controller', '{texture:"tconstruct:scorched_stone"}').weakNBT(),
            inputs: ['tconstruct:foundry_controller'],
            id: `${id_prefix}foundry_controller_4`
        },
        {
            output: 'tconstruct:foundry_controller',
            inputs: ['tconstruct:foundry_controller'],
            id: `${id_prefix}foundry_controller`
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
