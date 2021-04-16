import {DELETE_SYMBOL, ADD_SYMBOL, EVEN, CLEAR_SYMBOL} from '../const/index';

export const actADD_SYMBOL = (val) => {
    return({
        type : ADD_SYMBOL,
        val
    })
}

export const actEVEN = () => {
    return({
        type : EVEN
    })
}

export const actDELETE_SYMBOL = () => {
    return({
        type : DELETE_SYMBOL
    })
}

export const actCLEAR_SYMBOL = () => {
    return({
        type : CLEAR_SYMBOL
    })
}

