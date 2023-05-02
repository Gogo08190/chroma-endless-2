onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/combining/';

    const recipes = [
      {
        input: 'blue_skies:moonstone_shard',
        extrainput: 'blue_skies:charoite',
        output: 'blue_skies:zeal_lighter',
        id: 'blue_skies:zeal_lighter'
      }

    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismCombining(recipe.output, recipe.input, recipe.extrainput).id(recipe.id);
    });
});
