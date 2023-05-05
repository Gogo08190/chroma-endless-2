onEvent('item.registry', (event) => {
    const items = [
      'mana_diamond_plate',
      'andesite_with_iron',
      'andesite_with_zinc',
      'black_bone_meal',
      'silicon_paste',
      'raw_zirconium',
      'raw_feranicalumite',
      'raw_leadurosmate',
      'raw_cuperargentite',
      'raw_cobalrite',
      'absolute_control_circuit',
      'cosmic_control_circuit',
      'infinite_control_circuit',
      'supreme_control_circuit'
    ];

    items.forEach((item) => {
        event.create('chroma:' + item).texture(`chroma:item/${item}`);
    });
});
