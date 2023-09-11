onEvent('block.registry', (event) => {
    const blocks = [
      {name: 'gaia_spirit_block', displayName: '§bBlock of Gaia Spirit Ingot', material: 'stone', hardness: '0.4'},
      {name: 'dielectric_paste_block', displayName: 'Block of Dielectric Paste', material: 'stone', hardness: '0.4'},
      {name: 'unassembled_pity_machine_frame', displayName: '§aUnassembled Pity Machine Frame', material: 'stone', hardness: '0.4'},
      {name: 'raw_cobalrite_block', displayName: 'Block of Raw Cobalrite', material: 'stone', hardness: '0.4'},
      {name: 'raw_aurizincite_block', displayName: 'Block of Raw Aurizincite', material: 'stone', hardness: '0.4'},
      {name: 'raw_cuperargentite_block', displayName: 'Block of Raw Cuperargentite', material: 'stone', hardness: '0.4'},
      {name: 'raw_feranicalumite_block', displayName: 'Block of Raw Feranicalumite', material: 'stone', hardness: '0.4'},
      {name: 'raw_leadurosmate_block', displayName: 'Block of Raw Leadurosmate', material: 'stone', hardness: '0.4'},
      {name: 'glacio_crystaltine_ore', displayName: 'Glacio Crystaltine Ore', material: 'stone', hardness: '0.6'},
    ];

    const parts = [
      {name: 'void_miner_frame_tier1', displayName: '§aStructure Frame Tier 1'},
      {name: 'void_miner_frame_tier2', displayName: '§6Structure Frame Tier 2'},
      {name: 'void_miner_frame_tier3', displayName: '§5Structure Frame Tier 3'},
      {name: 'void_miner_frame_tier4', displayName: '§dStructure Frame Tier 4'},
      {name: 'structure_frame', displayName: '§7Structure Panel'},
      {name: 'nebula_frame', displayName: '§7Nebula Extractor Panel'},
      {name: 'accelerator_frame', displayName: '§7Particle Accelerator Casing'},
      {name: 'electromagnetic_condenser', displayName: '§bElectromagnetic Condenser'},
      {name: 'accelerator_coil', displayName: '§bAccelerator Coil'}

    ];

    const cores = [
      {name: 'void_miner_laser_core_t1', displayName: '§aLaser Core Tier 1'},
      {name: 'void_miner_laser_core_t2', displayName: '§6Laser Core Tier 2'},
      {name: 'void_miner_laser_core_t3', displayName: '§5Laser Core Tier 3'},
      {name: 'void_miner_laser_core_t4', displayName: '§dLaser Core Tier 4'},
      {name: 'nebula_extractor_t1_laser_support', displayName: '§6Nebula Extractor Laser Support Tier 1'},
      {name: 'nebula_extractor_t1_laser_top', displayName: '§6Nebula Extractor Laser Tier 1'},
      {name: 'nebula_extractor_t1_frame', displayName: '§6Nebula Extractor Frame Tier 1'},
      {name: 'nebula_drill_t1', displayName: '§6Nebula Drill Extractor Tier 1'},
      {name: 'nebula_extractor_t2_laser_support', displayName: '§cNebula Extractor Laser Support Tier 2'},
      {name: 'nebula_extractor_t2_laser_top', displayName: '§cNebula Extractor Laser Tier 2'},
      {name: 'nebula_extractor_t2_frame', displayName: '§cNebula Extractor Frame Tier 2'},
      {name: 'nebula_drill_t2', displayName: '§cNebula Drill Extractor Tier 2'},
      {name: 'nebula_extractor_t3_laser_support', displayName: '§dNebula Extractor Laser Support Tier 3'},
      {name: 'nebula_extractor_t3_laser_top', displayName: '§dNebula Extractor Laser Tier 3'},
      {name: 'nebula_extractor_t3_frame', displayName: '§dNebula Extractor Frame Tier 3'},
      {name: 'nebula_drill_t3', displayName: '§dNebula Drill Extractor Tier 3'},
      {name: 'nebula_extractor_t4_laser_support', displayName: '§bNebula Extractor Laser Support Tier 4'},
      {name: 'nebula_extractor_t4_laser_top', displayName: '§bNebula Extractor Laser Tier 4'},
      {name: 'nebula_extractor_t4_frame', displayName: '§bNebula Extractor Frame Tier 4'},
      {name: 'nebula_drill_t4', displayName: '§bNebula Drill Extractor Tier 4'}
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
