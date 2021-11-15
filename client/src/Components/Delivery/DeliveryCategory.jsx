import React from 'react';

function DeliverySmCard({image, title}){
    return(
        <>
            <div className="lg:hidden rounded-md shadow bg-white text-center w-20 md:w-56 px-4 overflow-hidden">
                <div className="w-full h-24 md:h-48">
                    <img 
                        src={image}
                        alt="foodImage"
                        className="w-full h-full object-cover rounded-t-md"
                    />
                </div>
                <div className="text-center">
                    <h3 className="text-sm md:text-lg md:p-1 font-light text-center">{title}</h3>
                </div>
            </div>
        </>
    );
};

function DeliveryLgCard({image, title}){
    return(
        <>
            <div className="hidden lg:block w-80 h-full px-9 text-center mx-0">
                <div className="w-full h-48">
                    <img 
                         src={image}
                        alt="foodImage"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div>
                    <h3 className="text-xl my-1 font-medium">{title}</h3>
                </div>
            </div>
        </>
    );
};

function DeliveryCategory(props) {
    return (
        <>
            <DeliverySmCard {...props}/>
            <DeliveryLgCard {...props}/>
        </>
    )
}

export default DeliveryCategory;
