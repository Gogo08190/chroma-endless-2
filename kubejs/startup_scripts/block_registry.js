onEvent('block.registry', (event) => {
    const blocks = [
      {name: 'andesite_alloy_block', displayName: 'Block of Andesite Alloy', material: 'stone', hardness: '0.4'},
      {name: 'gaia_spirit_block', displayName: 'Block of Gaia Spirit Ingot', material: 'stone', hardness: '0.4'},
      {name: 'dielectric_paste_block', displayName: 'Block of Dielectric Paste', material: 'stone', hardness: '0.4'},
      {name: 'unassembled_pity_machine_frame', displayName: 'Unassembled Pity Machine Frame', material: 'stone', hardness: '0.4'}
    ];

    blocks.forEach((block) => {
        event.create('chroma:' + block.name).material(block.material).hardness(block.hardness).displayName(block.displayName);
    });
});
