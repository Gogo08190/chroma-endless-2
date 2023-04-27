onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lychee/burning/';
    const recipes = [
      {
        item_in: {
            item: 'chroma:andesite_with_iron'
        },
        post: {
            type: 'drop_item',
            item: 'create:andesite_alloy'
        },
        id: 'create:crafting/materials/andesite_alloy'
      },
      {
        item_in: {
            item: 'chroma:andesite_with_zinc'
        },
        post: {
            type: 'drop_item',
            item: 'create:andesite_alloy'
        },
        id: 'create:crafting/materials/andesite_alloy_from_zinc'
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'lychee:item_burning',
            item_in: recipe.item_in,
            post: recipe.post,
        }).id(recipe.id);
    });
});
