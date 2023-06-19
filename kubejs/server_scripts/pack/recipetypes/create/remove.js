onEvent('recipes', (event) => {

    var outputRemovals = [

    ];

    var idRemovals = [
      'tconstruct:compat/create/andesite_alloy_iron',
      'tconstruct:compat/create/andesite_alloy_zinc',
      'create:crafting/kinetics/large_cogwheelfrom_little',
      'create:deploying/cogwheel',
      'jaopca:create.material_to_plate.obsidian',
      'jaopca:create.material_to_plate_hammer.obsidian',
      'jaopca:immersiveengineering.material_to_plate_press.obsidian',
      'jaopca:thermal_expansion.material_to_plate.obsidian',
      'jaopca:beyond_earth_giselle_addon.rolling.obsidian',
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

});
