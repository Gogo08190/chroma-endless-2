onEvent('recipes', (event) => {
    const idRemovals = [
      'botania:mana_infusion/mana_powder_dye',
      'botanicalmachinery:mana_tablet',
      'botanicalmachinery:runic_altar',
      'botania:diluted_pool',
      'mythicbotany:nidavellir_rune_runic_altar',
      'mythicbotany:niflheim_rune_runic_altar',
      'mythicbotany:muspelheim_rune_runic_altar',
      'mythicbotany:joetunheim_rune_runic_altar',
      'mythicbotany:midgard_rune_runic_altar',
      'mythicbotany:alfheim_rune_runic_altar',
      'mythicbotany:vanaheim_rune_runic_altar',
      'mythicbotany:asgard_rune_runic_altar',
      'mythicbotany:helheim_rune_runic_altar'
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
