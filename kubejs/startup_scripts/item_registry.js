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
      'miner_core',
      'lunaris_nova',
      'enriched_lunaris_nova',
      'gun_table_heart',
      'rune_pattern_air_rune',
      'rune_pattern_water_rune',
      'rune_pattern_fire_rune',
      'rune_pattern_earth_rune',
      'resin_plate',
      'raw_resin',
      'diglycidyl_ether_of_bisphenol_a',
      'ban_hammer',
      'incomplete_basic_sieving_factory_controller',
      'inferium_seed_base',
      'prudentium_seed_base',
      'tertium_seed_base',
      'imperium_seed_base',
      'supremium_seed_base',
      'insanium_seed_base',
      'enriched_compressed_steel',
      'enriched_niotic',
      'marsova_ignis',
      'enriched_marsova_ignis',
      'ultimate_prediction',
      'generalized_undergarden_prediction',
      'generalized_botania_prediction',
      'skin_of_gaia',
      'isolated_compressed_desh',
      'desh_rocket_nose_cone',
      'desh_rocket_fin',
      'blank_upgrade',
      'thermospiritium',
      'ostrum_rocket_nose_cone',
      'ostrum_rocket_fin',
      'venustar_luminae',
      'enriched_venustar_luminae',
      'crystaltine_shard',
      'crystaltine_crystal',
      'crystaltine_clump',
      'calorite_rocket_nose_cone',
      'calorite_rocket_fin',
      'eternal_cryostella_polaris'
    ];

    items.forEach((item) => {
        event.create('chroma:' + item).texture(`chroma:item/${item}`);
    });
});
