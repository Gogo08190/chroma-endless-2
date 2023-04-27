onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/shaped/';
    const recipes = [
        {
            output: 'chroma:andesite_with_iron',
            pattern: ['NA', 'AN'],
            key: {
                A: 'minecraft:andesite',
                N: '#forge:nuggets/iron'
            },
            id: `${id_prefix}andesite_with_iron`
        },
        {
            output: 'chroma:andesite_with_zinc',
            pattern: ['NA', 'AN'],
            key: {
                A: 'minecraft:andesite',
                N: '#forge:nuggets/zinc'
            },
            id: `${id_prefix}andesite_with_zinc`
        },
        {
            output: 'create:hand_crank',
            pattern: ['WWW', '  S'],
            key: {
                W: '#minecraft:planks',
                S: 'create:shaft'
            },
            id: 'create:crafting/kinetics/hand_crank'
        },
        {
            output: Item.of('create:shaft', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'create:andesite_alloy'
            },
            id: 'create:crafting/kinetics/shaft'
        },
        {
            output: 'create:large_cogwheel',
            pattern: [' C ', 'CSC', ' C '],
            key: {
                C: 'create:cogwheel',
                S: 'create:shaft'
            },
            id: 'create:crafting/kinetics/large_cogwheel'
        },
        {
            output: 'create:cogwheel',
            pattern: [' C ', 'CSC', ' C '],
            key: {
                C: '#minecraft:planks',
                S: 'create:shaft'
            },
            id: 'create:crafting/kinetics/cogwheel'
        },
        {
            output: 'create:clutch',
            pattern: [' R ', 'ECS', ' R '],
            key: {
                R: '#forge:dusts/redstone',
                E: 'create:electron_tube',
                C: 'create:encased_chain_drive',
                S: 'create:shaft'
            },
            id: 'create:crafting/kinetics/clutch'
        },
        {
            output: 'create:gearshift',
            pattern: [' R ', 'ECS', ' R '],
            key: {
                R: '#forge:dusts/redstone',
                E: 'create:electron_tube',
                C: 'create:encased_chain_drive',
                S: 'create:cogwheel'
            },
            id: 'create:crafting/kinetics/gearshift'
        },
        {
            output: Item.of('create:encased_chain_drive', 2),
            pattern: ['PCP', 'SCS', 'PCP'],
            key: {
                P: '#forge:plates/iron',
                C: 'create:andesite_casing',
                S: 'create:shaft'
            },
            id: 'create:crafting/kinetics/encased_chain_drive'
        },
        {
            output: 'create:encased_fan',
            pattern: ['CEC', 'CSC', 'CPC'],
            key: {
                P: 'create:propeller',
                C: 'create:andesite_casing',
                S: 'create:shaft',
                E: 'create:encased_chain_drive'
            },
            id: 'create:crafting/kinetics/encased_fan'
        },
        {
            output: 'create:electron_tube',
            pattern: ['P', 'P', 'I'],
            key: {
                P: 'create:polished_rose_quartz',
                I: '#forge:plates/iron'
            },
            id: 'create:crafting/materials/electron_tube'
        },
        {
            output: 'create:brass_hand',
            pattern: ['ISI', 'BBB', ' B '],
            key: {
                S: 'create:shaft',
                I: '#forge:plates/iron',
                B: '#forge:plates/brass'
            },
            id: 'create:crafting/kinetics/brass_hand'
        },
        {
            output: 'create:whisk',
            pattern: [' S ', 'ISI', 'III'],
            key: {
                S: 'create:shaft',
                I: '#forge:plates/iron'
            },
            id: 'create:crafting/kinetics/whisk'
        },
        {
            output: 'create:whisk',
            pattern: [' S ', 'ISI', 'III'],
            key: {
                S: 'create:shaft',
                I: '#forge:plates/iron'
            },
            id: 'create:crafting/kinetics/whisk'
        },
        {
            output: 'create:propeller',
            pattern: [' I ', 'ISI', ' I '],
            key: {
                S: 'create:shaft',
                I: '#forge:plates/iron'
            },
            id: 'create:crafting/kinetics/propeller'
        },
        {
            output: 'create:rotation_speed_controller',
            pattern: ['BCB', 'SMS', 'BCB'],
            key: {
                B: '#forge:storage_blocks/brass',
                C: 'create:brass_casing',
                S: 'create:shaft',
                M: 'create:precision_mechanism'
            },
            id: 'create:crafting/kinetics/rotation_speed_controller'
        },
        {
            output: 'create:steam_engine',
            pattern: ['G', 'S', 'C'],
            key: {
                S: 'create:shaft',
                C: '#forge:storage_blocks/copper',
                G: '#forge:plates/gold'
            },
            id: 'create:crafting/kinetics/steam_engine'
        },
        {
            output: Item.of('create:mechanical_crafter', 3),
            pattern: ['CTC', 'SWS', 'CTC'],
            key: {
                C: 'create:brass_casing',
                T: 'create:electron_tube',
                W: '#forge:workbenches',
                S: 'create:cogwheel'
            },
            id: 'create:crafting/kinetics/mechanical_crafter'
        },
        {
            output: 'create:deployer',
            pattern: ['CTC', 'EPE', ' B '],
            key: {
                C: 'create:andesite_casing',
                T: 'create:electron_tube',
                E: 'create:encased_chain_drive',
                P: 'create:mechanical_piston',
                B: 'create:brass_hand'
            },
            id: 'create:crafting/kinetics/deployer'
        },
        {
            output: 'create:mechanical_saw',
            pattern: [' S ', 'CEC'],
            key: {
                C: 'create:andesite_casing',
                S: 'thermal:saw_blade',
                E: 'create:encased_chain_drive'
            },
            id: 'create:crafting/kinetics/mechanical_saw'
        },
        {
            output: 'create:mechanical_piston',
            pattern: ['EPE'],
            key: {
                P: 'minecraft:piston',
                E: 'create:encased_chain_drive'
            },
            id: 'create:crafting/kinetics/mechanical_piston'
        },
        {
            output: Item.of('create:chute', 2),
            pattern: ['I I', 'IHI', 'III'],
            key: {
                I: '#forge:plates/iron',
                H: 'minecraft:hopper'
            },
            id: 'create:crafting/kinetics/chute'
        },
        {
            output: 'create:empty_blaze_burner',
            pattern: ['B B', 'BNB', 'III'],
            key: {
                I: '#forge:plates/iron',
                N: 'minecraft:netherrack',
                B: 'dustrial_decor:barbed_iron_bars'
            },
            id: 'create:crafting/kinetics/empty_blaze_burner'
        },
        {
            output: 'create:basin',
            pattern: ['ACA', 'AAA'],
            key: {
                A: 'create:andesite_alloy',
                C: 'minecraft:cauldron'
            },
            id: 'create:crafting/kinetics/basin'
        },
        {
            output: 'create:water_wheel',
            pattern: ['SSS', 'SCS', 'SSS'],
            key: {
                S: '#quark:vertical_slab',
                C: 'create:large_cogwheel'
            },
            id: 'create:crafting/kinetics/water_wheel'
        },
        {
            output: 'create:mechanical_mixer',
            pattern: ['CSC', 'WPW', ' M '],
            key: {
                C: 'create:andesite_casing',
                S: 'create:shaft',
                W: 'create:cogwheel',
                P: 'create:mechanical_piston',
                M: 'create:whisk'
            },
            id: 'create:crafting/kinetics/mechanical_mixer'
        },
        {
            output: 'create:mechanical_press',
            pattern: ['CSC', 'WPW', ' M '],
            key: {
                C: 'create:andesite_casing',
                S: 'create:shaft',
                W: 'create:encased_chain_drive',
                P: 'create:mechanical_piston',
                M: '#forge:storage_blocks/iron'
            },
            id: 'create:crafting/kinetics/mechanical_press'
        },
        {
            output: 'create:mechanical_pump',
            pattern: [' S ', 'SPS', ' S '],
            key: {
                S: 'create:cogwheel',
                P: 'create:fluid_pipe'
            },
            id: 'create:crafting/kinetics/mechanical_pump'
        },
        {
            output: 'create:millstone',
            pattern: [' H ', 'SCS', 'AAA'],
            key: {
                H: 'minecraft:hopper',
                S: 'create:cogwheel',
                C: 'create:andesite_casing',
                A: 'minecraft:polished_andesite'
            },
            id: 'create:crafting/kinetics/millstone'
        },
        {
            output: 'create:depot',
            pattern: ['ATA', 'CCC'],
            key: {
                A: 'create:andesite_alloy',
                T: 'create:turntable',
                C: 'create:andesite_casing'
            },
            id: 'create:crafting/kinetics/depot'
        },
        {
            output: 'create:spout',
            pattern: ['CTC', 'CAC', ' H '],
            key: {
                C: '#forge:plates/copper',
                T: 'create:fluid_tank',
                A: 'create:copper_casing',
                H: 'minecraft:hopper'
            },
            id: 'create:crafting/kinetics/spout'
        },
        {
            output: 'create:fluid_tank',
            pattern: ['CCC', 'CGC', 'CCC'],
            key: {
                C: '#forge:plates/copper',
                G: '#forge:glass'
            },
            id: 'create:crafting/kinetics/fluid_tank'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
