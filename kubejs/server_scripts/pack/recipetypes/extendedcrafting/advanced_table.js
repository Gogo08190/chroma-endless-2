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

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " ABA ",
        "ACDCA",
        "  E  ",
        "  E  ",
        "  E  "
      ],
      "key": {
        "A": {
          "item": "doom:argent_plate"
        },
        "B": {
          "item": "undergarden:regalium_block"
        },
        "C": {
          "item": "solarpanels:improved_energy_tablet"
        },
        "D": {
          "item": "mekanism:alloy_atomic"
        },
        "E": {
          "item": "mekanism:hdpe_stick"
        }
      },
      "result": {
        "item": "mekaevolution:plasma_pickaxe"
      }
    }
  ).id('mekaevolution:plasma_pickaxe')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAA",
        "ABCBA",
        "ACDCA",
        "ABCBA",
        "AAAAA"
      ],
      "key": {
        "A": {
          "item": "mekanism:thermal_evaporation_block"
        },
        "B": {
          "item": "powah:thermoelectric_plate"
        },
        "C": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "D": {
          "item": "mekanism:elite_fluid_tank"
        }
      },
      "result": {
        "item": "mekanism:thermal_evaporation_controller"
      }
    }
  ).id('mekanism:thermal_evaporation/controller')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FEGEF",
        "BHEHB",
        "ABIBA"
      ],
      "key": {
        "A": {
          "item": "beyond_earth:compressed_desh"
        },
        "B": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "C": {
          "item": "ae2:charger"
        },
        "D": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "E": {
          "item": "lazierae2:logic_unit"
        },
        "F": {
          "item": "lazierae2:parallel_processor"
        },
        "G": {
          "item": "industrialforegoing:machine_frame_simple"
        },
        "H": {
          "item": "ae2:dense_energy_cell"
        },
        "I": {
          "item": "lazierae2:growth_core"
        }
      },
      "result": {
        "item": "lazierae2:aggregator"
      }
    }
  ).id('lazierae2:aggregator')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FEGEH",
        "BDIDB",
        "ABJBA"
      ],
      "key": {
        "A": {
          "item": "beyond_earth:compressed_desh"
        },
        "B": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "C": {
          "item": "ae2:logic_processor"
        },
        "D": {
          "item": "lazierae2:logic_unit"
        },
        "E": {
          "item": "ae2:inscriber"
        },
        "F": {
          "item": "ae2:calculation_processor"
        },
        "G": {
          "item": "industrialforegoing:machine_frame_simple"
        },
        "H": {
          "item": "ae2:engineering_processor"
        },
        "I": {
          "item": "lazierae2:universal_press"
        },
        "J": {
          "item": "lazierae2:parallel_processor"
        }
      },
      "result": {
        "item": "lazierae2:etcher"
      }
    }
  ).id('lazierae2:etcher')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CFGFC",
        "BDEDB",
        "ABHBA"
      ],
      "key": {
        "A": {
          "item": "beyond_earth:compressed_desh"
        },
        "B": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "C": {
          "item": "minecraft:amethyst_shard"
        },
        "D": {
          "item": "lazierae2:logic_unit"
        },
        "E": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "F": {
          "item": "lazierae2:parallel_processor"
        },
        "G": {
          "item": "industrialforegoing:machine_frame_simple"
        },
        "H": {
          "item": "mekanism:crusher"
        }
      },
      "result": {
        "item": "lazierae2:grinder"
      }
    }
  ).id('lazierae2:grinder')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CEFEC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "chroma:supra_catalyst"
        },
        "B": {
          "item": "pneumaticcraft:printed_circuit_board"
        },
        "C": {
          "item": "mekanism:elite_control_circuit"
        },
        "D": {
          "item": "undergarden:utherium_block"
        },
        "E": {
          "item": "create:mechanical_crafter"
        },
        "F": {
          "item": "extendedcrafting:frame"
        }
      },
      "result": {
        "item": "extendedcrafting:crafting_core"
      }
    }
  ).id('extendedcrafting:crafting_core')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CEFEC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "chroma:supra_catalyst"
        },
        "B": {
          "item": "pneumaticcraft:printed_circuit_board"
        },
        "C": {
          "item": "mekanism:elite_control_circuit"
        },
        "D": {
          "item": "undergarden:utherium_block"
        },
        "E": {
          "item": "ae2:singularity"
        },
        "F": {
          "item": "extendedcrafting:frame"
        }
      },
      "result": {
        "item": "extendedcrafting:compressor"
      }
    }
  ).id('extendedcrafting:compressor')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDEA",
        "FGDGF",
        "AEDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "biggerreactors:reactor_casing"
        },
        "B": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "C": {
          "item": "powah:niotic_crystal_block"
        },
        "D": {
          "item": "biggerreactors:reactor_fuel_rod"
        },
        "E": {
          "item": "extendedcrafting:redstone_ingot_block"
        },
        "F": {
          "item": "minecraft:piston"
        },
        "G": {
          "item": "pneumaticcraft:module_expansion_card"
        }
      },
      "result": {
        "item": "biggerreactors:cyanite_reprocessor"
      }
    }
  ).id('biggerreactors:crafting/cyanite_reprocessor')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CEFEC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "beyond_earth:compressed_desh"
        },
        "B": {
          "item": "mekanism:hdpe_sheet"
        },
        "C": {
          "item": "solarpanels:spectral_energy_tablet"
        },
        "D": {
          "item": "mekaevolution:absolute_control_circuit"
        },
        "E": {
          "item": "chroma:absolute_alloy"
        },
        "F": {
          "item": "mekanism:ultimate_energy_cube"
        }
      },
      "result": {
        "item": "mekaevolution:absolute_energy_cube"
      }
    }
  ).id('mekaevolution:absolute_energy_cube')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBA",
        "BCDCB",
        "EFGHI",
        "BCDCB",
        "ABBBA"
      ],
      "key": {
        "A": {
          "item": "beyond_earth:wheel"
        },
        "B": {
          "item": "jaopca:beyond_earth_compresseds.tungsten"
        },
        "C": {
          "type": "forge:nbt",
          "item": "mekanism:hdpe_sheet",
          "count": 1,
          "nbt": "{display:{Name:\u0027{\"text\":\"Carbon sheet\"}\u0027}}"
        },
        "D": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "E": {
          "item": "xnet:antenna_dish"
        },
        "F": {
          "item": "mekanism:elite_fluid_tank"
        },
        "G": {
          "item": "create:white_seat"
        },
        "H": {
          "item": "mekanism:personal_barrel"
        },
        "I": {
          "item": "industrialforegoing:machine_frame_simple"
        }
      },
      "result": {
        "item": "beyond_earth:rover"
      }
    }
  ).id('beyond_earth:rover')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "lazierae2:parallel_processor"
        },
        "B": {
          "item": "chroma:nebula_frame"
        },
        "C": {
          "item": "chroma:supra_catalyst"
        },
        "D": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "E": {
          "item": "biggerreactors:ludicrite_block"
        },
        "F": {
          "item": "powah:energy_cell_niotic"
        },
        "G": {
          "item": "lazierae2:logic_unit"
        },
        "H": {
          "item": "industrialforegoing:machine_frame_simple"
        }
      },
      "result": {
        "item": "chroma:nebula_extractor_tier_1"
      }
    }
  ).id(`${id_prefix}nebula_extractor_tier_1`)
});
