onEvent('recipes', (event) => {

    var outputRemovals = [

    ];

    var idRemovals = [
      'tconstruct:compat/create/andesite_alloy_iron',
      'tconstruct:compat/create/andesite_alloy_zinc',
      'create:crafting/kinetics/large_cogwheelfrom_little',
      'create:deploying/cogwheel',
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

});
