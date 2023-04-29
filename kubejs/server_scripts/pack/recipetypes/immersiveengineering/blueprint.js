onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                { tag: 'forge:glass' },
                { tag: 'forge:wires/copper' },
                { item: 'create:electron_tube' }
            ],
            category: 'components',
            output: {
                item: 'immersiveengineering:light_bulb',
                count: 1
            },
            id: 'immersiveengineering:blueprint/light_bulb'
        },
        {
            inputs: [
                { item: 'compactmachines:wall' },
                { item: 'immersiveengineering:component_steel' },
                { tag: 'forge:rods/steel' },
                { item: 'create:electron_tube' }
            ],
            category: 'components',
            output: {
                item: 'compactcrafting:base',
                count: 1
            },
            id: 'compactcrafting:base'
        },
        {
            inputs: [
                { item: 'compactmachines:wall' },
                { item: 'create:display_board' },
                { item: 'immersiveengineering:component_electronic' }
            ],
            category: 'components',
            output: {
                item: 'compactcrafting:projector_dish',
                count: 1
            },
            id: 'compactcrafting:projector_dish'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event
                  .custom({
                      type: 'immersiveengineering:blueprint',
                      inputs: recipe.inputs,
                      category: recipe.category,
                      result: recipe.output
                  })
                  .id(recipe.id)
            : event.custom({
                  type: 'immersiveengineering:blueprint',
                  inputs: recipe.inputs,
                  category: recipe.category,
                  result: recipe.output
              });
    });
});
