onEvent('recipes', (event) => {
  const id_prefix = 'chroma:pack/alchemistry/dissolver/';
	const recipes = [
    {
      input: { ingredient: { item: 'chroma:diglycidyl_ether_of_bisphenol_a' }, count: 1 },
      output: {
        rolls: 1,
        weighted: false,
        groups: [
          {
            probability: 100.0,
            results: [
              {
                item: 'chemlib:carbon',
                count: 21
              },
              {
                item: 'chemlib:hydrogen',
                count: 24
              },
              {
                item: 'chemlib:oxygen',
                count: 4
              }
            ]
          }
        ]
      },
      id: `${id_prefix}diglycidyl_ether_of_bisphenol_a`
    }
  ];

  recipes.forEach((recipe) => {
      recipe.type = 'alchemistry:dissolver';
      recipe.group = 'alchemistry:dissolver';
      event.custom(recipe).id(recipe.id);
  });
})
