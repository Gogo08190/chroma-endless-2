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
});
