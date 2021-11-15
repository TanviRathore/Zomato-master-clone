import React from 'react';
import {BsTrashFill} from 'react-icons/bs';

import {useDispatch} from 'react-redux';
import {deleteCart, decQty, incQty} from '../../Redux/Reducer/Cart/cart.action';

function FoodItem(props) {

    const dispatch = useDispatch();

    const deleteFromCart = () => dispatch(deleteCart(props._id));
    const increment = () => dispatch(incQty(props._id));
    const decrement = () => {
        if (props.quantity === 1) return;
        dispatch(decQty(props._id));
    };

    return (
        <>
            <div className="flex items-center justify-between w-full">
                <h5>{props.name}</h5>
                <div className="flex items-center gap-2">
                    <div className="flex flex-col items-end">
                        <small>$ {parseInt(props.price) * parseInt(props.quantity)}</small>
                        <div className="px-1 bg-Zomato-400 text-white flex gap-1 items-center rounded">
                            <button onClick={decrement} className="p-1 bg-Zomato-400 text-white rounded">
                                -
                            </button>
                            <small>{props.quantity}</small>
                            <button onClick={increment} className="p-1 bg-Zomato-400 text-white rounded">
                                +
                            </button>
                        </div>
                    </div>
                    <BsTrashFill onClick={deleteFromCart} className="text-Zomato-400 text-lg md:text-xl" />
                </div>
            </div>
            <hr className="my-2" />
        </>
    );
}

export default FoodItem;
