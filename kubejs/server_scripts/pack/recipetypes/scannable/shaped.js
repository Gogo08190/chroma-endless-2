onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/scannable/shaped/';
    const recipes = [
        {
            output: 'scannable:scanner',
            pattern: ['STS', 'AEA', 'SMS'],
            key: {
                S: '#forge:sheetmetals/aluminum',
                T: 'immersiveengineering:component_electronic',
                A: Item.of('immersiveengineering:capacitor_lv').ignoreNBT(),
                E: 'immersiveengineering:component_electronic',
                M: 'create:precision_mechanism'
            },
            id: 'scannable:scanner'
        },
        {
            output: 'scannable:blank_module',
            pattern: ['ZZZ', 'CEC', 'CMC'],
            key: {
                Z: '#forge:ingots/zinc',
                C: '#forge:clay',
                E: 'create:electron_tube',
                M: 'immersiveengineering:component_iron'
            },
            id: 'scannable:blank_module'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
