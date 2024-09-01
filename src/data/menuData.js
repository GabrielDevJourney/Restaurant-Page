import sushiMenu from "../assets/sushiMenu.svg";
import ramenMenu from "../assets/ramenMenu.svg";
import mochiMenu from "../assets/mochiMenu.svg";
import onigiriMenu from "../assets/onigiriMenu.svg";

const menuData = [
	// Sushi array
	{
		category: "SUSHI",
		dishes: [
			{
				name: "EMPEROR'S FEAST",
				quantity: "(30 pieces)",
				price: "$24.95",
				description:
					"Imperial Sushi Banquet Majestic array of traditional sushi and sashimi, fit for an emperor",
				allergens:
					"*Adaptable to our customers' allergies. Please inform our staff about your allergies.",
				image: sushiMenu,
			},
			{
				name: "SHOGUN XL",
				quantity: "(26 pieces)",
				price: "$49.95",
				description:
					"Luxurious Sushi Assortment A grand selection of fusion sushi and sashimi, curated by our master chef.",
				allergens:
					"*Adaptable to our customers' allergies. Please inform our staff about your allergies.",
				image: sushiMenu,
			},
			{
				name: "DAIMYO L",
				price: "$37.95",
				quantity: "(20 pieces)",
				description:
					"Feudal Lord's Sushi Set Elegant selection of fusion sushi and sashimi, befitting a feudal lord's taste.",
				allergens:
					"*Adaptable to our customers' allergies. Please inform our staff about your allergies.",
				image: sushiMenu,
			},
		],
	},

	// Ramen array

	{
		category: "RAMEN",
		dishes: [
			{
				name: "GEISHA'S SECRET",
				quantity: "(Single Serving)",
				price: "$17.95",
				description:
					"Deluxe Miso Ramen An elegant blend of flavors as mysterious and alluring as a geisha, featuring a robust miso-based broth and an array of refined toppings.",
				ingredients:
					" Miso-based broth, Spicy ground pork, Butter corn,Ajitsuke Tamago (marinated soft-boiled egg),Bean sprouts, Kikurage mushrooms (wood ear mushrooms), Nori (dried seaweed), Green onions, Garlic chips ,Thick, wavy noodles.",
				allergens:
					"*Contains - Wheat, Soy, Egg, Dairy (butter). Please inform our staff about any specific allergies.",
				image: ramenMenu,
			},
			{
				name: "RONIN'S RESPITE ",
				quantity: "(Single Serving)",
				price: "$15.95",
				description:
					"Rich Tonkotsu Ramen A wandering warrior's comfort: creamy pork bone broth topped with premium ingredients to restore your spirit and strength.",
				ingredients:
					" Tonkotsu broth (pork bone soup), Chashu pork (braised pork belly), Ajitsuke Tamago (marinated soft-boiled egg), Menma (fermented bamboo shoots), Nori (dried seaweed),Naruto (fish cake),Green onions, Black garlic oil, Thin straight noodles.",
				allergens:
					"*Contains - Wheat, Soy, Egg, Dairy (butter). Please inform our staff about any specific allergies.",
				image: ramenMenu,
			},
		],
	},

	// Onigiri array

	{
		category: "ONIGIRI",
		dishes: [
			{
				name: "NINJA'S POUCH",
				quantity: "(2 pieces)",
				price: "$4.95",
				description:
					"A stealthy blend of flavors, as surprising and potent as a ninja's secret weapon.Triangle-shaped rice ball filled with tangy umeboshi (pickled plum), wrapped in crisp nori seaweed. The sour and salty umeboshi provides a bold contrast to the subtle flavor of perfectly seasoned sushi rice, creating a harmonious balance that awakens the palate.",
				ingredients:
					" Sushi rice, Umeboshi (pickled plum), Nori (seaweed sheet), Sesame seeds, Rice vinegar, Salt.",
				allergens: "*May contain traces of sesame.",
				image: onigiriMenu,
			},
			{
				name: "SUMO'S STRENGTH",
				quantity: "(2 pieces",
				price: "$5.95",
				description:
					"A hearty rice ball that packs the protein punch of a sumo wrestler's power.Large, round onigiri filled with flaky grilled salmon and a touch of mayonnaise, lightly grilled for a crispy exterior. The rich, smoky flavor of the salmon complements the subtle sweetness of the rice, while the crispy exterior adds a delightful textural contrast.",
				ingredients:
					" Sushi rice, Grilled salmon, Mayonnaise, Nori (seaweed sheet), Soy sauce, Mirin (sweet rice wine), Sesame oil.",
				allergens:
					"*Contains: Fish, Egg (in mayonnaise) May contain traces of sesame.",
				image: onigiriMenu,
			},
		],
	},

	// Mochis array

	{
		category: "MOCHI",
		dishes: [
			{
				name: "HANAMI BLOSSOM",
				quantity: "(2 pieces)",
				price: "$6.95",
				description:
					"Delicate cherry blossom flavored mochi, as enchanting as a spring day in Japan.Soft, pink-hued mochi infused with subtle cherry blossom flavor, filled with sweet red bean paste, and wrapped in a pickled sakura leaf. A seasonal delight that captures the essence of Japan's famous cherry blossom festivals.",
				ingredients:
					" Ice flour, sugar, cherry blossom extract, red bean paste, pickled sakura leaf.",
				allergens:
					"*Contains: Soy (in red bean paste) May contain traces of nuts.",
				image: mochiMenu,
			},
			{
				name: "ZEN GARDEN",
				quantity: "(2 pieces)",
				price: "$6.95",
				description:
					"A meditative journey of flavor, inspired by the tranquility of Japanese rock gardens.Vibrant green mochi with a rich matcha flavor, filled with a smooth white chocolate ganache. The slight bitterness of the matcha perfectly balances the sweetness of the filling, creating a harmonious taste experience.",
				ingredients:
					" Rice flour, sugar, matcha green tea powder, white chocolate, cream.",
				allergens:
					"*Contains: Soy (in red bean paste) May contain traces of nuts.",
				image: mochiMenu,
			},
		],
	},
];

export default menuData;