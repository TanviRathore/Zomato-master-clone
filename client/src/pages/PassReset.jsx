import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMail } from '../Redux/Reducer/Mail/mail.action';
import { genOtp } from '../Redux/Reducer/Password/password.action';
import { getOtp } from '../Redux/Reducer/Password/password.action';

import {useHistory} from 'react-router-dom';
import { getUserId } from '../Redux/Reducer/User/user.action';

function PassReset() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [mailInfo, setMailInfo] = useState({
        to: "",
    });

    const [otp, setOtp] = useState(0);

    const [userId, setUserId] = useState("");

    const handleChange = (e) => {
        setMailInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const submit = () => {

        setMailInfo({
            to: "",
            from: "zomato@gmail.com",
            subject: "Password Reset",
            text: `Your OTP for reset your password is `
        });

        // const {to} = mailInfo.to;
        dispatch(genOtp(mailInfo.to));
        dispatch(getUserId(mailInfo.to)).then((data) => {
            // console.log(data.payload.data.userId);
            setUserId(data.payload.data.userId);
            console.log(userId);
            dispatch(getOtp(data.payload.data.userId)).then((data) => {
                dispatch(sendMail({
                    to: mailInfo.to,
                    from: "zomato@gmail.com",
                    subject: "Password Reset",
                    text: `Password reset otp is ${data.payload.data.otpShare.otp}`
                }));
            });
        });

        redirectToResetPage(mailInfo.to);
    };

    const redirectToResetPage = (to) => {
        
        history.push({
            pathname: `/reset/otp/${to}`,
        });
    };

    return (
        <div className="flex flex-col my-12 gap-3 items-center h-full">
            <h1 className="text-xl text-center md:text-2xl font-bold text-Zomato-400">Password Reset</h1>
            <div className="w-full md:w-2/5 rounded-lg pt-10 py-3 shadow-ld bg-white flex flex-col border-2 border-Zomato-200 items-center">
                <form className="flex flex-col gap-3">
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="to">Enter Your Email</label>
                            <input
                                type="email"
                                id="to"
                                value={mailInfo.to}
                                onChange={handleChange}
                                placeholder="email@email.com"
                                className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-Zomato-400"
                            />
                    </div>
                    <div className="my-3">
                        <input onClick={submit}
                            type="submit"
                            className="px-2 py-1 bg-Zomato-300 text-white rounded-md w-full"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PassReset;
