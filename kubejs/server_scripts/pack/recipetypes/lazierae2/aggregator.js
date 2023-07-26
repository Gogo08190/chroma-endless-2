onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lazierae2/aggregator/';
    const recipes = [
      {
        output: { item: 'chroma:isolated_compressed_desh' },
        inputs: [
          { tag: 'beyond_earth:compresseds/desh' },
          { item: 'powah:crystal_spirited' },
          { item: 'chroma:carbon_fiber' }
        ],
        process_time: 120,
        energy_cost: 1500,
        id: `${id_prefix}isolated_compressed_desh`
      },
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event.custom({
            type: 'lazierae2:aggregator',
            output: recipe.output,
            input: ingredients,
            process_time: recipe.process_time,
            energy_cost: recipe.energy_cost,
        }).id(recipe.id);
    });
});
