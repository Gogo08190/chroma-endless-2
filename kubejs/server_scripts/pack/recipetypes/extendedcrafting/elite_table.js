onEvent("recipes", (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/table/';

    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "ABCDCBA",
              "BEFGFEB",
              "CFHIHFC",
              "JKLMNKJ",
              "CFHOHFC",
              "BEFPFEB",
              "ABCQCBA"
            ],
            "key": {
              "A": {
                "item": "mekanism:ultimate_control_circuit"
              },
              "B": {
                "item": "immersiveengineering:ingot_steel"
              },
              "C": {
                "item": "mekanism:hdpe_sheet"
              },
              "D": {
                "item": "mekanism:personal_chest"
              },
              "E": {
                "item": "mekanism:teleportation_core"
              },
              "F": {
                "item": "mekanism:alloy_atomic"
              },
              "G": {
                "item": "rftoolsbase:infused_diamond"
              },
              "H": {
                "item": "mekanism:logistical_sorter"
              },
              "I": {
                "item": "mekanism:robit"
              },
              "J": {
                "item": "solarpanels:improved_energy_tablet"
              },
              "K": {
                "item": "rftoolsbase:infused_enderpearl"
              },
              "L": {
                "item": "scannable:common_ores_module"
              },
              "M": {
                "item": "chroma:miner_core"
              },
              "N": {
                "item": "scannable:rare_ores_module"
              },
              "O": {
                "item": "scannable:block_module"
              },
              "P": {
                "item": "mna:transitory_tunnel"
              },
              "Q": {
                "item": "mekanism:steel_casing"
              }
            },
            "result": {
              "item": "mekanism:digital_miner"
            }
          }
    ).id('mekanism:digital_miner')
  });