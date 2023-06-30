onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lazierae2/shaped/';
    const recipes = [
        {
            output: 'lazierae2:requester',
            pattern: ['UIU', 'PLP', 'FDF'],
            key: {
                L: 'lazierae2:logic_unit',
                D: Item.of('ae2:dense_energy_cell').ignoreNBT(),
                F: 'lazierae2:fluix_steel_ingot',
                P: 'lazierae2:parallel_processor',
                U: 'mekanism:ultimate_control_circuit',
                I: 'ae2:interface'
            },
            id: 'lazierae2:requester'
        },
        {
            output: 'lazierae2:logic_unit',
            pattern: ['UPU', 'FLF', 'HHH'],
            key: {
                L: 'jaopca:beyond_earth_compresseds.ludicrite',
                H: 'mekanism:hdpe_rod',
                F: 'lazierae2:fluix_steel_ingot',
                U: 'mekanism:ultimate_control_circuit',
                P: 'ae2:logic_processor'
            },
            id: 'lazierae2:logic_unit'
        },
        {
            output: 'lazierae2:infuser',
            pattern: ['CBC', 'RMR', 'PAP'],
            key: {
                C: 'pneumaticcraft:capacitor',
                B: 'mekanism:elite_control_circuit',
                R: 'rftoolsbase:infused_diamond',
                M: 'mekanism:metallurgic_infuser',
                P: 'ae2:engineering_processor',
                A: 'ae2:condenser'
            },
            id: 'lazierae2:infuser'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
