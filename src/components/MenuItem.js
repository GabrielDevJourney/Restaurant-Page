import { addToCart } from "../utils/cartFunction";

export function createDishCard(dish, category) {
	const cardContainer = document.createElement("div");
	cardContainer.className = "cardContainer";
	cardContainer.dataset.itemId = dish.id;

	const imgContainer = document.createElement("div");
	imgContainer.className = "imgContainer";
	cardContainer.appendChild(imgContainer);

	const imgToDisplay = document.createElement("img");
	imgToDisplay.className = "imgToDisplay";
	imgToDisplay.src = dish.image;
    imgToDisplay.loading = 'lazy'
	imgContainer.appendChild(imgToDisplay);

	const priceNamePiecesContainer = document.createElement("div");
	priceNamePiecesContainer.className = "priceNamePiecesContainer";
	cardContainer.appendChild(priceNamePiecesContainer);

	const nameAndPriceText = document.createElement("p");
	nameAndPriceText.className = "nameAndPriceText";
	nameAndPriceText.textContent = `${dish.name} - $${dish.price}`;
	priceNamePiecesContainer.appendChild(nameAndPriceText);

	const piecesText = document.createElement("p");
	piecesText.className = "piecesText";
	piecesText.textContent = `${dish.quantity}`;
	priceNamePiecesContainer.appendChild(piecesText);

	const descriptionContainer = document.createElement("div");
	descriptionContainer.className = "descriptionContainer";
	cardContainer.appendChild(descriptionContainer);

	const descriptionText = document.createElement("p");
	descriptionText.className = "descritptionText";
	descriptionText.textContent = `${dish.description}`;
	descriptionContainer.appendChild(descriptionText);

	if (category !== "SUSHI") {
		const ingredientsListText = document.createElement("p");
		ingredientsListText.className = "ingridientsText";

		const ingredientsLabel = document.createElement("span");
		ingredientsLabel.className = "ingredientsLabel";
		ingredientsLabel.textContent = "Ingredients:";
		ingredientsListText.appendChild(ingredientsLabel);

		const ingredientsContent = document.createTextNode(dish.ingredients);
		ingredientsListText.appendChild(ingredientsContent);

		descriptionContainer.appendChild(ingredientsListText);
	}

	const extraInfoContainer = document.createElement("div");
	extraInfoContainer.className = "extraInfoContainer";
	cardContainer.appendChild(extraInfoContainer);

	const extraInfoText = document.createElement("p");
	extraInfoText.className = "extraInfoText";
	extraInfoText.textContent = `${dish.allergens}`;
	extraInfoContainer.appendChild(extraInfoText);

	const dishCardBtnContainer = document.createElement("div");
	dishCardBtnContainer.className = "dishCardBtnContainer";
	cardContainer.appendChild(dishCardBtnContainer);

	const cardBtnAddToCart = document.createElement("button");
	cardBtnAddToCart.className = "cardBtnAddToCart";
	cardBtnAddToCart.dataset.itemId = dish.id;
	cardBtnAddToCart.textContent = "Add To Cart";

	cardBtnAddToCart.addEventListener("click", () => {
    addToCart({id: dish.id,
            name: dish.name,
            price: dish.price,
            image: dish.image,
            quantity: 1});
	});

	dishCardBtnContainer.appendChild(cardBtnAddToCart);

	return cardContainer;
}
