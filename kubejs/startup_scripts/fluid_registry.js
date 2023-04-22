onEvent('fluid.registry', (event) => {
    const fluids = [
      //Molten Mana Fluid
      {
        type: 'thick',
        id: 'molten_mana',
        texture: 0x85c0e6,
        display: '§3Molten Mana'
      },
    ];

    fluids.forEach((fluid) => {
        if (fluid.type == 'thick') {
            event.create('chroma:' + fluid.id).thickTexture(fluid.texture).bucketColor(fluid.texture).displayName(fluid.display);
        } else if (fluid.type == 'thin') {
            event.create('chroma:' + fluid.id).thinTexture(fluid.texture).bucketColor(fluid.texture).displayName(fluid.display);
        }
    });
});
