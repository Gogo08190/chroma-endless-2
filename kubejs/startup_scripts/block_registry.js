onEvent('block.registry', (event) => {
    const blocks = [
      {name: 'andesite_alloy_block', displayName: 'Block of Andesite Alloy', material: 'iron', hardness: '5'},
    ];

    blocks.forEach((block) => {
        event.create(block.name).group('Chroma').setRegistryName('chroma', block.name).material(block.material).hardness(block.hardness);
    });
});
