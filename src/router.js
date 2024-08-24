import { renderHomePage } from "./pages/Home.js";
import { renderMenuPage } from "./pages/Menu.js";
import { renderAboutPage } from "./pages/About.js";

const routes = {
	home: renderHomePage,
	menu: renderMenuPage,
	about: renderAboutPage,
};

export function initRouter(header) {
	window.navigateTo = (page) => {
		console.log("Navigating to:", page); // Add this debug log
		const normalizedPage = page.toLowerCase();
		window.location.hash = normalizedPage;
		header.updateActiveLink(normalizedPage);
		updatePageContent(normalizedPage);
	};

    //Handle navigation of heroCtaBtn
    window.addEventListener('navigate', (event) => {
        navigateTo(event.detail.page)
    })

	// Handle initial page load and browser back/forward
	window.addEventListener("hashchange", () => {
		const page = window.location.hash.slice(1) || "home";
		navigateTo(page);
	});

	const inicialPage = window.location.hash.slice(1) || "home";

	// Handle the initial page load
	navigateTo(inicialPage);
}

function updatePageContent(page) {
	const contentDiv = document.getElementById("content");
	contentDiv.innerHTML = ""; // Clear current content

	if (routes[page]) {
		contentDiv.appendChild(routes[page]());
	} else {
		contentDiv.textContent = "404 - Page not found";
	}
}
