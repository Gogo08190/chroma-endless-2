onEvent('recipes', (event) => {

    var outputRemovals = [

    ];

    var idRemovals = [
      'evilcraft:crafting/weather_container_lightning',
      'evilcraft:crafting/weather_container_rain'
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

});
