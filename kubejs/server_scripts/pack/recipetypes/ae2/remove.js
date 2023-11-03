onEvent('recipes', (event) => {

    var outputRemovals = [

    ];

    var idRemovals = [
      'ae2:network/wireless_crafting_terminal',
      'create:compat/ae2/mixing/fluix_crystal',
      'ae2wtlib:pattern_encoding/upgrade_wireless_pattern_encoding_terminal',
      'mekanism:compat/ae2/fluix_crystal_to_dust',
      'jaopca:mekanism.material_to_dust.fluix',
      'jaopca:thermal_expansion.material_to_dust.fluix',
      'lazierae2:compat/ae2/grinder/fluix_dust',
      'jaopca:immersiveengineering.material_to_dust.fluix',
      'create:compat/ae2/milling/fluix_crystal',
      'ae2:inscriber/fluix_dust',
      'mekanism:compat/ae2/certus_seed_to_crystal',
      'mekanism:compat/ae2/fluix_seed_to_crystal'
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

});
