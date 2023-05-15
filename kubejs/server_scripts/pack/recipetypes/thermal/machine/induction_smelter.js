onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/induction_smelter';
    const recipes = [
      {
          inputs: [Item.of('ae2:cell_component_64k', 3), Item.of('ae2:sky_dust', 4), 'ae2:calculation_processor'],
          outputs: ['ae2:cell_component_256k'],
          id: 'ae2:network/cells/item_storage_components_cell_256k_part'
      },

    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).id(recipe.id);
    });
});
