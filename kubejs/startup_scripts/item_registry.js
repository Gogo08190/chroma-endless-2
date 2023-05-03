onEvent('item.registry', (event) => {
    const items = [
      'mana_diamond_plate',
      'andesite_with_iron',
      'andesite_with_zinc',
      'black_bone_meal',
      'silicon_paste'
    ];

    items.forEach((item) => {
        event.create('chroma:' + item).texture(`chroma:item/${item}`);
    });
});
