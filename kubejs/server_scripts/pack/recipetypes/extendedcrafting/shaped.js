onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/shaped/';
    const recipes = [
      {
        output: 'extendedcrafting:frame',
          pattern: ['BGB', 'GFG', 'BGB'],
          key: {
              B: 'extendedcrafting:black_iron_ingot',
              G: 'industrialforegoing:dark_glass',
              F: 'industrialforegoing:machine_frame_simple'
          },
          id: 'extendedcrafting:frame'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
