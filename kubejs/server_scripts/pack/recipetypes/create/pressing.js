onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/pressing/';

    const recipes = [
      {
          output: 'chroma:mana_diamond_plate',
          inputs: ['botania:mana_diamond'],
          id: `${id_prefix}mana_diamond_plate`
      },
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id);
    });
});
