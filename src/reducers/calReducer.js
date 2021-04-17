import {DELETE_SYMBOL, ADD_SYMBOL, EVEN, CLEAR_SYMBOL} from "../const/index";

const initialState = {
    val : '',
    res : 0,
    isEval : false
}

const calReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_SYMBOL:
            if(state.isEval === true) {
                state.val = action.val;
                state.isEval = false;
                return state = {
                    ...state,
                }
            }
            const reg = /\+|-|\*|\/|%/;
            if(reg.test(state.val[state.val.length-1]) && reg.test(action.val)) {
                return state = {
                    ...state,
                }
            }
            if(state.val[state.val.length-1]==="0" && reg.test(state.val[state.val.length-2])) {
                return state = {
                    ...state,
                    val : state.val.replace(state.val[state.val.length-1],"") + action.val
                }
            }
            if(state.val[0] === "0" && action.val === "0") {
                return state = {
                    ...state,
                }
            }
            return state = {
                ...state,
                val : state.val + action.val,
            }
        case EVEN:
            try {
                eval(state.val)
            }
            catch(e) {
                return state = {
                    ...state,
                    res : "Syntax Error",
                    isEval : true
                }
            }
            return state = {
                ...state,
                res : eval(state.val),
                isEval : true
            }
        case DELETE_SYMBOL:
            if(state.val === "0") {
                state.val = state.val.substr(1);
            }
            return state = {
                ...state,
                val : state.val.substr(0, state.val.length - 1),
            }
        case CLEAR_SYMBOL:
            return state = {
                ...state,
                val : "",
                res : 0
            }
        default:
            return state;
    };   
}

export default calReducer;