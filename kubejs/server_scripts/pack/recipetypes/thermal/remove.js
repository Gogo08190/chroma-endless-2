onEvent('recipes', (event) => {
    const idRemovals = [
      'thermal:fire_charge/lumium_ingot_4',
      'thermal:lumium_dust_4',
      'thermal:fire_charge/enderium_ingot_2',
      'thermal:enderium_dust_2',
      'thermal:fire_charge/signalum_ingot_4',
      'thermal:signalum_dust_4',
      'thermal:fire_charge/electrum_ingot_2',
      'immersiveengineering:crafting/electrum_mix',
      'thermal:fire_charge/constantan_ingot_2',
      'immersiveengineering:crafting/constantan_mix',
      'thermal:fire_charge/invar_ingot_3',
      'thermal:invar_dust_3',
      'thermal:fire_charge/bronze_ingot_4',
      'thermal:bronze_dust_4',
      'thermal:phytogro_2',
      'thermal:phytogro_8'
    ];

    const outputRemovals = [

    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
