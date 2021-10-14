import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

//initial/ default state which exist if nothing is present
const initialState = {
    restaurants: [],
    selectedRestaurant: {},
};

const restaurantReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RESTAURANT:
            return {
                ...state,
                restaurants: action.payload,
            };
        case GET_SPECIFIC_RESTAURANT:
            return{
                ...state,
                selectedRestaurant: action.payload,
            };
        default:
            return{
                ...state,
            };
    }
};

export default restaurantReducer;