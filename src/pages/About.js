export function renderAboutPage() {
	const aboutContainer = document.createElement("div");
	aboutContainer.className = "aboutContainer";

	const textAboutContainer = document.createElement("div");
	textAboutContainer.className = "textAboutContainer";
	aboutContainer.appendChild(textAboutContainer);

	function createParagraph(text) {
		const p = document.createElement("p");
		p.textContent = text;
        p.className = 'aboutText'
		return p;
	}

	const textAbout = document.createElement("div");
	textAbout.className = "textAbout";

	const kaizenHouseText = document.createElement("span");
	kaizenHouseText.className = "kaizenHouseText";
	kaizenHouseText.textContent = "KAIZEN HOUSE";

	const intro = createParagraph("");
	intro.appendChild(document.createTextNode("Welcome to "));
	intro.appendChild(kaizenHouseText);
	intro.appendChild(
		document.createTextNode(
			", where we bring the heart of Japan to your plate!"
		)
	);

	textAbout.appendChild(intro);
	textAbout.appendChild(
		createParagraph(
			"Our passion is to share the rich tapestry of Japanese cuisine and culture with every dish we serve. From the delicate balance of flavors in our sushi to the comforting warmth of our ramen, each meal is a journey through Japan's culinary landscape."
		)
	);
	textAbout.appendChild(
		createParagraph(
			"We believe that dining is more than just eating—it's an experience. That's why we've crafted an atmosphere that transports you to the bustling streets of Tokyo or the serene gardens of Kyoto. Our chefs, trained in traditional Japanese techniques, pour their expertise and creativity into every dish, ensuring an authentic taste of Japan with every bite."
		)
	);
	textAbout.appendChild(
		createParagraph(
			"Whether you're a seasoned lover of Japanese food or a curious first-timer, we invite you to explore the unique flavors, textures, and traditions that make Japanese cuisine truly special. Join us for a meal and discover why Japanese food isn't just nourishment for the body, but a celebration for the senses and the soul."
		)
	);
	textAbout.appendChild(
		createParagraph(
			"Come, taste, and experience the magic of Japan with us!"
		)
	);

	aboutContainer.appendChild(textAbout);

	const japoneseKaizenSymbolContainer = document.createElement("div");
	japoneseKaizenSymbolContainer.className = "japoneseKaizenSymbolContainer";
	aboutContainer.appendChild(japoneseKaizenSymbolContainer);

	const japoneseKaizenSymbolText = document.createElement("p");
	japoneseKaizenSymbolText.className = "japoneseKaizenSymbolText";
	japoneseKaizenSymbolText.textContent = "改善";
	japoneseKaizenSymbolContainer.appendChild(japoneseKaizenSymbolText);

	return aboutContainer;
}
