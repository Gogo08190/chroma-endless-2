// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [

    ];

    const outputRemovals = [
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:long_night_vision"}'),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:long_invisibility"}'),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:strong_leaping"}'),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:long_fire_resistance"}'),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:strong_swiftness"}'),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:long_water_breathing"}'),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:strong_regeneration"}'),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:strong_strength"}'),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:luck"}'),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:strong_haste"}'),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:strong_absorption"}'),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:strong_resistance"}')
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
