import React from 'react';
import {useParams, Link, useLocation} from 'react-router-dom';
import classnames from 'classnames';

function Tab(props){
    const {id} = useParams();

    return(
        <Link to={`/restaurant/${id}/${props.route}`}>
            <div className={classnames(" text-gray-500 relative font-light text-center text-sm md:text-3xl", {
                "text-Zomato-400 font-semibold" : props.isActive,
            })}
            style={{minWidth: "100px"}}
            >
                <h3 className="text-lg md:text-3xl">{props.title}</h3>
            </div>
        </Link>
    );
}

function Tabs() {

    const location = useLocation();
    const currentPath = location.pathname;

    const tabs = [
        {
            title: "Overview",
            route: "overview",
            isActive: currentPath.includes("overview"),
        },
        {
            title: "Order-Online",
            route: "order-online",
            isActive: currentPath.includes("order-online"),
        },
        {
            title: "Reviews",
            route: "reviews",
            isActive: currentPath.includes("reviews"),
        },
        {
            title: "Menu",
            route: "menu",
            isActive: currentPath.includes("menu"),
        },
        {
            title: "Photos",
            route: "photos",
            isActive: currentPath.includes("photos"),
        },
    ];

    return (
        <>
          <div className="flex relative items-center gap-8 pb-2 md:pb-4 md:gap-20 overflow-x-auto border-b-2">
              {tabs.map((tab) => (
                  <Tab {...tab} key={`${tab.route}`} />
              ))}
           </div>  
        </>
    );
}

export default Tabs;
