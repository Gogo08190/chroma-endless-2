onEvent('mekanism.slurry.registry', (event) => {
    const clean_slurry_type = [
      {name: 'clean_crystaltine_slurry', color: 0xCDFFFF, ore: 'chroma:glacio_crystaltine_ore'}
    ];

    const dirty_slurry_type = [
      {name: 'dirty_crystaltine', color: 0xCDFFFF, ore: 'chroma:glacio_crystaltine_ore'}
    ];

    clean_slurry_type.forEach((cslurry) => {
        event.create('chroma:' + cslurry.name, "clean").color(cslurry.color).ore(cslurry.ore);
    });

    dirty_slurry_type.forEach((dslurry) => {
        event.create('chroma:' + dslurry.name, "dirty").color(dslurry.color).ore(dslurry.ore);
    });
});
