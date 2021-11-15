import { UPDATE_PASS, GEN_OTP, GET_OTP, CHECK_OTP } from "./password.type";

const initialState = {
    user: {},
};

const passReducer = (state= initialState, action) => {
    switch (action.type) {
        case CHECK_OTP:
            return {
                ...state,
            };
        case UPDATE_PASS:
            return {
                ...state,
            };
        case GEN_OTP:
            return {
                ...state,
            };
        case GET_OTP:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
};

export default passReducer;