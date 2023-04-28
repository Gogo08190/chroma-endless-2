onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tconstruct/shaped/';
    const recipes = [
        {
            output: 'tconstruct:seared_heater',
            pattern: ['SSS', 'SFS', 'SSS'],
            key: {
                S: 'tconstruct:seared_brick',
                F: 'minecraft:furnace'
            },
            id: 'tconstruct:smeltery/seared/heater'
        },
        {
            output: 'tconstruct:seared_melter',
            pattern: ['GGG', 'GFG', 'SSS'],
            key: {
                S: 'tconstruct:seared_brick',
                F: '#forge:furnaces/copper',
                G: 'tconstruct:seared_glass'
            },
            id: 'tconstruct:smeltery/seared/melter'
        },
        {
            output: 'tconstruct:scorched_drain',
            pattern: ['S S', 'P P', 'S S'],
            key: {
                S: 'tconstruct:scorched_brick',
                P: Item.of('tconstruct:large_plate', '{Material:"tconstruct:nahuatl"}')
            },
            id: 'tconstruct:smeltery/scorched/drain'
        },
        {
            output: 'tconstruct:scorched_duct',
            pattern: ['S S', 'P P', 'S S'],
            key: {
                S: 'tconstruct:scorched_brick',
                P: Item.of('tconstruct:large_plate', '{Material:"tconstruct:cobalt"}')
            },
            id: 'tconstruct:smeltery/scorched/duct'
        },
        {
            output: 'tconstruct:scorched_chute',
            pattern: ['SPS', '   ', 'SPS'],
            key: {
                S: 'tconstruct:scorched_brick',
                P: Item.of('tconstruct:large_plate', '{Material:"tconstruct:nahuatl"}')
            },
            id: 'tconstruct:smeltery/scorched/chute'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
