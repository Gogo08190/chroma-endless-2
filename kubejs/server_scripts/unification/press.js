onEvent('recipes', (event) => {
  materialsToUnify.forEach((material) => {
    event.remove({ id: 'jaopca:immersiveengineering.material_to_plate_hammer.' + material });
    event.remove({ id: 'immersiveengineering:crafting/plate_' + material + '_hammering' });
  });
});
