import { CardContainer } from "../base/CardContainer.js";
import { CardDataStore } from "../base/CardDataStore.js";
import { AppController } from "./AppController.js";
import { AppDataStore } from "./AppDataStore.js";
import { EventHandler } from "./EventHandler.js";

export class ExpandingCards {
	#dataStore;
	#cardContainer;
	#eventHandler;
	// #controller
	

	constructor(container, configure) {
		this.#dataStore     = new AppDataStore(configure);
		this.#eventHandler  = new EventHandler(this.#dataStore);


		const abstractDataStore = ExpandingCards.getAbstractDataStore(this.#dataStore);
		this.#cardContainer     = new CardContainer(abstractDataStore, this.#eventHandler);

		const controller        = new AppController(this.#dataStore, this.#cardContainer);
		controller.attach();

		this.#cardContainer.appendTo(container);
		this.#cardContainer.render();
	}

	// load({data, collapseState}) {
	//     this.#dataStore.loadData(data);
	//     this.#dataStore.setCollapseState(collapseState);
	//     this.#cardContainer.render();
	// }

	setDimension(width, height) {
		this.#dataStore.setDimension(width, height);
		this.#cardContainer.setDimension();
	}
	
	static getAbstractDataStore(dataStore) {
		class AbstractDataStore extends CardDataStore {
			#dataStore;

			constructor(dataStore) {
				super()
				this.#dataStore = dataStore;
			}

			getWidth() {
				return this.#dataStore.getWidth() || '100%' ;
			}
		
			getHeight() {
				return this.#dataStore.getHeight() || '100%' ;
			}
		
			getCardOrder() {
				return this.#dataStore.getCardOrder();
			}
		
			getTitle(cardID)  {
				return this.#dataStore.getTitle(cardID);
			}
		
			getImgSrc(cardID) {
				return this.#dataStore.getImgSrc(cardID);
			}
		
			getCollapseState(cardID) {
				const isCollapsed = this.#dataStore.getCollapseState(cardID)
				return  isCollapsed === undefined ? true : isCollapsed;
			}
		
		}

		return new AbstractDataStore(dataStore);
	}
}
