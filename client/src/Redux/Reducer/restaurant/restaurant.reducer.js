import { GET_RESTAURANT } from "./restaurant.type";

//initial/ default state which exist if nothing is present
const initialState = {
    restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RESTAURANT:
            return {
                ...state,
                restaurants: action.payload,
            };
        default:
            return{
                ...state,
            };
    }
};

export default restaurantReducer;