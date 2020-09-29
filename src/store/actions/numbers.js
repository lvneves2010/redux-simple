
import { MIN_CHANGED, MAX_CHANGED } from './actionTypes'

export function changeMin(newNumber) {
    return {
        type: MIN_CHANGED,
        payload: newNumber
    }
}

export function changeMax(newNumber) {
    return {
        type: MAX_CHANGED,
        payload: newNumber
    }
}

