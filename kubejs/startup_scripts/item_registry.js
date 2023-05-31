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
      'inert_luminessence',
      'essence_of_darkness',
      'excitation_coil',
      'base_augment',
      'enriched_refined_glowstone',
      'enriched_essence_of_darkness',
      'electrum_rod',
      'netherite_rod',
      'netherite_flux_coil',
      'manasteel_rod',
      'manasteel_flux_coil',
      'magnetic_rode',
      'empty_mana_pearl',
      'device_frame',
      'wooden_frame',
      'runic_core',
      'blank_integral_components',
      'fluxo_core',
      'magnet_core',
      'supra_component',
      'supra_catalyst',
      'carbon_fiber',
      'miner_core'
    ];

    items.forEach((item) => {
        event.create('chroma:' + item).texture(`chroma:item/${item}`);
    });
});
