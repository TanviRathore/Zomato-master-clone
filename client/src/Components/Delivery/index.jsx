import React, {useEffect, useState} from 'react';
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";
import {useSelector} from 'react-redux';

function Delivery() {

    const [restaurantList, setRestaurantList] = useState([]);

    const  reduxState = useSelector((globalStore) => globalStore.restaurant.restaurants);

    useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants);
        console.log(reduxState.restaurants);
    },[reduxState.restaurants]);

    return (
        <div>
            <DeliveryCarousel />
            <div className="my-10">
                <h6 className="md:text-3xl font-semibold text-lg ">Best Food in Indore</h6>
                <div className="flex justify-between flex-wrap my-4">
                    {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Delivery;


// {
//     _id: "123456",
//     photos: [
//         "https://b.zmtcdn.com/data/pictures/5/19770655/f5571d6126f15f4499f2f46c9288627c_o2_featured_v2.jpg?output-format=webp",
//     ],
//     name: "Bakehouse Comfort",
//     cuisine: ["Bakery", "Desserts", "Fast Food"],
//     isPro: false,
//     isOff: true,
//     durationOfDelivery: 47,
//     restaurantReviewValue: 4.1,
//     },
//     {
//     _id: "123342",
//     photos: [
//         "https://b.zmtcdn.com/data/pictures/5/19770655/f5571d6126f15f4499f2f46c9288627c_o2_featured_v2.jpg?output-format=webp",
//     ],
//     name: "Bakehouse Comfort",
//     cuisine: ["Bakery", "Desserts", "Fast Food"],
//     isPro: false,
//     isOff: true,
//     durationOfDelivery: 47,
//     restaurantReviewValue: 4.1,
//     },
//     {
//     _id: "1233423",
//     photos: [
//         "https://b.zmtcdn.com/data/pictures/5/19770655/f5571d6126f15f4499f2f46c9288627c_o2_featured_v2.jpg?output-format=webp",
//     ],
//     name: "Bakehouse Comfort",
//     cuisine: ["Bakery", "Desserts", "Fast Food"],
//     isPro: false,
//     isOff: true,
//     durationOfDelivery: 47,
//     restaurantReviewValue: 4.1,
//     },
