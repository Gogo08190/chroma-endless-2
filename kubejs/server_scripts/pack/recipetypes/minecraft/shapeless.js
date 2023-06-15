onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/minecraft/shapeless/';
    const recipes = [
      //Raw Cobalrite Block
      {
          output: 'chroma:raw_cobalrite_block',
          inputs: ['9x chroma:raw_cobalrite'],
          id: `${id_prefix}raw_cobalrite_block_from_raw_cobalrite`
      },
      //Raw Aurizincite Block
      {
          output: 'chroma:raw_aurizincite_block',
          inputs: ['9x chroma:raw_aurizincite'],
          id: `${id_prefix}raw_aurizincite_block_from_raw_aurizincite`
      },
      //Raw Cuperargentite Block
      {
          output: 'chroma:raw_cuperargentite_block',
          inputs: ['9x chroma:raw_cuperargentite'],
          id: `${id_prefix}raw_cuperargentite_block_from_raw_cuperargentite`
      },
      //Raw Feranicalumite Block
      {
          output: 'chroma:raw_feranicalumite_block',
          inputs: ['9x chroma:raw_feranicalumite'],
          id: `${id_prefix}raw_feranicalumite_block_from_raw_feranicalumite`
      },
      //Raw Leadurosmate Block
      {
          output: 'chroma:raw_leadurosmate_block',
          inputs: ['9x chroma:raw_leadurosmate'],
          id: `${id_prefix}raw_leadurosmate_block_from_raw_leadurosmate`
      },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
