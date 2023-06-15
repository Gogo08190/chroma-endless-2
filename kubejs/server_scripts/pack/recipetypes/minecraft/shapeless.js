onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/minecraft/shapeless/';
    const recipes = [
      //Raw Cobalrite Block
      {
          output: 'chroma:raw_cobalrite_block',
          inputs: ['9x chroma:raw_cobalrite'],
          id: `${id_prefix}raw_cobalrite_block_from_raw_cobalrite`
      },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
