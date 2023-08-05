onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/wormhole/shaped/';
    const recipes = [
        {
            output: 'wormhole:advanced_target_device',
            pattern: ['  G', 'ITP', 'III'],
            key: {
                G: '#forge:dusts/glowstone',
                I: '#forge:plates/iron',
                T: 'wormhole:target_device',
                P: '#forge:plates/gold'
            },
            id: 'wormhole:advanced_target_device'
        },
        {
            output: Item.of('wormhole:portal_frame', 2),
            pattern: ['CSC', 'SOS', 'CSC'],
            key: {
                C: '#forge:ingots/compressed_iron',
                S: 'minecraft:smooth_stone',
                O: '#forge:obsidian'
            },
            id: 'wormhole:portal_frame'
        },
        {
            output: 'wormhole:target_device',
            pattern: ['  R', 'IBI', 'IPI'],
            key: {
                R: '#forge:dusts/redstone',
                I: '#forge:plates/iron',
                B: Item.of('evilcraft:blood_pearl_of_teleportation').ignoreNBT(),
                P: 'compactmachines:personal_shrinking_device'
            },
            id: 'wormhole:target_device'
        },
        {
            output: 'wormhole:coal_generator',
            pattern: ['CEC', 'CBC', 'CHC'],
            key: {
                C: '#forge:ingots/compressed_iron',
                E: '#forge:ender_pearls',
                B: 'ironfurnaces:copper_furnace',
                H: 'immersiveengineering:furnace_heater'
            },
            id: 'wormhole:coal_generator'
        },
        {
            output: 'wormhole:advanced_target_cell',
            pattern: ['CPC', 'VBV', 'CPC'],
            key: {
                C: '#forge:ingots/compressed_iron',
                P: 'pneumaticcraft:capacitor',
                B: 'wormhole:basic_target_cell',
                V: 'mna:superheated_vinteum_ingot'
            },
            id: 'wormhole:advanced_target_cell'
        },
        {
            output: 'wormhole:basic_target_cell',
            pattern: ['CMC', 'MOM', 'CMC'],
            key: {
                C: '#forge:ingots/compressed_iron',
                O: Item.of('minecraft:compass').ignoreNBT(),
                M: '#forge:ingots/manasteel'
            },
            id: 'wormhole:basic_target_cell'
        },
    ];
    

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
