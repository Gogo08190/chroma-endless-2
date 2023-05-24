onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/cc_tweaked/shaped/';
    const recipes = [
        {
            output: 'advancedperipherals:peripheral_casing',
            pattern: ['SDS', 'DRD', 'SDS'],
            key: {
                S: '#forge:sheetmetals/steel',
                D: 'graveyard:dark_iron_bars',
                R: 'immersiveengineering:rs_engineering'
            },
            id: 'advancedperipherals:peripheral_casing'
        },
        {
            output: 'computercraft:computer_normal',
            pattern: ['SSS', 'SES', 'SPS'],
            key: {
                S: '#forge:stone',
                P: '#forge:glass_panes',
                E: 'create:electron_tube'
            },
            id: 'computercraft:computer_normal'
        },
        {
            output: Item.of('computercraft:monitor_advanced', 2),
            pattern: ['GGG', 'GPG', 'GGG'],
            key: {
                G: '#forge:plates/gold',
                P: '#forge:glass_panes'
            },
            id: 'computercraft:monitor_advanced'
        },
        {
            output: 'computercraft:wireless_modem_normal',
            pattern: ['OOO', 'OEO', 'OOO'],
            key: {
                E: 'architects_palette:ender_pearl_block',
                O: '#forge:obsidian'
            },
            id: 'computercraft:wireless_modem_normal'
        },
        {
            output: 'computercraft:wireless_modem_advanced',
            pattern: ['GGG', 'GPG', 'GGG'],
            key: {
                G: '#forge:plates/gold',
                P: 'minecraft:ender_eye'
            },
            id: 'computercraft:wireless_modem_advanced'
        },
        {
            output: 'computercraft:computer_advanced',
            pattern: ['GGG', 'GPG', 'GGG'],
            key: {
                G: '#forge:plates/gold',
                P: 'computercraft:computer_normal'
            },
            id: 'computercraft:computer_advanced'
        },
        {
            output: 'computercraft:turtle_normal',
            pattern: ['PPP', 'PNP', 'PCP'],
            key: {
                P: '#forge:plates/iron',
                N: 'computercraft:computer_normal',
                C: 'immersiveengineering:crate'
            },
            id: 'computercraft:turtle_normal'
        },
        {
            output: 'computercraft:turtle_advanced',
            pattern: ['PPP', 'PTP', ' C '],
            key: {
                P: '#forge:plates/gold',
                T: 'computercraft:turtle_normal',
                C: 'immersiveengineering:circuit_board'
            },
            id: 'computercraft:turtle_advanced'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
