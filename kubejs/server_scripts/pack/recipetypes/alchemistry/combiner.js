onEvent('recipes', (event) => {
  const id_prefix = 'chroma:pack/alchemistry/combiner/';
	const recipes = [
    {
      input: [
        { ingredient: { item: 'chemlib:carbon' }, count: 21 },
        { ingredient: { item: 'chemlib:hydrogen' }, count: 24 },
        { ingredient: { item: 'chemlib:oxygen' }, count: 4 }
      ],
      result: {
        item: 'chroma:diglycidyl_ether_of_bisphenol_a'
      },
      id: `${id_prefix}diglycidyl_ether_of_bisphenol_a`
    }
  ];

  recipes.forEach((recipe) => {
      recipe.type = 'alchemistry:combiner';
      recipe.group = 'alchemistry:combiner';
      event.custom(recipe).id(recipe.id);
  });
})
