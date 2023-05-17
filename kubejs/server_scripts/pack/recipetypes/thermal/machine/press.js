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
        inputs: [Item.of('#forge:gems/diamond', 4), Ingredient.of('immersiveengineering:mold_gear')],
        output: 'thermal:diamond_gear',
        energy: '2400',
        id: `${id_prefix}diamond_gear`
      },
      {
        inputs: [Item.of('#forge:gems/emerald', 4), Ingredient.of('immersiveengineering:mold_gear')],
        output: 'thermal:emerald_gear',
        energy: '2400',
        id: `${id_prefix}emerald_gear`
      },
      {
        inputs: [Item.of('#forge:gems/quartz', 4), Ingredient.of('immersiveengineering:mold_gear')],
        output: 'thermal:quartz_gear',
        energy: '2400',
        id: `${id_prefix}quartz_gear`
      },
      {
        inputs: [Item.of('#forge:gems/lapis', 4), Ingredient.of('immersiveengineering:mold_gear')],
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
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
