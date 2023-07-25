onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/hostilenetworks/shaped/';
    const recipes = [
        {
            output: 'hostilenetworks:deep_learner',
            pattern: ['OCO', 'ABA', 'ODO'],
            key: {
                O: '#forge:ingots/refined_obsidian',
                C: 'computercraft:computer_advanced',
                A: 'mekaevolution:absolute_control_circuit',
                B: 'hostilenetworks:blank_data_model',
                D: 'chroma:absolute_alloy'
            },
            id: 'hostilenetworks:deep_learner'
        },
        {
            output: Item.of('botania:livingrock', 16),
            pattern: ['GGG', 'GBG', 'GGG'],
            key: {
                G: 'chroma:generalized_botania_prediction',
                B: 'botania:livingrock'
            },
            id: `${id_prefix}livingrock_from_generalized_botania_prediction`
        },
        {
            output: Item.of('botania:livingwood_log', 16),
            pattern: ['GGG', 'GBG', 'GGG'],
            key: {
                G: 'chroma:generalized_botania_prediction',
                B: 'botania:livingwood_log'
            },
            id: `${id_prefix}livingwood_log_from_generalized_botania_prediction`
        },
        {
            output: Item.of('undergarden:shiverstone', 16),
            pattern: ['GGG', 'GBG', 'GGG'],
            key: {
                G: 'chroma:generalized_undergarden_prediction',
                B: 'undergarden:shiverstone'
            },
            id: `${id_prefix}shiverstone_from_generalized_undergarden_prediction`
        },
        {
            output: Item.of('undergarden:depthrock', 16),
            pattern: ['GGG', 'GBG', 'GGG'],
            key: {
                G: 'chroma:generalized_undergarden_prediction',
                B: 'undergarden:depthrock'
            },
            id: `${id_prefix}depthrock_from_generalized_undergarden_prediction`
        },
        {
            output: Item.of('undergarden:tremblecrust', 16),
            pattern: ['GGG', 'GBG', 'GGG'],
            key: {
                G: 'chroma:generalized_undergarden_prediction',
                B: 'undergarden:tremblecrust'
            },
            id: `${id_prefix}tremblecrust_from_generalized_undergarden_prediction`
        },
        {
            output: Item.of('undergarden:gloomgourd_seeds', 8),
            pattern: ['  G', ' G ', '  G'],
            key: {
                G: 'chroma:generalized_undergarden_prediction',
            },
            id: `${id_prefix}gloomgourd_seeds_from_generalized_undergarden_prediction`
        },
        {
            output: Item.of('undergarden:grongle_sapling', 8),
            pattern: ['GG ', 'GG ', '  G'],
            key: {
                G: 'chroma:generalized_undergarden_prediction',
            },
            id: `${id_prefix}grongle_sapling_from_generalized_undergarden_prediction`
        },
        {
            output: Item.of('undergarden:wigglewood_sapling', 8),
            pattern: [' GG', ' G ', 'G G'],
            key: {
                G: 'chroma:generalized_undergarden_prediction',
            },
            id: `${id_prefix}wigglewood_sapling_from_generalized_undergarden_prediction`
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
