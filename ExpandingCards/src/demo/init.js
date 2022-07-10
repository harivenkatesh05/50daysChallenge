import { ExpandingCards } from "../app/ExpandingCards.js";

const container = document.body.querySelector('.app');

fetch('./data.json') //No I18N
	.then(response => response.json() )
	.then(respData =>  parseResponse(respData) );

function parseResponse(respData){
	const configuration = {
		data       : respData,
        height     : '700px' 
	}

	const expandingCards = new ExpandingCards(container, configuration);
    // expandingCards.load(configuration);
	window.expandingCardsObj = expandingCards
}