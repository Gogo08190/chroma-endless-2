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
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
