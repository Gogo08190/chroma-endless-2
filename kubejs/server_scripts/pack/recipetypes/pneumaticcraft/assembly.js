onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/assembly/';

    const recipes = [
        {
            input: { item: 'chroma:unassembled_pity_machine_frame', count: 1 },
            output: { item: 'industrialforegoing:machine_frame_pity', count: 1 },
            program: 'drill_laser',
            id: 'industrialforegoing:machine_frame_pity'
        },
    ];

    recipes.forEach((recipe) => {
        recipe.input.type = 'pneumaticcraft:stacked_item';
        event
            .custom({
                type: `pneumaticcraft:assembly_${recipe.program}`,
                input: recipe.input,
                result: recipe.output,
                program: recipe.program
            })
            .id(recipe.id);
    });
});
