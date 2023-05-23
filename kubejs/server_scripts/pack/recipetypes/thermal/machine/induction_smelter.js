onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/induction_smelter';
    const recipes = [
      {
          inputs: [Item.of('ae2:cell_component_64k', 3), Item.of('ae2:sky_dust', 4), 'ae2:calculation_processor'],
          outputs: ['ae2:cell_component_256k'],
          id: 'ae2:network/cells/item_storage_components_cell_256k_part'
      },
      {
          inputs: ['chroma:blank_integral_components', Item.of('#forge:plates/invar', 4), 'thermal:rf_coil'],
          outputs: ['thermal:upgrade_augment_1'],
          id: 'thermal:augments/upgrade_augment_1'
      },
      {
          inputs: ['thermal:upgrade_augment_1', Item.of('#forge:plates/electrum', 4), 'chroma:manasteel_flux_coil'],
          outputs: ['thermal:upgrade_augment_2'],
          id: 'thermal:augments/upgrade_augment_2'
      },
      {
          inputs: ['thermal:upgrade_augment_2', Item.of('#forge:plates/enderium', 4), 'chroma:netherite_flux_coil'],
          outputs: ['thermal:upgrade_augment_3'],
          id: 'thermal:augments/upgrade_augment_3'
      },
      {
          inputs: ['chroma:base_augment', Item.of('#forge:plates/invar', 4), 'thermal:redstone_servo'],
          outputs: ['chroma:blank_integral_components'],
          id: `${id_prefix}blank_integral_components`
      },

    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).id(recipe.id);
    });
});
