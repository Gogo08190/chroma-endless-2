onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/ender_storage/shaped/';
    const recipes = [
      {
        output: 'enderstorage:ender_chest',
          pattern: ['BWB', 'OCO', 'BQB'],
          key: {
              B: 'forge:rods/blaze',
              W: 'forge:wool',
              O: 'forbidden_arcanus:obsidian_ingot',
              C: 'forge:chests/wooden',
              Q: 'create:polished_rose_quartz'
          },
          id: 'enderstorage:ender_chest'
      },
      {
        output: 'enderstorage:ender_tank',
          pattern: ['BWB', 'OCO', 'BQB'],
          key: {
              B: 'forge:rods/blaze',
              W: 'forge:wool',
              O: 'forbidden_arcanus:obsidian_ingot',
              C: 'create:fluid_tank',
              Q: 'create:polished_rose_quartz'
          },
          id: 'enderstorage:ender_tank'
      },
      {
        output: 'enderstorage:ender_pouch',
          pattern: ['BLB', 'LEL', 'BwB'],
          key: {
              B: 'forge:rods/blaze',
              L: 'forge:leather',
              E: 'minecraft:ender_eye',
              W: 'forge:wool'
          },
          id: 'enderstorage:ender_pouch'
      }
      
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
