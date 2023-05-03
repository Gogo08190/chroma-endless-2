onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/graveyard/shaped/';
    const recipes = [
      {
          output: 'graveyard:skull_with_rib_cage',
          pattern: ['SMM', ' MM', 'B  '],
          key: {
              S: 'minecraft:skeleton_skull',
              B: 'minecraft:bone',
              M: 'minecraft:bone_meal'
          },
          id: `${id_prefix}skull_with_rib_cage`
      },
      {
          output: 'graveyard:leaning_skeleton',
          pattern: [' S ', 'BBB', 'MBM'],
          key: {
              S: 'minecraft:skeleton_skull',
              B: 'minecraft:bone',
              M: 'minecraft:bone_meal'
          },
          id: `${id_prefix}leaning_skeleton`
      },
      {
          output: 'graveyard:skull_pile',
          pattern: [' S ', 'SBS', 'SSS'],
          key: {
              S: 'minecraft:skeleton_skull',
              B: 'minecraft:bone_block'
          },
          id: `${id_prefix}skull_pile`
      },
      {
          output: 'graveyard:lying_skeleton',
          pattern: ['BSB', ' B ', ' B '],
          key: {
              S: 'minecraft:skeleton_skull',
              B: 'minecraft:bone'
          },
          id: `${id_prefix}lying_skeleton`
      },
      {
          output: 'graveyard:wither_skull_with_rib_cage',
          pattern: ['SMM', ' MM', 'B  '],
          key: {
              S: 'minecraft:wither_skeleton_skull',
              B: 'architects_palette:withered_bone',
              M: 'chroma:black_bone_meal'
          },
          id: `${id_prefix}wither_skull_with_rib_cage`
      },
      {
          output: 'graveyard:leaning_wither_skeleton',
          pattern: [' S ', 'BBB', 'MBM'],
          key: {
              S: 'minecraft:wither_skeleton_skull',
              B: 'architects_palette:withered_bone',
              M: 'chroma:black_bone_meal'
          },
          id: `${id_prefix}leaning_wither_skeleton`
      },
      {
          output: 'graveyard:wither_skull_pile',
          pattern: [' S ', 'SBS', 'SSS'],
          key: {
              S: 'minecraft:wither_skeleton_skull',
              B: 'architects_palette:withered_bone_block'
          },
          id: `${id_prefix}wither_skull_pile`
      },
      {
          output: 'graveyard:lying_wither_skeleton',
          pattern: ['BSB', ' B ', ' B '],
          key: {
              S: 'minecraft:wither_skeleton_skull',
              B: 'architects_palette:withered_bone'
          },
          id: `${id_prefix}lying_wither_skeleton`
      },
      {
          output: 'graveyard:creeper_skeleton',
          pattern: [' C ', ' B ', ' BM'],
          key: {
              C: 'minecraft:creeper_head',
              B: 'minecraft:bone',
              M: 'minecraft:bone_meal'
          },
          id: `${id_prefix}creeper_skeleton`
      },
      {
          output: 'graveyard:skeleton_hand',
          pattern: ['BBB', ' B ', 'MMM'],
          key: {
              B: 'minecraft:bone',
              M: 'minecraft:bone_meal'
          },
          id: `${id_prefix}skeleton_hand`
      },
      {
          output: 'graveyard:wither_skeleton_hand',
          pattern: ['BBB', ' B ', 'MMM'],
          key: {
              B: 'architects_palette:withered_bone',
              M: 'chroma:black_bone_meal'
          },
          id: `${id_prefix}wither_skeleton_hand`
      },
      {
          output: 'graveyard:torso_pile',
          pattern: [' B ', 'BBB', ' B '],
          key: {
              B: 'minecraft:bone_meal'
          },
          id: `${id_prefix}torso_pile`
      },
      {
          output: 'graveyard:wither_torso_pile',
          pattern: [' B ', 'BBB', ' B '],
          key: {
              B: 'chroma:black_bone_meal'
          },
          id: `${id_prefix}wither_torso_pile`
      },
      {
          output: 'graveyard:skull_on_pike',
          pattern: ['  S', 'S B', 'B B'],
          key: {
              B: 'minecraft:bone',
              S: 'minecraft:skeleton_skull'
          },
          id: `${id_prefix}skull_on_pike`
      },
      {
          output: 'graveyard:wither_skull_on_pike',
          pattern: ['  S', 'S B', 'B B'],
          key: {
              B: 'architects_palette:withered_bone',
              S: 'minecraft:wither_skeleton_skull'
          },
          id: `${id_prefix}wither_skull_on_pike`
      },
      {
          output: 'graveyard:bone_remains',
          pattern: [' S ', ' MB', 'BM '],
          key: {
              B: 'minecraft:bone',
              S: 'minecraft:skeleton_skull',
              M: 'minecraft:bone_meal'
          },
          id: `${id_prefix}bone_remains`
      },
      {
          output: 'graveyard:wither_bone_remains',
          pattern: [' S ', ' MB', 'BM '],
          key: {
              B: 'architects_palette:withered_bone',
              S: 'minecraft:wither_skeleton_skull',
              M: 'chroma:black_bone_meal'
          },
          id: `${id_prefix}wither_bone_remains`
      },
      {
          output: 'graveyard:laterally_lying_skeleton',
          pattern: [' S ', 'BM ', ' M '],
          key: {
              B: 'minecraft:bone',
              S: 'minecraft:skeleton_skull',
              M: 'minecraft:bone_meal'
          },
          id: `${id_prefix}laterally_lying_skeleton`
      },
      {
          output: 'graveyard:laterally_lying_wither_skeleton',
          pattern: [' S ', 'BM ', ' M '],
          key: {
              B: 'architects_palette:withered_bone',
              S: 'minecraft:wither_skeleton_skull',
              M: 'chroma:black_bone_meal'
          },
          id: `${id_prefix}laterally_lying_wither_skeleton`
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
