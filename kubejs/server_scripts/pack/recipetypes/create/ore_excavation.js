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
		.withChance(0.5)], '{"text": "Raw Aurizincite Vein"}', 15, 100)
		.biomeBlacklist('minecraft:is_nether')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/raw_aurizincite");

	event.recipes.createoreexcavation
		.drilling([Item.of('chroma:raw_leadurosmate')
		.withChance(0.5)], '{"text": "Raw Leadurosmat Vein"}', 15, 100)
		.biomeBlacklist('minecraft:is_nether')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/raw_leadurosmate");

	event.recipes.createoreexcavation
		.drilling([Item.of('chroma:raw_feranicalumite')
		.withChance(0.5)], '{"text": "Raw Feranicalumite Vein"}', 15, 100)
		.biomeBlacklist('minecraft:is_nether')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/raw_feranicalumite");

	event.recipes.createoreexcavation
		.drilling([Item.of('chroma:raw_cuperargentite')
		.withChance(0.5)], '{"text": "Raw Cuperargentite Vein"}', 15, 100)
		.biomeBlacklist('minecraft:is_nether')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/raw_cuperargentite");

	event.recipes.createoreexcavation
		.drilling([Item.of('chroma:raw_cobalrite')
		.withChance(0.5)], '{"text": "Raw Cobalrite Vein"}', 60, 100)
		.biomeWhitelist('minecraft:is_nether')
		.drill('createoreexcavation:diamond_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/raw_cobalrite");

	event.recipes.createoreexcavation
		.drilling([Item.of('blue_skies:ventium_ore')
		.withChance(0.5)], '{"text": "Ventium Vein"}', 60, 100)
		.biomeWhitelist('blue_skies:everbright')
		.drill('createoreexcavation:netherite_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/ventium");

	event.recipes.createoreexcavation
		.drilling([Item.of('blue_skies:falsite_ore')
		.withChance(0.5)], '{"text": "Falsite Vein"}', 60, 100)
		.biomeWhitelist('blue_skies:everbright')
		.drill('createoreexcavation:netherite_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/falsite");

	event.recipes.createoreexcavation
		.drilling([Item.of('blue_skies:everbright_moonstone_ore')
		.withChance(0.5)], '{"text": "Moonstone Vein"}', 60, 100)
		.biomeWhitelist('blue_skies:everbright')
		.drill('createoreexcavation:netherite_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/moonstone");

	event.recipes.createoreexcavation
		.drilling([Item.of('blue_skies:everbright_charoite_ore')
		.withChance(0.5)], '{"text": "Charoite Vein"}', 60, 100)
		.biomeWhitelist('blue_skies:everbright')
		.drill('createoreexcavation:netherite_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/charoite");

	event.recipes.createoreexcavation
		.drilling([Item.of('blue_skies:everbright_aquite_ore')
		.withChance(0.5)], '{"text": "Aquite Vein"}', 60, 100)
		.biomeWhitelist('blue_skies:everbright')
		.drill('createoreexcavation:netherite_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/aquite");

	event.recipes.createoreexcavation
		.drilling([Item.of('blue_skies:everbright_pyrope_ore')
		.withChance(0.5)], '{"text": "Pyrope Vein"}', 60, 100)
		.biomeWhitelist('blue_skies:everbright')
		.drill('createoreexcavation:netherite_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/pyrope");

	event.recipes.createoreexcavation
		.drilling([Item.of('blue_skies:everbright_diopside_ore')
		.withChance(0.5)], '{"text": "Diopside Vein"}', 60, 100)
		.biomeWhitelist('blue_skies:everbright')
		.drill('createoreexcavation:netherite_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/diopside");

	event.recipes.createoreexcavation
		.drilling([Item.of('blue_skies:horizonite_ore')
		.withChance(0.5)], '{"text": "Horizonite Vein"}', 60, 100)
		.biomeWhitelist('blue_skies:everdawn')
		.drill('createoreexcavation:netherite_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/horizonite");

	event.recipes.createoreexcavation
		.drilling([Item.of('blue_skies:everdawn_moonstone_ore')
		.withChance(0.5)], '{"text": "Moonstone Vein"}', 60, 100)
		.biomeWhitelist('blue_skies:everdawn')
		.drill('createoreexcavation:netherite_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/moonstone_2");

	event.recipes.createoreexcavation
		.drilling([Item.of('blue_skies:everdawn_charoite_ore')
		.withChance(0.5)], '{"text": "Charoite Vein"}', 60, 100)
		.biomeWhitelist('blue_skies:everdawn')
		.drill('createoreexcavation:netherite_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/charoite_2");

	event.recipes.createoreexcavation
		.drilling([Item.of('blue_skies:everdawn_aquite_ore')
		.withChance(0.5)], '{"text": "Aquite Vein"}', 60, 100)
		.biomeWhitelist('blue_skies:everdawn')
		.drill('createoreexcavation:netherite_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/aquite_2");

	event.recipes.createoreexcavation
		.drilling([Item.of('blue_skies:everdawn_pyrope_ore')
		.withChance(0.5)], '{"text": "Pyrope Vein"}', 60, 100)
		.biomeWhitelist('blue_skies:everdawn')
		.drill('createoreexcavation:netherite_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/pyrope_2");

	event.recipes.createoreexcavation
		.drilling([Item.of('blue_skies:everdawn_diopside_ore')
		.withChance(0.5)], '{"text": "Diopsite Vein"}', 60, 100)
		.biomeWhitelist('blue_skies:everdawn')
		.drill('createoreexcavation:netherite_drill')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:veins/diopside_2");

	event.recipes.createoreexcavation
		.extracting(Fluid.of('minecraft:lava', 400), '{"text": "Lava well"}', 10, 100)
		.biomeWhitelist('minecraft:is_nether')
		.alwaysInfinite()
		.id("chroma:reservoir/lava");

	event.recipes.createoreexcavation
		.extracting(Fluid.of('pneumaticcraft:oil', 400), '{"text": "Oil well"}', 10, 100)
		.biomeWhitelist('forge:is_overworld')
		.alwaysFinite()
		.veinSize(5, 8)
		.id("chroma:reservoir/oil");
})
