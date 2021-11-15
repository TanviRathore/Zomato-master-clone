import { PASS_RESET_MAIL } from "./mail.type";

const initialState = {
    mailInfo: {},
};

const mailReducer = (state = initialState, action) => {
    switch(action.type){
        case PASS_RESET_MAIL:
            return {
                ...state,
                mailInfo: action.payload,
            };
        default:
            return{
                ...state,
            };
    }
};

export default mailReducer;