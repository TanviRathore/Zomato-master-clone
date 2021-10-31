import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import Delivery from '../Components/Delivery/index';
import Brand from '../Components/Delivery/Brand';
import Dining from '../Components/Dining/index';
import NightLife from '../Components/NightLife/index';
import Nutrition from '../Components/Nutrition/index';

import {getRestaurant} from '../Redux/Reducer/restaurant/restaurant.action';


function Home() {
    const {type} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurant());
    },[]);

    return (
        <div className="my-5">
            {type === "delivery" && <Brand />}
            {type === "delivery" && <Delivery />}
            {type === "diningOut" && <Dining />}
            {type === "nightLife" && <NightLife />}
            {type === "nutrition" && <Nutrition />}
        </div>
    );
}

export default Home;
