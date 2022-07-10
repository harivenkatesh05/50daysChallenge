export class AppController {
    constructor(dataStore, cardView) {
        this.dataStore = dataStore;
        this.cardView  = cardView;
    }

    attach() {
        this.dataStore.addCollapseStateChangeObserver((modifiedCardIDs) => {
            this.onCardCollapseStateChanged(modifiedCardIDs);
        })
    }

    onCardCollapseStateChanged(modifiedCardIDs) {
        modifiedCardIDs.forEach(cardID => {
            this.cardView.setCollapseState(cardID, this.dataStore.getCollapseState(cardID));
        });
    }
}