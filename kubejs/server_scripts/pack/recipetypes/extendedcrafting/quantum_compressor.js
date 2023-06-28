onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/quantum_compressor/';
    
    event.custom(
        {
            "type": "extendedcrafting:compressor",
            "powerCost": 500000,
            "inputCount": 256,
            "ingredient": {
              "item": "undergarden:utherium_crystal"
            },
            "catalyst": {
              "item": "mekanism:teleportation_core"
            },
            "result": {
              "item": "chroma:miner_core"
            }
          }
    ).id(`${id_prefix}miner_core`)
});
