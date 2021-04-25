import { BUY_CAKE, BUY_CAKE_Add } from "./cakeTypes"
const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        case BUY_CAKE_Add: return {
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
        default: return state
    }
}

export default cakeReducer;