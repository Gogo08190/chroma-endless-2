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
