onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/draconicevolution/fusion/';

    const recipes = [
      {
          inputs: [
            { item: 'beyond_earth:ice_shard' },
            { item: 'beyond_earth:ice_shard' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'industrialforegoing:machine_frame_supreme' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'ironjetpacks:ultimate_coil' },
          total_energy: 25000,
          result: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:ethereal"}'),
          id: `${id_prefix}ethereal_cell`
      },
      {
          inputs: [
            { item: 'industrialforegoing:machine_frame_supreme' },
            { item: 'industrialforegoing:machine_frame_supreme' },
            { item: 'ironjetpacks:ultimate_coil' },
            { item: 'ironjetpacks:ultimate_coil' },
            Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:ethereal"}').weakNBT().toJson(),
            Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:ethereal"}').weakNBT().toJson(),
            Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:ethereal"}').weakNBT().toJson(),
          ],
          tier: "WYVERN",
          catalyst: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:calorite"}').weakNBT().toJson(),
          total_energy: 75000,
          result: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:ethereal"}'),
          id: `${id_prefix}ethereal_jetpack`
      },
      {
          inputs: [
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:draconium_block' },
            { item: 'mekanism:pellet_polonium' },
            { item: 'mekanism:pellet_polonium' },
            { item: 'mekanism:pellet_polonium' },
            { item: 'mekanism:pellet_polonium' }
          ],
          tier: "DRACONIUM",
          catalyst: { item: 'draconicevolution:basic_crafting_injector' },
          total_energy: 32000,
          result: { item: 'draconicevolution:wyvern_crafting_injector' },
          id: 'draconicevolution:wyvern_crafting_injector'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'forbidden_arcanus:draco_arcanus_chestplate' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_chestpiece' },
          id: 'draconicevolution:tools/wyvern_chestpiece'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'upgradednetherite:corrupt_upgraded_netherite_bow' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_bow' },
          id: 'draconicevolution:tools/wyvern_bow'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'upgradednetherite:corrupt_upgraded_netherite_bow' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_bow' },
          id: 'draconicevolution:tools/wyvern_bow'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'upgradednetherite:corrupt_upgraded_netherite_sword' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_sword' },
          id: 'draconicevolution:tools/wyvern_sword'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'upgradednetherite:corrupt_upgraded_netherite_pickaxe' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_pickaxe' },
          id: 'draconicevolution:tools/wyvern_pickaxe'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'upgradednetherite:corrupt_upgraded_netherite_axe' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_axe' },
          id: 'draconicevolution:tools/wyvern_axe'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'forbidden_arcanus:draco_arcanus_hoe' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_hoe' },
          id: 'draconicevolution:tools/wyvern_hoe'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'upgradednetherite:corrupt_upgraded_netherite_shovel' },
          total_energy: 8000000,
          result: { item: 'draconicevolution:wyvern_shovel' },
          id: 'draconicevolution:tools/wyvern_shovel'
      },
      {
          inputs: [
            { item: 'alchemistry:reactor_casing' },
            { item: 'alchemistry:reactor_casing' },
            { item: 'alchemistry:reactor_casing' },
            { item: 'alchemistry:reactor_casing' },
            { item: 'chemlib:rhodium_ingot' },
            { item: 'chemlib:rhodium_ingot' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'chroma:thermospiritium' },
            { item: 'chroma:thermospiritium' },
            { item: 'chroma:thermospiritium' },
            { item: 'mekaevolution:cosmic_energy_cube' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'industrialforegoing:machine_frame_supreme' },
          total_energy: 100000000,
          result: { item: 'alchemistry:fusion_chamber_controller' },
          id: 'alchemistry:fusion_chamber_controller'
      },
      {
          inputs: [
            { item: 'mekanismgenerators:fusion_reactor_frame' },
            { item: 'mekanismgenerators:fusion_reactor_frame' },
            { item: 'mekanismgenerators:fusion_reactor_frame' },
            { item: 'mekanismgenerators:fusion_reactor_frame' },
            { item: 'mekanismgenerators:fusion_reactor_frame' },
            { item: 'mekaevolution:cosmic_control_circuit' },
            { item: 'mekaevolution:cosmic_control_circuit' },
            { item: 'mekanism:ultimate_chemical_tank' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'industrialforegoing:machine_frame_supreme' },
          total_energy: 100000000,
          result: { item: 'mekanismgenerators:fusion_reactor_controller' },
          id: 'mekanismgenerators:reactor/controller'
      },
      {
          inputs: [
            { item: 'mekanism:hdpe_sheet' },
            { item: 'mekanism:hdpe_sheet' },
            { item: 'mekanism:hdpe_sheet' },
            { item: 'mekanism:hdpe_sheet' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'mekanism:pellet_polonium' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'draconicevolution:draconium_core' },
          total_energy: 20000,
          result: { item: 'draconicevolution:module_core' },
          id: 'draconicevolution:modules/module_core'
      },
      {
          inputs: [
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_core' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'chroma:void_miner_frame_tier2' },
          total_energy: 10000,
          result: { item: 'chroma:void_miner_frame_tier3' },
          id: `${id_prefix}void_miner_frame_tier3`
      },
      {
          inputs: [
            { item: 'extendedcrafting:ultimate_component' },
            { item: 'extendedcrafting:ultimate_component' },
            { item: 'extendedcrafting:ultimate_component' },
            { item: 'extendedcrafting:ultimate_component' },
            { item: 'extendedcrafting:ultimate_catalyst' },
            { item: 'chemlib:cesium_metal_block' },
            { item: 'chroma:cosmic_alloy' },
            { item: 'chroma:cosmic_alloy' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'extendedcrafting:elite_table', count: 2 },
          total_energy: 300000,
          result: { item: 'extendedcrafting:ultimate_table' },
          id: 'extendedcrafting:ultimate_table'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:awakened_core' },
            { item: 'draconicevolution:awakened_draconium_block' },
            { item: 'mekaevolution:infinite_control_circuit' },
            { item: 'extendedcrafting:crystaltine_ingot' },
            { item: 'extendedcrafting:crystaltine_ingot' },
            { item: 'extendedcrafting:crystaltine_ingot' },
            { item: 'extendedcrafting:crystaltine_ingot' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'draconicevolution:wyvern_crafting_injector', count: 1 },
          total_energy: 256000,
          result: { item: 'draconicevolution:awakened_crafting_injector' },
          id: 'draconicevolution:awakened_crafting_injector'
      },
      {
          inputs: [
            { item: 'draconicevolution:awakened_core' },
            { item: 'draconicevolution:awakened_core' },
            { item: 'draconicevolution:chaotic_core' },
            { item: 'minecraft:dragon_egg' },
            { item: 'mekanism:pellet_antimatter' },
            { item: 'draconicevolution:large_chaos_frag' },
            { item: 'draconicevolution:large_chaos_frag' },
            { item: 'draconicevolution:large_chaos_frag' },
            { item: 'draconicevolution:large_chaos_frag' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'draconicevolution:awakened_crafting_injector', count: 1 },
          total_energy: 8000000,
          result: { item: 'draconicevolution:chaotic_crafting_injector' },
          id: 'draconicevolution:chaotic_crafting_injector'
      },
      {
          inputs: [
            { item: 'draconicevolution:dragon_heart' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'chroma:eternal_cryostella_polaris' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'draconicevolution:draconium_block', count: 4 },
          total_energy: 50000000,
          result: { item: 'draconicevolution:awakened_draconium_block', count: 4 },
          id: 'draconicevolution:awakened_draconium_block'
      },
      {
          inputs: [
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'mekaevolution:infinite_control_circuit' },
            { item: 'draconicevolution:awakened_draconium_ingot' },
            { item: 'draconicevolution:awakened_draconium_ingot' },
            { item: 'draconicevolution:awakened_draconium_ingot' },
            { item: 'draconicevolution:awakened_draconium_ingot' }
          ],
          tier: "DRACONIC",
          catalyst: { item: 'draconicevolution:wyvern_core', count: 1 },
          total_energy: 1000000,
          result: { item: 'draconicevolution:draconic_energy_core', count: 1 },
          id: 'draconicevolution:components/draconic_energy_core'
      },
      {
          inputs: [
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'mekaevolution:infinite_control_circuit' },
            { item: 'draconicevolution:medium_chaos_frag' },
            { item: 'draconicevolution:medium_chaos_frag' },
            { item: 'draconicevolution:medium_chaos_frag' },
            { item: 'draconicevolution:medium_chaos_frag' }
          ],
          tier: "CHAOTIC",
          catalyst: { item: 'draconicevolution:awakened_core', count: 1 },
          total_energy: 10000000,
          result: { item: 'draconicevolution:chaotic_energy_core', count: 1 },
          id: 'draconicevolution:components/chaotic_energy_core'
      },
      {
          inputs: [
            Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:ender_dragon"}}').weakNBT().toJson(),
            Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:ender_dragon"}}').weakNBT().toJson(),
            { item: 'forbidden_arcanus:golden_dragon_scale' },
            { item: 'forbidden_arcanus:golden_dragon_scale' },
            { item: 'draconicevolution:chaotic_core' },
            { item: 'draconicevolution:dragon_heart' },
            { item: 'minecraft:dragon_head' },
            { item: 'draconicevolution:chaos_shard' }
          ],
          tier: "CHAOTIC",
          catalyst: { item: 'hostilenetworks:blank_data_model', count: 1 },
          total_energy: 100000000,
          result: Item.of('hostilenetworks:data_model', '{data_model:{data:6,id:"hostilenetworks:draconic_guardian"}}'),
          id: `${id_prefix}draconic_guardian_data_model`
      },
      {
          inputs: [
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'chroma:mixed_tier_4_essence' },
            { item: 'chroma:mixed_tier_4_essence' },
            { item: 'chroma:mixed_tier_4_essence' },
            { item: 'chroma:mixed_tier_4_essence' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'chroma:imperium_seed_base', count: 1 },
          total_energy: 20000,
          result: { item: 'chroma:supremium_seed_base', count: 1 },
          id: `${id_prefix}supremium_seed_base`
      },
      {
          inputs: [
            { item: 'chroma:accelerator_frame' },
            { item: 'chroma:accelerator_frame' },
            { item: 'chroma:accelerator_frame' },
            { item: 'chroma:accelerator_frame' },
            { item: 'draconicevolution:chaotic_core' },
            { item: 'mekanism:pellet_antimatter' },
            { item: 'mekanism:pellet_antimatter' },
            { item: 'mekanism:pellet_antimatter' },
            { item: 'mekanism:pellet_antimatter' }
          ],
          tier: "CHAOTIC",
          catalyst: { item: 'computercraft:computer_advanced', count: 1 },
          total_energy: 16000000,
          result: { item: 'chroma:particle_accelerator', count: 1 },
          id: `${id_prefix}particle_accelerator`
      },
      {
          inputs: [
            { item: 'mekanism:pellet_antimatter' },
            { item: 'mekanism:pellet_antimatter' },
            { item: 'draconicevolution:chaotic_energy_core' },
            { item: 'draconicevolution:chaotic_energy_core' },
            { item: 'mysticalagradditions:insanium_ingot' },
            { item: 'mysticalagradditions:insanium_ingot' },
            { item: 'mysticalagradditions:insanium_ingot' },
            { item: 'mysticalagradditions:insanium_ingot' }
          ],
          tier: "CHAOTIC",
          catalyst: Item.of('solarpanels:photonic_energy_tablet').weakNBT(),
          total_energy: 8000000,
          result: { item: 'solarpanels:creative_energy_tablet', count: 1 },
          id: 'solarpanels:creative_energy_tablet'
      },
      {
          inputs: [
            { item: 'tconstruct:queens_slime_block' },
            { item: 'tconstruct:queens_slime_block' },
            { item: 'tconstruct:queens_slime_block' },
            { item: 'tconstruct:queens_slime_block' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'chroma:supremium_seed_base' },
          total_energy: 200000,
          result: { item: 'mysticalagriculture:queens_slime_seeds', count: 1 },
          id: 'mysticalagriculture:seed/infusion/queens_slime'
      },
      {
          inputs: [
            { item: 'minecraft:netherite_block' },
            { item: 'minecraft:netherite_block' },
            { item: 'minecraft:netherite_block' },
            { item: 'minecraft:netherite_block' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'chroma:supremium_seed_base' },
          total_energy: 200000,
          result: { item: 'mysticalagriculture:netherite_seeds', count: 1 },
          id: 'mysticalagriculture:seed/infusion/netherite'
      },
      {
          inputs: [
            { item: 'tconstruct:manyullyn_block' },
            { item: 'tconstruct:manyullyn_block' },
            { item: 'tconstruct:manyullyn_block' },
            { item: 'tconstruct:manyullyn_block' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'chroma:supremium_seed_base' },
          total_energy: 200000,
          result: { item: 'mysticalagriculture:manyullyn_seeds', count: 1 },
          id: 'mysticalagriculture:seed/infusion/manyullyn'
      },
      {
          inputs: [
            { item: 'thermal:enderium_block' },
            { item: 'thermal:enderium_block' },
            { item: 'thermal:enderium_block' },
            { item: 'thermal:enderium_block' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' },
            { item: 'mysticalagriculture:supremium_essence' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'chroma:supremium_seed_base' },
          total_energy: 200000,
          result: { item: 'mysticalagriculture:enderium_seeds', count: 1 },
          id: 'mysticalagriculture:seed/infusion/enderium'
      },
      {
          inputs: [
            { item: 'draconicevolution:awakened_draconium_block' },
            { item: 'draconicevolution:awakened_draconium_block' },
            { item: 'draconicevolution:awakened_draconium_block' },
            { item: 'draconicevolution:awakened_draconium_block' },
            { item: 'draconicevolution:awakened_draconium_block' },
            { item: 'draconicevolution:awakened_draconium_block' },
            { item: 'draconicevolution:awakened_draconium_block' },
            { item: 'draconicevolution:awakened_draconium_block' },
            { item: 'mysticalagradditions:insanium_essence' },
            { item: 'mysticalagradditions:insanium_essence' },
            { item: 'mysticalagradditions:insanium_essence' },
            { item: 'mysticalagradditions:insanium_essence' },
            { item: 'mysticalagradditions:insanium_essence' },
            { item: 'mysticalagradditions:insanium_essence' },
            { item: 'mysticalagradditions:insanium_essence' },
            { item: 'mysticalagradditions:insanium_essence' },
            { item: 'draconicevolution:dragon_heart' },
            { item: 'draconicevolution:dragon_heart' },
            { item: 'chroma:eternal_cryostella_polaris' },
            { item: 'chroma:eternal_cryostella_polaris' }
          ],
          tier: "DRACONIC",
          catalyst: { item: 'chroma:insanium_seed_base' },
          total_energy: 100000000,
          result: { item: 'mysticalagriculture:awakened_draconium_seeds', count: 1 },
          id: 'mysticalagriculture:seed/infusion/awakened_draconium'
      },
      {
          inputs: [
            { item: 'draconicevolution:draconium_block' },
            { item: 'draconicevolution:draconium_block' },
            { item: 'draconicevolution:draconium_block' },
            { item: 'draconicevolution:draconium_block' },
            { item: 'mysticalagradditions:insanium_essence' },
            { item: 'mysticalagradditions:insanium_essence' },
            { item: 'mysticalagradditions:insanium_essence' },
            { item: 'mysticalagradditions:insanium_essence' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'chroma:insanium_seed_base' },
          total_energy: 10000000,
          result: { item: 'mysticalagriculture:draconium_seeds', count: 1 },
          id: 'mysticalagriculture:seed/infusion/draconium'
      },
    ];

    recipes.forEach((recipe) => {
        let ingredient = [];
        recipe.inputs.forEach((input) => {
            ingredient.push(input);
        });

        event
            .custom({
                type: 'draconicevolution:fusion_crafting',
                tier: recipe.tier,
                catalyst: recipe.catalyst,
                total_energy: recipe.total_energy,
                ingredients: ingredient,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
