onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/crystallizing/';

    const recipes = [
      {
        input: { amount: 200, slurry:'chroma:clean_crystaltine_slurry' },
        output: 'chroma:crystaltine_crystal',
        id: `${id_prefix}crystaltine_crystal`
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
          type: 'mekanism:crystallizing',
          chemicalType: 'slurry',
          input: recipe.input,
          output: recipe.output
        })
        .id(recipe.id);
    });
});
