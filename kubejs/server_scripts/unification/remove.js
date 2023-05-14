onEvent('recipes', (event) => {

    var outputRemovals = [

    ];

    var idRemovals = [
      'jaopca:storage_blocks.to_storage_block.mana_diamond',
      'jaopca:storage_blocks.to_storage_block.dragonstone',
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
