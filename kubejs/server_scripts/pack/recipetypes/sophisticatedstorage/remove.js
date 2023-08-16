onEvent('recipes', (event) => {
    const idRemovals = [
        'sophisticatedstorage:storage_link',
        'sophisticatedstorage:blasting_upgrade_from_smelting_upgrade',
        'sophisticatedstorage:smoking_upgrade_from_smelting_upgrade',
        'sophisticatedstorage:advanced_magnet_upgrade_from_basic',
        'sophisticatedstorage:auto_smoking_upgrade_from_auto_smelting_upgrade',
        'sophisticatedstorage:auto_blasting_upgrade_from_auto_smelting_upgrade',
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
