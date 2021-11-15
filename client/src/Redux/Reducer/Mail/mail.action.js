import axios from "axios";

import { PASS_RESET_MAIL } from "./mail.type";

export const sendMail = (mailInfo) => async (dispatch) => {
    try{
        const mail = await axios({
            method: "POST",
            url: "http://localhost:5000/mail",
            data: {mailData: mailInfo},
        });

        return dispatch({ type: PASS_RESET_MAIL, payload: mail.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}; 