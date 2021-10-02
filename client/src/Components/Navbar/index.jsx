import React, { useState } from 'react'

import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io"
import {RiSearch2Line} from "react-icons/ri";
import {FaUserAlt} from "react-icons/fa";

function SmNav({user, isDropdownOpen, setIsDropdownOpen}){
    return(
        <>
            <div className="flex justify-between items-center lg:hidden w-full">
                <div className="w-24">
                <img
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo"
                    className="w-full h-full"
                />
                </div>
                <div className="flex gap-3 items-center relative">
                    <button className="bg-Zomato-400 rounded-full px-2 py-2 text-white text-xs">Use App</button>
                    {user ? (
                       <>
                            <div onClick={() => setIsDropdownOpen((prev) => !prev)} 
                                className="rounded-full p-1 border border-gray-400 text-Zomato-400 w-9 h-9">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdJPp4NxjyXvdabKjU2daJ16d0iHjhDq_-Q&usqp=CAU"
                                    className="w-full h-full rounded-full object-cover"
                                    alt="profile"
                                />
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute top-16 right-1 shadow-lg py-3 pl-3 pr-3 w-32 bg-white z-30 flex-col gap-2 border-2 border-gray-300 rounded">
                                    <button>Sign out</button>
                                </div>
                            )}
                       </>
                    ) : (
                        <>
                            <span onClick={() => setIsDropdownOpen((prev) => !prev)}
                                className="border p-1 border-gray-300 text-zomato-400 rounded-full"
                            >
                                <FaUserAlt />
                            </span>
                            {isDropdownOpen && (
                                <div className="absolute py-3 shadow-lg -bottom-20 -right-4 w-full bg-white flex flex-col gap-2">
                                    <button>Sign In</button>
                                    <button>Sign Out</button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

function LgNav({user, isDropdownOpen, setIsDropdownOpen}){
    return(
        <>
            <div className="hidden container lg:inline mx-auto px-20">
                <div className="hidden gap-2 lg:flex justify-around w-full items-center">
                    <div className="w-32">
                        <img
                            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>

                    <div className="w-3/4 bg-white rounded-md shadow-md flex p-3 gap-3 items-center border border-gray-300">
                        <div className="flex gap-2 border-r-2 border-gray-300 items-center pr-2">
                            <span className="text-Zomato-400">
                                <HiLocationMarker />
                            </span>
                            <input 
                            type="search"
                            placeholder="Indore"
                            className="focus:outline-none"
                            />
                            <IoMdArrowDropdown />
                        </div>
                        <div className="flex gap-2 items-center w-full">
                            <RiSearch2Line />
                            <input
                                type="text"
                                placeholder="Search for restaurants cusine or a dish"
                                className="w-full focus:outline-none"
                            />
                        </div>
                    </div>

                    {user ? (
                        <div className="relative w-14">
                        <div
                          onClick={() => setIsDropdownOpen((prev) => !prev)}
                          className="border p-1 border-gray-300 text-zomato-400 w-full h-14 rounded-full"
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdJPp4NxjyXvdabKjU2daJ16d0iHjhDq_-Q&usqp=CAU"
                            className="w-full h-full rounded-full object-cover"
                            alt="profile"
                          />
                        </div>
                        {isDropdownOpen && (
                          <div className="absolute top-20 shadow-lg py-3 pl-3 pr-3 w-32 bg-white z-30 flex-col gap-2 border-2 border-gray-300 rounded">
                            <button>Sign out</button>
                          </div>
                        )}
                      </div>

                    ):(
                        <div className="ml-28 flex gap-6">
                        <button className="text-gray-500 text-xl hover:text-gray-800">
                            Login
                        </button>
                        <button className="text-gray-500 text-xl hover:text-gray-800">
                            Signup
                        </button>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [user, setUser] = useState({
        name: "",
    });

    return (
        <>
            <nav className="py-3 px-4 lg:p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
                <SmNav 
                    user={user}
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}
                />
                <LgNav
                    user={user}
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}
                />

            </nav>
        </>
    );
}

export default Navbar;
