onEvent('mekanism.infuse_type.registry', (event) => {
    const infuse_type = [
      {name: 'refined_glowstone', color: 0xFFD966}
    ];

    infuse_type.forEach((infuse) => {
        event.create('chroma:' + infuse.name).color(infuse.color).texture("chroma:infuse_types/custom_infuse.png");
    });
});
