onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mythic_botany/mythicbotany_infusion/';

    const recipes = [
      {
          inputs: [
              { item: 'blue_skies:horizonite_ingot' },
              { item: 'blue_skies:horizonite_ingot' },
              { item: 'mythicbotany:alfsteel_nugget' },
              { item: 'mythicbotany:alfsteel_nugget' },
              { item: 'botania:natura_pylon' }
          ],
          output: { item: 'mythicbotany:alfsteel_pylon' },
          mana: 30000,
          id: 'mythicbotany:alfsteel_pylon'
      },

    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'mythicbotany:mana_infuser',
            ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
            result: Item.of(recipe.output).toJson(),
            mana: recipe.mana
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});