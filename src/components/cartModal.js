import {
	getCartItems,
	decreaseQuantity,
	increaseQuantity,
	deleteItem,
} from "../utils/cartFunction.js";

const itemsCartContainer = document.createElement("div");
itemsCartContainer.className = "itemsCartContainer";

export function showModal() {
	itemsCartContainer.style.display = "block";
	populateCartModal();
}

export function hideModal() {
	itemsCartContainer.style.display = "none";
}

export function createCartItemCard() {
	const itemCartCardContainer = document.createElement("div");
	itemCartCardContainer.className = "itemCartCardContainer";
	itemCartCardContainer.dataset.itemId = "";

	const imgCartItemContainer = document.createElement("div");
	imgCartItemContainer.className = "imgCartItemContainer";
	itemCartCardContainer.appendChild(imgCartItemContainer);

	const imgCartItem = document.createElement("img");
	imgCartItem.className = "imgCartItem";
	imgCartItemContainer.appendChild(imgCartItem);

	const cartIemDetailsContainer = document.createElement("div");
	cartIemDetailsContainer.className = "cartItemDetailsContainer";
	itemCartCardContainer.appendChild(cartIemDetailsContainer);

	const nameChangeQuantityContainer = document.createElement("div");
	nameChangeQuantityContainer.className = "nameChangeQuantityContainer";
	cartIemDetailsContainer.appendChild(nameChangeQuantityContainer);

	const nameCartItemContainer = document.createElement("div");
	nameCartItemContainer.className = "nameCartItemContainer";
	nameChangeQuantityContainer.appendChild(nameCartItemContainer);

	const nameCartItemText = document.createElement("p");
	nameCartItemText.className = "nameCartItemText";
	nameCartItemContainer.appendChild(nameCartItemText);

	const changeQuantityContainer = document.createElement("div");
	changeQuantityContainer.className = "changeQuantityContainer";
	nameChangeQuantityContainer.appendChild(changeQuantityContainer);

	const decreaseContainer = document.createElement("div");
	decreaseContainer.className = "decreaseContainer";
	changeQuantityContainer.appendChild(decreaseContainer);

	const decreaseBtn = document.createElement("button");
	decreaseBtn.className = "decreaseBtn";
	decreaseBtn.textContent = "-";
	decreaseContainer.appendChild(decreaseBtn);

	const quantityContainer = document.createElement("div");
	quantityContainer.className = "quantityContainer";
	changeQuantityContainer.appendChild(quantityContainer);

	const quantityText = document.createElement("p");
	quantityText.className = "quantityText";
	quantityContainer.appendChild(quantityText);

	const increaseContainer = document.createElement("div");
	increaseContainer.className = "increaseContainer";
	changeQuantityContainer.appendChild(increaseContainer);

	const increaseBtn = document.createElement("button");
	increaseBtn.className = "increaseBtn";
	increaseBtn.textContent = "+";
	increaseContainer.appendChild(increaseBtn);

	const closeAndPriceContainer = document.createElement("div");
	closeAndPriceContainer.className = "closeAndPriceContainer";
	cartIemDetailsContainer.appendChild(closeAndPriceContainer);

	const closeCardContainer = document.createElement("div");
	closeCardContainer.className = "closeCardContainer";
	closeAndPriceContainer.appendChild(closeCardContainer);

	const closeBtn = document.createElement("button");
	closeBtn.className = "closeBtn";
	closeBtn.textContent = "X";
	closeCardContainer.appendChild(closeBtn);

	const priceContainer = document.createElement("div");
	priceContainer.className = "priceContainer";
	closeAndPriceContainer.appendChild(priceContainer);

	const priceText = document.createElement("p");
	priceText.className = "priceText";
	priceContainer.appendChild(priceText);

	return itemCartCardContainer;
}

