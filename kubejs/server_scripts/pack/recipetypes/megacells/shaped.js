onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/ae2/shaped/';
    const recipes = [
      {
          output: 'megacells:mega_fluid_cell_housing',
          pattern: ['GRG', 'R R', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: 'lazierae2:carbonic_fluix_dust',
              S: '#forge:plates/copper'
          },
          id: 'megacells:cells/mega_fluid_cell_housing'
      },
      {
          output: 'megacells:fluid_storage_cell_256m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: 'lazierae2:carbonic_fluix_dust',
              S: '#forge:plates/copper',
              B: 'megacells:cell_component_256m'
          },
          id: 'megacells:cells/standard/fluid_storage_cell_256m'
      },
      {
          output: 'megacells:fluid_storage_cell_64m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: 'lazierae2:carbonic_fluix_dust',
              S: '#forge:plates/copper',
              B: 'megacells:cell_component_64m'
          },
          id: 'megacells:cells/standard/fluid_storage_cell_64m'
      },
      {
          output: 'megacells:fluid_storage_cell_16m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: 'lazierae2:carbonic_fluix_dust',
              S: '#forge:plates/copper',
              B: 'megacells:cell_component_16m'
          },
          id: 'megacells:cells/standard/fluid_storage_cell_16m'
      },
      {
          output: 'megacells:fluid_storage_cell_4m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: 'lazierae2:carbonic_fluix_dust',
              S: '#forge:plates/copper',
              B: 'megacells:cell_component_4m'
          },
          id: 'megacells:cells/standard/fluid_storage_cell_4m'
      },
      {
          output: 'megacells:fluid_storage_cell_1m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: 'lazierae2:carbonic_fluix_dust',
              S: '#forge:plates/copper',
              B: 'megacells:cell_component_1m'
          },
          id: 'megacells:cells/standard/fluid_storage_cell_1m'
      },
      {
          output: 'megacells:mega_item_cell_housing',
          pattern: ['GRG', 'R R', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: 'lazierae2:carbonic_fluix_dust',
              S: '#forge:plates/steel'
          },
          id: 'megacells:cells/mega_item_cell_housing'
      },
      {
          output: 'megacells:item_storage_cell_256m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: 'lazierae2:carbonic_fluix_dust',
              S: '#forge:plates/steel',
              B: 'megacells:cell_component_256m'
          },
          id: 'megacells:cells/standard/item_storage_cell_256m'
      },
      {
          output: 'megacells:item_storage_cell_64m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: 'lazierae2:carbonic_fluix_dust',
              S: '#forge:plates/steel',
              B: 'megacells:cell_component_64m'
          },
          id: 'megacells:cells/standard/item_storage_cell_64m'
      },
      {
          output: 'megacells:item_storage_cell_16m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: 'lazierae2:carbonic_fluix_dust',
              S: '#forge:plates/steel',
              B: 'megacells:cell_component_16m'
          },
          id: 'megacells:cells/standard/item_storage_cell_16m'
      },
      {
          output: 'megacells:item_storage_cell_4m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: 'lazierae2:carbonic_fluix_dust',
              S: '#forge:plates/steel',
              B: 'megacells:cell_component_4m'
          },
          id: 'megacells:cells/standard/item_storage_cell_4m'
      },
      {
          output: 'megacells:item_storage_cell_1m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: 'lazierae2:carbonic_fluix_dust',
              S: '#forge:plates/steel',
              B: 'megacells:cell_component_1m'
          },
          id: 'megacells:cells/standard/item_storage_cell_1m'
      },
      {
          output: 'megacells:radioactive_chemical_cell',
          pattern: ['GRG', 'RBR', 'SPS'],
          key: {
              G: 'mekanismgenerators:reactor_glass',
              R: '#forge:ingots/fluix_steel',
              S: 'mekanism:hdpe_sheet',
              B: 'megacells:radioactive_cell_component',
              P: '#forge:pellets/polonium'
          },
          id: 'megacells:cells/radioactive_chemical_cell'
      },
      {
          output: 'megacells:bulk_item_cell',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: 'fluxnetworks:flux_dust',
              S: '#forge:ingots/fluix_steel',
              B: 'megacells:bulk_cell_component'
          },
          id: 'megacells:cells/standard/bulk_item_cell'
      },
      {
          output: 'megacells:mega_chemical_cell_housing',
          pattern: ['GRG', 'R R', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: '#forge:dusts/carbonic_fluix',
              S: 'mekanism:hdpe_sheet'
          },
          id: 'megacells:cells/mega_chemical_cell_housing'
      },
      {
          output: 'megacells:chemical_storage_cell_256m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: '#forge:dusts/carbonic_fluix',
              S: 'mekanism:hdpe_sheet',
              B: 'megacells:cell_component_256m'
          },
          id: 'megacells:cells/standard/chemical_storage_cell_256m'
      },
      {
          output: 'megacells:chemical_storage_cell_64m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: '#forge:dusts/carbonic_fluix',
              S: 'mekanism:hdpe_sheet',
              B: 'megacells:cell_component_64m'
          },
          id: 'megacells:cells/standard/chemical_storage_cell_64m'
      },
      {
          output: 'megacells:chemical_storage_cell_16m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: '#forge:dusts/carbonic_fluix',
              S: 'mekanism:hdpe_sheet',
              B: 'megacells:cell_component_16m'
          },
          id: 'megacells:cells/standard/chemical_storage_cell_16m'
      },
      {
          output: 'megacells:chemical_storage_cell_4m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: '#forge:dusts/carbonic_fluix',
              S: 'mekanism:hdpe_sheet',
              B: 'megacells:cell_component_4m'
          },
          id: 'megacells:cells/standard/chemical_storage_cell_4m'
      },
      {
          output: 'megacells:chemical_storage_cell_1m',
          pattern: ['GRG', 'RBR', 'SSS'],
          key: {
              G: 'ae2:quartz_vibrant_glass',
              R: '#forge:dusts/carbonic_fluix',
              S: 'mekanism:hdpe_sheet',
              B: 'megacells:cell_component_1m'
          },
          id: 'megacells:cells/standard/chemical_storage_cell_1m'
      },
      {
          output: 'megacells:mega_energy_cell',
          pattern: ['AAA', 'ABA', 'AAA'],
          key: {
              A: 'ae2:dense_energy_cell',
              B: '#lazierae2:processors/parallel'
          },
          id: 'megacells:mega_energy_cell'
      },
      {
          output: 'megacells:mega_crafting_accelerator',
          pattern: ['ABA', 'CDC', 'ABA'],
          key: {
              A: '#forge:ingots/fluix_steel',
              B: '#lazierae2:processors/parallel',
              C: 'ae2:crafting_accelerator',
              D: 'megacells:mega_crafting_unit'
          },
          id: 'megacells:crafting/mega_crafting_accelerator'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
