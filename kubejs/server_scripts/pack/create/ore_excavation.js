onEvent('recipes', event => {
	//Iron vein only in overworld and a stress requirement of 512 xRPM (default is 256 xRPM)
	//With a finite vein size between 3x-8.5x base (if finite veins are enabled)
	event.recipes.createoreexcavation
		.drilling('minecraft:raw_iron', '{"text": "My iron vein"}', 10, 100)
		.veinSize(3, 8.5)
		.biomeBlacklist('minecraft:is_nether')
		.stress(512)
		.id("my_vein");

	//Coal vein with 5% chance for diamond and require a diamond drill and lava for drilling
	//Always finite 5x-8x base
	event.recipes.createoreexcavation
		.drilling([Item.of('minecraft:coal'), Item.of('minecraft:diamond')
		.withChance(0.05)], '{"text": "My coal vein"}', 2, 1000)
		.drill('createoreexcavation:diamond_drill')
		.fluid('minecraft:lava')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("my_vein2");

	//Fluid extractor recipes (Fluids)
	event.recipes.createoreexcavation
		.extracting(Fluid.of('minecraft:lava', 400), '{"text": "Lava well"}', 10, 100)
		.biomeWhitelist('minecraft:is_nether')
		.alwaysInfinite()
		.id("test");
})
