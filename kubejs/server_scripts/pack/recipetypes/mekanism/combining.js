onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/combining/';

    const recipes = [
      {
        input: 'blue_skies:moonstone_shard',
        extrainput: 'blue_skies:charoite',
        output: 'blue_skies:zeal_lighter',
        id: 'blue_skies:zeal_lighter'
      },
      {
        input: Item.of('powah:dielectric_rod', 12),
        extrainput: Item.of('#forge:storage_blocks/steel', 4),
        output: 'powah:dielectric_casing',
        id: 'powah:crafting/dielectric_casing'
      },
      {
        input: Item.of('draconicevolution:draconium_dust', 8),
        extrainput: 'minecraft:cobblestone',
        output: 'draconicevolution:overworld_draconium_ore',
        id: 'jaopca:mekanism.material_to_default_ore.draconium'
      },
      {
        input: Item.of('mysticalagriculture:prosperity_shard', 4),
        extrainput: 'minecraft:wheat_seeds',
        output: 'mysticalagriculture:prosperity_seed_base',
        id: 'mysticalagriculture:prosperity_seed_base'
      }
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismCombining(recipe.output, recipe.input, recipe.extrainput).id(recipe.id);
    });
});
