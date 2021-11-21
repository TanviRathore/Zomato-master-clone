import React, {useState} from 'react';
import { BsShieldLockFill } from "react-icons/bs";
import Razorpay from 'razorpay';

import FoodItem from '../Components/Cart/FoodItem';
import AddressList from '../Components/Checkout/AddressList';

import { useDispatch, useSelector } from 'react-redux';
import {orderPlaced} from '../Redux/Reducer/Order/order.action';

function Checkout() {

    const dispatch = useDispatch();

    const reduxState = useSelector((globalStore) => globalStore.cart.cart);
    const reduxStateCart = useSelector((globalStore) => globalStore.cart.cart);
    const reduxStateUser = useSelector((globalStore) => globalStore.user.user.user);
    const reduxStateRestaurant = useSelector((globalStore) => globalStore.restaurant.selectedRestaurant.restaurant);

    const payNow = () => {
      let options = {
        key: "rzp_test_assH4R2Kv2r3C2",
        amount: reduxStateCart.reduce((acc, curVal) => acc + curVal.totalPrice, 0) *100,
        currency: "INR",
        name: "Zomato Clone",
        description: "Food Payment",
        image:
          "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
        handler: function (data) {
          alert("Payment Done");
          // console.log(data.razorpay_payment_id);
          dispatch(orderPlaced(reduxStateCart, data.razorpay_payment_id));
        },
        prefill: {
          name: reduxStateUser.fullName,
          email: reduxStateUser.email,
        },
        theme: {
          color: "#e23744",
        },
      };

      let razorPay = new window.Razorpay(options);
      razorPay.open();
    };

    const [address] = useState([
        {
          name: "Home",
          address: "123 Main St, New York, NY 10001",
        },
        {
          name: "Work",
          address: "123243 Main St, NCR, New Delhi",
        },
        {
          name: "Gym",
          address: "123 Main St, New York, NY 10001",
        },
    ]);

    return (
            <div className="flex flex-col my-10 gap-3 items-center">
              <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
              <div className="w-full md:w-3/5 rounded-lg pt-10 py-3 shadow-ld bg-white flex flex-col border-2 border-black items-center">
                <h3 className="text-lg font-semibold">Summary</h3>
                <div className="flex flex-col gap-2 items-center">
                  <h5 className="text-base tracking-wider">ORDER FROM</h5>
                  <div className="flex-col flex w-full items-center text-gray-400 px-4">
                    <h4>{reduxStateRestaurant?.name}</h4>
                    <small>
                      {reduxStateRestaurant?.address}
                    </small>
                  </div>
                  <div className="my-4 h-32 px-4 flex flex-col gap-2 w-full overflow-y-auto">
                    {reduxState.map((food) => (
                      <FoodItem {...food} key={food._id} />
                    ))}
                  </div>
                  <div className="flex flex-col items-center gap-1 w-full">
                    <h4 className="text-xl font-semibold">Choose Address</h4>
                    <AddressList address={address} />
                  </div>
                </div>
                <button onClick={payNow}
                  className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-Zomato-400 rounded-lg">
                  Pay Securely <BsShieldLockFill />
                </button>
              </div>
            </div>
    );
}

export default Checkout;


// const [foods] = useState([
//   {
//     image:
//       "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
//     name: "Chilli Paneer Gravy",
//     price: "157.50",
//     quantity: 4,
//     _id: 1,
//   },
//   {
//     image:
//       "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
//     name: "Chilli Paneer Gravy",
//     price: "157.50",
//     quantity: 2,
//     _id: 2,
//   },
//   {
//     image:
//       "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
//     name: "Chilli Paneer Gravy",
//     price: "157.50",
//     quantity: 2,
//     _id: 3,
//   },
//   {
//     image:
//       "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
//     name: "Chilli Paneer Gravy",
//     price: "157.50",
//     quantity: 2,
//     _id: 4,
//   },
// ]);