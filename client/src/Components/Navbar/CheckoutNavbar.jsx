import React from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import {useSelector} from "react-redux";

function CheckoutNavbar() {

    const reduxState = useSelector((globalStore) => globalStore.user.user);

    return (
        <>
            <nav className="flex bg-white px-2 py-1 shadow-md lg:shadow-lg w-full items-center">
                <div className="container px-4 md:px-20 mx-auto">
                    <div className="flex w-full justify-between items-center">
                        <AiOutlineArrowLeft />
                        <div className="flex gap-3">
                            <div className="w-28">
                                <img
                                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                                    alt="logo"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="border p-1 border-gray-300 text-zomato-400 w-12 h-12 rounded-full">
                                <img
                                    src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
                                    alt={reduxState?.user?.userName}
                                    className="w-full h-full rounded-full object-center object-cover"
                                />
                            </div>
                            {reduxState?.user?.userName}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default CheckoutNavbar;
