import { renderHomePage } from "./pages/Home.js";
import { renderMenuPage } from "./pages/Menu.js";
import { renderAboutPage } from "./pages/About.js";
import AOS from "aos";
import { renderFooter } from "./components/Footer.js";
import { initNavigation, navigateTo } from "./navigation.js";

const routes = {
	home: renderHomePage,
	menu: renderMenuPage,
	about: renderAboutPage,
};

export function initRouter(header) {
	let footerElement = null;

	function updatePageContent(page, category = null) {
		const contentDiv = document.getElementById("content");
		contentDiv.innerHTML = ""; // Clear current content

		if (!footerElement) {
			footerElement = renderFooter();
			document.body.appendChild(footerElement);
		}

		contentDiv.style.opacity = "0";
		contentDiv.style.visibility = "hidden";
		footerElement.style.opacity = "0";
		footerElement.style.visibility = "hidden";
		footerElement.style.display = "none";

		setTimeout(() => {
			contentDiv.innerHTML = ""; // Clear current content

			if (routes[page]) {
				const newContent = routes[page]();
				contentDiv.appendChild(newContent);

				// Refresh AOS for new content
				if (typeof AOS !== "undefined") {
					AOS.refresh();
				}

				// Show content and footer after new content is loaded
				requestAnimationFrame(() => {
					contentDiv.style.opacity = "1";
					contentDiv.style.visibility = "visible";
					footerElement.style.display = "flex";

					setTimeout(() => {
						footerElement.style.opacity = "1";
						footerElement.style.visibility = "visible";
					}, 50);

					if (page === "menu" && category) {
						setTimeout(() => {
							const categoryElement = document.getElementById(
								category.trim().toLowerCase()
							);
							if (categoryElement) {
								categoryElement.scrollIntoView({
									behavior: "smooth",
									block: "start",
								});
							}
						}, 100);
					}
				});
			} else {
				contentDiv.textContent = "404 - Page not found";
				requestAnimationFrame(() => {
					contentDiv.style.opacity = "1";
					contentDiv.style.visibility = "visible";
					footerElement.style.display = "block";
					footerElement.style.opacity = "1";
					footerElement.style.visibility = "visible";
				});
			}
		}, 300);
	}

	initNavigation(header, updatePageContent);

    window.navigateTo = navigateTo
}
