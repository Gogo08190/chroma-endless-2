onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/minecraft/shapeless/';
    const recipes = [
      //Raw Cobalrite Block
      {
          output: 'chroma:raw_cobalrite_block',
          inputs: ['9x chroma:raw_cobalrite'],
          id: `${id_prefix}raw_cobalrite_block_from_raw_cobalrite`
      },
      {
          output: '9x chroma:raw_cobalrite',
          inputs: ['chroma:raw_cobalrite_block'],
          id: `${id_prefix}raw_cobalrite_from_raw_cobalrite_block`
      },
      //Raw Aurizincite Block
      {
          output: 'chroma:raw_aurizincite_block',
          inputs: ['9x chroma:raw_aurizincite'],
          id: `${id_prefix}raw_aurizincite_block_from_raw_aurizincite`
      },
      {
          output: '9x chroma:raw_aurizincite',
          inputs: ['chroma:raw_aurizincite_block'],
          id: `${id_prefix}raw_aurizincite_from_raw_aurizincite_block`
      },
      //Raw Cuperargentite Block
      {
          output: 'chroma:raw_cuperargentite_block',
          inputs: ['9x chroma:raw_cuperargentite'],
          id: `${id_prefix}raw_cuperargentite_block_from_raw_cuperargentite`
      },
      {
          output: '9x chroma:raw_cuperargentite',
          inputs: ['chroma:raw_cuperargentite_block'],
          id: `${id_prefix}raw_cuperargentite_from_raw_cuperargentite_block`
      },
      //Raw Feranicalumite Block
      {
          output: 'chroma:raw_feranicalumite_block',
          inputs: ['9x chroma:raw_feranicalumite'],
          id: `${id_prefix}raw_feranicalumite_block_from_raw_feranicalumite`
      },
      {
          output: '9x chroma:raw_feranicalumite',
          inputs: ['chroma:raw_feranicalumite_block'],
          id: `${id_prefix}raw_feranicalumite_from_raw_feranicalumite_block`
      },
      //Raw Leadurosmate Block
      {
          output: 'chroma:raw_leadurosmate_block',
          inputs: ['9x chroma:raw_leadurosmate'],
          id: `${id_prefix}raw_leadurosmate_block_from_raw_leadurosmate`
      },
      {
          output: '9x chroma:raw_leadurosmate',
          inputs: ['chroma:raw_leadurosmate_block'],
          id: `${id_prefix}raw_leadurosmate_from_raw_leadurosmate_block`
      },
      {
          output: '4x minecraft:clay_ball',
          inputs: ['minecraft:clay'],
          id: `${id_prefix}clay_ball_from_clay`
      },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
