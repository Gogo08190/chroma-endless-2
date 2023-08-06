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
        {
            output: 'wormhole:portal_stabilizer',
            pattern: ['CLC', 'AFA', 'CRC'],
            key: {
                C: '#forge:ingots/compressed_iron',
                R: '#forge:storage_blocks/redstone',
                A: 'mekanism:advanced_control_circuit',
                L: '#forge:storage_blocks/lapis',
                F: 'ae2:fluix_pearl'
            },
            id: 'wormhole:portal_stabilizer'
        },
        {
            output: 'wormhole:advanced_energy_cell',
            pattern: ['CQC', 'ABA', 'CQC'],
            key: {
                C: '#forge:ingots/compressed_iron',
                Q: 'ae2:charged_certus_quartz_crystal',
                A: 'mekanism:alloy_reinforced',
                B: 'wormhole:basic_energy_cell'
            },
            id: 'wormhole:advanced_energy_cell'
        },
        {
            output: 'wormhole:basic_energy_cell',
            pattern: ['CEC', 'EHE', 'CEC'],
            key: {
                C: '#forge:ingots/compressed_iron',
                E: 'powah:steel_energized',
                H: 'powah:capacitor_hardened'
            },
            id: 'wormhole:basic_energy_cell'
        },
    ];
    

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
