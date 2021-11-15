import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import { checkOtp, updatePass } from '../Redux/Reducer/Password/password.action';
import {getUserId} from '../Redux/Reducer/User/user.action'

function PassResetByOTP() {

    const history = useHistory();
    const dispatch = useDispatch();

    const {email} = useParams();
    console.log(email);

    const [otpEnter, setOtpEnter] = useState();
    const [isOtpCorrect, setIsOtpCorrect] = useState(false);
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");

    const handleChange = (e) => {
        setOtpEnter(e.target.value)
    };


    const submit = () => {

        setOtpEnter()

        dispatch((checkOtp({email,otpEnter})));

        setIsOtpCorrect(true);

        // dispatch(getUserId(email)).then((data) => {
        //     const id = data.payload.data.userId;
        //     console.log(id);
        //     setUserId(id);
        //     dispatch(getOtp(id)).then((data) => {
        //         // console.log(data);
                

        //         setIsOtpCorrect(true);
        //         console.log(isOtpCorrect);
        
        //     });
        // });
    };

    // console.log(userId);

    const submitPass = () => {
        setPassword("");

        dispatch(getUserId(email)).then((data) => console.log(data));

        dispatch(updatePass({userId,password}));
        alert("Password Reset Successfull");
        history.push("/delivery");
    };

    return (
        <>
            {isOtpCorrect && (
                <div className="flex flex-col my-12 gap-3 items-center h-full">
                <h1 className="text-xl text-center md:text-2xl font-bold text-Zomato-400">Password Reset</h1>
                <div className="w-full md:w-2/5 rounded-lg pt-10 py-3 shadow-ld bg-white flex flex-col border-2 border-Zomato-200 items-center">
                    <form className="flex flex-col gap-3">
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="password">Enter the password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => (e.target.value)}
                                    placeholder="****"
                                    className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-Zomato-400"
                                />
                        </div>
                        <div className="my-3">
                            <input onClick={submitPass}
                                type="submit"
                                className="px-2 py-1 bg-Zomato-300 text-white rounded-md w-full"
                            />
                        </div>
                    </form>
                </div>
            </div>
            )}
            { !isOtpCorrect && (
                <div className="flex flex-col my-12 gap-3 items-center h-full">
                <h1 className="text-xl text-center md:text-2xl font-bold text-Zomato-400">Password Reset</h1>
                <div className="w-full md:w-2/5 rounded-lg pt-10 py-3 shadow-ld bg-white flex flex-col border-2 border-Zomato-200 items-center">
                    <form className="flex flex-col gap-3">
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="otpEnter">Enter the otp</label>
                                <input
                                    type="text"
                                    id="otpEnter"
                                    value={otpEnter}
                                    onChange={handleChange}
                                    placeholder="****"
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
            )}
        </>
    )
}

export default PassResetByOTP;
