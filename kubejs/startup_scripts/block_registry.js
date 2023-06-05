onEvent('block.registry', (event) => {
    const blocks = [
      {name: 'andesite_alloy_block', displayName: 'Block of Andesite Alloy', material: 'stone', hardness: '0.4'},
      {name: 'gaia_spirit_block', displayName: 'Block of Gaia Spirit Ingot', material: 'stone', hardness: '0.4'},
      {name: 'dielectric_paste_block', displayName: 'Block of Dielectric Paste', material: 'stone', hardness: '0.4'},
      {name: 'unassembled_pity_machine_frame', displayName: 'Unassembled Pity Machine Frame', material: 'stone', hardness: '0.4'},
    ];

    const parts = [
      {name: 'nebula_extractor_t1_laser_support', displayName: 'Nebula Extractor Laser Support Tier 1', material: 'metal', hardness: '0.4'},
      {name: 'nebula_extractor_t1_laser_top', displayName: 'Nebula Extractor Laser Tier 1', material: 'metal', hardness: '0.4'},
      {name: 'nebula_extractor_t1_frame', displayName: 'Nebula Extractor Frame Tier 1', material: 'metal', hardness: '0.4'}
    ];

    blocks.forEach((block) => {
        event.create('chroma:' + block.name).material(block.material).hardness(block.hardness).displayName(block.displayName);
    });

    parts.forEach((part) => {
        event.create('chroma:' + part.name).displayName(part.displayName).renderType("cutout").notSolid().lightLevel(1.0).material(part.material).hardness(part.hardness);
    });
});
