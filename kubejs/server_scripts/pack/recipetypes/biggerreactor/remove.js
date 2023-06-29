onEvent('recipes', (event) => {

    var outputRemovals = [

    ];

    var idRemovals = [
      'biggerreactors:smelting/graphite_ingot',
      'biggerreactors:crafting/ludicrite_block_nether_star',
      'biggerreactors:crafting/uranium_to_cyanite'
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

});
