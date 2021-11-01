import { GET_CART, ADD_CART, DEL_CART, INC_QTY, DEC_QTY } from "./cart.type";

const initialState = {
    cart: [],
};

const cartReducer = (state= initialState, action) => {
    switch(action.type) {
        case GET_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case ADD_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case DEL_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case INC_QTY:
            return {
                ...state,
                cart: action.payload,
            };
        case DEC_QTY:
            return {
                ...state,
                cart: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default cartReducer;