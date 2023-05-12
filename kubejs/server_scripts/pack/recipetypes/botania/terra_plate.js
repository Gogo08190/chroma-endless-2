onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/terra_plate/';

    const recipes = [
      {
          inputs: [
              { item: 'extendedcrafting:basic_table' },
              { item: 'extendedcrafting:ender_ingot' },
              { item: 'extendedcrafting:ender_ingot' },
              { item: 'extendedcrafting:ender_ingot' },
              { item: 'extendedcrafting:ender_ingot' },
              { item: 'extendedcrafting:ender_ingot' },
              { item: 'mna:superheated_purified_vinteum_ingot' },
              { item: 'mna:superheated_purified_vinteum_ingot' },
              { item: 'mna:superheated_purified_vinteum_ingot' }
          ],
          output: { item: 'extendedcrafting:ender_crafter' },
          mana: 25000,
          id: 'extendedcrafting:ender_crafter'
      },

    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:terra_plate',
            ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
            result: Item.of(recipe.output).toJson(),
            mana: recipe.mana
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
