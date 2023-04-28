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
