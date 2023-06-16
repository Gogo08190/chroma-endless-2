onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mna/runescribing/';
    const recipes = [
      {
          tier: 1,
          mutex_h: 17730430967808,
          mutex_v: 19929856606212,
          output: 'minecraft:dirt',
          id: `${id_prefix}runescribing_fire_rune`
      },
      {
          tier: 1,
          mutex_h: 3448395687530496,
          mutex_v: 9024802111119360,
          output: 'minecraft:dirt',
          id: `${id_prefix}runescribing_water_rune`
      },
      {
          tier: 1,
          mutex_h: 88029650487356,
          mutex_v: 13579107518382140,
          output: 'minecraft:dirt',
          id: `${id_prefix}runescribing_air_rune`
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
          type: 'mna:runescribing',
          output: recipe.output,
          tier: recipe.tier,
          mutex_h: recipe.mutex_h,
          mutex_v: recipe.mutex_v,
        }).id(recipe.id);
    });
});
