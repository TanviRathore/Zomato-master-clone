import React from 'react';
import {TiStarFullOutline} from 'react-icons/ti';

function RestaurantInfo(props) {
    return (
        <>
          <div className="my-4">
            <div className="flex flex-col-reverse md:flex-row md:items-center justify-center md:justify-between gap-3">
                <h1 className="text-xl md:text-3xl font-semibold md:font-semibold">{props.name}</h1>
                <div className="flex items-center gap-6 text-xs md:text-base">
                   <div className="flex gap-2 items-center">
                        <span className="flex rounded items-center gap-1 text-white px-2 py-1 font-medium bg-green-600">
                          {props.restaurantRating}  
                          <TiStarFullOutline />
                        </span>   
                        <span>
                            <strong>2</strong>
                            <p className="border-dashed border-b">Delivery reviews</p>
                        </span>
                    </div> 
                    <div className="flex items-center gap-2">
                        <span className="flex rounded items-center gap-1 text-white font-medium bg-green-600 px-2 py-1">
                            {props.deliveryRating}
                            <TiStarFullOutline />
                        </span>
                        <span>
                            <strong>2</strong>
                            <p className="border-dashed border-b">Delivery reviews</p>
                        </span>
                    </div>
                </div>    
            </div>    
            <div className="text-base md:text-xl text-gray-600">
                <h2>{props.cuisine}</h2>
                <h2 className="text-gray-400">{props.address}</h2>
                <h2>
                 <span className="text-yellow-500">Open Now</span> - 11am - 8pm
                </h2>
            </div>
          </div>  
        </>
    );
}

export default RestaurantInfo;
