onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/ae2/inscriber/';
    const recipes = [
      {
        mode: 'press',
        top: { item: 'lazierae2:parallel_printed' },
        middle: { tag: 'forge:ingots/desh' },
        bottom: { item: 'ae2:printed_silicon' },
        result: { item: 'lazierae2:parallel_processor' },
        id: 'lazierae2:compat/ae2/inscriber/parallel_processor'
      },
    ];


    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'ae2:inscriber',
                mode: recipe.mode,
                ingredients: {
                  middle: recipe.middle,
                  top: recipe.top,
                  bottom: recipe.bottom
                },
                result: recipe.result
            })
            .id(recipe.id);
    });
});
