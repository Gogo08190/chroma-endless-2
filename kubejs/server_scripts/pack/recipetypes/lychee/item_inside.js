onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lychee/item_inside/';
    const recipes = [
        // {
        //     input: 'minecraft:leather',
        //     block_in: {
        //         blocks: ['chroma:molten_mana']
        //     },
        //     post: [
        //         {
        //             type: 'drop_item',
        //             item: 'mna:vellum'
        //         }
        //     ],
        //     id: `${id_prefix}moonstone_block_to_pearl`
        // },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:item_inside';
        recipe.item_in = Item.of(recipe.input).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
