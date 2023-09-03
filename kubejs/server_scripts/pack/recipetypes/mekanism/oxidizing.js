onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/oxidizing/';

    const recipes = [
      {
        input: { ingredient : { item: 'extendedcrafting:crystaltine_ingot' }},
        output: { gas : 'chroma:crystaltine', amount: 1000 },
        id: `${id_prefix}crystaltine`
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
          type: 'mekanism:oxidizing',
          input: recipe.input,
          output: recipe.output
        })
        .id(recipe.id);
    });
});
