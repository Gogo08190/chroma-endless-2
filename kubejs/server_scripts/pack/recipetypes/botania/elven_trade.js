onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/elven_trade/';
    const recipes = [
      {
        inputs: [
          {item: 'mysticalagriculture:prudentium_essence' },
          {item: 'mysticalagriculture:prudentium_essence' },
          {item: 'mysticalagriculture:prudentium_essence' },
          {item: 'mysticalagriculture:prudentium_essence' }
        ],
        output: {
            item: 'mysticalagriculture:tertium_essence'
        },
        id: 'mysticalagriculture:tertium_essence'
      },
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'botania:elven_trade',
                ingredients: recipe.inputs,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
