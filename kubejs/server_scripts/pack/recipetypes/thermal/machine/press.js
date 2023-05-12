onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/press/';

    const recipes = [
      {
        inputs: ['extendedcrafting:black_iron_ingot'],
        output: 'extendedcrafting:black_iron_slate',
        energy: '2400',
        id: 'extendedcrafting:black_iron_slate'
      }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
