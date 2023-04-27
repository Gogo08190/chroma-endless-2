onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lazierae2/infuser/';
    const recipes = [
      {
        output: { item: 'create:andesite_alloy', count: 4 },
        inputs: [
          { tag: 'chroma:andesite/processing', count: 1 },
        ],
        process_time: 80,
        energy_cost: 1500,
        id: 'lazierae2:compat/create/infuser/andesite_alloy'
      },
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event.custom({
            type: 'lazierae2:infuser',
            output: recipe.output,
            input: ingredients,
            process_time: recipe.process_time,
            energy_cost: recipe.energy_cost,
        }).id(recipe.id);
    });
});
