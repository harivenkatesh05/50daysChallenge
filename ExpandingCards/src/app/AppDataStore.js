export class AppDataStore{
    constructor(configure) {
        this.configure      = configure;
        this.collapseStates = [];

        this.collapseStatesObserver = [];
        this.cardInOpen = 0;
   
        this.parser(configure);

    }

    parser(configuration) {
        const data = configuration.data;
        this.collapseStates = data.map((value, i) => i !== 0);
    }
    
    setDimension(width, height) {
        this.configure.width  = width;
        this.configure.height = height;
    }

    setCollapseState(collapseStates) {
        this.collapseStates = collapseStates;
    }

    getWidth() {
        return this.configure.width;
    }

    getHeight() {
        return this.configure.height;
    }

    getCardOrder() {
        const length = this.configure.data.length;
        return Array.from({length}, (_, i) => i);
    }

    getTitle(cardID)  {
        return this.configure.data[cardID].title;
    }

    getImgSrc(cardID) {
        return this.configure.data[cardID].imgSrc;
    }

    getCollapseState(cardID) {
        return this.collapseStates[cardID];
    }

    changeOpenCard(cardID) {
        const currentState = this.collapseStates[cardID];
        if(currentState) {
            this.collapseStates[cardID] = !currentState;
            this.collapseStates[this.cardInOpen] = true;
            
            disptach(this.collapseStatesObserver, [cardID, this.cardInOpen]);
            this.cardInOpen = cardID;
        }        
    }

    addCollapseStateChangeObserver(callback) {
        this.collapseStatesObserver.push(callback);
    }

}

function disptach(observers, ...params) {
    observers.forEach((observer) => observer(...params));
}