onEvent('recipes', (event) => {

    const recipes = [
      {
        recipeSize: 3,
        layers: [
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["S", "Q", "S"],
              ["Q", "G", "Q"],
              ["S", "Q", "S"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["R", "G", "R"],
              ["G", "H", "G"],
              ["R", "G", "R"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["S", "Q", "S"],
              ["Q", "G", "Q"],
              ["S", "Q", "S"],
            ]
          }
        ],
        catalyst: {
          id: 'ae2:engineering_processor',
          Count: 1
        },
        components: {
          'S': {
            type: "compactcrafting:block",
            block: 'ae2:smooth_sky_stone_block'
          },
          'Q': {
            type: "compactcrafting:block",
            block: 'ae2:quartz_block'
          },
          'R': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:rs_engineering'
          },
          'G': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:generator'
          },
          'H': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:coil_hv'
          }
        },
        outputs: [{
          id: 'ae2:energy_acceptor',
          Count: 1
        }],
        id: 'ae2:network/blocks/energy_energy_acceptor'
      },

      {
        recipeSize: 3,
        layers: [
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["S", "Q", "S"],
              ["Q", "A", "Q"],
              ["S", "Q", "S"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["Q", "G", "Q"],
              ["G", "H", "G"],
              ["Q", "G", "Q"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["S", "Q", "S"],
              ["Q", "A", "Q"],
              ["S", "Q", "S"],
            ]
          }
        ],
        catalyst: {
          id: 'mekanism:block_osmium',
          Count: 1
        },
        components: {
          'S': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:storage_steel'
          },
          'Q': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:sheetmetal_steel'
          },
          'A': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:rs_engineering'
          },
          'G': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:light_engineering'
          },
          'H': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:heavy_engineering'
          }
        },
        outputs: [{
          id: 'mekanism:steel_casing',
          Count: 1
        }],
        id: 'mekanism:steel_casing'
      },

      {
        recipeSize: 3,
        layers: [
          {
            type: "compactcrafting:filled",
            component: "S"
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["G", "B", "G"],
              ["B", "A", "B"],
              ["G", "B", "G"],
            ]
          },
          {
            type: "compactcrafting:filled",
            component: "S"
          }
        ],
        catalyst: {
          id: 'blue_skies:lunar_stone_pickaxe',
          Count: 1
        },
        components: {
          'S': {
            type: "compactcrafting:block",
            block: 'ae2:smooth_sky_stone_block'
          },
          'G': {
            type: "compactcrafting:block",
            block: 'botania:glimmering_livingwood'
          },
          'B': {
            type: "compactcrafting:block",
            block: 'blue_skies:aquite_block'
          },
          'A': {
            type: "compactcrafting:block",
            block: 'chroma:gaia_spirit_block'
          },
        },
        outputs: [{
          id: 'jamd:mine_portal_block',
          Count: 1
        }],
        id: 'jamd:mine_portal_block'
      },
      {
        recipeSize: 5,
        layers: [
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["M", "M", "M", "M", "M"],
              ["M", "M", "M", "M", "M"],
              ["M", "M", "M", "M", "M"],
              ["M", "M", "M", "M", "M"],
              ["M", "M", "M", "M", "M"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["M", "M", "M", "M", "M"],
              ["M", "M", "M", "M", "M"],
              ["M", "M", "M", "M", "M"],
              ["M", "M", "M", "M", "M"],
              ["M", "M", "M", "M", "M"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["M", "M", "S", "M", "M"],
              ["M", "H", "H", "H", "M"],
              ["S", "H", "E", "H", "S"],
              ["M", "H", "H", "H", "M"],
              ["M", "M", "S", "M", "M"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["D", "D", "G", "D", "D"],
              ["D", "U", "U", "U", "D"],
              ["G", "U", "U", "U", "G"],
              ["D", "U", "U", "U", "D"],
              ["D", "D", "G", "D", "D"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["D", "D", "G", "D", "D"],
              ["D", "D", "D", "D", "D"],
              ["G", "D", "D", "D", "G"],
              ["D", "D", "D", "D", "D"],
              ["D", "D", "G", "D", "D"],
            ]
          }
        ],
        catalyst: {
          id: 'powah:dielectric_casing',
          Count: 1
        },
        components: {
          'M': {
            type: "compactcrafting:block",
            block: 'botania:mana_glass'
          },
          'S': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:storage_steel'
          },
          'D': {
            type: "compactcrafting:block",
            block: 'chroma:dielectric_paste_block'
          },
          'G': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:heavy_engineering'
          },
          'U': {
            type: "compactcrafting:block",
            block: 'powah:uraninite_block'
          },
          'E': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:coil_mv'
          },
          'H': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:coil_hv'
          }
        },
        outputs: [{
          id: 'powah:energizing_orb',
          Count: 1
        }],
        id: 'powah:crafting/energizing_orb'
      },

      {
        recipeSize: 3,
        layers: [
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["O", "P", "O"],
              ["P", "B", "P"],
              ["O", "P", "O"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["F", "D", "F"],
              ["D", "M", "D"],
              ["F", "D", "F"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["O", "P", "O"],
              ["P", "B", "P"],
              ["O", "P", "O"],
            ]
          }
        ],
        catalyst: {
          id: 'mna:patch_void',
          Count: 1
        },
        components: {
          'O': {
            type: "compactcrafting:block",
            block: 'minecraft:obsidian'
          },
          'P': {
            type: "compactcrafting:block",
            block: 'forbidden_arcanus:processed_obsidian_block'
          },
          'B': {
            type: "compactcrafting:block",
            block: 'powah:blazing_crystal_block'
          },
          'M': {
            type: "compactcrafting:block",
            block: 'compactmachines:machine_maximum'
          },
          'F': {
            type: "compactcrafting:block",
            block: 'undergarden:forgotten_block'
          },
          'D': {
            type: "compactcrafting:block",
            block: 'industrialforegoing:dark_glass'
          },
        },
        outputs: [{
          id: 'javd:portal_block',
          Count: 1
        }],
        id: 'javd:portal_block'
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'compactcrafting:miniaturization',
            version: 1,
            recipeSize: recipe.recipeSize,
            layers: recipe.layers,
            catalyst: recipe.catalyst,
            components: recipe.components,
            outputs: recipe.outputs
        }).id(recipe.id);
    });
});
