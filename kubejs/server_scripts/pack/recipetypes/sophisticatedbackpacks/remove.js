onEvent('recipes', (event) => {
    const idRemovals = [
        'sophisticatedbackpacks:smoking_upgrade_from_smelting_upgrade',
        'sophisticatedbackpacks:blasting_upgrade_from_smelting_upgrade',
        'sophisticatedbackpacks:refill_upgrade',
        'sophisticatedbackpacks:pickup_upgrade',
        'sophisticatedbackpacks:auto_smoking_upgrade_from_auto_smelting_upgrade',
        'sophisticatedbackpacks:auto_blasting_upgrade_from_auto_smelting_upgrade',
        'sophisticatedbackpacks:advanced_magnet_upgrade_from_basic',
    ];

    const outputRemovals = [

    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });

    event.remove({
        output: '/powah:\\w+_starter/',
        mod: 'powah'
    });
});
