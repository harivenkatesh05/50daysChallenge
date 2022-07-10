export class CardEventHandler {
    constructor() {

    }

    onClick(cardID, card) {
        const isCollapsed = card.getCollapseState();
        isCollapsed ? card.expand() : card.collapse();
    }
}