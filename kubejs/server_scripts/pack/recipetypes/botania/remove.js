onEvent('recipes', (event) => {
    const idRemovals = [
      'botania:mana_infusion/mana_powder_dye',
      'botanicalmachinery:mana_tablet',
      'botanicalmachinery:runic_altar',
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