//to populate with dishes card items cards
export function populateCartModal() {
	const cartItems = getCartItems();
	console.log("cart items", cartItems);

	itemsCartContainer.innerHTML = "";

	const closeCartContainer = document.createElement("div");
	closeCartContainer.className = "closeCartContainer";
	itemsCartContainer.appendChild(closeCartContainer);

	const closeCartBtn = document.createElement("button");
	closeCartBtn.className = "closeCartBtn";
	closeCartBtn.textContent = "X";
	closeCartBtn.addEventListener("click", hideModal);
	closeCartContainer.appendChild(closeCartBtn);

	if (cartItems.length === 0) {
		itemsCartContainer.innerHTML = "<p>Your cart is empty</p>";
		return;
	}
	// Create and append item cards
	cartItems.forEach((item) => {
		const itemCard = createCartItemCard();
		populateCartItem(itemCard, item);
		itemsCartContainer.appendChild(itemCard);
	});

	// Create and append checkout section
	const checkoutContainer = document.createElement("div");
	checkoutContainer.className = "checkoutContainer";

	const totalPriceContainer = document.createElement("div");
	totalPriceContainer.className = "totalPriceContainer";
	checkoutContainer.appendChild(totalPriceContainer);

	const totalPriceText = document.createElement("p");
	totalPriceText.className = "totalPriceText";
	totalPriceContainer.appendChild(totalPriceText);

	const checkoutBtnContainer = document.createElement("div");
	checkoutBtnContainer.className = "checkoutBtnContainer";
	checkoutContainer.appendChild(checkoutBtnContainer);

	const checkoutBtn = document.createElement("button");
	checkoutBtn.className = "checkoutBtn";
	checkoutBtn.textContent = "CHECKOUT";
	checkoutBtnContainer.appendChild(checkoutBtn);

	itemsCartContainer.appendChild(checkoutContainer);

	updateTotalPrice();
}

function populateCartItem(itemElement, itemData) {
	console.log("populating", itemData);

	itemElement.dataset.itemId = itemData.id;

	const imgCartItem = itemElement.querySelector(".imgCartItem");
	const nameCartItemText = itemElement.querySelector(".nameCartItemText");
	const priceText = itemElement.querySelector(".priceText");
	const quantityText = itemElement.querySelector(".quantityText");
	const decreaseBtn = itemElement.querySelector(".decreaseBtn");
	const increaseBtn = itemElement.querySelector(".increaseBtn");
	const closeBtn = itemElement.querySelector(".closeBtn");

	if (imgCartItem) {
		imgCartItem.src = itemData.image;
		imgCartItem.alt = itemData.name;
		console.log("image set", imgCartItem.src);
	} else {
		console.log("image not found");
	}

	if (nameCartItemText) {
		nameCartItemText.textContent = itemData.name;
		console.log("Name set:", itemData.name); // Debug log
	} else {
		console.error("Name element not found");
	}

	if (quantityText) {
		quantityText.textContent = itemData.quantity;
		console.log("Quantity set:", itemData.quantity); // Debug log
	} else {
		console.error("Quantity element not found");
	}

	if (priceText) {
		priceText.textContent = `$${(
			itemData.price * itemData.quantity
		).toFixed(2)}`;
		console.log("Price set:", priceText.textContent); // Debug log
	} else {
		console.error("Price element not found");
	}

	if (decreaseBtn) {
		decreaseBtn.addEventListener("click", () => {
			const updatedItem = decreaseQuantity(itemData.id);
			if (updatedItem) {
				updateItemInDOM(itemElement, updatedItem);
			} else {
				itemElement.remove();
			}
			updateTotalPrice();
		});
	} else {
		console.error("Decrease button not found");
	}

	if (increaseBtn) {
		increaseBtn.addEventListener("click", () => {
			const updatedItem = increaseQuantity(itemData.id);
			if (updatedItem) {
				updateItemInDOM(itemElement, updatedItem);
				updateTotalPrice();
			}
		});
	} else {
		console.error("Increase button not found");
	}

	if (closeBtn) {
		closeBtn.addEventListener("click", () => {
			deleteItem(itemData.id);
			itemElement.remove();
			updateTotalPrice();
		});
	} else {
		console.error("Close button not found");
	}
}

function updateTotalPrice() {
	const cartItems = getCartItems();
	const totalPriceElement =
		itemsCartContainer.querySelector(".totalPriceText");

	const total = cartItems.reduce(
		(sum, item) => sum + item.quantity * item.price,
		0
	);
	if (totalPriceElement) {
		totalPriceElement.textContent = `$${total.toFixed(2)}`;
	} else {
		console.error("total price not found");
	}
}

function updateItemInDOM(itemElement, item) {
	const quantityText = itemElement.querySelector(".quantityText");
	const priceText = itemElement.querySelector(".priceText");

	if (quantityText) {
		quantityText.textContent = item.quantity.toString();
	}
	if (priceText) {
		priceText.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
	}
}

export { itemsCartContainer };
