import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import classnames from "classnames";

import {RiShoppingBag3Line} from "react-icons/ri";
import {IoFastFoodOutline, IoNutritionOutline} from "react-icons/io5";
import {BiDrink} from "react-icons/bi";

function MobileTab(){

    const [allTypes, setAllTypes] = useState([
        {
            id: "delivery",
            icon: <RiShoppingBag3Line />,
            name: "Delivery"
        },
        {
            id: "diningOut",
            icon: <IoFastFoodOutline />,
            name: "Dining Out"
        },
        {
            id: "nightLife",
            icon: <BiDrink />,
            name: "Night Life"
        },
        {
            id: "nutrition",
            icon: <IoNutritionOutline />,
            name: "Nutrition"
        },
    ]);

    const {type} = useParams();

    return(
        <>
            <div className="lg:hidden flex justify-between md:justify-evenly bottom-0 bg-white items-center border text-gray-500 px-3 shadow-lg fixed z-10 w-full">
                {allTypes.map((items) => (
                    <Link to={`${items.id}`} key={items.id} className="flex justify-evenly">
                        <div className={
                            type === items.id 
                             ? "flex flex-col items-center text-center text-Zomato-400 text-xl"
                             : "flex flex-col items-center text-center text-xl"
                        }>
                            <div className={
                                type === items.id
                                 ? "flex flex-col justify-center items-center py-3  border-t-2 border-Zomato-400 w-full h-full "
                                 : "flex flex-col justify-center py-3 items-center border-white border-t-2 h "
                            }>
                                {items.icon}
                                <h5 className="text-sm">{items.name}</h5>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

function LargeTab(){

    const [allTypes, setAllTypes] = useState([
        {
          id: "delivery",
          imageDefault:
            "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
          imageActive:
            "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
          name: "Delivery",
          activeColor: "yellow",
        },
        {
          id: "diningOut",
          imageDefault:
            "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
          imageActive:
            "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
          activeColor: "blue",
    
          name: "Dining Out",
        },
        {
          id: "nightLife",
          imageDefault:
            "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
          imageActive:
            "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
          activeColor: "purple",
    
          name: "Night life",
        },
        {
          id: "nutrition",
          imageDefault:
            "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
          imageActive:
            "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
          activeColor: "yellow",
    
          name: "Nutrition",
        },
      ]);

      const {type} = useParams();

    return(
        <>
            <div className="hidden lg:flex container px-20 mx-auto gap-14 my-8">
                {allTypes.map((items) => (
                  <Link to={`${items.id}`} key={items.id}>
                    <div className={classnames("flex items-center transition ease-in-out duration-700 gap-3 pb-3",
                     {"border-b-2 border-Zomato-400" : type === items.id})}>
                       <div className={classnames("w-14 h-14 rounded-full bg-gray-200 p-4",
                        {[`bg-${items.activeColor}-100`] : type === items.id})}>
                          <img
                            src={type === items.id ? items.imageActive : items.imageDefault}
                            alt="options"
                            className="w-full h-full" 
                          />
                        </div>
                        <h3 className={type === items.id ? "text-xl text-Zomato-400" : "text-xl text-Zomato-700"}>{items.name}</h3>
                     </div>
                  </Link>
                ))}
            </div>
        </>
    );
};

function FoodTabs() {
    return (
        <div>
            <MobileTab />
            <LargeTab />
        </div>
    )
}

export default FoodTabs;
