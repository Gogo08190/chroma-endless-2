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
        {
            output: 'rftoolsbuilder:shield_block2',
            pattern: ['RPR', 'PCP', 'RER'],
            key: {
                P: 'powah:capacitor_hardened',
                C: 'rftoolsbuilder:shield_block1',
                R: 'forbidden_arcanus:arcane_gold_ingot',
                E: Item.of('mekanism:energy_tablet').weakNBT()
            },
            id: 'rftoolsbuilder:shield_block2'
        },
        {
            output: 'rftoolsbuilder:shield_block3',
            pattern: ['RPR', 'PCP', 'RER'],
            key: {
                P: 'mekanism:elite_control_circuit',
                C: 'rftoolsbuilder:shield_block2',
                R: 'rftoolsbase:infused_diamond',
                E: Item.of('solarpanels:improved_energy_tablet').weakNBT()
            },
            id: 'rftoolsbuilder:shield_block3'
        },
        {
            output: 'rftoolsbuilder:shield_block4',
            pattern: ['RDR', 'PCP', 'RER'],
            key: {
                P: 'evilcraft:blood_infusion_core',
                D: 'forbidden_arcanus:dark_nether_star',
                C: 'rftoolsbuilder:shield_block3',
                R: 'mekanism:ingot_refined_glowstone',
                E: Item.of('solarpanels:improved_energy_tablet').weakNBT()
            },
            id: 'rftoolsbuilder:shield_block4'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
