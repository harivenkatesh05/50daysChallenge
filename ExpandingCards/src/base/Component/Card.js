// import { getAsHTMLTemplate } from '../Utility/HTMLParser.js';
// import cardTemplate from '../Templates/cardTemplate.html';
// import "../Styles/card.css"

export class Card {
    #dom
    #name

    constructor(cardID, dataStore, eventHandler) {
        // const template = getAsHTMLTemplate(cardTemplate);
        const template = document.getElementById('cardTemplate').content.cloneNode(true);
        this.#dom  = template.querySelector('.card');

        this.#name = this.#dom.querySelector('.name');
        this.#name.textContent = dataStore.getTitle(cardID);

        const imgTag = this.#dom.querySelector('.image');
        imgTag.src   = dataStore.getImgSrc(cardID);

        this.cardID      = cardID;
        this.isCollapsed = null;
        dataStore.getCollapseState(cardID) ? this.collapse() : this.expand();

        this.#addListener(eventHandler)
    }

    setDimension(width, height) {
        this.#dom.style.width  = width;
        this.#dom.style.height = height;
    }

    appendTo(container) {
        container.append(this.#dom);
    }

    collapse() {
        this.isCollapsed = true;
        this.#dom.classList.add('collapse');
        this.#dom.classList.remove('expand');
    }

    expand() {
        this.isCollapsed = false;
        this.#dom.classList.add('expand');
        this.#dom.classList.remove('collapse');    
    }

    getCollapseState() {
        return this.isCollapsed;
    }

    #addListener(eventHandler) {
        this.#dom.addEventListener('click', () => {
            eventHandler.onClick(this.cardID, this);
        })
    }
}

