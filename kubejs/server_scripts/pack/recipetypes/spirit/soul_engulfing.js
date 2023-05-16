onEvent("recipes", (event) => {
    const id_prefix = 'chroma:pack/spirit/soul_engulfing/';
    const recipes = [
      {
          ingredient: { item: 'minecraft:deepslate' },
          block: 'blue_skies:mossy_lunar_stonebrick',
          duration: 40,
          destroysStructure: false,
          outputItem: 'blue_skies:lunar_stone',
          id: `${id_prefix}lunar_stone`
      },
    ];

    recipes.forEach((recipe) => {
      event.custom({
        type: "spirit:soul_engulfing",
        input: {
          ingredient: recipe.ingredient,
          multiblock: {
            pattern: [
              [
                "   ",
                " @ ",
                "   "
              ],
              [
                " S ",
                "S&S",
                " S "
              ]
            ],
            keys: {
              S: {
                block: recipe.block
              }
            }
          }
        },
        duration: recipe.duration,
        destroysStructure: recipe.destroysStructure,
        outputItem: recipe.outputItem
      }).id(recipe.id);
    });
});
