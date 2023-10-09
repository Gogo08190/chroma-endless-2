onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/petal_apothecary/';

    const recipes = [
      {
          inputs: [
            { item: 'mysticalagriculture:mystical_flower_agglomeratio' },
            { item: 'mysticalagriculture:mystical_flower_agglomeratio' },
            { item: 'mysticalagriculture:mystical_flower_agglomeratio' },
            { item: 'mysticalagriculture:mystical_flower_agglomeratio' },
            { item: 'mysticalagriculture:inferium_essence' },
            { item: 'mysticalagriculture:inferium_essence' },
            { item: 'mysticalagriculture:inferium_essence' },
            { item: 'mysticalagriculture:inferium_essence' },
            { item: 'chroma:inferium_seed_base' }
          ],
          output: { item: 'mysticalagriculture:mystical_flower_seeds' },
          id: 'mysticalagriculture:seed/infusion/mystical_flower'
      }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:petal_apothecary',
            output: recipe.output,
            ingredients: recipe.inputs
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
