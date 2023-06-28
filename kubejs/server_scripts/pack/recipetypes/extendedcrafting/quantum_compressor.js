onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/quantum_compressor/';

    const recipes = [
      {
          powerCost: 500000,
          inputCount: 256,
          ingredient: { item: 'undergarden:utherium_crystal' },
          result: { item: 'chroma:miner_core' },
          id: `${id_prefix}miner_core`
      },
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'extendedcrafting:compressor',
                powerCost: recipe.powerCost,
                inputCount: recipe.inputCount,
                ingredient: recipe.ingredient,
                catalyst: recipe.catalyst,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
