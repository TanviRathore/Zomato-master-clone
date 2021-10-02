import React from 'react';
import classnames from 'classnames';

function InfoButtons(props) {
    return (
        <>
           <button className={classnames(
               "flex items-center gap-3 border border-Zomato-400 text-sm md:text-base lg:text-xl  px-2 py-1 md:px-3 md:py-2 rounded-lg w-32 md:w-40 lg:w-44 ",{
                   "bg-Zomato-400 text-white": props.isActive
                   })}
            >
              {props.children}         
            </button> 
        </>
    );
}

export default InfoButtons;
