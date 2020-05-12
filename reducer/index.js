import * as ActionTypes from '../redux/ActionTypes'

export default function decks (state={}, action) {
    switch(action.type) {
        case ActionTypes.SET_DECKS:
            return action.payload
        case ActionTypes.ADD_DECK:
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    title: action.payload,
                    questions: []
                }
            }
        default:
            return state
    }
}