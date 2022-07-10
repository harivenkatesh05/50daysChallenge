// import containerTemplate from './Templates/containerTemplate.html'
// import './Styles/container.css'
import { getAsHTMLTemplate } from './Utility/HTMLParser.js'
import { Card } from './Component/Card.js';
import { CardEventHandler } from './CardEventHandler.js';

export class CardContainer {
    #dom;
    #cards;

    constructor(dataStore, eventHandler) {
        this.dataStore    = dataStore;
        this.eventHandler = eventHandler || new CardEventHandler();

        // const template = getAsHTMLTemplate(containerTemplate);
        const template = document.getElementById('containerTemplate').content.cloneNode(true);
        this.#dom      = template.querySelector('.container');
        this.#cards    = {}

        this.setDimension();
    }

    appendTo(container) {
        container.appendChild(this.#dom);
    }

    setDimension() {
        this.#dom.style.width  = this.dataStore.getWidth();
        this.#dom.style.height = this.dataStore.getHeight();      
    }

    setCollapseState(cardID, state) {
        state ? this.#cards[cardID].collapse() : this.#cards[cardID].expand();
    }

    reset() {
        this.#dom.innerHTML = '';
    }

    render() {
        this.reset();
        const cardOrder = this.dataStore.getCardOrder();
        cardOrder.forEach((cardID) => {
            const card = new Card(cardID, this.dataStore, this.eventHandler);
            card.appendTo(this.#dom);

            this.#cards[cardID] = card;
        })
    }
}