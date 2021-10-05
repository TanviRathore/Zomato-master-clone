import React from 'react';
import classnames from 'classnames';

function MenuCategory(props) {
    return (
        <>
           <div className={classnames("cursor-pointer text-gray-400 py-2 px-1",{
               "text-Zomato-400 bg-Zomato-50 border border-r-4 border-Zomato-400" : props.isActive
           })}
           >
               <h3 id={props.name} onClick={props.onClickHandler}>
                   {props.name} ({props.items.length})
               </h3>
           </div> 
        </>
    );
}

export default MenuCategory;
