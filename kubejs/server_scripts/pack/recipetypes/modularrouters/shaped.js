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
        {
            output: 'modularrouters:sender_module_3',
            pattern: [' E ', 'UBU', ' E '],
            key: {
                E: 'extendedcrafting:ender_ingot',
                U: Item.of('modularrouters:sender_module_2').ignoreNBT(),
                B: 'modularrouters:blank_module'
            },
            id: 'modularrouters:sender_module_3'
        },
        {
            output: 'modularrouters:blast_upgrade',
            pattern: ['GOG', 'OBO', 'GOG'],
            key: {
                G: 'thermal:obsidian_glass',
                O: '#forge:obsidian',
                B: 'modularrouters:blank_upgrade'
            },
            id: 'modularrouters:blast_upgrade'
        },
        {
            output: 'modularrouters:camouflage_upgrade',
            pattern: [' F ', 'FBF', ' F '],
            key: {
                F: 'xnet:facade',
                B: 'modularrouters:blank_upgrade'
            },
            id: 'modularrouters:camouflage_upgrade'
        },
        {
            output: Item.of('modularrouters:fluid_upgrade', 3),
            pattern: [' F ', 'FBF', ' P '],
            key: {
                F: 'xnet:facade',
                P: 'create:fluid_tank',
                B: 'modularrouters:blank_upgrade'
            },
            id: 'modularrouters:fluid_upgrade'
        },
        {
            output: 'modularrouters:fast_pickup_augment',
            pattern: [' F ', 'FBF', ' F '],
            key: {
                F: Item.of('minecraft:fishing_rod').ignoreNBT(),
                B: 'modularrouters:augment_core'
            },
            id: 'modularrouters:fast_pickup_augment'
        },
        {
            output: Item.of('modularrouters:range_down_augment', 2),
            pattern: [' R ', 'FBF', ' F '],
            key: {
                F: '#forge:gems/quartz',
                R: '#forge:rods/aluminum',
                B: 'modularrouters:augment_core'
            },
            id: 'modularrouters:fast_pickup_augment'
        },
        {
            output: Item.of('modularrouters:range_up_augment', 2),
            pattern: [' F ', 'FBF', ' R '],
            key: {
                F: '#forge:gems/quartz',
                R: '#forge:rods/aluminum',
                B: 'modularrouters:augment_core'
            },
            id: 'modularrouters:range_up_augment'
        },
        {
            output: 'modularrouters:xp_vacuum_augment',
            pattern: [' F ', 'FBF', ' F '],
            key: {
                F: 'create:experience_nugget',
                B: 'modularrouters:augment_core'
            },
            id: 'modularrouters:xp_vacuum_augment'
        },
        {
            output: 'modularrouters:bulk_item_filter',
            pattern: ['PGP', 'UAU', 'PGP'],
            key: {
                P: '#forge:plates/iron',
                G: 'botania:mana_glass',
                U: 'modularrouters:blank_module',
                A: '#blue_skies:gems/aquite'
            },
            id: 'modularrouters:bulk_item_filter'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
