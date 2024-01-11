onEvent('recipes', (event) => {

    var outputRemovals = [

    ];

    var idRemovals = [
      'jaopca:storage_blocks.to_storage_block.mana_diamond',
      'jaopca:storage_blocks.to_storage_block.dragonstone',
      'beyond_earth:iron_plate',
      'beyond_earth:desh_plate',
      'beyond_earth:iron_stick',
      'immersiveengineering:crafting/stick_iron',
      'immersiveengineering:crafting/stick_steel',
      'immersiveengineering:crafting/stick_aluminum',
      'immersivepetroleum:hydrotreater/propylene_plastic',
      'immersivepetroleum:hydrotreater/ethylene_plastic',
      'immersivepetroleum:hydrotreater/lubricant_cracking',
      'immersivepetroleum:hydrotreater/sulfur_recovery'
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

    disabledItems.forEach((disabledItem) => {
        event.remove({ output: disabledItem });
    });

});
