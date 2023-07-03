onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/ironfurnaces/shaped/';
    const recipes = [
      {
        output: 'ironfurnaces:copper_furnace',
          pattern: ['III', 'IFI', 'III'],
          key: {
              F: 'minecraft:furnace',
              I: '#forge:ingots/brass'
          },
          id: 'ironfurnaces:furnaces/copper_furnace'
      },
      {
        output: 'ironfurnaces:iron_furnace',
          pattern: ['III', 'GFG', 'III'],
          key: {
              F: 'ironfurnaces:copper_furnace',
              I: '#forge:ingots/amethyst_bronze',
              G: 'tconstruct:clear_glass'
          },
          id: 'ironfurnaces:furnaces/iron_furnace2'
      },
      {
        output: 'ironfurnaces:silver_furnace',
          pattern: ['III', 'GFG', 'III'],
          key: {
              F: 'ironfurnaces:iron_furnace',
              I: '#forge:ingots/steel',
              G: 'immersiveengineering:component_steel'
          },
          id: 'ironfurnaces:furnaces/silver_furnace'
      },
      {
        output: 'ironfurnaces:gold_furnace',
          pattern: ['III', 'GFG', 'IBI'],
          key: {
              F: 'ironfurnaces:silver_furnace',
              I: '#blue_skies:ingots/ventium',
              B: '#blue_skies:storage_blocks/ventium',
              G: '#blue_skies:ingots/falsite'
          },
          id: 'ironfurnaces:furnaces/gold_furnace'
      },
      {
        output: 'ironfurnaces:diamond_furnace',
          pattern: ['III', 'GFG', 'III'],
          key: {
              F: 'ironfurnaces:gold_furnace',
              I: 'powah:steel_energized',
              G: 'powah:capacitor_hardened'
          },
          id: 'ironfurnaces:furnaces/diamond_furnace'
      },
      {
        output: 'ironfurnaces:emerald_furnace',
          pattern: ['IBI', 'GFG', 'IBI'],
          key: {
              F: 'ironfurnaces:diamond_furnace',
              I: '#forge:ingots/compressed_iron',
              B: '#forge:storage_blocks/compressed_iron',
              G: '#forge:gears/compressed_iron'
          },
          id: 'ironfurnaces:furnaces/emerald_furnace'
      },
      {
        output: 'ironfurnaces:obsidian_furnace',
          pattern: ['IBI', 'GFG', 'IBI'],
          key: {
              F: 'ironfurnaces:emerald_furnace',
              I: '#forge:ingots/forgotten_metal',
              B: '#forge:ingots/utherium',
              G: '#forge:ingots/regalium'
          },
          id: 'ironfurnaces:furnaces/obsidian_furnace'
      },
      {
        output: 'ironfurnaces:netherite_furnace',
          pattern: ['IGI', 'GFG', 'IBI'],
          key: {
              F: 'ironfurnaces:obsidian_furnace',
              I: '#forge:ingots/desh',
              B: 'chroma:carbon_fiber',
              G: 'beyond_earth:ice_shard'
          },
          id: 'ironfurnaces:furnaces/netherite_furnace'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
