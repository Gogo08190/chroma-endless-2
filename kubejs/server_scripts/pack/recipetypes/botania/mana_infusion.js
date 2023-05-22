onEvent('recipes', (event) => {
  const id_prefix = 'chroma:pack/botania/mana_infusion/';
  /*{
      input: '',
      output: '',
      count: 1,
      mana: 10,
      catalyst: '' Bloc en dessous de la mana pool non obligatoire,
      id: ''
  }*/
  const recipes = [
    {
      input: '#forge:silicon',
      output: 'chroma:silicon_paste',
      count: 1,
      mana: 250,
      catalyst: 'botania:alchemy_catalyst',
      id: `${id_prefix}silicon_paste`
    },
    {
        input: 'chroma:empty_mana_pearl',
        output: 'botania:mana_pearl',
        count: 1,
        mana: 6000,
        id: 'botania:mana_infusion/mana_pearl'
      },
      {
        input: 'evilcraft:dark_gem',
        output: 'botania:mana_diamond',
        count: 1,
        mana: 10000,
        id: 'botania:mana_infusion/mana_diamond'
      },
      {
        input: 'evilcraft:dark_block',
        output: 'botania:mana_diamond_block',
        count: 1,
        mana: 27000,
        id: 'botania:mana_infusion/mana_diamond_block'
      },
      {
        input: 'immersiveengineering:ingot_steel',
        output: 'botania:manasteel_ingot',
        count: 1,
        mana: 3000,
        id: 'botania:mana_infusion/manasteel'
      },
      {
        input: 'immersiveengineering:storage_steel',
        output: 'botania:manasteel_block',
        count: 1,
        mana: 27000,
        id: 'botania:mana_infusion/manasteel_block'
      },
      {
        input: 'evilcraft:golden_string',
        output: 'botania:mana_string',
        count: 1,
        mana: 5000,
        id: 'botania:mana_infusion/mana_string'
      },
      {
        input: 'minecraft:redstone',
        output: 'botania:mana_powder',
        count: 1,
        mana: 5000,
        id: 'botania:mana_infusion/mana_powder_dust'
      },

  ];
  recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Ingredient.of(recipe.input).toJson(),
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana
        };

        if (recipe.catalyst) {
            constructed_recipe.catalyst = {
                type: 'block',
                block: recipe.catalyst
            };
        }

        const re = event.custom(constructed_recipe);

        if (recipe.id) {
            re.id(recipe.id);
        } else {
            fallback_id(re, id_prefix);
        }
    });
});
