onEvent('mekanism.gas.registry', (event) => {
    const gas_type = [

    ];

    gas_type.forEach((gas) => {
        event.create('chroma:' + gas.name).color(gas.color).texture("chroma:gas/base_gas_texture.png");
    });
});
