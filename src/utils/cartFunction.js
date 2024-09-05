let totalItemsInCart = 0;
let cartItems = [];

export function updateCartCounter() {
	const cartCounterDisplay = document.querySelector(".cartCounter");
	if (cartCounterDisplay) {
		cartCounterDisplay.textContent = totalItemsInCart.toString();
	}
}

export function addToCart(item) {
	const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
	if (existingItem) {
		existingItem.quantity += 1;
	} else {
		cartItems.push({...item, quantity: 1});
	}
	totalItemsInCart++;
	updateCartCounter();
}
export function decreaseQuantity(itemId) {
	const item = cartItems.find((item) => item.id === itemId);

	if (!item) {
		return console.error("item not found");
	}

	if (item.quantity > 1) {
		item.quantity--;
		totalItemsInCart--;
	} else {
		deleteItem(itemId);
		return;
	}
    updateCartCounter()
	return item;
}

export function increaseQuantity(itemId) {
	const item = cartItems.find((item) => item.id === itemId);

	if (!item) {
		return console.error("item not found");
	}

	item.quantity++;

	const itemElement = document.querySelector(`[data-item-id="${itemId}]`);
	if (itemElement) {
		const quantityText = document.querySelector(".quantityText");
		quantityText.textContent = item.quantity.toString();

		const priceText = itemElement.querySelector(".priceText");
		priceText.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
	} else {
		console.error("Item element not found in DOM");
	}
    updateCartCounter()
	return item;
}

export function deleteItem(itemId) {
	const itemIndex = cartItems.findIndex((item) => item.id === itemId);
	if (itemIndex !== -1) {
		totalItemsInCart -= cartItems[itemIndex].quantity;
		cartItems.splice(itemIndex, 1);
        updateCartCounter();
	}
    return null
}

export function getCartItems() {
	return cartItems;
}

export function clearCart() {
	cartItems = [];
	totalItemsInCart = 0;
	updateCartCounter();
}

export function initializeCart() {
}

export function getCartItemCount() {
	return totalItemsInCart;
}
