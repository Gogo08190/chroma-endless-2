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
        {
            output: 'xnet:connector_yellow',
            pattern: ['ICI', 'RDR', 'IRI'],
            key: {
                I: 'thermal:invar_ingot',
                R: 'minecraft:redstone',
                C: '#forge:chests/wooden',
                D: 'minecraft:yellow_dye'
            },
            id: 'xnet:connector_yellow'
        },
        {
            output: 'xnet:connector_blue',
            pattern: ['ICI', 'RDR', 'IRI'],
            key: {
                I: 'thermal:invar_ingot',
                R: 'minecraft:redstone',
                C: '#forge:chests/wooden',
                D: 'minecraft:blue_dye'
            },
            id: 'xnet:connector_blue'
        },
        {
            output: 'xnet:connector_green',
            pattern: ['ICI', 'RDR', 'IRI'],
            key: {
                I: 'thermal:invar_ingot',
                R: 'minecraft:redstone',
                C: '#forge:chests/wooden',
                D: 'minecraft:green_dye'
            },
            id: 'xnet:connector_green'
        },
        {
            output: 'xnet:connector_red',
            pattern: ['ICI', 'RDR', 'IRI'],
            key: {
                I: 'thermal:invar_ingot',
                R: 'minecraft:redstone',
                C: '#forge:chests/wooden',
                D: 'minecraft:red_dye'
            },
            id: 'xnet:connector_red'
        },
        {
            output: 'xnet:advanced_connector_routing',
            pattern: ['CE ', 'MR ', '   '],
            key: {
                C: 'xnet:connector_routing',
                E: 'minecraft:ender_pearl',
                M: 'botania:mana_diamond',
                R: 'minecraft:redstone'
            },
            id: 'xnet:advanced_connector_routing'
        },
        {
            output: 'xnet:advanced_connector_yellow',
            pattern: ['CE ', 'MR ', '   '],
            key: {
                C: 'xnet:connector_yellow',
                E: 'minecraft:ender_pearl',
                M: 'botania:mana_diamond',
                R: 'minecraft:redstone'
            },
            id: 'xnet:advanced_connector_yellow'
        },
        {
            output: 'xnet:advanced_connector_blue',
            pattern: ['CE ', 'MR ', '   '],
            key: {
                C: 'xnet:connector_blue',
                E: 'minecraft:ender_pearl',
                M: 'botania:mana_diamond',
                R: 'minecraft:redstone'
            },
            id: 'xnet:advanced_connector_blue'
        },
        {
            output: 'xnet:advanced_connector_green',
            pattern: ['CE ', 'MR ', '   '],
            key: {
                C: 'xnet:connector_green',
                E: 'minecraft:ender_pearl',
                M: 'botania:mana_diamond',
                R: 'minecraft:redstone'
            },
            id: 'xnet:advanced_connector_green'
        },
        {
            output: 'xnet:advanced_connector_red',
            pattern: ['CE ', 'MR ', '   '],
            key: {
                C: 'xnet:connector_red',
                E: 'minecraft:ender_pearl',
                M: 'botania:mana_diamond',
                R: 'minecraft:redstone'
            },
            id: 'xnet:advanced_connector_red'
        },
        {
            output: 'xnet:connector_upgrade',
            pattern: ['CE ', 'MR ', '   '],
            key: {
                C: 'minecraft:paper',
                E: 'minecraft:ender_pearl',
                M: 'botania:mana_diamond',
                R: 'minecraft:redstone'
            },
            id: 'xnet:connector_upgrade'
        },
        {
            output: 'xnet:antenna_dish',
            pattern: ['SSS', 'SMS', ' R '],
            key: {
                S: '#forge:plates/steel',
                M: 'botania:mana_pearl',
                R: '#forge:rods/steel'
            },
            id: 'xnet:antenna_dish'
        },
        {
            output: 'xnet:antenna_base',
            pattern: [' R ', ' R ', 'SIS'],
            key: {
                S: '#forge:plates/steel',
                I: 'thermal:invar_block',
                R: '#forge:rods/steel'
            },
            id: 'xnet:antenna_base'
        },
        {
            output: 'xnet:antenna',
            pattern: ['IRI', 'IRI', ' R '],
            key: {
                I: 'minecraft:iron_bars',
                R: '#forge:rods/steel'
            },
            id: 'xnet:antenna'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
