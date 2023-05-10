onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/combining/';

    const recipes = [
      {
        input: 'blue_skies:moonstone_shard',
        extrainput: 'blue_skies:charoite',
        output: 'blue_skies:zeal_lighter',
        id: 'blue_skies:zeal_lighter'
      },
      {
        input: Item.of('powah:dielectric_rod', 12),
        extrainput: Item.of('#forge:storage_blocks/steel', 4),
        output: 'powah:dielectric_casing',
        id: 'powah:crafting/dielectric_casing'
      }
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismCombining(recipe.output, recipe.input, recipe.extrainput).id(recipe.id);
    });
});
