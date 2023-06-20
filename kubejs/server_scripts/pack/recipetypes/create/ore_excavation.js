onEvent('recipes', event => {
	//Iron vein only in overworld and a stress requirement of 512 xRPM (default is 256 xRPM)
	//With a finite vein size between 3x-8.5x base (if finite veins are enabled)
	// event.recipes.createoreexcavation
	// 	.drilling('minecraft:raw_iron', '{"text": "My iron vein"}', 10, 100)
	// 	.veinSize(3, 8.5)
	// 	.biomeBlacklist('minecraft:is_nether')
	// 	.stress(512)
	// 	.id("my_vein");

	//Coal vein with 5% chance for diamond and require a diamond drill and lava for drilling
	//Always finite 5x-8x base
	event.recipes.createoreexcavation
		.drilling([Item.of('chroma:raw_aurizincite')
		.withChance(0.1)], '{"text": "Raw Aurizincite Vein"}', 2, 600)
		.biomeWhitelist('minecraft:is_overworld')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/raw_aurizincite");

	event.recipes.createoreexcavation
		.drilling([Item.of('chroma:raw_leadurosmate')
		.withChance(0.1)], '{"text": "Raw Leadurosmat Vein"}', 2, 600)
		.biomeWhitelist('minecraft:is_overworld')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/raw_leadurosmate");

	event.recipes.createoreexcavation
		.drilling([Item.of('chroma:raw_feranicalumite')
		.withChance(0.1)], '{"text": "Raw Feranicalumite Vein"}', 2, 600)
		.biomeWhitelist('minecraft:is_overworld')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/raw_feranicalumite");

	event.recipes.createoreexcavation
		.drilling([Item.of('chroma:raw_cuperargentite')
		.withChance(0.1)], '{"text": "Raw Cuperargentite Vein"}', 2, 600)
		.biomeWhitelist('minecraft:is_overworld')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/raw_cuperargentite");

	event.recipes.createoreexcavation
		.drilling([Item.of('chroma:raw_cobalrite')
		.withChance(0.1)], '{"text": "Raw Cobalrite Vein"}', 2, 600)
		.biomeWhitelist('minecraft:is_nether')
		.drill('createoreexcavation:diamond_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/raw_cobalrite");

	//Fluid extractor recipes (Fluids)
	// event.recipes.createoreexcavation
	// 	.extracting(Fluid.of('minecraft:lava', 400), '{"text": "Lava well"}', 10, 100)
	// 	.biomeWhitelist('minecraft:is_nether')
	// 	.alwaysInfinite()
	// 	.id("test");
})
