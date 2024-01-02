onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/spirit/shapeless/';
    const recipes = [
      {
          output: 'spirit:soul_crystal',
          inputs: ['spirit:soul_crystal'],
          id: `${id_prefix}soul_crystal`
      },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
