onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/shaped/';
    const recipes = [
        {
            output: 'blue_skies:blue_journal',
            pattern: [' S ', 'SBS', ' S '],
            key: {
                S: '#blue_skies:gems/moonstone_shard',
                B: 'minecraft:book'
            },
            id: `${id_prefix}blue_journal`
        },
        // {
        //     output: 'blue_skies:alchemy_table',
        //     pattern: ['BS ', 'AAA'],
        //     key: {
        //         B: '#forge:bookshelves',
        //         S: 'minecraft:stonecutter',
        //         A: '#blue_skies:storage_blocks/falsite'
        //     },
        //     id: `${id_prefix}alchemy_table`
        // },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
