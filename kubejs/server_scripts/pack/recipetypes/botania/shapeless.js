onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/shapeless/';
    const recipes = [
      {
          output: 'chroma:gaia_spirit_block',
          inputs: ['9x botania:gaia_ingot'],
          id: `${id_prefix}gaia_ingot_block_from_gaia_ingot`
      },
      {
          output: '9x botania:gaia_ingot',
          inputs: ['chroma:gaia_spirit_block'],
          id: `${id_prefix}gaia_ingot_from_gaia_ingot_block`
      },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
