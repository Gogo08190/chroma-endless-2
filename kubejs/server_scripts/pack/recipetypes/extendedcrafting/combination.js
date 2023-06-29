onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/combination/'
    const recipes = [
      {
          inputs: [
              { item: 'doom:argent_plate' },
              { item: 'chroma:absolute_alloy' },
              { item: 'doom:argent_plate' },
              { item: 'beyond_earth:compressed_desh' },
              { item: 'biggerreactors:ludicrite_block' },
              { item: 'beyond_earth:compressed_desh' },
              { item: 'doom:argent_plate' },
              { item: 'draconicevolution:dragon_heart' },
              { item: 'doom:argent_plate' },
              { item: 'chroma:absolute_alloy' },
              { item: 'biggerreactors:ludicrite_block' },
              { item: 'beyond_earth:compressed_desh' }
          ],
          catalyst: { item: 'evilcraft:piercing_vengeance_focus' },
          powerCost: 10000,
          powerRate: 1000,
          result: { item: 'chroma:gun_table_heart' },
          id: `${id_prefix}chroma:gun_table_heart`
      },
      {
          inputs: [
              { item: 'chroma:carbon_fiber' },
              { item: 'chroma:carbon_fiber' },
              { item: 'chroma:carbon_fiber' },
              { item: 'jaopca:beyond_earth_compresseds.utherium' },
              { item: 'mekanism:alloy_atomic' },
              { item: 'jaopca:beyond_earth_compresseds.utherium' },
              { item: 'beyond_earth:compressed_steel' },
              { item: 'pneumaticcraft:printed_circuit_board' },
              { item: 'beyond_earth:compressed_steel' },
              { item: 'jaopca:beyond_earth_compresseds.utherium' },
              { item: 'mekanism:alloy_atomic' },
              { item: 'jaopca:beyond_earth_compresseds.utherium' }
          ],
          catalyst: { item: 'extendedcrafting:advanced_table' },
          powerCost: 20000,
          powerRate: 1000,
          result: { item: 'beyond_earth:nasa_workbench' },
          id: 'beyond_earth:nasa_workbench'
      },
    ];

    recipes.forEach((recipe) => {
        let ingredient = [];
        recipe.inputs.forEach((input) => {
            ingredient.push(input);
        });
        event
            .custom({
                type: 'extendedcrafting:combination',
                powerCost: recipe.powerCost,
                powerRate: recipe.powerRate,
                input: recipe.catalyst,
                ingredients: ingredient,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
