import facebookIco from "../assets/facebookIco.png";
import instagramIco from "../assets/instagramIco.png";
import githubIco from "../assets/githubIco.png";

function renderFooter() {
	const footerContainer = document.createElement("div");
	footerContainer.className = "footerContainer";

	const logoContainerFooter = document.createElement("div");
	logoContainerFooter.className = "logoContainerFooter";
	footerContainer.appendChild(logoContainerFooter);

	const logoTextFooter = document.createElement("p");
	logoTextFooter.className = "logoTextFooter";
	logoTextFooter.textContent = "KAIZEN HOUSE";
	logoContainerFooter.appendChild(logoTextFooter);

	const navigationContainerFooter = document.createElement("div");
	navigationContainerFooter.className = "navigationContainerFooter";
	footerContainer.appendChild(navigationContainerFooter);

	const homeNavigationContainer = document.createElement("div");
	homeNavigationContainer.className = "homeNavigationContainer";
	navigationContainerFooter.appendChild(homeNavigationContainer);

	const homeText = document.createElement("a");
	homeText.className = "homeText";
	homeText.textContent = "HOME";
	homeText.href = "#" + homeText.textContent.toLowerCase();
	homeText.dataset.page = homeText.textContent.toLowerCase();
	homeText.addEventListener("click", (e) => {
		e.preventDefault();
		const navigateEvent = new CustomEvent("navigate", {
			detail: {
				page: "home",
			},
		});
		window.dispatchEvent(navigateEvent);
	});
	homeNavigationContainer.appendChild(homeText);

	const menuNavigationContainer = document.createElement("div");
	menuNavigationContainer.className = "menuNavigationContainer";
	navigationContainerFooter.appendChild(menuNavigationContainer);

	const menuText = document.createElement("a");
	menuText.className = "menuText";
	menuText.textContent = "MENU";
	menuText.href = "#" + menuText.textContent.toLowerCase();
	menuText.dataset.page = menuText.textContent.toLowerCase();
	menuText.addEventListener("click", (e) => {
		e.preventDefault();
		const navigateEvent = new CustomEvent("navigate", {
			detail: {
				page: "menu",
			},
		});
		window.dispatchEvent(navigateEvent);
	});
	menuNavigationContainer.appendChild(menuText);

	const categoriesNavigationContainer = document.createElement("div");
	categoriesNavigationContainer.className = "categoriesNavigationContainer";
	menuNavigationContainer.appendChild(categoriesNavigationContainer);

	const linksList = document.createElement("ul");
	linksList.className = "linksList";
	categoriesNavigationContainer.appendChild(linksList);
	const links = [
		{ name: "Sushi" },
		{ name: "Ramen" },
		{ name: "Mochi" },
		{ name: "Onigiri" },
	];
	links.forEach((link) => {
		const listItem = document.createElement("li");
		listItem.className = "listItem";
		linksList.appendChild(listItem);

		const linkHref = document.createElement("a");
		listItem.appendChild(linkHref);
		linkHref.className = "linkHref";
		linkHref.id = `linkHref${link.name}`;
		linkHref.textContent = link.name;
		linkHref.href = "#" + link.name.toLowerCase();
		linkHref.dataset.link = link.name.toLowerCase();
		linkHref.addEventListener("click", (e) => {
			e.preventDefault();
			const navigateEvent = new CustomEvent("navigate", {
				detail: {
					page: "menu",
					category: link.name.toLocaleLowerCase(),
				},
			});
			window.dispatchEvent(navigateEvent);
		});

		linksList.appendChild(linkHref);
	});

	const aboutContainer = document.createElement("div");
	aboutContainer.className = "aboutContainer";
	navigationContainerFooter.appendChild(aboutContainer);

	const aboutText = document.createElement("a");
	aboutText.className = "aboutText";
	aboutText.textContent = "ABOUT";
	aboutText.href = "#" + aboutText.textContent.toLowerCase();
	aboutText.dataset.page = aboutText.textContent.toLowerCase();
	aboutText.addEventListener("click", (e) => {
		e.preventDefault();
		const navigateEvent = new CustomEvent("navigate", {
			detail: {
				page: "about",
			},
		});
		window.dispatchEvent(navigateEvent);
	});
	aboutContainer.appendChild(aboutText);

	const iconsWrapper = document.createElement("div");
	iconsWrapper.className = "iconsWrapper";
	footerContainer.appendChild(iconsWrapper);

	const iconsToDisplay = [
		{ name: "facebookIco", image: facebookIco },
		{ name: "instagramIco", image: instagramIco },
		{
			name: "githubIco",
			image: githubIco,
			linkToGithub: `https://github.com/GabrielDevJourney/Restaurant-Page`,
		},
	];

	function createIconContainer(icon) {
		const iconContainer = document.createElement("div");
		iconContainer.className = "iconContainer";
		iconContainer.id = `iconContainer${icon.name}`;
		return iconContainer;
	}
	function createIconImg(icon) {
		const iconImg = document.createElement("img");
		iconImg.className = `iconImage${icon.name}`;
		iconImg.src = icon.image;
		iconImg.alt = icon.name;

        return iconImg
	}

	iconsToDisplay.forEach((icon) => {
        const iconContainer = createIconContainer(icon)
        const iconImg = createIconImg(icon)
        iconContainer.appendChild(iconImg)

		if (icon.name === "githubIco") {
			const a = document.createElement("a");
			a.className = "linkToGithub";
			a.href = icon.linkToGithub;
            a.target = '_blank'
            a.rel = 'noopener noreferrer'

			a.appendChild(iconContainer);
			iconsWrapper.appendChild(a);
		} else {
			iconsWrapper.appendChild(iconContainer)
		}
	});

	return footerContainer;
}

renderFooter();

export { renderFooter };
