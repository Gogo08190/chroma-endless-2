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
});
