onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/compacting/';
    const recipes = [
        {
            inputs: ['create_confectionery:gingerbread_man', 'mob_grinding_utils:solid_xp_mould_blank'],
            output: 'mob_grinding_utils:solid_xp_mould_baby',
            type: 'heated',
            id: 'mob_grinding_utils:recipe_mould_baby_upgrade'
        },
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.compacting(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.type == 'heated') {
            re.heated();
        }
        if (recipe.type == 'superheated') {
            re.superheated();
        }
    });
});
