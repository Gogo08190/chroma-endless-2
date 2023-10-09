onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mythic_botany/infusion/';

    const recipes = [
      {
          inputs: [
              { item: 'blue_skies:horizonite_ingot' },
              { item: 'blue_skies:horizonite_ingot' },
              { item: 'mythicbotany:alfsteel_nugget' },
              { item: 'mythicbotany:alfsteel_nugget' },
              { item: 'botania:natura_pylon' }
          ],
          output: { item: 'mythicbotany:alfsteel_pylon', count: 1 },
          fromColor: 3276592,
          toColor: 16750080,
          mana: 30000,
          id: 'mythicbotany:alfsteel_pylon'
      },
      {
          inputs: [
              { item: 'chroma:supremium_seed_base' },
              { item: 'mysticalagriculture:manasteel_seeds' },
              { item: 'botania:terrasteel_ingot' },
              { item: 'botania:terrasteel_ingot' },
              { item: 'botania:terrasteel_ingot' },
              { item: 'botania:terrasteel_ingot' },
              { item: 'mysticalagriculture:supremium_essence' },
              { item: 'mysticalagriculture:supremium_essence' },
              { item: 'mysticalagriculture:supremium_essence' },
              { item: 'mysticalagriculture:supremium_essence' }
          ],
          output: { item: 'mysticalagriculture:terrasteel_seeds', count: 1 },
          fromColor: 5766155,
          toColor: 3980288,
          mana: 60000,
          id: 'mysticalagriculture:seed/infusion/terrasteel'
      },
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'mythicbotany:infusion',
            group: 'infuser',
            fromColor: recipe.fromColor,
            toColor: recipe.toColor,
            ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
            output: recipe.output,
            mana: recipe.mana
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
