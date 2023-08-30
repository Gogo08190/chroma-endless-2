onEvent('mekanism.gas.registry', (event) => {
    const gas_type = [
      {name: 'crystaltine', color: 0x9ADCF9},
    ];

    gas_type.forEach((gas) => {
        event.create('chroma:' + gas.name).color(gas.color).texture("chroma:gas/base_gas_texture.png");
    });
});
