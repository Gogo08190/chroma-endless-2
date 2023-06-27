onEvent("recipes", (event) => {
  const id_prefix = 'chroma:pack/extendedcrafting/table/';

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CFGFC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "chroma:dielectric_paste_block"
        },
        "B": {
          "item": "ae2:smooth_sky_stone_block"
        },
        "C": {
          "item": "powah:capacitor_hardened"
        },
        "D": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "E": {
          "item": "pneumaticcraft:transistor"
        },
        "F": {
          "item": "pneumaticcraft:capacitor"
        },
        "G": {
          "item": "mekanism:alloy_reinforced"
        }
      },
      "result": {
        "item": "ae2:controller"
      }
    }
  ).id('ae2:network/blocks/controller')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FEGEF",
        "BDEDB",
        "ABHBA"
      ],
      "key": {
        "A": {
          "item": "powah:capacitor_hardened"
        },
        "B": {
          "item": "pneumaticcraft:compressed_bricks"
        },
        "C": {
          "type": "forge:nbt",
          "item": "thermal:flux_drill",
          "count": 1,
          "nbt": "{Energy:28080}"
        },
        "D": {
          "item": "mekanism:alloy_reinforced"
        },
        "E": {
          "item": "mekanism:elite_control_circuit"
        },
        "F": {
          "item": "pneumaticcraft:transistor"
        },
        "G": {
          "item": "rftoolsbase:machine_frame"
        },
        "H": {
          "type": "forge:nbt",
          "item": "thermal:flux_saw",
          "count": 1,
          "nbt": "{Energy:33000}"
        }
      },
      "result": {
        "item": "rftoolsbuilder:builder"
      }
    }
  ).id('rftoolsbuilder:builder')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDA",
        "EFGFH",
        "IGJGI",
        "KFGFL",
        "AMNOA"
      ],
      "key": {
        "A": {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        "B": {
          "item": "minecraft:bone"
        },
        "C": {
          "item": "pneumaticcraft:spawner_extractor"
        },
        "D": {
          "item": "minecraft:ghast_tear"
        },
        "E": {
          "item": "minecraft:rotten_flesh"
        },
        "F": {
          "item": "rftoolsbase:infused_diamond"
        },
        "G": {
          "item": "mekanism:elite_control_circuit"
        },
        "H": {
          "item": "minecraft:blaze_rod"
        },
        "I": {
          "item": "rftoolsbase:infused_enderpearl"
        },
        "J": {
          "item": "rftoolsbase:machine_frame"
        },
        "K": {
          "item": "minecraft:shulker_shell"
        },
        "L": {
          "item": "minecraft:wither_skeleton_skull"
        },
        "M": {
          "item": "minecraft:ender_pearl"
        },
        "N": {
          "item": "solarpanels:improved_energy_tablet"
        },
        "O": {
          "item": "minecraft:phantom_membrane"
        }
      },
      "result": {
        "item": "rftoolsutility:spawner"
      }
    }
  ).id('rftoolsutility:spawner')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CFGHC",
        "IDJDI",
        "AIKIA"
      ],
      "key": {
        "A": {
          "item": "mna:decoration/transmuted_silver_block"
        },
        "B": {
          "item": "mna:decoration/vinteum_arcane_stone"
        },
        "C": {
          "item": "rftoolsbase:infused_diamond"
        },
        "D": {
          "item": "botania:gaia_ingot"
        },
        "E": {
          "item": "botania:rune_air"
        },
        "F": {
          "item": "botania:rune_fire"
        },
        "G": {
          "item": "rftoolsbase:machine_frame"
        },
        "H": {
          "item": "botania:rune_earth"
        },
        "I": {
          "item": "mna:decoration/redstone_arcane_stone"
        },
        "J": {
          "item": "botania:rune_water"
        },
        "K": {
          "item": "solarpanels:improved_energy_tablet"
        }
      },
      "result": {
        "item": "rftoolsutility:environmental_controller"
      }
    }
  ).id('rftoolsutility:environmental_controller')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDDDB",
        "EDFDE",
        "BDDDB",
        "ABGBA"
      ],
      "key": {
        "A": {
          "item": "ae2:matter_ball"
        },
        "B": {
          "item": "industrialforegoing:plastic"
        },
        "C": {
          "item": "industrialforegoing:common_black_hole_tank"
        },
        "D": {
          "item": "create:mechanical_crafter"
        },
        "E": {
          "item": "mekanism:elite_control_circuit"
        },
        "F": {
          "item": "industrialforegoing:machine_frame_pity"
        },
        "G": {
          "item": "solarpanels:improved_energy_tablet"
        }
      },
      "result": {
        "item": "industrialforegoing:dissolution_chamber"
      }
    }
  ).id("industrialforegoing:dissolution_chamber")
  
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "CDEDA",
        "FEGEH",
        "CDEDA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        "B": {
          "item": "solarpanels:improved_energy_tablet"
        },
        "C": {
          "item": "pneumaticcraft:heat_sink"
        },
        "D": {
          "item": "pneumaticcraft:printed_circuit_board"
        },
        "E": {
          "item": "pneumaticcraft:compressed_iron_gear"
        },
        "F": {
          "item": "mekanism:alloy_reinforced"
        },
        "G": {
          "item": "pneumaticcraft:turbine_rotor"
        },
        "H": {
          "item": "pneumaticcraft:advanced_pressure_tube"
        }
      },
      "result": {
        "item": "pneumaticcraft:flux_compressor"
      }
    }
  ).id('pneumaticcraft:flux_compressor')
});
