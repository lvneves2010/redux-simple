import { MIN_CHANGED, MAX_CHANGED } from '../actions/actionTypes'

const initial = {
    min: 1,
    max: 10
}

export default function(state = initial, action) {
    switch(action.type) {
        case MIN_CHANGED:
            return {
                ...state,
                min: action.payload
            }
        case MAX_CHANGED:
            return {
                ...state,
                max:action.payload
            }
        default: 
            return state
    }
}