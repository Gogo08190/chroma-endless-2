onEvent('recipes', (event) => {

    var outputRemovals = [

    ];

    var idRemovals = [
      'ae2:network/wireless_crafting_terminal',
      'create:compat/ae2/mixing/fluix_crystal'
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

});
