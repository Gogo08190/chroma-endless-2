onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/movingelevators/shaped/';
    const recipes = [
        {
            output: 'movingelevators:display_block',
            pattern: ['SPS', 'RCR', 'SPS'],
            key: {
                S: '#forge:ingots/steel',
                P: 'ae2:calculation_processor',
                R: '#forge:dusts/redstone',
                C: 'computercraft:monitor_advanced'
            },
            id: 'movingelevators:display_block'
        },
        {
            output: 'movingelevators:elevator_block',
            pattern: ['SPS', 'RCR', 'SAS'],
            key: {
                S: '#forge:ingots/steel',
                P: 'ae2:logic_processor',
                A: 'ae2:engineering_processor',
                R: '#forge:circuits/basic',
                C: 'computercraft:computer_advanced'
            },
            id: 'movingelevators:elevator_block'
        },
        {
            output: 'movingelevators:button_block',
            pattern: ['SRS', 'RCR', 'SRS'],
            key: {
                S: '#forge:ingots/steel',
                R: '#forge:dusts/redstone',
                C: 'computercraft:computer_normal'
            },
            id: 'movingelevators:button_block'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
