import React from 'react';
import {useParams} from "react-router-dom";

import Delivery from "../Components/Delivery/index";
import Brand from '../Components/Delivery/Brand';
import Dining from "../Components/Dining/index";
import NightLife from '../Components/NightLife/index';
import Nutrition from '../Components/Nutrition/index';


function Home() {
    const {type} = useParams();
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
