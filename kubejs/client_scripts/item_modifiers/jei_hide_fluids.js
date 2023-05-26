onEvent('jei.hide.fluids', (event) => {
    [
      'thermal:crude_oil',
      'immersivepetroleum:crudeoil'

    ].forEach((disabledFluid) => {
        if (!Fluid.of(disabledFluid).isEmpty()) {
            event.hide(disabledFluid);
        }
    });
});
