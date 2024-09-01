import { renderHomePage } from "./pages/Home.js";
import { renderMenuPage } from "./pages/Menu.js";
import { renderAboutPage } from "./pages/About.js";
import AOS from "aos";
import { renderFooter } from "./components/Footer.js";

const routes = {
	home: renderHomePage,
	menu: renderMenuPage,
	about: renderAboutPage,
};

export function initRouter(header) {
	let footerElement = null;

	window.navigateTo = (page, category = null) => {
		console.log("Navigating to:", page); // Add this debug log
		const normalizedPage = page.toLowerCase();
		window.location.hash = normalizedPage;
		header.updateActiveLink(normalizedPage);
		updatePageContent(normalizedPage, category);
	};

	//UPDATE PAGE COTENT
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
	window.addEventListener("navigate", (event) => {
		updatePageContent(event.detail.page, event.detail.category);
	});

	// Handle initial page load and browser back/forward
	window.addEventListener("hashchange", () => {
		const hash = window.location.hash.slice(1) || "home";
		const [page, category] = hash.split("/");
		updatePageContent(page, category);
	});

	// Initial page load
	const initialHash = window.location.hash.slice(1);
	const [initialPage, initialCategory] = initialHash.split("/");
	updatePageContent(initialPage || "home", initialCategory);
}
