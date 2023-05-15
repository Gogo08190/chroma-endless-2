onEvent('recipes', (event) => {

    var outputRemovals = [

    ];

    var idRemovals = [
      'ae2:network/wireless_crafting_terminal'
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

});
