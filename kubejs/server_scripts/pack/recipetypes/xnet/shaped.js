onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/xnet/shaped/';
    const recipes = [
        {
            output: 'xnet:controller',
            pattern: ['RLR', 'PCP', 'BEB'],
            key: {
                P: 'thermal:redstone_servo',
                C: 'rftoolsbase:machine_frame',
                R: 'mekanism:alloy_reinforced',
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                L: 'ae2:logic_processor',
                B: 'extendedcrafting:black_iron_ingot'
            },
            id: 'xnet:controller'
        },
        {
            output: Item.of('xnet:netcable_yellow', 16),
            pattern: ['MYM', 'RQR', 'MRM'],
            key: {
                Q: 'ae2:quartz_fiber',
                M: 'botania:mana_string',
                R: 'minecraft:redstone',
                Y: 'minecraft:yellow_dye'
            },
            id: 'xnet:netcable_yellow'
        },
        {
            output: Item.of('xnet:netcable_blue', 16),
            pattern: ['MYM', 'RQR', 'MRM'],
            key: {
                Q: 'ae2:quartz_fiber',
                M: 'botania:mana_string',
                R: 'minecraft:redstone',
                Y: 'minecraft:blue_dye'
            },
            id: 'xnet:netcable_blue'
        },
        {
            output: Item.of('xnet:netcable_green', 16),
            pattern: ['MYM', 'RQR', 'MRM'],
            key: {
                Q: 'ae2:quartz_fiber',
                M: 'botania:mana_string',
                R: 'minecraft:redstone',
                Y: 'minecraft:green_dye'
            },
            id: 'xnet:netcable_green'
        },
        {
            output: Item.of('xnet:netcable_red', 16),
            pattern: ['MYM', 'RQR', 'MRM'],
            key: {
                Q: 'ae2:quartz_fiber',
                M: 'botania:mana_string',
                R: 'minecraft:redstone',
                Y: 'minecraft:red_dye'
            },
            id: 'xnet:netcable_red'
        },
        {
            output: Item.of('xnet:netcable_routing', 16),
            pattern: ['MYM', 'RQR', 'MRM'],
            key: {
                Q: 'ae2:quartz_fiber',
                M: 'botania:mana_string',
                R: 'minecraft:redstone',
                Y: 'minecraft:black_dye'
            },
            id: 'xnet:netcable_routing'
        },
        {
            output: 'xnet:connector_routing',
            pattern: ['RRR', 'SCS', 'RRR'],
            key: {
                C: '#xnet:connectors',
                S: 'thermal:signalum_nugget',
                R: 'minecraft:redstone'
            },
            id: 'xnet:connector_routing'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
