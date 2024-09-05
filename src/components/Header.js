import cartIconUrl from "../assets/cartIcon.png";
import {
	initializeCart,
    updateCartCounter,
} from "../utils/cartFunction.js";
import { showModal, itemsCartContainer } from "./cartModal.js";

document.body.appendChild(itemsCartContainer);
export class Header {
	constructor() {
		this.pages = ["Home", "Menu", "About"];
		this.element = this.createHeader();
		this.navLinks = this.element.querySelectorAll(".navContainer a");

        window.addEventListener('DOMContentLoaded', () => {
            initializeCart()

            window.updateCartCounter = updateCartCounter
        })
	}
	createHeader() {
		const headerContainer = document.createElement("div");
		headerContainer.className = "headerContainer";

		//Logo text container
		const logoTextContainer = document.createElement("div");
		logoTextContainer.className = "logoTextContainer";
		const logoText = document.createElement("p");
		logoText.className = "logoText";
		logoText.textContent = "KAIZEN HOUSE";
		logoTextContainer.appendChild(logoText);
		headerContainer.appendChild(logoTextContainer);

		//NAV CONTAINER
		const navContainer = document.createElement("div");
		navContainer.className = "navContainer";
		this.pages.forEach((page) => {
			const a = document.createElement("a");
			a.href = "#" + page.toLocaleLowerCase();
			a.textContent = page;
			// i learned this today(19/08/24) so this will create a data*(data-page) attribute and will set it to the page name in lowercase known as a best practice since i will reuse the value for routing pages
			a.dataset.page = page.toLowerCase();
			a.addEventListener("click", (e) => {
				e.preventDefault();
				console.log("Link clicked:", e.target.dataset.page); // Add this debug log
				window.navigateTo(e.target.dataset.page);
			});
			navContainer.appendChild(a);
		});

		headerContainer.appendChild(navContainer);

		//ICON CONTAINER
		const iconContainer = document.createElement("div");
		iconContainer.className = "iconContainer";
        
        const cartHeaderBtn = document.createElement('button')
        cartHeaderBtn.className = 'cartBtn'
        cartHeaderBtn.addEventListener('click', showModal)
        iconContainer.appendChild(cartHeaderBtn)


		const cartIcon = document.createElement("img");
		cartIcon.className = "cartIcon";
		cartIcon.src = cartIconUrl;
		cartIcon.alt = "Cart";

		const cartItemCount = document.createElement("span");
		cartItemCount.className = "cartCounter";
		cartItemCount.textContent = "0";
		cartHeaderBtn.appendChild(cartIcon);
		cartHeaderBtn.appendChild(cartItemCount);

		headerContainer.appendChild(iconContainer);

		return headerContainer;
	}

	get currentPage() {
		const hash = window.location.hash.slice(1);
		return hash || "home";
	}

	updateActiveLink(activePage) {
		this.navLinks.forEach((link) => {
			if (link.dataset.page === activePage) {
				link.classList.add("activeLink");
			} else {
				link.classList.remove("activeLink");
			}
		});
	}

	getElement() {
		return this.element;
	}
}
