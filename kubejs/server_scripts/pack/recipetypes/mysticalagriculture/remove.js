onEvent('recipes', (event) => {
    const idRemovals = [
        'mysticalagradditions:insanium_block_combine',
        'mysticalagriculture:supremium_block_combine',
        'mysticalagriculture:imperium_block_combine',
        'mysticalagriculture:tertium_block_combine',
        'mysticalagriculture:prudentium_block_combine',
        'mysticalagriculture:mystical_fertilizer',
        'mysticalagriculture:inferium_farmland_till',
        'mysticalagriculture:prudentium_farmland_till',
        'mysticalagriculture:tertium_farmland_till',
        'mysticalagriculture:imperium_farmland_till',
        'mysticalagriculture:supremium_farmland_till',
        'mysticalagradditions:insanium_farmland_till'
    ];

    const outputRemovals = [

    ];

    const inputRemovals = [
      'mysticalagriculture:sheep_essence',
      'mysticalagriculture:cow_essence',
      'mysticalagriculture:slime_essence',
      'mysticalagriculture:chicken_essence',
      'mysticalagriculture:aluminum_essence',
      'mysticalagriculture:pig_essence',
      'mysticalagriculture:fish_essence',
      'mysticalagriculture:rubber_essence',
      'mysticalagriculture:apatite_essence',
      'mysticalagriculture:sapphire_essence',
      'mysticalagriculture:ruby_essence',
      'mysticalagriculture:enderman_essence',
      'mysticalagriculture:lapis_lazuli_essence',
      'mysticalagriculture:gold_essence',
      'mysticalagriculture:creeper_essence',
      'mysticalagriculture:graphite_essence',
      'mysticalagriculture:blitz_essence',
      'mysticalagriculture:zinc_essence',
      'mysticalagriculture:rabbit_essence',
      'mysticalagriculture:tin_essence',
      'mysticalagriculture:prismarine_essence',
      'mysticalagriculture:skeleton_essence',
      'mysticalagriculture:copper_essence',
      'mysticalagriculture:iron_essence',
      'mysticalagriculture:nether_quartz_essence',
      'mysticalagriculture:basalz_essence',
      'mysticalagriculture:lead_essence',
      'mysticalagriculture:redstone_essence',
      'mysticalagriculture:blizz_essence',
      'mysticalagriculture:silver_essence',
      'mysticalagriculture:certus_quartz_essence',
      'mysticalagriculture:zombie_essence',
      'mysticalagriculture:spider_essence',
      'mysticalagriculture:glowstone_essence',
      'mysticalagriculture:coal_essence',
      'mysticalagriculture:squid_essence',
      'mysticalagriculture:mithril_essence',
      'mysticalagriculture:cobalt_essence',
      'mysticalagriculture:nickel_essence',
      'mysticalagriculture:ghast_essence',
      'mysticalagriculture:fluorite_essence',
      'mysticalagriculture:chrome_essence',
      'mysticalagriculture:tungsten_essence',
      'mysticalagriculture:titanium_essence',
      'mysticalagriculture:blaze_essence',
      'mysticalagriculture:uranium_essence',
      'mysticalagriculture:osmium_essence',
      'mysticalagriculture:wither_skeleton_essence',
      'mysticalagriculture:iridium_essence',
      'mysticalagriculture:uraninite_essence',
      'mysticalagriculture:diamond_essence',
      'mysticalagriculture:emerald_essence',
      'mysticalagriculture:platinum_essence',
      'mysticalagriculture:gaia_spirit_essence',
      'mysticalagriculture:dragon_egg_essence',
      'mysticalagriculture:nether_star_essence',
      'mysticalagriculture:turtle_essence',
      'mysticalagradditions:nether_star_shard',
      'mysticalagradditions:dragon_egg_chunk',
      'mysticalagriculture:essence/minecraft/honeycomb',
      'mysticalagriculture:essence/minecraft/honey_bottle'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });

    inputRemovals.forEach((input) => {
        event.remove({ input: input });
    });
});
