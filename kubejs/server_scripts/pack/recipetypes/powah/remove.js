onEvent('recipes', (event) => {
  event.remove({
      output: '/powah:\\w+_starter/',
      mod: 'powah'
  });
});
