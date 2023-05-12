onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mna/manaweaving/';
    const recipes = [
      {
          input: 'ae2:fluix_dust',
          output: 'chroma:essence_of_darkness',
          outputQuantity: 1,
          burnTime: 200,
          tier: 2,
          id: `${id_prefix}essence_of_darkness`
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
          type: 'mna:arcane-furnace',
          output: recipe.output,
          tier: recipe.tier,
          input: recipe.input,
          outputQuantity: recipe.outputQuantity,
          burnTime: recipe.burnTime,
        }).id(recipe.id);
    });
});
