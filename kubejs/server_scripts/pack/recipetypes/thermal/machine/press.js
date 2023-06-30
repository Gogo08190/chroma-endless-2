onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/press/';

    const recipes = [
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
        output: Item.of('chroma:manasteel_rod', 2),
        energy: '2400',
        id: `${id_prefix}manasteel_rod`
      },
      {
        inputs: ['#forge:ingots/netherite', Ingredient.of('immersiveengineering:mold_rod')],
        output: Item.of('chroma:netherite_rod', 2),
        energy: '2400',
        id: `${id_prefix}netherite_rod`
      },
      {
        inputs: ['#forge:ingots/electrum', Ingredient.of('immersiveengineering:mold_rod')],
        output: Item.of('chroma:electrum_rod', 2),
        energy: '2400',
        id: `${id_prefix}electrum_rod`
      },
      {
        inputs: ['#forge:ingots/aluminum', Ingredient.of('immersiveengineering:mold_rod')],
        output: Item.of('immersiveengineering:stick_aluminum', 2),
        energy: '2400',
        id: `${id_prefix}aluminum_rod`
      },
      {
        inputs: ['#forge:ingots/steel', Ingredient.of('immersiveengineering:mold_rod')],
        output: Item.of('immersiveengineering:stick_steel', 2),
        energy: '2400',
        id: `${id_prefix}steel_rod`
      },
      {
        inputs: ['#forge:ingots/iron', Ingredient.of('immersiveengineering:mold_rod')],
        output: Item.of('immersiveengineering:stick_iron', 2),
        energy: '2400',
        id: `${id_prefix}iron_rod`
      },
      {
        inputs: ['#forge:sheetmetals/lead'],
        output: 'chroma:base_augment',
        energy: '2400',
        id: `${id_prefix}base_augment`
      },
      {
        inputs: ['chroma:raw_resin'],
        output: 'chroma:resin_plate',
        energy: '2400',
        id: `${id_prefix}resin_plate`
      },
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
