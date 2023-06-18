onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mna/runescribing/';
    const recipes = [
      {
          tier: 1,
          pattern: 'chroma:rune_pattern_water_rune',
          material: 'botania:livingrock',
          hits: 10,
          output: 'botania:rune_water',
          id: `${id_prefix}rune_water`
      },
      {
          tier: 1,
          pattern: 'chroma:rune_pattern_fire_rune',
          material: 'botania:livingrock',
          hits: 10,
          output: 'botania:rune_fire',
          id: `${id_prefix}rune_fire`
      },
      {
          tier: 1,
          pattern: 'chroma:rune_pattern_air_rune',
          material: 'botania:livingrock',
          hits: 10,
          output: 'botania:rune_air',
          id: `${id_prefix}rune_air`
      },
      {
          tier: 1,
          pattern: 'chroma:rune_pattern_earth_rune',
          material: 'botania:livingrock',
          hits: 10,
          output: 'botania:rune_earth',
          id: `${id_prefix}rune_earth`
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
          type: 'mna:runeforging',
          output: recipe.output,
          tier: recipe.tier,
          material: recipe.material,
          hits:recipe.hits,
          pattern: recipe.pattern,
        }).id(recipe.id);
    });
});
