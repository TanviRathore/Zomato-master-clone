import React from 'react';
import { TiStar } from 'react-icons/ti';

function MenuSimilarRestaurantCards(props) {
    return (
        <>
            <div className="mx-2">
                <div className="bg-white rounded-md shadow">
                    <div className="w-full h-48">
                        <img 
                            src={props.image}
                            alt="food"
                            className="w-full h-full object-cover rounded-t-md object-center"
                        />
                    </div>
                    <div className="flex flex-col gap-2 p-3">
                        <h3 className="font-semibold text-lg">{props.title}</h3>
                        <div className="flex justify-between text-sm items-center">
                            <span className="flex items-center gap-1">
                                <span className="flex items-center gap-1 bg-green-700 text-white p-1 rounded">
                                30 <TiStar />
                                </span>
                                Dining
                            </span>
                        </div>
                        <h4>Street Food, Beverages, Tea</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuSimilarRestaurantCards;
