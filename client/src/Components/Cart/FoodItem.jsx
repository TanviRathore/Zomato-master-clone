import React from 'react';
import {BsTrashFill} from 'react-icons/bs';

function FoodItem(props) {
    return (
        <>
            <div className="flex items-center justify-between w-full">
                <h5>{props.name}</h5>
                <div className="flex items-center gap-2">
                    <div className="flex flex-col items-end">
                        <small>$ {props.price}</small>
                        <div className="px-1 bg-Zomato-400 text-white flex gap-1 items-center rounded">
                            <button className="p-1 bg-Zomato-400 text-white rounded">
                                -
                            </button>
                            <small>{props.quantity}</small>
                            <button className="p-1 bg-Zomato-400 text-white rounded">
                                +
                            </button>
                        </div>
                    </div>
                    <BsTrashFill className="text-Zomato-400 text-lg md:text-xl" />
                </div>
            </div>
            <hr className="my-2" />
        </>
    );
}

export default FoodItem;
