onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lychee/burning/';
    const recipes = [
      // {
      //   item_in: {
      //       item: 'item_input'
      //   },
      //   post: {
      //       type: 'drop_item',
      //       item: 'item_output'
      //   },
      //   id: `${id_prefix}item_output`
      // },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'lychee:item_burning',
            item_in: recipe.item_in,
            post: recipe.post,
        }).id(recipe.id);
    });
});
