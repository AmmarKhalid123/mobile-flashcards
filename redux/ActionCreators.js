import * as ActionTypes from './ActionTypes';

export function setDecks(decks){
    return {
        type: ActionTypes.SET_DECKS,
        payload: decks
    }
}

export function addDeck(question) {
    return {
        type: ActionTypes.ADD_DECK,
        payload: question
    }
}