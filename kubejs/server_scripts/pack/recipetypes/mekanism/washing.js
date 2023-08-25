onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/washing/';

    const recipes = [
      {
        fluidInput: { amount: 5, tag: 'minecraft:water' },
        slurryInput: { amount: 1, slurry:'chroma:dirty_crystaltine' },
        output: { slurry : 'chroma:clean_crystaltine_slurry', amount: 1 },
        id: `${id_prefix}clean_crystaltine_slurry`
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
          type: 'mekanism:washing',
          fluidInput: recipe.fluidInput,
          slurryInput: recipe.slurryInput,
          output: recipe.output
        })
        .id(recipe.id);
    });
});
