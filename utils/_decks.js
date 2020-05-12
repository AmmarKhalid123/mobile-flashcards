import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = 'DECK_STORAGE_KEY';

export function getDecks () {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function saveDeckTitle (title) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[title]: {title: title, questions: []}}))
}