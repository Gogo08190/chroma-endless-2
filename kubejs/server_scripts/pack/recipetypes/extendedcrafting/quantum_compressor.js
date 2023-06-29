onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/quantum_compressor/';

    const recipes = [
      {
          powerCost: 500000,
          inputCount: 256,
          ingredient: { item: 'undergarden:utherium_crystal' },
          catalyst: { item: 'mekanism:teleportation_core' },
          result: { item: 'chroma:miner_core' },
          id: `${id_prefix}miner_core`
      },
      {
          powerCost: 500000,
          inputCount: 512,
          ingredient: { item: 'chemlib:carbon' },
          catalyst: { item: 'beyond_earth_giselle_addon:mold_compressing' },
          result: { item: 'chroma:carbon_fiber' },
          id: `${id_prefix}carbon_fiber`
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
