import './styles/main.css'
import { Header } from "./components/Header.js";
import { initRouter } from './router.js';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { loadCartData, getCartItems } from "./utils/cartFunction.js";
import { itemsCartContainer, populateCartModal, showModal } from "./components/cartModal.js";

function initializeCart(){
    const cartItems = getCartItems()
    populateCartModal(cartItems)
}

document.body.appendChild(itemsCartContainer)


document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1000,
        once: true
    })

	const body = document.body;

	const header = new Header();
	body.appendChild(header.getElement());

    const content = document.createElement('div')
    content.id = 'content'
    document.body.appendChild(content)

    initRouter(header)
});

initializeCart()