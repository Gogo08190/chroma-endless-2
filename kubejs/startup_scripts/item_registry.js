onEvent('item.registry', (event) => {
    const items = [
      'mana_diamond_plate',
      'andesite_with_iron',
      'andesite_with_zinc',
      'black_bone_meal',
      'silicon_paste',
      'raw_aurizincite',
      'raw_feranicalumite',
      'raw_leadurosmate',
      'raw_cuperargentite',
      'raw_cobalrite',
      'supreme_alloy',
      'infinite_alloy',
      'cosmic_alloy',
      'absolute_alloy',
      'elven_spreader_core',
      'gaia_spreader_core',
      'mana_spreader_core',
      'redstone_spreader_core',
      'inert_luminescence',
      'essence_of_darkness'
    ];

    items.forEach((item) => {
        event.create('chroma:' + item).texture(`chroma:item/${item}`);
    });
});
