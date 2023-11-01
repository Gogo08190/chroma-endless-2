onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lazierae2/etcher/';
    const recipes = [
      {
        output: { item: 'lazierae2:parallel_processor' },
        inputs: [
          { tag: 'forge:gems/resonating' },
          { tag: 'forge:ingots/desh' },
          { tag: 'forge:silicon' }
        ],
        process_time: 120,
        energy_cost: 1500,
        id: 'lazierae2:etcher/parallel_processor'
      },
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event.custom({
            type: 'lazierae2:etcher',
            output: recipe.output,
            input: ingredients,
            process_time: recipe.process_time,
            energy_cost: recipe.energy_cost,
        }).id(recipe.id);
    });
});
