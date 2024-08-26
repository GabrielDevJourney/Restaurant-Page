import { renderHomePage } from "./pages/Home.js";
import { renderMenuPage } from "./pages/Menu.js";
import { renderAboutPage } from "./pages/About.js";

const routes = {
	home: renderHomePage,
	menu: renderMenuPage,
	about: renderAboutPage,
};

export function initRouter(header) {
	window.navigateTo = (page, category = null) => {
		console.log("Navigating to:", page); // Add this debug log
		const normalizedPage = page.toLowerCase();
		window.location.hash = normalizedPage;
		header.updateActiveLink(normalizedPage);
		updatePageContent(normalizedPage, category);
	};

    //Handle navigation of heroCtaBtn
    window.addEventListener('navigate', (event) => {
        navigateTo(event.detail.page, event.detail.category)
    })

	// Handle initial page load and browser back/forward
	window.addEventListener("hashchange", () => {
		const hash = window.location.hash.slice(1) || "home";
        const[page,category] = hash.split('/')
		navigateTo(page || 'home', category);
	});

    const initialHash = window.location.hash.slice(1);
	const [inicialPage, initialCategory] = initialHash.split("/");

	// Handle the initial page load
	navigateTo(inicialPage || "home", initialCategory);
}

function updatePageContent(page, category = null) {
	const contentDiv = document.getElementById("content");
	contentDiv.innerHTML = ""; // Clear current content

	if (routes[page]) {
        contentDiv.appendChild(routes[page]());

        if(page === 'menu' && category){
            setTimeout(() => {
                const categoryElement = document.getElementById(category)
                if(categoryElement){
                    categoryElement.scrollIntoView({behavior : 'smooth'})
                }
            }, 100)// delay to ensure render
        }

	} else {
		contentDiv.textContent = "404 - Page not found";
	}
}
