import { GET_CART, ADD_CART, DEL_CART, INC_QTY, DEC_QTY } from "./cart.type";

export const getCart = () => async (dispatch) => {
    try{
        let cartData = {cart: []};

        if(localStorage.zomatoCart) {
            const {cart} = JSON.parse(localStorage.getItem("zomatoCart"));
            cartData.cart = cart;
        }

        return dispatch({ type: GET_CART, payload: cartData.cart });

    }catch(error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const addCart = (newFood) => async(dispatch) => {
    try{
        let cartData = {cart: []};

        if (localStorage.zomatoCart) {
            const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
            cartData.cart = cart;
        }

        cartData.cart.push(newFood);

        localStorage.setItem("zomatoCart", JSON.stringify({cart: cartData.cart}));

        return dispatch({ type: ADD_CART, payload: cartData.cart });
    }catch(error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};