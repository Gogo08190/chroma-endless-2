onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/press/';

    const recipes = [
      {
        inputs: ['extendedcrafting:black_iron_ingot'],
        output: 'extendedcrafting:black_iron_slate',
        energy: '2400',
        id: 'extendedcrafting:black_iron_slate'
      },
      {
        inputs: [Item.of('#forge:gems/diamond', 4), Ingredient.of('thermal:press_gear_die')],
        output: 'thermal:diamond_gear',
        energy: '2400',
        id: `${id_prefix}diamond_gear`
      },
      {
        inputs: [Item.of('#forge:gems/emerald', 4), Ingredient.of('thermal:press_gear_die')],
        output: 'thermal:emerald_gear',
        energy: '2400',
        id: `${id_prefix}emerald_gear`
      },
      {
        inputs: [Item.of('#forge:gems/quartz', 4), Ingredient.of('thermal:press_gear_die')],
        output: 'thermal:quartz_gear',
        energy: '2400',
        id: `${id_prefix}quartz_gear`
      },
      {
        inputs: [Item.of('#forge:gems/lapis', 4), Ingredient.of('thermal:press_gear_die')],
        output: 'thermal:lapis_gear',
        energy: '2400',
        id: `${id_prefix}lapis_gear`
      },
      {
        inputs: ['botania:mana_diamond'],
        output: 'chroma:mana_diamond_plate',
        energy: '2400',
        id: `${id_prefix}mana_diamond_plate`
      },
      {
        inputs: ['#forge:ingots/manasteel', Ingredient.of('immersiveengineering:mold_rod')],
        output: 'chroma:manasteel_rod',
        energy: '2400',
        id: `${id_prefix}manasteel_rod`
      },
      {
        inputs: ['#forge:ingots/netherite', Ingredient.of('immersiveengineering:mold_rod')],
        output: 'chroma:netherite_rod',
        energy: '2400',
        id: `${id_prefix}netherite_rod`
      },
      {
        inputs: ['#forge:ingots/electrum', Ingredient.of('immersiveengineering:mold_rod')],
        output: 'chroma:electrum_rod',
        energy: '2400',
        id: `${id_prefix}electrum_rod`
      },
      {
        inputs: ['#forge:ingots/aluminum', Ingredient.of('immersiveengineering:mold_rod')],
        output: 'immersiveengineering:stick_aluminum',
        energy: '2400',
        id: `${id_prefix}aluminum_rod`
      },
      {
        inputs: ['#forge:ingots/steel', Ingredient.of('immersiveengineering:mold_rod')],
        output: 'immersiveengineering:stick_steel',
        energy: '2400',
        id: `${id_prefix}steel_rod`
      },
      {
        inputs: ['#forge:ingots/iron', Ingredient.of('immersiveengineering:mold_rod')],
        output: 'immersiveengineering:stick_iron',
        energy: '2400',
        id: `${id_prefix}iron_rod`
      },
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
