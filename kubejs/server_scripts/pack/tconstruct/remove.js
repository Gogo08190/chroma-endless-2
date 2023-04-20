// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'tconstruct:tables/tinkers_anvil',
      'tconstruct:tables/scorched_anvil',
      'tconstruct:smeltery/seared/drain_retextured',
      'tconstruct:smeltery/seared/duct_retextured',
      'tconstruct:smeltery/seared/chute_retextured',
      'tconstruct:smeltery/scorched/duct_retextured',
      'tconstruct:smeltery/scorched/drain_retextured',
      'tconstruct:smeltery/scorched/chute_retextured',
    ];

    const outputRemovals = [

    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
