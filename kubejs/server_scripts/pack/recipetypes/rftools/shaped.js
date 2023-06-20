onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/rftools/shaped/';
    const recipes = [
        {
            output: 'rftoolsbuilder:shield_block1',
            pattern: ['RMR', 'PCP', 'RER'],
            key: {
                P: 'botania:piston_relay',
                C: 'rftoolsbase:machine_frame',
                R: 'pneumaticcraft:reinforced_stone',
                E: Item.of('mekanism:energy_tablet').weakNBT(),
                M: 'botania:mana_fluxfield'
            },
            id: 'rftoolsbuilder:shield_block1'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
