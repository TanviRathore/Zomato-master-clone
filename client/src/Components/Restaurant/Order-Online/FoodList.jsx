import React from 'react';
import FoodItem from './FoodItem';

function FoodList(props) {
    return (
        <>
            <div>
                <h2 className="bg-white top-0 w-full px-2 py-1 z-10 sticky text-xl font-semibold">
                    {props.name}
                </h2>
                <div classNam="flex flex-col gap-3">
                    {props.items.map((item) => (
                        <FoodItem {...item} key={item._id} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default FoodList;
