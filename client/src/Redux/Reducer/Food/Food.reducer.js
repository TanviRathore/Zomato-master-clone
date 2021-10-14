import { GET_FOOD, GET_FOOD_LIST } from "./Food.type";

const initialState = {
    foodList: [],
    food: {}
};

const FoodReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_FOOD_LIST:
            return {
                ...state,
                foodList: action.payload,
            };
        case GET_FOOD:
            return {
                ...state,
                food: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default FoodReducer;