onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/runic_altar/';
    const recipes = [
      {
        inputs: [
          'beyond_earth:rocket_fin',
          'beyond_earth:rocket_fin',
          'beyond_earth:calorite_ingot',
          'beyond_earth:calorite_ingot',
          'ironjetpacks:elite_coil'
        ],
        mana: 20000,
        output: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:calorite"}'),
        id: `${id_prefix}calorite_cell`
      },
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });

        const re = event.custom({
            type: 'botania:runic_altar',
            output: recipe.output,
            mana: recipe.mana,
            ingredients: ingredients
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
