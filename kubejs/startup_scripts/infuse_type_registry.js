onEvent('mekanism.infuse_type.registry', (event) => {
    const infuse_type = [
      {name: 'refined_glowstone', color: 0xFFD966},
      {name: 'essence_of_darkness', color: 0x27024B},
      {name: 'lunaris_nova', color: 0xF0F184},
      {name: 'compressed_steel', color: 0x2B2727},
      {name: 'niotic', color: 0x07A4CD},
      {name: 'marsova_ignis', color: 0xFF3B3A},
      {name: 'venustar_luminae', color: 0xE10BAB}
    ];

    infuse_type.forEach((infuse) => {
        event.create('chroma:' + infuse.name).color(infuse.color).texture("chroma:infuse_types/custom_infuse.png");
    });
});
