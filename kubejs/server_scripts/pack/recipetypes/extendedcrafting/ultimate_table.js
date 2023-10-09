onEvent("recipes", (event) => {
  const id_prefix = 'chroma:pack/extendedcrafting/table/';

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDEDCBA",
        "BCFGHGFCB",
        "CFGHIHGFC",
        "DGHIJIHGD",
        "EHIJKJIHE",
        "DGHIJIHGD",
        "CFGHIHGFC",
        "BCFGHGFCB",
        "ABCDEDCBA"
      ],
      "key": {
        "A": {
          "item": "draconicevolution:wyvern_energy_core"
        },
        "B": {
          "item": "mekanism:pellet_antimatter"
        },
        "C": {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        "D": {
          "item": "chemlib:tantalum_ingot"
        },
        "E": {
          "item": "solarpanels:photonic_energy_tablet"
        },
        "F": {
          "item": "extendedcrafting:enhanced_ender_catalyst"
        },
        "G": {
          "item": "mysticalagriculture:supremium_ingot"
        },
        "H": {
          "item": "mekaevolution:infinite_control_circuit"
        },
        "I": {
          "item": "chroma:infinite_alloy"
        },
        "J": {
          "item": "extendedcrafting:ultimate_catalyst"
        },
        "K": {
          "item": "mekaevolution:cosmic_energy_cube"
        }
      },
      "result": {
        "item": "mekaevolution:infinite_energy_cube"
      }
    }
  ).id('mekaevolution:infinite_energy_cube')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDEFGHI",
        "JKLMNOPQR",
        "STUVWXYZa",
        "bcdefg   ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         "
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:prosperity_ingot"
        },
        "B": {
          "item": "mysticalagriculture:inferium_ingot"
        },
        "C": {
          "item": "mysticalagriculture:prudentium_ingot"
        },
        "D": {
          "item": "mysticalagriculture:tertium_ingot"
        },
        "E": {
          "item": "mysticalagriculture:imperium_ingot"
        },
        "F": {
          "item": "mysticalagriculture:supremium_ingot"
        },
        "G": {
          "item": "mysticalagradditions:insanium_ingot"
        },
        "H": {
          "item": "extendedcrafting:enhanced_ender_ingot"
        },
        "I": {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        "J": {
          "item": "biggerreactors:cyanite_ingot"
        },
        "K": {
          "item": "biggerreactors:blutonium_ingot"
        },
        "L": {
          "item": "biggerreactors:ludicrite_ingot"
        },
        "M": {
          "item": "minecraft:netherite_ingot"
        },
        "N": {
          "item": "create:brass_ingot"
        },
        "O": {
          "item": "create:zinc_ingot"
        },
        "P": {
          "item": "beyond_earth:ostrum_ingot"
        },
        "Q": {
          "item": "tconstruct:manyullyn_ingot"
        },
        "R": {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        "S": {
          "item": "thermal:constantan_ingot"
        },
        "T": {
          "item": "botania:elementium_ingot"
        },
        "U": {
          "item": "beyond_earth:desh_ingot"
        },
        "V": {
          "item": "extendedcrafting:black_iron_ingot"
        },
        "W": {
          "item": "tconstruct:amethyst_bronze_ingot"
        },
        "X": {
          "item": "mna:superheated_purified_vinteum_ingot"
        },
        "Y": {
          "item": "botania:terrasteel_ingot"
        },
        "Z": {
          "item": "mythicbotany:alfsteel_ingot"
        },
        "a": {
          "item": "draconicevolution:awakened_draconium_ingot"
        },
        "b": {
          "item": "mekanism:ingot_refined_glowstone"
        },
        "c": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "d": {
          "item": "tconstruct:hepatizon_ingot"
        },
        "e": {
          "item": "forbidden_arcanus:arcane_gold_ingot"
        },
        "f": {
          "item": "chemlib:francium_ingot"
        },
        "g": {
          "item": "tconstruct:queens_slime_ingot"
        }
      },
      "result": {
        "item": "extendedcrafting:the_ultimate_ingot"
      }
    }
  ).id('extendedcrafting:the_ultimate_ingot')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBBBBBA",
        "BCDEFEDCB",
        "BDDGHGDDB",
        "BEGIJIGEB",
        "BFHJKJHFB",
        "BEGIJIGEB",
        "BDDGHGDDB",
        "BCDEFEDCB",
        "ABBBBBBBA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:crystaltine_block"
        },
        "B": {
          "item": "minecraft:pink_terracotta"
        },
        "C": {
          "item": "mysticalagradditions:creative_essence"
        },
        "D": {
          "item": "mekaevolution:infinite_control_circuit"
        },
        "E": {
          "item": "draconicevolution:awakened_draconium_block"
        },
        "F": {
          "item": "chroma:infinite_alloy"
        },
        "G": {
          "item": "evilcraft:garmonbozia"
        },
        "H": {
          "item": "draconicevolution:large_chaos_frag"
        },
        "I": {
          "item": "mekanism:pellet_antimatter"
        },
        "J": {
          "item": "doom:argent_energy"
        },
        "K": {
          "item": "computercraft:monitor_advanced"
        }
      },
      "result": {
        "item": "chroma:piggy_bank"
      }
    }
  ).id(`${id_prefix}piggy_bank`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABCDCBAA",
        "AECFGFCEA",
        "BCHIJIHCB",
        "CKILMLINC",
        "DGJMOMJGD",
        "CKILMLINC",
        "BCHIJIHCB",
        "AECPGPCEA",
        "AABCDCBAA"
      ],
      "key": {
        "A": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "B": {
          "item": "mekaevolution:infinite_control_circuit"
        },
        "C": {
          "item": "megacells:mega_energy_cell"
        },
        "D": {
          "item": "draconicevolution:chaotic_core"
        },
        "E": {
          "item": "chroma:infinite_alloy"
        },
        "F": {
          "item": "ae2:engineering_processor"
        },
        "G": {
          "item": "chroma:ultimate_prediction"
        },
        "H": {
          "item": "ae2:singularity"
        },
        "I": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "J": {
          "item": "mekanism:pellet_antimatter"
        },
        "K": {
          "item": "ae2:logic_processor"
        },
        "L": {
          "item": "mysticalagradditions:creative_essence"
        },
        "M": {
          "item": "draconicevolution:chaotic_energy_core"
        },
        "N": {
          "item": "ae2:calculation_processor"
        },
        "O": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "P": {
          "item": "lazierae2:parallel_processor"
        }
      },
      "result": {
        "item": "ae2:creative_energy_cell"
      }
    }
  ).id(`${id_prefix}creative_energy_cell`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAABCBAAA",
        "ADEFGHIJA",
        "AKLLLLLMA",
        "BNLOOOLPB",
        "CQLOROLSC",
        "BTLOOOLUB",
        "AVLLLLLWA",
        "AXYZabcdA",
        "AAABCBAAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:fertilized_essence"
        },
        "B": {
          "item": "botania:dragonstone_block"
        },
        "C": {
          "item": "botania:pixie_dust"
        },
        "D": {
          "item": "mythicbotany:alfheim_rune"
        },
        "E": {
          "item": "botania:rune_pride"
        },
        "F": {
          "item": "botania:rune_envy"
        },
        "G": {
          "item": "botania:rune_wrath"
        },
        "H": {
          "item": "botania:rune_sloth"
        },
        "I": {
          "item": "botania:rune_greed"
        },
        "J": {
          "item": "mythicbotany:vanaheim_rune"
        },
        "K": {
          "item": "mythicbotany:midgard_rune"
        },
        "L": {
          "item": "mythicbotany:alfsteel_ingot"
        },
        "M": {
          "item": "botania:rune_summer"
        },
        "N": {
          "item": "mythicbotany:joetunheim_rune"
        },
        "O": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "P": {
          "item": "botania:rune_spring"
        },
        "Q": {
          "item": "mythicbotany:muspelheim_rune"
        },
        "R": {
          "item": "chroma:insanium_seed_base"
        },
        "S": {
          "item": "botania:rune_earth"
        },
        "T": {
          "item": "mythicbotany:niflheim_rune"
        },
        "U": {
          "item": "botania:rune_fire"
        },
        "V": {
          "item": "mythicbotany:nidavellir_rune"
        },
        "W": {
          "item": "botania:rune_water"
        },
        "X": {
          "item": "mythicbotany:helheim_rune"
        },
        "Y": {
          "item": "botania:rune_gluttony"
        },
        "Z": {
          "item": "botania:rune_lust"
        },
        "a": {
          "item": "botania:rune_mana"
        },
        "b": {
          "item": "botania:rune_winter"
        },
        "c": {
          "item": "botania:rune_autumn"
        },
        "d": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "mysticalagriculture:alfsteel_seeds"
      }
    }
  ).id(`${id_prefix}alfsteel_seeds`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBCBBA",
        "BBDEDBB",
        "BDEDEDB",
        "CEDFDEC",
        "BDEDEDB",
        "BBDEDBB",
        "ABBCBBA"
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:fertilized_essence"
        },
        "B": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "C": {
          "item": "powah:nitro_crystal_block"
        },
        "D": {
          "item": "powah:crystal_nitro"
        },
        "E": {
          "item": "powah:charged_snowball"
        },
        "F": {
          "item": "chroma:insanium_seed_base"
        }
      },
      "result": {
        "item": "mysticalagriculture:nitro_crystal_seeds"
      }
    }
  ).id('mysticalagriculture:seed/infusion/nitro_crystal')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBCBBA",
        "BBDEDBB",
        "BDEDEDB",
        "CEDFDEC",
        "BDEDEDB",
        "BBDEDBB",
        "ABBCBBA"
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:fertilized_essence"
        },
        "B": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "C": {
          "item": "beyond_earth:calorite_block"
        },
        "D": {
          "item": "beyond_earth:calorite_ingot"
        },
        "E": {
          "item": "beyond_earth:ice_shard"
        },
        "F": {
          "item": "chroma:insanium_seed_base"
        }
      },
      "result": {
        "item": "mysticalagriculture:calorite_seeds"
      }
    }
  ).id(`${id_prefix}calorite_seeds`)
});
