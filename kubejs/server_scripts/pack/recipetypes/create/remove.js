onEvent('recipes', (event) => {

    var outputRemovals = [

    ];

    var idRemovals = [
      'tconstruct:compat/create/andesite_alloy_iron',
      'tconstruct:compat/create/andesite_alloy_zinc',
      'create:crafting/kinetics/large_cogwheel_from_little',
      'create:deploying/cogwheel',
      'jaopca:create.material_to_plate.obsidian',
      'jaopca:create.material_to_plate_hammer.obsidian',
      'jaopca:immersiveengineering.material_to_plate_press.obsidian',
      'jaopca:thermal_expansion.material_to_plate.obsidian',
      'jaopca:beyond_earth_giselle_addon.rolling.obsidian',
      'jaopca:create.default_ore_to_material.certus_quartz',

      'createoreexcavation:drilling/gold',
      'createoreexcavation:drilling/zinc',
      'createoreexcavation:drilling/iron',
      'createoreexcavation:drilling/copper',

      'jaopca:immersiveengineering.material_to_plate_hammer.obsidian',
      'create:crushing/obsidian'
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

});
