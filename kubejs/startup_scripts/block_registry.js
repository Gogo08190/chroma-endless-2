onEvent('block.registry', (event) => {
    const blocks = [
      {name: 'andesite_alloy_block', displayName: 'Block of Andesite Alloy', material: 'stone', hardness: '0.4'},
      {name: 'gaia_spirit_block', displayName: '§bBlock of Gaia Spirit Ingot', material: 'stone', hardness: '0.4'},
      {name: 'dielectric_paste_block', displayName: 'Block of Dielectric Paste', material: 'stone', hardness: '0.4'},
      {name: 'unassembled_pity_machine_frame', displayName: '§aUnassembled Pity Machine Frame', material: 'stone', hardness: '0.4'},
      {name: 'raw_cobalrite_block', displayName: 'Raw Cobalrite Block', material: 'stone', hardness: '0.4'},
      {name: 'raw_aurizincite_block', displayName: 'Raw Aurizincite Block', material: 'stone', hardness: '0.4'},
    ];

    const parts = [
      {name: 'nebula_extractor_t1_laser_support', displayName: '§6Nebula Extractor Laser Support Tier 1'},
      {name: 'nebula_extractor_t1_laser_top', displayName: '§6Nebula Extractor Laser Tier 1'},
      {name: 'nebula_extractor_t1_frame', displayName: '§6Nebula Extractor Frame Tier 1'},
      {name: 'void_miner_frame_tier1', displayName: '§aStructure Frame Tier 1'},
      {name: 'void_miner_frame_tier2', displayName: '§6Structure Frame Tier 2'},
      {name: 'void_miner_frame_tier3', displayName: '§5Structure Frame Tier 3'},
      {name: 'void_miner_frame_tier4', displayName: '§dStructure Frame Tier 4'},
      {name: 'structure_frame', displayName: '§7Structure Panel'},
      {name: 'nebula_frame', displayName: '§7Nebula Extractor Panel'}
    ];

    const cores = [
      {name: 'void_miner_laser_core_t1', displayName: '§aLaser Core Tier 1'},
      {name: 'void_miner_laser_core_t2', displayName: '§6Laser Core Tier 2'},
      {name: 'void_miner_laser_core_t3', displayName: '§5Laser Core Tier 3'},
      {name: 'void_miner_laser_core_t4', displayName: '§dLaser Core Tier 4'}
    ];

    blocks.forEach((block) => {
        event.create('chroma:' + block.name).material(block.material).hardness(block.hardness).displayName(block.displayName);
    });

    parts.forEach((part) => {
        event.create('chroma:' + part.name).displayName(part.displayName).renderType("cutout").lightLevel(1.0);
    });

    cores.forEach((core) => {
        event.create('chroma:' + core.name).displayName(core.displayName).renderType("cutout").lightLevel(1.0).notSolid();
    });
});
