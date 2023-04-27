onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tconstruct/casting_basin/';

    var data = {
        recipes: [
          {
              fluid: 'tconstruct:seared_stone',
              fluid_amount: 1000,
              casts: [{ item: 'ironfurnaces:copper_furnace' }],
              cast_consumed: true,
              output: 'tconstruct:smeltery_controller',
              cooling_time: 10,
              id: 'tconstruct:smeltery/casting/seared/smeltery_controller'
          },
          {
              fluid: 'tconstruct:scorched_stone',
              fluid_amount: 1000,
              casts: [{ item: 'ironfurnaces:obsidian_furnace' }],
              cast_consumed: true,
              output: 'tconstruct:foundry_controller',
              cooling_time: 10,
              id: 'tconstruct:smeltery/casting/scorched/foundry_controller'
          },
          {
              fluid: 'tconstruct:seared_stone',
              fluid_amount: 1000,
              casts: [{ item: 'create:fluid_tank' }],
              cast_consumed: true,
              output: 'tconstruct:seared_fuel_tank',
              cooling_time: 10,
              id: 'tconstruct:smeltery/seared/fuel_tank'
          },
          {
              fluid: 'tconstruct:scorched_stone',
              fluid_amount: 1000,
              casts: [{ item: 'create:fluid_tank' }],
              cast_consumed: true,
              output: 'tconstruct:scorched_fuel_tank',
              cooling_time: 10,
              id: 'tconstruct:smeltery/scorched/fuel_tank'
          },
          {
              fluid: 'tconstruct:seared_stone',
              fluid_amount: 1000,
              casts: [{ item: 'create:fluid_pipe' }],
              cast_consumed: true,
              output: 'tconstruct:seared_drain',
              cooling_time: 10,
              id: 'tconstruct:smeltery/seared/drain'
          },
          {
              fluid: 'tconstruct:seared_stone',
              fluid_amount: 1000,
              casts: [{ item: 'create:item_drain' }],
              cast_consumed: true,
              output: 'tconstruct:seared_chute',
              cooling_time: 10,
              id: 'tconstruct:smeltery/seared/chute'
          },
          {
              fluid: 'tconstruct:molten_cobalt',
              fluid_amount: 1000,
              casts: [{ item: 'tconstruct:seared_drain' }],
              cast_consumed: true,
              output: 'tconstruct:seared_duct',
              cooling_time: 10,
              id: 'tconstruct:smeltery/seared/duct'
          },
        ]
    };

    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'tconstruct:casting_basin',
            fluid: {
                name: recipe.fluid,
                amount: recipe.fluid_amount
            },
            result: recipe.output,
            cooling_time: recipe.cooling_time
        };

        if (recipe.casts) {
            constructed_recipe.cast = {
                type: 'mantle:intersection',
                ingredients: recipe.casts
            };
            constructed_recipe.cast_consumed = recipe.cast_consumed;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
