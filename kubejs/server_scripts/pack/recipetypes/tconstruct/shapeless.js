onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tconstruct/shapeless/';
    const recipes = [
        {
            output: Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_paver"}'),
            inputs: ['tconstruct:smeltery_controller'],
            id: `${id_prefix}smeltery_controller_1`
        },
        {
            output: Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_stone"}'),
            inputs: [Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_paver"}')],
            id: `${id_prefix}smeltery_controller_2`
        },
        {
            output: Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_triangle_bricks"}'),
            inputs: [Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_stone"}')],
            id: `${id_prefix}smeltery_controller_3`
        },
        {
            output: Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_cracked_bricks"}'),
            inputs: [Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_triangle_bricks"}')],
            id: `${id_prefix}smeltery_controller_4`
        },
        {
            output: Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_fancy_bricks"}'),
            inputs: [Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_cracked_bricks"}')],
            id: `${id_prefix}smeltery_controller_5`
        },
        {
            output: Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_cobble"}'),
            inputs: [Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_fancy_bricks"}')],
            id: `${id_prefix}smeltery_controller_6`
        },
        {
            output: 'tconstruct:smeltery_controller',
            inputs: [Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_cobble"}')],
            id: `${id_prefix}smeltery_controller`
        },

        {
            output: Item.of('tconstruct:foundry_controller', '{texture:"tconstruct:chiseled_scorched_bricks"}'),
            inputs: ['tconstruct:foundry_controller'],
            id: `${id_prefix}foundry_controller_1`
        },
        {
            output: Item.of('tconstruct:foundry_controller', '{texture:"tconstruct:scorched_road"}'),
            inputs: [Item.of('tconstruct:foundry_controller', '{texture:"tconstruct:chiseled_scorched_bricks"}')],
            id: `${id_prefix}foundry_controller_2`
        },
        {
            output: Item.of('tconstruct:foundry_controller', '{texture:"tconstruct:polished_scorched_stone"}'),
            inputs: [Item.of('tconstruct:foundry_controller', '{texture:"tconstruct:scorched_road"}')],
            id: `${id_prefix}foundry_controller_3`
        },
        {
            output: Item.of('tconstruct:foundry_controller', '{texture:"tconstruct:scorched_stone"}'),
            inputs: [Item.of('tconstruct:foundry_controller', '{texture:"tconstruct:polished_scorched_stone"}')],
            id: `${id_prefix}foundry_controller_4`
        },
        {
            output: 'tconstruct:foundry_controller',
            inputs: [Item.of('tconstruct:foundry_controller', '{texture:"tconstruct:scorched_stone"}')],
            id: `${id_prefix}foundry_controller`
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
