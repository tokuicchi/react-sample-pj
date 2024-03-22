import { increment, decrement } from '../actions'

const initialState = { value: 0 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case increment:
            return { value: state.value + 1 }
        case decrement:
            return { value: state.value - 1 }
        default:
            return state
    }
}

export default reducer;