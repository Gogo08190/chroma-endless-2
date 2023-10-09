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
      {
        inputs: [
          {item: 'mysticalagriculture:imperium_essence' },
          {item: 'mysticalagriculture:imperium_essence' },
          {item: 'mysticalagriculture:imperium_essence' },
          {item: 'mysticalagriculture:imperium_essence' },
          {item: 'mysticalagriculture:manasteel_seeds' }
        ],
        output: {
            item: 'mysticalagriculture:elementium_seeds'
        },
        id: 'mysticalagriculture:seed/infusion/elementium'
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
