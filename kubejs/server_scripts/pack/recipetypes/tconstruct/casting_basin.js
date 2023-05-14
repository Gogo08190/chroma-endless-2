onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tconstruct/casting_basin/';

    var data = {
        recipes: [
          {
              fluid: 'tconstruct:seared_stone',
              fluid_amount: 1000,
              cast: [{ item: 'ironfurnaces:copper_furnace' }],
              cast_consumed: true,
              output: 'tconstruct:smeltery_controller',
              cooling_time: 10,
              id: 'tconstruct:smeltery/casting/seared/smeltery_controller'
          },
          {
              fluid: 'tconstruct:scorched_stone',
              fluid_amount: 1000,
              cast: [{ item: 'ironfurnaces:obsidian_furnace' }],
              cast_consumed: true,
              output: 'tconstruct:foundry_controller',
              cooling_time: 10,
              id: 'tconstruct:smeltery/casting/scorched/foundry_controller'
          },
          {
              fluid: 'tconstruct:seared_stone',
              fluid_amount: 1000,
              cast: [{ item: 'create:fluid_tank' }],
              cast_consumed: true,
              output: 'tconstruct:seared_fuel_tank',
              cooling_time: 10,
              id: 'tconstruct:smeltery/seared/fuel_tank'
          },
          {
              fluid: 'tconstruct:scorched_stone',
              fluid_amount: 1000,
              cast: [{ item: 'create:fluid_tank' }],
              cast_consumed: true,
              output: 'tconstruct:scorched_fuel_tank',
              cooling_time: 10,
              id: 'tconstruct:smeltery/scorched/fuel_tank'
          },
          {
              fluid: 'tconstruct:seared_stone',
              fluid_amount: 1000,
              cast: [{ item: 'create:fluid_pipe' }],
              cast_consumed: true,
              output: 'tconstruct:seared_drain',
              cooling_time: 10,
              id: 'tconstruct:smeltery/seared/drain'
          },
          {
              fluid: 'tconstruct:seared_stone',
              fluid_amount: 1000,
              cast: [{ item: 'create:item_drain' }],
              cast_consumed: true,
              output: 'tconstruct:seared_chute',
              cooling_time: 10,
              id: 'tconstruct:smeltery/seared/chute'
          },
          {
              fluid: 'tconstruct:molten_cobalt',
              fluid_amount: 1000,
              cast: [{ item: 'tconstruct:seared_drain' }],
              cast_consumed: true,
              output: 'tconstruct:seared_duct',
              cooling_time: 10,
              id: 'tconstruct:smeltery/seared/duct'
          },
          {
              fluid: 'tconstruct:molten_diamond',
              fluid_amount: 360,
              cast: [{ tag: 'tconstruct:casts/multi_use/gear' }],
              cast_consumed: false,
              output: 'thermal:diamond_gear',
              cooling_time: 114,
              id: `${id_prefix}diamond_gear`
          },
          {
              fluid: 'tconstruct:molten_diamond',
              fluid_amount: 360,
              cast: [{ tag: 'tconstruct:casts/single_use/gear' }],
              cast_consumed: true,
              output: 'thermal:diamond_gear',
              cooling_time: 114,
              id: `${id_prefix}diamond_gear_2`
          },
          {
              fluid: 'tconstruct:molten_emerald',
              fluid_amount: 360,
              cast: [{ tag: 'tconstruct:casts/multi_use/gear' }],
              cast_consumed: false,
              output: 'thermal:emerald_gear',
              cooling_time: 114,
              id: `${id_prefix}emerald_gear`
          },
          {
              fluid: 'tconstruct:molten_emerald',
              fluid_amount: 360,
              cast: [{ tag: 'tconstruct:casts/single_use/gear' }],
              cast_consumed: true,
              output: 'thermal:emerald_gear',
              cooling_time: 114,
              id: `${id_prefix}emerald_gear_2`
          },
          {
              fluid: 'tconstruct:molten_quartz',
              fluid_amount: 360,
              cast: [{ tag: 'tconstruct:casts/multi_use/gear' }],
              cast_consumed: false,
              output: 'thermal:quartz_gear',
              cooling_time: 114,
              id: `${id_prefix}quartz_gear`
          },
          {
              fluid: 'tconstruct:molten_quartz',
              fluid_amount: 360,
              cast: [{ tag: 'tconstruct:casts/single_use/gear' }],
              cast_consumed: true,
              output: 'thermal:quartz_gear',
              cooling_time: 114,
              id: `${id_prefix}quartz_gear_2`
          },
          {
              fluid: 'jaopca:molten.lapis',
              fluid_amount: 360,
              cast: [{ tag: 'tconstruct:casts/multi_use/gear' }],
              cast_consumed: false,
              output: 'thermal:lapis_gear',
              cooling_time: 114,
              id: `${id_prefix}lapis_gear`
          },
          {
              fluid: 'jaopca:molten.lapis',
              fluid_amount: 360,
              cast: [{ tag: 'tconstruct:casts/single_use/gear' }],
              cast_consumed: true,
              output: 'thermal:lapis_gear',
              cooling_time: 114,
              id: `${id_prefix}lapis_gear_2`
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
            cast: recipe.cast,
            cast_consumed: recipe.cast_consumed,
            result: recipe.output,
            cooling_time: recipe.cooling_time
        };

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
