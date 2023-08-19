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

    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAAAA",
          "ABCDCBA",
          "AECFCEA",
          "AGCCCGA",
          "AHIIIHA",
          "JKILIKJ",
          "JJIMIJJ"
        ],
        "key": {
          "A": {
            "item": "doom:argent_energy"
          },
          "B": {
            "item": "doom:doom_helmet",
          },
          "C": {
            "item": "biggerreactors:blutonium_block"
          },
          "D": {
            "item": "immersiveengineering:revolver",
          },
          "E": {
            "item": "doom:doom_chestplate",
          },
          "F": {
            "item": "doom:rocket"
          },
          "G": {
            "item": "doom:doom_leggings",
          },
          "H": {
            "item": "doom:doom_boots",
          },
          "I": {
            "item": "doom:argent_plate"
          },
          "J": {
            "item": "mekanism:induction_casing"
          },
          "K": {
            "item": "mekanism:teleportation_core"
          },
          "L": {
            "item": "chroma:gun_table_heart"
          },
          "M": {
            "item": "mekaevolution:absolute_control_circuit"
          }
        },
        "result": {
          "item": "doom:gun_table"
        }
      }
    ).id('doom:gun_table')

    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "  A A  ",
          " AA AA ",
          " AA AA ",
          " AB BA ",
          " AB BA ",
          " AB BA ",
          "BBB BBB"
        ],
        "key": {
          "A": {
            "item": "doom:argent_energy"
          },
          "B": {
            "item": "doom:argent_plate"
          }
        },
        "result": {
          "item": "doom:doom_boots"
        }
      }
    ).id('doom:doom_boots')

    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAAAA",
          "AAAAAAA",
          "AABBBAA",
          "AAB BAA",
          "AAB BAA",
          "AAB BAA",
          "AAB BAA"
        ],
        "key": {
          "A": {
            "item": "doom:argent_plate"
          },
          "B": {
            "item": "doom:argent_energy"
          }
        },
        "result": {
          "item": "doom:doom_leggings"
        }
      }
    ).id('doom:doom_leggings')

    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AABBBAA",
          "AABBBAA",
          " ABBBA ",
          " ABBBA ",
          " ABBBA ",
          " ABBBA ",
          " AAAAA "
        ],
        "key": {
          "A": {
            "item": "doom:argent_plate"
          },
          "B": {
            "item": "doom:argent_energy"
          }
        },
        "result": {
          "item": "doom:doom_chestplate"
        }
      }
    ).id('doom:doom_chestplate')

    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAAAA",
          "ABBBBBA",
          "ABBBBBA",
          "AB   BA",
          "       ",
          "       ",
          "       "
        ],
        "key": {
          "A": {
            "item": "doom:argent_plate"
          },
          "B": {
            "item": "doom:argent_energy"
          }
        },
        "result": {
          "item": "doom:doom_helmet"
        }
      }
    ).id('doom:doom_helmet')

    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "  A A  ",
          " AA AA ",
          " AA AA ",
          " AB BA ",
          " AB BA ",
          " AB BA ",
          "BBB BBB"
        ],
        "key": {
          "A": {
            "item": "doom:argent_plate"
          },
          "B": {
            "item": "doom:argent_energy"
          }
        },
        "result": {
          "item": "doom:praetor_doom_boots"
        }
      }
    ).id('doom:praetor_doom_boots')

    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAAAA",
          "AAAAAAA",
          "AABBBAA",
          "AAB BAA",
          "AAB BAA",
          "AAB BAA",
          "AAB BAA"
        ],
        "key": {
          "A": {
            "item": "doom:argent_energy"
          },
          "B": {
            "item": "doom:argent_plate"
          }
        },
        "result": {
          "item": "doom:praetor_doom_leggings"
        }
      }
    ).id('doom:praetor_doom_leggings')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAB BAA",
        "AABBBAA",
        " ABBBA ",
        " ABBBA ",
        " ABBBA ",
        " ABBBA ",
        " AAAAA "
      ],
      "key": {
        "A": {
          "item": "doom:argent_energy"
        },
        "B": {
          "item": "doom:argent_plate"
        }
      },
      "result": {
        "item": "doom:praetor_doom_chestplate"
      }
    }
  ).id('doom:praetor_doom_chestplate')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAAAA",
        "ABBBBBA",
        "ABBBBBA",
        "AB   BA",
        "       ",
        "       ",
        "       "
      ],
      "key": {
        "A": {
          "item": "doom:argent_energy"
        },
        "B": {
          "item": "doom:argent_plate"
        }
      },
      "result": {
        "item": "doom:praetor_doom_helmet"
      }
    }
  ).id('doom:praetor_doom_helmet')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDCBA",
        "BEFGFEB",
        "CFGHGFC",
        "DGHIHGD",
        "CFGHGFC",
        "BEFGFEB",
        "ABCDCBA"
      ],
      "key": {
        "A": {
          "item": "powah:reactor_niotic"
        },
        "B": {
          "item": "powah:capacitor_spirited"
        },
        "C": {
          "item": "chroma:dielectric_paste_block"
        },
        "D": {
          "item": "mekaevolution:absolute_control_circuit"
        },
        "E": {
          "item": "chemlib:radon"
        },
        "F": {
          "item": "chemlib:oganesson"
        },
        "G": {
          "item": "powah:crystal_spirited"
        },
        "H": {
          "item": "chroma:absolute_alloy"
        },
        "I": {
          "item": "powah:dielectric_casing"
        }
      },
      "result": {
        "item": "powah:reactor_spirited",
        "count": 4
      }
    }
  ).id('powah:crafting/reactor_spirited')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDCBA",
        "BCEFECB",
        "CEFGFEC",
        "DFGHGFD",
        "CEFGFEC",
        "BCEFECB",
        "ABCDCBA"
      ],
      "key": {
        "A": {
          "item": "mekanism:hdpe_sheet"
        },
        "B": {
          "item": "powah:capacitor_spirited"
        },
        "C": {
          "item": "beyond_earth:compressed_ostrum"
        },
        "D": {
          "item": "solarpanels:singular_energy_tablet"
        },
        "E": {
          "item": "mekaevolution:supreme_control_circuit"
        },
        "F": {
          "item": "chroma:supreme_alloy"
        },
        "G": {
          "item": "chroma:isolated_compressed_desh"
        },
        "H": {
          "item": "mekaevolution:absolute_energy_cube"
        }
      },
      "result": {
        "item": "mekaevolution:supreme_energy_cube"
      }
    }
  ).id('mekaevolution:supreme_energy_cube')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABCBAA",
        "ADDEDDA",
        "BDFGFDB",
        "CHIJKHC",
        "BDFLFDB",
        "MDDEDDM",
        "MMMNMMM"
      ],
      "key": {
        "A": {
          "item": "chroma:void_miner_frame_tier1"
        },
        "B": {
          "item": "mekanism:hdpe_sheet"
        },
        "C": {
          "item": "mekaevolution:absolute_control_circuit"
        },
        "D": {
          "item": "beyond_earth:desh_ingot"
        },
        "E": {
          "item": "powah:capacitor_spirited"
        },
        "F": {
          "item": "mythicbotany:dream_cherry"
        },
        "G": {
          "item": "mythicbotany:joetunheim_rune"
        },
        "H": {
          "item": "mythicbotany:alfsteel_ingot"
        },
        "I": {
          "item": "mythicbotany:asgard_rune"
        },
        "J": {
          "item": "industrialforegoing:machine_frame_advanced"
        },
        "K": {
          "item": "mythicbotany:midgard_rune"
        },
        "L": {
          "item": "mythicbotany:helheim_rune"
        },
        "M": {
          "item": "chroma:structure_frame"
        },
        "N": {
          "item": "industrialforegoing:laser_lens0"
        }
      },
      "result": {
        "item": "chroma:void_miner_tier_1"
      }
    }
  ).id(`${id_prefix}void_miner_tier_1`)
});
