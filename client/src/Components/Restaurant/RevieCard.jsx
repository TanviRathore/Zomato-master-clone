import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import dayjs from 'dayjs';

function RevieCard(props) {
    return (
        <>
            <div className="my-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="items-center flex gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwifbF6QgQ_FWhvV450Ry8XMRgnicQvkJig&usqp=CAU"
                                alt="avatar"
                                className="w-full h-full rounded-full object-center object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">{props.userName}</h3>
                            <small className="text-gray-500">
                                5 Reviews &#8226; 3 Followers
                            </small>
                        </div>
                    </div>
                    <button className="text-Zomato-400 border border-Zomato-400 px-2 py-1 rounded">
                        Follow
                    </button>
                </div>
                <div className="flwx flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="bg-green-600 text-white text-xs px-3 py-1 flex rounded-lg items-center gap-1">
                            3 <TiStarFullOutline />
                        </span>
                        <h5 className="font-regular uppercase">
                            {props.isRestaurantReview ? "Dining" : "Delivery"}
                        </h5>
                        <small className="text-gray-400">
                            {dayjs(props.createdAt).format("MM, DD, YYYY")}
                        </small>
                    </div>
                    <div className="w-full">
                        <p className="w-full text-gray-600 font-light text-base">
                            {props.reviewText}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RevieCard;
