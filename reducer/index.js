import * as ActionTypes from '../redux/ActionTypes'

export default function decks (state={}, action) {
    switch(action.type) {
        case ActionTypes.SET_DECKS:
            return action.payload

        case ActionTypes.ADD_DECK:
            return {
                ...state,
                [action.payload]: {
                    title: action.payload,
                    questions: []
                }
            }
        case ActionTypes.REMOVE_DECK:
            let newState = {...state, [action.payload]: undefined};
            delete newState[action.payload];
            return newState;
        
        case ActionTypes.ADD_CARD_TO_DECK:
            const { title, question, answer } = action.payload
            return {
                ...state,
                [title] : {
                    ...state[title],
                    questions: state[title].questions.concat({question, answer})
                }
            }
        default:
            return state
    }
}