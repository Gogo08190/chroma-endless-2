onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lazierae2/grinder/';
    const recipes = [
      {
        output: {
          item: 'thermal:diamond_dust'
        },
        input: {
          item: 'minecraft:diamond'
        },
        process_time: 30,
        energy_cost: 800
      }
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'lazierae2:grinder',
            output: recipe.output,
            input: recipe.input,
            process_time: recipe.process_time,
            energy_cost: recipe.energy_cost,
        }).id(recipe.id);
    });
});
