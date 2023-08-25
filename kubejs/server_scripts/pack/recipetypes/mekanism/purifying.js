onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/purifying/';

    const recipes = [
      {
        input: 'chroma:crystaltine_shard',
        extrainput: { gas: 'mekanism:oxygen', amount: 1 },
        output: 'chroma:crystaltine_clump',
        id: `${id_prefix}crystaltine_clump`
      },
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismPurifying(recipe.output, recipe.input, recipe.extrainput).id(recipe.id);
    });
});
