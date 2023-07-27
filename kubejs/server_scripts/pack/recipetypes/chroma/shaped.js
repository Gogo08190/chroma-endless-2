onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/chroma/shaped/';
    const recipes = [
      {
        output: 'chroma:nebula_extractor_item_output',
          pattern: ['FEF', 'FCF', 'FFF'],
          key: {
              F: 'chroma:nebula_frame',
              E: 'mekanism:logistical_sorter',
              C: 'mekanism:personal_barrel'
          },
          id: `${id_prefix}nebula_extractor_item_output`
      },
      {
        output: 'chroma:nebula_extractor_energy_input',
          pattern: ['FFF', 'FCF', 'FFF'],
          key: {
              F: 'chroma:nebula_frame',
              C: Item.of('solarpanels:quantum_energy_tablet').ignoreNBT()
          },
          id: `${id_prefix}nebula_extractor_energy_input`
      },
      {
        output: 'chroma:nebula_drill_t1',
          pattern: ['FFF', 'UCU', ' U '],
          key: {
              F: 'chroma:nebula_frame',
              C: 'create:mechanical_drill',
              U: '#forge:ingots/regalium'
          },
          id: `${id_prefix}nebula_drill_t1`
      },
      {
        output: Item.of('chroma:nebula_frame', 4),
          pattern: ['FUF', 'UCU', 'FUF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: 'chroma:carbon_fiber',
              U: 'mekanism:enriched_iron'
          },
          id: `${id_prefix}nebula_frame`
      },
      {
        output: 'chroma:nebula_extractor_t1_frame',
          pattern: ['FUF', 'FCF', 'FUF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: '#forge:circuits/ultimate',
              U: '#forge:ingots/regalium'
          },
          id: `${id_prefix}nebula_extractor_t1_frame`
      },
      {
        output: 'chroma:nebula_extractor_t1_laser_support',
          pattern: ['AAA', 'UFU', 'FCF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: '#forge:circuits/ultimate',
              U: '#forge:ingots/regalium',
              A: '#beyond_earth:compresseds/graphite'
          },
          id: `${id_prefix}nebula_extractor_t1_laser_support`
      },
      {
        output: 'chroma:nebula_extractor_t1_laser_top',
          pattern: ['AE ', 'AFU', 'AE '],
          key: {
              A: '#forge:alloys/ultimate',
              E: Item.of('solarpanels:quantum_energy_tablet').ignoreNBT(),
              F: '#industrialforegoing:machine_frame/simple',
              U: '#forge:ingots/regalium'
          },
          id: `${id_prefix}nebula_extractor_t1_laser_top`
      },
      {
        output: 'chroma:nebula_extractor_t2_frame',
          pattern: ['FUF', 'FCF', 'FUF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: 'mekaevolution:absolute_control_circuit',
              U: '#forge:ingots/ostrum'
          },
          id: `${id_prefix}nebula_extractor_t2_frame`
      },
      {
        output: 'chroma:nebula_extractor_t2_laser_support',
          pattern: ['AAA', 'UFU', 'FCF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: 'mekaevolution:absolute_control_circuit',
              U: '#forge:ingots/ostrum',
              A: '#beyond_earth:compresseds/graphite'
          },
          id: `${id_prefix}nebula_extractor_t2_laser_support`
      },
      {
        output: 'chroma:nebula_extractor_t2_laser_top',
          pattern: ['AE ', 'AFU', 'AE '],
          key: {
              A: 'chroma:absolute_alloy',
              E: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT(),
              F: '#industrialforegoing:machine_frame/advanced',
              U: '#forge:ingots/ostrum'
          },
          id: `${id_prefix}nebula_extractor_t2_laser_top`
      },
      {
        output: 'chroma:nebula_drill_t2',
          pattern: ['FFF', 'UCU', ' U '],
          key: {
              F: 'chroma:nebula_frame',
              C: 'create:mechanical_drill',
              U: '#forge:ingots/ostrum'
          },
          id: `${id_prefix}nebula_drill_t2`
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
