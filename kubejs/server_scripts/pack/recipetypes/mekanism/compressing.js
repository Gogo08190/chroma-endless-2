onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/compressing/';

    const recipes = [
      //Refined Glowstone Bee
      {
        input: 'extendedcrafting:black_iron_ingot',
        gasInput: { amount:1, gas: "mekanism:liquid_osmium" },
        output: 'extendedcrafting:black_iron_slate',
        id: 'extendedcrafting:black_iron_slate'
      },
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismCompressing(recipe.output, recipe.input, recipe.gasInput).id(recipe.id)
    });
});
