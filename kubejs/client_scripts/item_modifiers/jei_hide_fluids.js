onEvent('jei.hide.fluids', (event) => {
    [
      'thermal:crude_oil',
      'immersivepetroleum:crudeoil',
      'cofh_core:honey',
      'tconstruct:honey'

    ].forEach((disabledFluid) => {
        if (!Fluid.of(disabledFluid).isEmpty()) {
            event.hide(disabledFluid);
        }
    });
});
