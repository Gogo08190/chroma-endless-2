onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mysticalagriculture/infusion/'
    const recipes = [
      {
          inputs: [
              { item: 'mysticalagriculture:inferium_essence' },
              { item: 'mysticalagriculture:inferium_block' },
              { item: 'mysticalagriculture:inferium_essence' },
              { item: 'mysticalagriculture:inferium_block' },
              { item: 'mysticalagriculture:inferium_essence' },
              { item: 'mysticalagriculture:inferium_block' },
              { item: 'mysticalagriculture:inferium_essence' },
              { item: 'mysticalagriculture:inferium_block' },
          ],
          catalyst: { item: 'mysticalagriculture:prosperity_ingot' },
          result: { item: 'mysticalagriculture:inferium_ingot' },
          id: 'mysticalagriculture:inferium_ingot'
      },
      {
          inputs: [
              { item: 'mysticalagriculture:prudentium_essence' },
              { item: 'mysticalagriculture:prudentium_block' },
              { item: 'mysticalagriculture:prudentium_essence' },
              { item: 'mysticalagriculture:prudentium_block' },
              { item: 'mysticalagriculture:prudentium_essence' },
              { item: 'mysticalagriculture:prudentium_block' },
              { item: 'mysticalagriculture:prudentium_essence' },
              { item: 'mysticalagriculture:prudentium_block' },
          ],
          catalyst: { item: 'mysticalagriculture:inferium_ingot' },
          result: { item: 'mysticalagriculture:prudentium_ingot' },
          id: 'mysticalagriculture:prudentium_ingot'
      },
      {
          inputs: [
              { item: 'mysticalagriculture:tertium_essence' },
              { item: 'mysticalagriculture:tertium_block' },
              { item: 'mysticalagriculture:tertium_essence' },
              { item: 'mysticalagriculture:tertium_block' },
              { item: 'mysticalagriculture:tertium_essence' },
              { item: 'mysticalagriculture:tertium_block' },
              { item: 'mysticalagriculture:tertium_essence' },
              { item: 'mysticalagriculture:tertium_block' },
          ],
          catalyst: { item: 'mysticalagriculture:prudentium_ingot' },
          result: { item: 'mysticalagriculture:tertium_ingot' },
          id: 'mysticalagriculture:tertium_ingot'
      },
      {
          inputs: [
              { item: 'mysticalagriculture:imperium_essence' },
              { item: 'mysticalagriculture:imperium_block' },
              { item: 'mysticalagriculture:imperium_essence' },
              { item: 'mysticalagriculture:imperium_block' },
              { item: 'mysticalagriculture:imperium_essence' },
              { item: 'mysticalagriculture:imperium_block' },
              { item: 'mysticalagriculture:imperium_essence' },
              { item: 'mysticalagriculture:imperium_block' },
          ],
          catalyst: { item: 'mysticalagriculture:tertium_ingot' },
          result: { item: 'mysticalagriculture:imperium_ingot' },
          id: 'mysticalagriculture:imperium_ingot'
      },
      {
          inputs: [
              { item: 'mysticalagriculture:supremium_essence' },
              { item: 'mysticalagriculture:supremium_block' },
              { item: 'mysticalagriculture:supremium_essence' },
              { item: 'mysticalagriculture:supremium_block' },
              { item: 'mysticalagriculture:supremium_essence' },
              { item: 'mysticalagriculture:supremium_block' },
              { item: 'mysticalagriculture:supremium_essence' },
              { item: 'mysticalagriculture:supremium_block' },
          ],
          catalyst: { item: 'mysticalagriculture:imperium_ingot' },
          result: { item: 'mysticalagriculture:supremium_ingot' },
          id: 'mysticalagriculture:supremium_ingot'
      },
      {
          inputs: [
              { item: 'mysticalagradditions:insanium_essence' },
              { item: 'mysticalagradditions:insanium_block' },
              { item: 'mysticalagradditions:insanium_essence' },
              { item: 'mysticalagradditions:insanium_block' },
              { item: 'mysticalagradditions:insanium_essence' },
              { item: 'mysticalagradditions:insanium_block' },
              { item: 'mysticalagradditions:insanium_essence' },
              { item: 'mysticalagradditions:insanium_block' },
          ],
          catalyst: { item: 'mysticalagriculture:supremium_ingot' },
          result: { item: 'mysticalagradditions:insanium_ingot' },
          id: 'mysticalagradditions:insanium_ingot'
      },
    ];

    recipes.forEach((recipe) => {
        let ingredient = [];
        recipe.inputs.forEach((input) => {
            ingredient.push(input);
        });
        event
            .custom({
                type: 'mysticalagriculture:infusion',
                input: recipe.catalyst,
                ingredients: ingredient,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
