import './styles/main.css'
import { createHeader } from "./components/Header.js";
import { renderHomePage } from "./pages/Home.js";
import { renderFooter } from "./components/Footer.js";

document.addEventListener("DOMContentLoaded", () => {
	const body = document.body;

	const header = createHeader();
	body.appendChild(header);

	// const main = document.createElement("main");
	// main.appendChild(renderHomePage());
	// body.appendChild(main);

	// const footer = renderFooter();
	// body.appendChild(footer);
});
