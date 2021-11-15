import { GET_USER, SELF, CLEAR_USER, GET_USERID } from "./user.type";

const initialState = {
    user: {},
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER:
            return{
                ...state,
            };
        case SELF:
            return {
                ...state,
                user: action.payload,
            };
        case CLEAR_USER:
            return {};
        case GET_USERID:
            return{
                ...state,
                };
        default:
            return {
                ...state,
            };
    }
};

export default userReducer;