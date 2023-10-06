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
          {
              output: Item.of('chroma:insanium_seed_base'),
              itemInput: { ingredient: { item: 'chroma:supremium_seed_base' } },
              gasInput: { amount: 250, gas: 'mekanism:antimatter' },
              duration: 100,
              id: `${id_prefix}supremium_seed_base`
          },
          {
              output: Item.of('chroma:electromagnetic_condenser'),
              itemInput: { ingredient: { item: 'mekanismgenerators:saturating_condenser' } },
              gasInput: { amount: 100, gas: 'chroma:crystaltine' },
              duration: 100,
              id: `${id_prefix}electromagnetic_condenser`
          },
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
