onEvent('recipes', (event) => {

    var outputRemovals = [

    ];

    var idRemovals = [
      'alchemistry:fission_chamber_controller'
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

});
