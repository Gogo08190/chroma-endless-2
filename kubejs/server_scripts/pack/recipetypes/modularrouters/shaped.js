onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/modularrouters/shaped/';
    const recipes = [
        {
            output: Item.of('modularrouters:modular_router', 2),
            pattern: ['SSS', 'SBR', 'SSS'],
            key: {
                S: '#forge:sheetmetals/iron',
                B: 'modularrouters:blank_module',
                R: 'extendedcrafting:redstone_ingot'
            },
            id: 'modularrouters:modular_router'
        },
        {
            output: Item.of('modularrouters:blank_module', 4),
            pattern: [' R ', 'PPP', 'NNN'],
            key: {
                P: '#forge:paper_bundle',
                N: '#blue_skies:nuggets/horizonite',
                R: 'extendedcrafting:redstone_ingot'
            },
            id: 'modularrouters:blank_module'
        },
        {
            output: Item.of('modularrouters:blank_upgrade', 2),
            pattern: ['PPN', 'PRN', ' PN'],
            key: {
                P: '#forge:paper_bundle',
                N: '#blue_skies:nuggets/horizonite',
                R: 'pneumaticcraft:upgrade_matrix'
            },
            id: 'modularrouters:blank_upgrade'
        },
        {
            output: 'modularrouters:activator_module',
            pattern: ['RLR', 'DBD', 'RQR'],
            key: {
                R: 'extendedcrafting:redstone_ingot',
                L: 'minecraft:lever',
                D: 'minecraft:dispenser',
                B: 'modularrouters:blank_module',
                Q: '#forge:gears/quartz'
            },
            id: 'modularrouters:activator_module'
        },
        {
            output: 'modularrouters:energy_output_module',
            pattern: [' E ', 'PBP', ' Q '],
            key: {
                E: Item.of('powah:energizing_rod_hardened').ignoreNBT(),
                P: '#forge:plates/gold',
                B: 'modularrouters:blank_module',
                Q: '#forge:gears/quartz'
            },
            id: 'modularrouters:energy_output_module'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
