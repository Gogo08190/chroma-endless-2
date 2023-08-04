onEvent('recipes', (event) => {

    var outputRemovals = [

    ];

    var idRemovals = [
      'forbidden_arcanus:smithing/quantum_catcher_smithing',
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

});
