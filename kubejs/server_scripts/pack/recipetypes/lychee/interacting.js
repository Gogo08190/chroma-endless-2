onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lychee/interacting/';
    const recipes = [
      // {
      //   item_in: {
      //       item: 'item_input'
      //   },
      //   block_in: 'block_inteacting',
      //   post: {
      //       type: 'drop_item',
      //       item: 'item_output'
      //   },
      //   id: `${id_prefix}item_output`
      // },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'lychee:block_interacting',
            item_in: recipe.item_in,
            block_in: recipe.block_in,
            post: recipe.post,
        }).id(recipe.id);
    });
});
