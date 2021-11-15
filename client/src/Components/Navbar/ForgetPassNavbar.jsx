import React from 'react';

function ForgetPassNav() {

    return (
        <>
            <nav className="flex bg-white px-2 py-1 shadow-md lg:shadow-lg w-full items-center">
                <div className="container px-4 md:px-20 mx-auto py-1 md:py-5">
                    <div className="flex w-full justify-center items-center gap-3">
                        <div className="flex gap-3">
                            <div className="w-28">
                                <img
                                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                                    alt="logo"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default ForgetPassNav;