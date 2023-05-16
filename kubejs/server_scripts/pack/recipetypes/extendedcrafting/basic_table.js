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
        "AAA",
        "BCB",
        "DED"
      ],
      "key": {
        "A": {
          "item": "mekanismgenerators:solar_panel"
        },
        "B": {
          "item": "mekanism:alloy_reinforced"
        },
        "C": {
          "item": "powah:capacitor_hardened"
        },
        "D": {
          "item": "extendedcrafting:black_iron_ingot"
        },
        "E": {
          "item": "mekanism:energy_tablet"
        }
      },
      "result": {
        "item": "mekanismgenerators:solar_generator"
      }
    }
  ).id('mekanismgenerators:generator/solar')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " A ",
        "ABA",
        "CDC"
      ],
      "key": {
        "A": {
          "item": "mekanism:ingot_osmium"
        },
        "B": {
          "item": "pneumaticcraft:turbine_rotor"
        },
        "C": {
          "item": "mekanism:energy_tablet"
        },
        "D": {
          "item": "mekanism:advanced_control_circuit"
        }
      },
      "result": {
        "item": "mekanismgenerators:wind_generator"
      }
    }
  ).id('mekanismgenerators:generator/wind')
});
