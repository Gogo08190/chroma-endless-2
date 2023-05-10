onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/powah/shapeless/';
    const recipes = [
      {
          output: 'chroma:dielectric_paste_block',
          inputs: ['9x powah:dielectric_paste'],
          id: `${id_prefix}dielectric_paste_block_from_dielectric_paste`
      },
      {
          output: '9x powah:dielectric_paste',
          inputs: ['chroma:dielectric_paste_block'],
          id: `${id_prefix}dielectric_paste_from_dielectric_paste_block`
      },
    ];

    powahTiers.forEach((tier) => {
        if (tier == 'starter') {
            return;
        }
        event.shapeless(`powah:reactor_${tier}`, `powah:reactor_${tier}`);
    });

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
