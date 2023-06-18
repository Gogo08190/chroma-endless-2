onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mna/manaweaving/';
    const recipes = [
      {
          items: [
            'create:sturdy_sheet',
            'tconstruct:hepatizon_ingot',
            'tconstruct:hepatizon_ingot',
            'immersiveengineering:stick_iron',
            'immersiveengineering:stick_iron'
          ],
          patterns: [
            'mna:triangle',
            'mna:circle',
            'mna:circle',
            'mna:square'
          ],
          tier: 1,
          output: 'immersiveengineering:hammer',
          id: 'immersiveengineering:crafting/hammer'
      },
      {
          items: [
            'immersiveengineering:stick_treated',
            'immersiveengineering:stick_treated',
            'immersiveengineering:ingot_steel'
          ],
          patterns: [
            'mna:triangle',
            'mna:circle',
            'mna:triangle',
            'mna:square'
          ],
          tier: 1,
          output: 'immersiveengineering:wirecutter',
          id: 'immersiveengineering:crafting/wirecutter'
      },
      {
          items: [
            'immersiveengineering:stick_treated',
            'immersiveengineering:stick_iron'
          ],
          patterns: [
            'mna:square',
            'mna:slash',
            'mna:slash',
            'mna:circle'
          ],
          tier: 1,
          output: 'immersiveengineering:screwdriver',
          id: 'immersiveengineering:crafting/screwdriver'
      },
      {
          items: [
            'compactcrafting:base',
            'compactcrafting:projector_dish'
          ],
          patterns: [
            'mna:square',
            'mna:slash',
            'mna:triangle',
            'mna:circle'
          ],
          tier: 1,
          output: 'compactcrafting:field_projector',
          id: 'compactcrafting:field_projector'
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
          type: 'mna:manaweaving-recipe',
          output: recipe.output,
          tier: recipe.tier,
          items: recipe.items,
          patterns: recipe.patterns,
        }).id(recipe.id);
    });
});
