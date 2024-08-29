import menuData from "../data/menuData.js";
import { createDishCard } from "../components/MenuItem.js";

function createCategorySection(categoryData) {
	if (!categoryData || !categoryData.category) {
		console.error("Invalid category data:", categoryData);
		return null;
	} //DEBUG

	const categorySection = document.createElement("div");
	categorySection.className = `${categoryData.category.toLowerCase()}-categorySection`;

	const categorySectionHeading = document.createElement("p");
	categorySectionHeading.textContent = categoryData.category;
	categorySectionHeading.className = "categorySectionHeadingText";
	categorySection.appendChild(categorySectionHeading);

	categoryData.dishes.forEach((dish) => {
		const dishCard = createDishCard(dish, categoryData.category);
		categorySection.appendChild(dishCard);
	});

	return categorySection;
}

export function renderMenuPage() {
	// MENU PAGE CONTAINER STRUCTURE
	const menuPageContainer = document.createElement("div");
	menuPageContainer.className = "menuPageContainer";

	const headerMenuPageContainer = document.createElement("div");
	headerMenuPageContainer.className = "headerMenuPageContainer";
	menuPageContainer.appendChild(headerMenuPageContainer);

	const headerMenuPageText = document.createElement("p");
	headerMenuPageText.className = "headerMenuPageText";
	headerMenuPageText.textContent = "MENU";
	headerMenuPageContainer.appendChild(headerMenuPageText);

	const mainContentContainer = document.createElement("div");
	mainContentContainer.className = "mainContentContainer";
	menuPageContainer.appendChild(mainContentContainer);

	//END OF MENU PAGE COTAINER STRUCTURE IN TERMS OF BIG SCOPE

	//MAIN CONTENT CONTAINER CONTENT STRUCTURE
	const menuCategoriesContainer = document.createElement("div");
	menuCategoriesContainer.className = "menuCategoriesContainer";
	mainContentContainer.appendChild(menuCategoriesContainer);

	menuData.forEach((categoryData) => {
		if (categoryData && categoryData.category) {
			const categorySection = createCategorySection(categoryData);
			if (categorySection) {
				menuCategoriesContainer.appendChild(categorySection);
			}
		} else {
			console.error("Invalid category data:", categoryData);
		}
	});

	const japoneseLettersContainer = document.createElement("div");
	japoneseLettersContainer.className = "japoneseLettersContainer";
	mainContentContainer.appendChild(japoneseLettersContainer);

	const japoneseText = document.createElement("p");
	japoneseText.className = "japoneseText";
	japoneseText.textContent = "お食事をお楽 しみください！";
	japoneseLettersContainer.appendChild(japoneseText);

	return menuPageContainer;
}
