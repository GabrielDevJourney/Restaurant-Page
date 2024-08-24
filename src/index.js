import './styles/main.css'
import { Header } from "./components/Header.js";
import { initRouter } from './router.js';

document.addEventListener("DOMContentLoaded", () => {
	const body = document.body;

	const header = new Header();
	body.appendChild(header.getElement());

    const content = document.createElement('div')
    content.id = 'content'
    document.body.appendChild(content)

    initRouter(header)

	// const main = document.createElement("main");
	// main.appendChild(renderHomePage());
	// body.appendChild(main);

	// const footer = renderFooter();
	// body.appendChild(footer);
});
