import landingPageImage from "../assets/imageLandingPage.svg";
import sushiImage from "../assets/sushiMenu.svg";
import ramenImage from "../assets/ramenMenu.svg";
import mochiImage from "../assets/mochiMenu.svg";
import onigiriImage from "../assets/onigiriMenu.svg";
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import { navigateTo } from "../navigation";

export function renderHomePage() {
	const contentHomeWrapper = document.createElement("div");
	contentHomeWrapper.className = "contentHomeWrapper";

	const heroSection = createHeroSection();
	heroSection.setAttribute("data-aos", "fade-up");

	const menuPreviewSection = createMenuPreviewSection();
	menuPreviewSection.setAttribute("data-aos", "fade-up");
	menuPreviewSection.setAttribute("data-aos-delay", "200");

	const testimonialsSection = createTestimonialsSection();
	testimonialsSection.setAttribute("data-aos", "fade-up");
	testimonialsSection.setAttribute("data-aos-delay", "400");

	contentHomeWrapper.appendChild(heroSection);
	contentHomeWrapper.appendChild(menuPreviewSection);
	contentHomeWrapper.appendChild(testimonialsSection);

	// addDecorativeElements(contentHomeWrapper)

	return contentHomeWrapper;
}

function createHeroSection() {
	const heroSection = document.createElement("div");
	heroSection.className = "heroSection";

	const heroTextContainer = document.createElement("div");
	heroTextContainer.className = "heroTextContainer";

	const heroTextLine1 = document.createElement("p");
	heroTextLine1.className = "heroTextLine1";
	heroTextLine1.textContent = "TASTE THE TRADITION";
	heroTextContainer.appendChild(heroTextLine1);

	const heroTextLine2 = document.createElement("p");
	heroTextLine2.className = "heroTextLine2";
	heroTextLine2.textContent = "OF JAPAN";
	heroTextContainer.appendChild(heroTextLine2);

	heroSection.appendChild(heroTextContainer);

	const heroCtaBtn = document.createElement("button");
	heroCtaBtn.className = "heroCtaBtn";
	heroCtaBtn.textContent = "Order Now";
	heroCtaBtn.addEventListener("click", () => {
		navigateTo("menu");
	});
	heroSection.appendChild(heroCtaBtn);

	const heroImage = document.createElement("img");
	heroImage.className = "heroImage";
	heroImage.src = landingPageImage;
	heroImage.alt = "Tradicional Japanese Dish";
    heroImage.loading = 'lazy'
	heroImage.onerror = () => {
		console.log("failed to load hero image");
	};
	heroImage.loading = "lazy";
	heroSection.appendChild(heroImage);

	return heroSection;
}

function createMenuPreviewSection() {
	const menuPreviewSection = document.createElement("div");
	menuPreviewSection.className = "menuPreviewContainer";

	const menuPreviewHeaderContainer = document.createElement("div");
	menuPreviewHeaderContainer.className = "menuPreviewHeaderContainer";
	menuPreviewSection.appendChild(menuPreviewHeaderContainer);

	const headerText = document.createElement("p");
	headerText.className = "headerText";
	headerText.textContent = "MENU";
	menuPreviewHeaderContainer.appendChild(headerText);

	const menuCardsContainer = document.createElement("div");
	menuCardsContainer.className = "menuCardsContainer";
	menuPreviewSection.appendChild(menuCardsContainer);

	const cards = [
		{ name: "SUSHI", varieties: "3 varieties", image: sushiImage },
		{ name: "RAMEN", varieties: "2 varieties", image: ramenImage },
		{ name: "MOCHI", varieties: "2 varieties", image: mochiImage },
		{ name: "ONIGIRI", varieties: "2 varieties", image: onigiriImage },
	];
	cards.forEach((cardInfo) => {
		const card = document.createElement("div");
		card.className = "menuCard";
		menuCardsContainer.appendChild(card);

		const cardImg = document.createElement("img");
		cardImg.className = "cardImg";
		cardImg.src = cardInfo.image;
		cardImg.alt = cardInfo.name;
        cardImg.loading = 'lazy'
		card.appendChild(cardImg);

		const ctgAndVart = document.createElement("div");
		ctgAndVart.className = "ctgAndVart";
		card.appendChild(ctgAndVart);

		const categoryText = document.createElement("p");
		categoryText.className = "categoryText";
		categoryText.textContent = cardInfo.name;
		ctgAndVart.appendChild(categoryText);

		const varietiesText = document.createElement("p");
		varietiesText.className = "varietiesText";
		varietiesText.textContent = cardInfo.varieties;
		ctgAndVart.appendChild(varietiesText);

		const btnContainer = document.createElement("div");
		btnContainer.className = "btnContainer";
		card.appendChild(btnContainer);

		const btnOrderNow = document.createElement("button");
		btnOrderNow.className = "btnOrderNow";
		btnOrderNow.textContent = "ORDER NOW";
		btnOrderNow.addEventListener("click", () => {
			navigateTo("menu", cardInfo.name.toLocaleLowerCase());
		});
		btnContainer.appendChild(btnOrderNow);
	});

	return menuPreviewSection;
}

function createTestimonialsSection() {
	const testimonialsSection = document.createElement("div");
	testimonialsSection.className = "testimonialsSection";

	const headerReviewContainer = document.createElement("div");
	headerReviewContainer.className = "headerReviewContainer";
	testimonialsSection.appendChild(headerReviewContainer);

	const headerText = document.createElement("p");
	headerText.className = "headerText";
	headerText.textContent = "TESTIMONIALS";
	headerReviewContainer.appendChild(headerText);

	const reviewsContainer = document.createElement("div");
	reviewsContainer.className = "reviewsContainer";
	testimonialsSection.appendChild(reviewsContainer);

	const reviews = [
		{ name: "review1", image: review1 },
		{ name: "review2", image: review2 },
		{ name: "review3", image: review3 },
	];
	reviews.forEach((review, index) => {
		const reviewCard = document.createElement("div");
		reviewCard.className = "reviewCard";
		reviewCard.id = `reviewCard${index + 1}`;

		reviewsContainer.appendChild(reviewCard);

		const reviewCardImg = document.createElement("img");
		reviewCardImg.className = "reviewCardImg";
		reviewCardImg.src = review.image;
		reviewCardImg.alt = review.name;
		reviewCard.appendChild(reviewCardImg);
	});

	return testimonialsSection;
}
