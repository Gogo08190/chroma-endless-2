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
      {
        inputs: [
          'blue_skies:brewberry',
          'blue_skies:brewberry',
          'blue_skies:brewberry',
          'blue_skies:brewberry',
          'botania:rune_lust',
          'mob_grinding_utils:fluid_xp_bucket',
          'mob_grinding_utils:fluid_xp_bucket',
          'mob_grinding_utils:fluid_xp_bucket',
          'mob_grinding_utils:fluid_xp_bucket'
        ],
        mana: 20000,
        output: 'mob_grinding_utils:nutritious_chicken_feed',
        id: 'mob_grinding_utils:recipe_nutritious_feed'
      },
      {
        inputs: [
          'mysticalagriculture:air_agglomeratio',
          'mysticalagriculture:air_agglomeratio',
          'mysticalagriculture:air_agglomeratio',
          'mysticalagriculture:air_agglomeratio',
          'mysticalagriculture:inferium_essence',
          'mysticalagriculture:inferium_essence',
          'mysticalagriculture:inferium_gemstone',
          'mysticalagriculture:inferium_gemstone',
          'mysticalagriculture:prosperity_seed_base'
        ],
        mana: 20000,
        output: 'mysticalagriculture:air_seeds',
        id: 'mysticalagriculture:seed/infusion/air'
      },
      {
        inputs: [
          'mysticalagriculture:earth_agglomeratio',
          'mysticalagriculture:earth_agglomeratio',
          'mysticalagriculture:earth_agglomeratio',
          'mysticalagriculture:earth_agglomeratio',
          'mysticalagriculture:inferium_essence',
          'mysticalagriculture:inferium_essence',
          'mysticalagriculture:inferium_gemstone',
          'mysticalagriculture:inferium_gemstone',
          'mysticalagriculture:prosperity_seed_base'
        ],
        mana: 20000,
        output: 'mysticalagriculture:earth_seeds',
        id: 'mysticalagriculture:seed/infusion/earth'
      },
      {
        inputs: [
          'mysticalagriculture:fire_agglomeratio',
          'mysticalagriculture:fire_agglomeratio',
          'mysticalagriculture:fire_agglomeratio',
          'mysticalagriculture:fire_agglomeratio',
          'mysticalagriculture:inferium_essence',
          'mysticalagriculture:inferium_essence',
          'mysticalagriculture:inferium_gemstone',
          'mysticalagriculture:inferium_gemstone',
          'mysticalagriculture:prosperity_seed_base'
        ],
        mana: 20000,
        output: 'mysticalagriculture:fire_seeds',
        id: 'mysticalagriculture:seed/infusion/fire'
      },
      {
        inputs: [
          'mysticalagriculture:water_agglomeratio',
          'mysticalagriculture:water_agglomeratio',
          'mysticalagriculture:water_agglomeratio',
          'mysticalagriculture:water_agglomeratio',
          'mysticalagriculture:inferium_essence',
          'mysticalagriculture:inferium_essence',
          'mysticalagriculture:inferium_gemstone',
          'mysticalagriculture:inferium_gemstone',
          'mysticalagriculture:prosperity_seed_base'
        ],
        mana: 20000,
        output: 'mysticalagriculture:water_seeds',
        id: 'mysticalagriculture:seed/infusion/water'
      }
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
