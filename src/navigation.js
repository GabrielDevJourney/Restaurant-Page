// navigation.js

let header;
let updatePageContentFunction;

export function initNavigation(headerInstance, updatePageContent) {
	header = headerInstance;
	updatePageContentFunction = updatePageContent;

	window.addEventListener("hashchange", handleHashChange);

	// Initial page load
	const initialHash = window.location.hash.slice(1);
	const [initialPage, initialCategory] = initialHash.split("/");
	navigateTo(initialPage || "home", initialCategory);
}

export function navigateTo(page, category = null) {
	console.log("Navigating to:", page);
	const normalizedPage = page.toLowerCase();
	window.location.hash = normalizedPage;
	if (header && header.updateActiveLink) {
		header.updateActiveLink(normalizedPage);
	}
	if (updatePageContentFunction) {
		updatePageContentFunction(normalizedPage, category);
	}
}

function handleHashChange() {
	const hash = window.location.hash.slice(1) || "home";
	const [page, category] = hash.split("/");
	navigateTo(page, category);
}
