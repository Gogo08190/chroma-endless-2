onEvent("recipes", (event) => {
  const id_prefix = 'chroma:pack/extendedcrafting/table/';

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " A ",
        " B ",
        "BCB"
      ],
      "key": {
        "A": {
          "item": "minecraft:ender_eye"
        },
        "B": {
          "item": "extendedcrafting:ender_ingot"
        },
        "C": {
          "item": "mna:superheated_purified_vinteum_ingot"
        }
      },
      "result": {
        "item": "extendedcrafting:ender_alternator"
      }
    }
  ).id('extendedcrafting:ender_alternator')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:luminessence"
        },
        "B": {
          "item": "ae2:calculation_processor"
        },
        "C": {
          "item": "ae2:cell_component_16k"
        },
        "D": {
          "item": "powah:capacitor_hardened"
        }
      },
      "result": {
        "item": "ae2:cell_component_64k"
      }
    }
  ).id('ae2:network/cells/item_storage_components_cell_64k_part')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "BCB",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "powah:capacitor_niotic"
        },
        "B": {
          "item": "ae2:spatial_cell_component_16"
        },
        "C": {
          "item": "ae2:engineering_processor"
        }
      },
      "result": {
        "item": "ae2:spatial_cell_component_128"
      }
    }
  ).id('ae2:network/cells/spatial_components_1')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "EFE"
      ],
      "key": {
        "A": {
          "item": "chemlib:chromium_ingot"
        },
        "B": {
          "item": "mekanism:alloy_reinforced"
        },
        "C": {
          "item": "mekanism:basic_fluid_tank"
        },
        "D": {
          "item": "thermal:redstone_servo"
        },
        "E": {
          "item": "immersiveengineering:storage_steel"
        },
        "F": {
          "item": "thermal:machine_frame"
        }
      },
      "result": {
        "item": "alchemistry:atomizer"
      }
    }
  ).id('alchemistry:atomizer')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "EFE"
      ],
      "key": {
        "A": {
          "item": "create:mechanical_press"
        },
        "B": {
          "item": "mekanism:alloy_reinforced"
        },
        "C": {
          "item": "extendedcrafting:advanced_catalyst"
        },
        "D": {
          "item": "thermal:redstone_servo"
        },
        "E": {
          "item": "immersiveengineering:storage_steel"
        },
        "F": {
          "item": "thermal:machine_frame"
        }
      },
      "result": {
        "item": "alchemistry:compactor"
      }
    }
  ).id('alchemistry:compactor')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "EFE"
      ],
      "key": {
        "A": {
          "item": "chroma:mana_diamond_plate"
        },
        "B": {
          "item": "mekanism:alloy_reinforced"
        },
        "C": {
          "item": "extendedcrafting:luminessence"
        },
        "D": {
          "item": "extendedcrafting:redstone_catalyst"
        },
        "E": {
          "item": "immersiveengineering:storage_steel"
        },
        "F": {
          "item": "thermal:machine_frame"
        }
      },
      "result": {
        "item": "alchemistry:combiner"
      }
    }
  ).id('alchemistry:combiner')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "EFE"
      ],
      "key": {
        "A": {
          "item": "immersiveengineering:storage_steel"
        },
        "B": {
          "item": "mekanism:alloy_reinforced"
        },
        "C": {
          "item": "pneumaticcraft:plastic_bucket"
        },
        "D": {
          "item": "extendedcrafting:ender_star"
        },
        "E": {
          "item": "chroma:mana_diamond_plate"
        },
        "F": {
          "item": "thermal:machine_frame"
        }
      },
      "result": {
        "item": "alchemistry:dissolver"
      }
    }
  ).id('alchemistry:dissolver')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "EFE"
      ],
      "key": {
        "A": {
          "item": "immersiveengineering:furnace_heater"
        },
        "B": {
          "item": "mekanism:ingot_refined_glowstone"
        },
        "C": {
          "item": "mekanism:basic_fluid_tank"
        },
        "D": {
          "item": "mekanism:electrolytic_core"
        },
        "E": {
          "item": "immersiveengineering:storage_steel"
        },
        "F": {
          "item": "thermal:machine_frame"
        }
      },
      "result": {
        "item": "alchemistry:liquifier"
      }
    }
  ).id('alchemistry:liquifier')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "AEA"
      ],
      "key": {
        "A": {
          "item": "chroma:resin_plate"
        },
        "B": {
          "item": "pneumaticcraft:gps_tool"
        },
        "C": {
          "item": "mekanism:elite_control_circuit"
        },
        "D": {
          "item": "extendedcrafting:ender_star"
        },
        "E": {
          "item": "pneumaticcraft:air_canister"
        }
      },
      "result": {
        "item": "pneumaticcraft:amadron_tablet"
      }
    }
  ).id('pneumaticcraft:amadron_tablet')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "EFE"
      ],
      "key": {
        "A": {
          "item": "powah:steel_energized"
        },
        "B": {
          "item": "mekanism:elite_control_circuit"
        },
        "C": {
          "item": "pneumaticcraft:reinforced_brick_wall"
        },
        "D": {
          "item": "pneumaticcraft:small_tank"
        },
        "E": {
          "item": "pneumaticcraft:reinforced_brick_slab"
        },
        "F": {
          "item": "pneumaticcraft:heat_sink"
        }
      },
      "result": {
        "item": "pneumaticcraft:etching_tank"
      }
    }
  ).id('pneumaticcraft:etching_tank')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDE",
        "AFA"
      ],
      "key": {
        "A": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "B": {
          "item": "ae2:silicon_press"
        },
        "C": {
          "item": "ae2:calculation_processor_press"
        },
        "D": {
          "item": "ae2:singularity"
        },
        "E": {
          "item": "ae2:logic_processor_press"
        },
        "F": {
          "item": "ae2:engineering_processor_press"
        }
      },
      "result": {
        "item": "lazierae2:universal_press"
      }
    }
  ).id('lazierae2:universal_press')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDE",
        "FGF"
      ],
      "key": {
        "A": {
          "item": "minecraft:polished_blackstone"
        },
        "B": {
          "item": "upgradednetherite:corrupt_upgraded_netherite_ingot"
        },
        "C": {
          "item": "hostilenetworks:overworld_prediction"
        },
        "D": {
          "item": "industrialforegoing:machine_frame_advanced"
        },
        "E": {
          "item": "hostilenetworks:end_prediction"
        },
        "F": {
          "item": "solarpanels:spectral_energy_tablet"
        },
        "G": {
          "item": "hostilenetworks:nether_prediction"
        }
      },
      "result": {
        "item": "hostilenetworks:loot_fabricator"
      }
    }
  ).id('hostilenetworks:loot_fabricator')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "AEA"
      ],
      "key": {
        "A": {
          "item": "mekanism:hdpe_sheet"
        },
        "B": {
          "item": "industrialforegoing:pink_slime_ingot"
        },
        "C": {
          "item": "mekaevolution:absolute_control_circuit"
        },
        "D": {
          "item": "industrialforegoing:pity_black_hole_tank"
        },
        "E": {
          "item": "industrialforegoing:machine_frame_simple"
        }
      },
      "result": {
        "item": "industrialforegoing:simple_black_hole_tank"
      }
    }
  ).id('industrialforegoing:simple_black_hole_tank')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "AEA"
      ],
      "key": {
        "A": {
          "item": "powah:crystal_spirited"
        },
        "B": {
          "item": "mekanism:pellet_polonium"
        },
        "C": {
          "item": "mekaevolution:absolute_control_circuit"
        },
        "D": {
          "item": "industrialforegoing:simple_black_hole_tank"
        },
        "E": {
          "item": "industrialforegoing:machine_frame_advanced"
        }
      },
      "result": {
        "item": "industrialforegoing:advanced_black_hole_tank"
      }
    }
  ).id('industrialforegoing:advanced_black_hole_tank')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "AEA"
      ],
      "key": {
        "A": {
          "item": "mekanism:hdpe_sheet"
        },
        "B": {
          "item": "industrialforegoing:pink_slime_ingot"
        },
        "C": {
          "item": "mekaevolution:absolute_control_circuit"
        },
        "D": {
          "item": "industrialforegoing:simple_black_hole_unit"
        },
        "E": {
          "item": "industrialforegoing:machine_frame_advanced"
        }
      },
      "result": {
        "item": "industrialforegoing:advanced_black_hole_unit"
      }
    }
  ).id('industrialforegoing:advanced_black_hole_unit')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "AEA"
      ],
      "key": {
        "A": {
          "item": "mekanism:hdpe_sheet"
        },
        "B": {
          "item": "industrialforegoing:pink_slime_ingot"
        },
        "C": {
          "item": "mekaevolution:absolute_control_circuit"
        },
        "D": {
          "item": "mob_grinding_utils:tank"
        },
        "E": {
          "item": "industrialforegoing:machine_frame_simple"
        }
      },
      "result": {
        "item": "mob_grinding_utils:jumbo_tank"
      }
    }
  ).id('mob_grinding_utils:recipe_jumbotank')
});
