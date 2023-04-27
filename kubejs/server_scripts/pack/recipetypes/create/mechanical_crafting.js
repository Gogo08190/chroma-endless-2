onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/mechanical_crafting/'
    const recipes = [
        {
            output: 'create:crushing_wheel',
            pattern: [' AAA ', 'AACAA', 'ACSCA', 'AACAA', ' AAA '],
            key: {
                A: 'create:andesite_alloy',
                C: 'create:andesite_casing',
                S: 'create:shaft'
            },
            id: 'create:mechanical_crafting/crushing_wheel'
        },
        {
            output: 'createoreexcavation:drilling_machine',
            pattern: ['IBCBI', 'BTSTB', 'LMEMP', 'BYYYB', 'IBABI'],
            key: {
                I: 'create:metal_girder',
                B: '#forge:storage_blocks/brass',
                C: 'create:copper_casing',
                T: 'create:electron_tube',
                S: 'create:spout',
                E: 'create:mechanical_drill',
                L: 'create:brass_casing',
                M: 'create:precision_mechanism',
                Y: '#forge:plates/obsidian',
                P: 'create:brass_tunnel',
                A: '#forge:plates/brass'
            },
            id: 'createoreexcavation:drilling_machine'
        },
        {
            output: 'createoreexcavation:extractor',
            pattern: ['IBCBI', 'BTSTB', 'LMEMP', 'BYYYB', 'IBABI'],
            key: {
                I: 'create:metal_girder',
                B: 'create:mechanical_pump',
                C: 'create:copper_casing',
                T: 'create:electron_tube',
                S: 'create:hose_pulley',
                E: 'create:mechanical_drill',
                L: 'create:brass_casing',
                M: 'create:precision_mechanism',
                Y: '#forge:plates/obsidian',
                P: 'create:copper_casing',
                A: '#forge:plates/brass'
            },
            id: 'createoreexcavation:extractor'
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
