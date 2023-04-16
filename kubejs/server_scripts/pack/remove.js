onEvent('recipes', (event) => {

    var outputRemovals = [

    ];

    var idRemovals = [

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
