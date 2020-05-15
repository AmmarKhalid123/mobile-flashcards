import * as ActionTypes from './ActionTypes';
import { func } from 'prop-types';

export function setDecks(decks){
    return {
        type: ActionTypes.SET_DECKS,
        payload: decks
    }
}

export function addDeckTitle(title) {
    return {
        type: ActionTypes.ADD_DECK,
        payload: title
    }
}

export function removeDeck(title) {
    return {
        type: ActionTypes.REMOVE_DECK,
        payload: title
    }
}
export function addCardToDeck(title, question, answer) {
    return {
        type: ActionTypes.ADD_CARD_TO_DECK,
        payload: {title, question, answer}
    }
}