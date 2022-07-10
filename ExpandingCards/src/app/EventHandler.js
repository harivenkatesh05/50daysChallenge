import { CardEventHandler } from "../base/CardEventHandler.js";

export class EventHandler extends CardEventHandler{
    constructor(dataStore) {
        super();
        this.dataStore = dataStore;
    }

    onClick(cardID, card) {
        this.dataStore.changeOpenCard(cardID);
    }
}