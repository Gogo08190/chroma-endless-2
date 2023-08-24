onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/pressing/';

    const recipes = [
      {
          output: 'chroma:mana_diamond_plate',
          inputs: ['botania:mana_diamond'],
          id: `${id_prefix}mana_diamond_plate`
      },
      {
          output: 'create:sand_paper',
          inputs: ['minecraft:sand'],
          id: 'create:crafting/materials/sand_paper'
      },
      {
          output: 'create:red_sand_paper',
          inputs: ['minecraft:red_sand'],
          id: 'create:crafting/materials/red_sand_paper'
      },
      {
          output: 'chroma:resin_plate',
          inputs: ['chroma:raw_resin', 'mob_grinding_utils:solid_xp_mould_blank'],
          id: `${id_prefix}resin_plate`
      },
      {
          output: 'mob_grinding_utils:solid_xp_mould_baby',
          inputs: ['create_confectionery:gingerbread_man'],
          id: 'mob_grinding_utils:recipe_mould_baby_upgrade'
      },
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id);
    });
});
