onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/nucleosynthesizing/';
    var data = {
        recipes: [
          {
              output: Item.of('chroma:void_miner_frame_tier4'),
              itemInput: { ingredient: { item: 'chroma:void_miner_frame_tier3' } },
              gasInput: { amount: 100, gas: 'chroma:crystaltine' },
              duration: 100,
              id: `${id_prefix}void_miner_frame_tier4`
          },
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
