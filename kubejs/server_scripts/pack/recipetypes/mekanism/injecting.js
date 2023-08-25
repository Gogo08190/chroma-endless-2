onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/injecting/';

    const recipes = [
      {
        input: 'chroma:crystaltine_crystal',
        extrainput: { gas: 'mekanism:hydrogen_chloride', amount: 1 },
        output: 'chroma:crystaltine_shard',
        id: `${id_prefix}crystaltine_shard`
      },
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismInjecting(recipe.output, recipe.input, recipe.extrainput).id(recipe.id);
    });
});
