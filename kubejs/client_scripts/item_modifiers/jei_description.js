onEvent('jei.information', (event) => {
    const recipes = [
        {
            items: ['farmersdelight:ham'],
            text: ['Obtained by killing Pigs or Hoglins with a knife.']
        },
        {
            items: ['buildinggadgets:construction_paste'],
            text: ['Obtained by breaking a Dense Construction Block with a Pickaxe.']
        },
        {
            items: ['thermal:blizz_rod', 'thermal:blizz_spawn_egg'],
            text: [
                'The Blizz spawns naturally in cold biomes. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['thermal:blitz_rod', 'thermal:blitz_spawn_egg'],
            text: [
                'The Blitz spawns naturally in warm, dry biomes. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['thermal:basalz_rod', 'thermal:basalz_spawn_egg'],
            text: [
                'The Basalz spawns naturally in barren biomes, such as Badlands. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['farmersdelight:brown_mushroom_colony', 'minecraft:brown_mushroom'],
            text: [
                'Plant a Brown Mushroom on Rich Soil in darkness to grow mushroom colonies, which may be broken for a nice yield.'
            ]
        },
        {
            items: ['farmersdelight:red_mushroom_colony', 'minecraft:red_mushroom'],
            text: [
                'Plant a Red Mushroom on Rich Soil in darkness to grow mushroom colonies, which may be broken for a nice yield.'
            ]
        },
        {
            items: ['minecraft:nautilus_shell'],
            text: [
                'Obtained by killing Nautilus, found in Warm Oceans.',
                ' ',
                'Also obtained from Embedded Ammonite, found at any Y level under Oceans and Beaches.'
            ]
        },
        {
            items: ['quark:bottled_cloud'],
            text: ['Obtained by Right-Clicking a Glass Bottle in the air between Y Levels 126 and 132.']
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [`Shapeless Crafting: One paper and at least one gunpowder.`]
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [
                `Adding more gunpowder increases the duration of the rocket.`,
                `Up to three gunpowder or up to seven firework stars can be added.`
            ]
        },
        {
            items: ['minecraft:firework_star'],
            text: [`Shapeless Crafting: One gunpowder and at least one dye.`]
        },
        {
            items: ['minecraft:firework_star'],
            text: [
                `Up to eight dyes can be added.`,
                `One head, gold nugget, feather, or fire charge can be added to set a shape.`,
                `A diamond and/or a glowstone dust can be added with any of the other ingredients.`
            ]
        },
        {
            items: ['minecraft:dragon_egg'],
            text: [
                `More eggs may be obtained by summoning the End Dragon again.`,
                ` `,
                `To summon, place an End Crystal on each of the cardinal directions of the End Portal in the End.`
            ]
        },
        {
            items: ['immersiveengineering:furnace_heater', 'mekanism:fuelwood_heater', 'mekanism:resistive_heater'],
            text: [`May be used to provide Heat for PneumaticCraft machines.`]
        },
        {
            items: ['immersiveengineering:logic_circuit'],
            text: [
                `Used in a Logic Unit to create advanced Redstone Logic.`,
                ` `,
                `Crafted in an Engineer's Circuit Table. Requires Circuit Backplanes and Lead or Copper Wire. Vacuum Tubes are required for all operators except SET.`
            ]
        },
        {
            items: ['immersiveengineering:cloche'],
            text: [
                `Available Fertilizers:`,
                ` `,
                `Bone Meal: 1.25x`,
                `Floral Fertilizer: 1.5x`,
                `Green Fertilizer: 1.5x`,
                `Fertilizer: 1.7x`,
                `Red Fertilizer: 2.0x`,
                `Phyto-Gro: 3.0x`
            ]
        },
        {
            items: ['quark:dragon_scale'],
            text: [`Only drops from Ender Dragons after the first one has been killed.`]
        },
        {
            items: [
                'dankstorage:1_to_2',
                'dankstorage:2_to_3',
                'dankstorage:3_to_4',
                'dankstorage:4_to_5',
                'dankstorage:5_to_6',
                'dankstorage:6_to_7'
            ],
            text: [`Sneak Right Click to upgrade a Dank installed in a Dock.`]
        },
        {
            items: ['quark:slime_in_a_bucket'],
            text: [`Scoop up a small slime in an empty bucket.`]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.text);
        });
    });

    disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled."
        );
    });
});
