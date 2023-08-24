onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/fluxnetworks/shaped/';
    const recipes = [
        {
            output: Item.of('fluxnetworks:flux_core', 4),
            pattern: ['FOF', 'OEO', 'FOF'],
            key: {
                F: 'fluxnetworks:flux_dust',
                O: '#forge:obsidian',
                E: '#forge:ingots/enderium'
            },
            id: 'fluxnetworks:fluxcore'
        },
        {
            output: 'fluxnetworks:flux_point',
            pattern: [' F ', 'FAF', ' F '],
            key: {
                F: 'fluxnetworks:flux_core',
                A: 'chroma:supreme_alloy'
            },
            id: 'fluxnetworks:fluxpoint'
        },
        {
            output: 'fluxnetworks:basic_flux_storage',
            pattern: ['FFF', 'GPG', 'FFF'],
            key: {
                F: 'fluxnetworks:flux_block',
                G: '#forge:glass_panes',
                P: '#forge:pellets/polonium'
            },
            id: 'fluxnetworks:basicfluxstorage'
        },
        {
            output: 'fluxnetworks:herculean_flux_storage',
            pattern: ['FFF', 'GPG', 'FFF'],
            key: {
                F: 'fluxnetworks:basic_flux_storage',
                G: '#forge:glass_panes',
                P: '#forge:pellets/polonium'
            },
            id: 'fluxnetworks:herculeanfluxstorage'
        },
        {
            output: 'fluxnetworks:gargantuan_flux_storage',
            pattern: ['FFF', 'GPG', 'FFF'],
            key: {
                F: 'fluxnetworks:herculean_flux_storage',
                G: '#forge:glass_panes',
                P: '#forge:pellets/polonium'
            },
            id: 'fluxnetworks:gargantuanfluxstorage'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
