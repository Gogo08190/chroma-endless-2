onEvent('recipes', (event) => {

    var outputRemovals = [
      'angelring:itemdiamondring'
    ];

    var idRemovals = [

    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

});
