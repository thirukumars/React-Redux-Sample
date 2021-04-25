import { BUY_CAKE, BUY_CAKE_Add } from "./cakeTypes"

export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}
export const buyCakeAdd = () => {
    return {
        type: BUY_CAKE_Add
    }
}