import axios from "axios";
import { UPDATE_PASS, GEN_OTP, GET_OTP, CHECK_OTP } from "./password.type";

export const checkOtp = ({otpEnter, email}) => async(dispatch) => {

    // const userId = getUserId(email);
    try{
        await axios({
            method: "GET",
            url: `http://localhost:5000/password/checkOtp/${email}}`,
            data: {otpEnter}
        });

        return dispatch({ type: CHECK_OTP, payload: {} });
    }catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const updatePass = ({userId, password}) => async(dispatch) => {

    // const userId = getUserId(email);
    try{
        await axios({
            method: "PUT",
            url: `http://localhost:5000/user/update/${userId}`,
            data: {userData: password}
        });

        return dispatch({ type: UPDATE_PASS, payload: {} });
    }catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const genOtp = (to) => async(dispatch) => {
    try{
        await axios({
            method: "PUT",
            url: `http://localhost:5000/password/otp/${to}`
        });

        return dispatch({ type: GEN_OTP, payload: {} });
    }catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getOtp = (_id) => async(dispatch) => {
    try{
        const otp = await axios({
            method: "GET",
            url: `http://localhost:5000/user/otpReset/${_id}`
        });

        return dispatch({ type: GET_OTP, payload: otp });
    }catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};
