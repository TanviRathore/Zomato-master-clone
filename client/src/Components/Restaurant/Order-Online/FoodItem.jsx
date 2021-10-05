import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";


function FoodItem(props) {
    return (
        <>
            <div className="flex items-start gap-2 py-2">
                {props ?.image && (
                    <div className="w-3/12 h-24 md:h-28 lg:h-36  md:px-3">
                        <img 
                            src={props.image}
                            alt="food item"
                            className="w-full h-auto md:h-full rounded-lg object-cover object-center"
                        />
                    </div>
                )}
                <div className="w-3/4 md:w-7/12 flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">{props?.name}</h3>
                        <button className="px-2 py-1 border border-Zomato-400 bg-Zomato-50 text-Zomato-50 flex md:hidden rounded-lg gap-2">
                            <AiOutlinePlus /> Add
                        </button>
                    </div>
                    <ReactStars count={5} value={props?.rating || 0} />
                    <h5>$ {props?.price}</h5>
                    <p className="truncate">{props?.descript}</p>
                </div>
                <div className="hidden md:block w-2/12">
                    <button className="px-2 py-1 border border-Zomato-400 bg-Zomato-50 text-Zomato-50 flex md:hidden rounded-lg gap-2">
                        <AiOutlinePlus /> Add
                    </button>
                </div>
            </div>
        </>
    );
}

export default FoodItem;
