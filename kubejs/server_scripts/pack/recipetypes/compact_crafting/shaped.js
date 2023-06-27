onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('compactmachines:wall', 8),
            pattern: ['DSD', 'S S', 'DSD'],
            key: {
                D: 'minecraft:polished_deepslate',
                S: 'ae2:smooth_sky_stone_block'
            },
            id: 'compactmachines:wall'
        },
        {
            output: 'compactmachines:personal_shrinking_device',
            pattern: [' I ', 'EWE', ' P '],
            key: {
                W: Item.of('waystones:warp_stone').weakNBT(),
                E: 'mekanism:elite_control_circuit',
                I: 'rftoolsbase:information_screen',
                P: 'industrialforegoing:plastic'
            },
            id: 'compactmachines:personal_shrinking_device'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
