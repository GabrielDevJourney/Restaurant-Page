let totalItemsInCart = 0;
let cartItems = []

export function updateCartCounter() {
	const cartCounterDisplay = document.querySelector(".cartCounter");
	if (cartCounterDisplay) {
		cartCounterDisplay.textContent = totalItemsInCart.toString();
	}
}

export function addToCart(itemId, itemName, price) {
    const existingItem = cartItems.find((item) => item.id === itemId);
	if (existingItem) {
		existingItem.quantity += 1;
	} else {
		cartItems.push({
			id: itemId,
			name: itemName,
			price: price,
			quantity: 1,
		});
	}
	totalItemsInCart++;
	console.log(`Added ${itemName} to cart. Total items: ${totalItemsInCart}`);
	updateCartCounter();
	saveCartData();
}

export function getCartItems(){
    return cartItems
}

export function loadCartData() {
	const savedTotalItems = localStorage.getItem("totalItemsInCart");
	if (savedTotalItems) {
		totalItemsInCart = parseInt(savedTotalItems, 10);
        updateCartCounter()
	}
}

export function saveCartData() {
	localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export function initializeCart(){
    loadCartData()
}

export function getCartItemCount(){
    return totalItemsInCart
}