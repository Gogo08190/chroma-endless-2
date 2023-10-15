onEvent('recipes', (event) => {
  materialsToUnify.forEach((material) => {
    event.remove({ id: 'jaopca:immersiveengineering.material_to_plate_hammer.' + material });
    event.remove({ id: 'immersiveengineering:crafting/plate_' + material + '_hammering' });
  });

  gearMaterials.forEach((gear) => {
    event.remove({ id: 'thermal:parts/' + gear + '_gear' });
    event.remove({ id: 'industrialforegoing:' + gear + '_gear' });
    event.remove({ id: 'pneumaticcraft:' + gear + '_gear' });
  });

  generatableCobblestone.forEach((material) => {
        var type = 'cobble';
        industrialforegoing_stoneworks(event, material, type);
        thermal_stoneworks(event, material);
    });

    generatableStone.forEach((material) => {
        var type = 'stone';
        industrialforegoing_stoneworks(event, material, type);
        thermal_stoneworks(event, material);
    });
});

function industrialforegoing_stoneworks(event, material, type) {
    var waterConsume = 0;
    var lavaConsume = 0;

    if (type == 'stone') {
        waterConsume = 1000;
        lavaConsume = 0;
    }

    event.custom({
        output: {
            item: material,
            count: 1
        },
        waterNeed: 1000,
        lavaNeed: 1000,
        waterConsume: waterConsume,
        lavaConsume: lavaConsume,
        type: 'industrialforegoing:stonework_generate'
    });
}

function thermal_stoneworks(event, material) {
    event.custom({
        type: 'thermal:rock_gen',
        adjacent: 'minecraft:water',
        below: material,
        result: {
            item: material
        }
    });
}
