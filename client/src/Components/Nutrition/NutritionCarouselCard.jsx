import React from 'react';

const NutritionCarouselCardContainerLg = ({image, title}) => {
    return(
        <>
            <div className="hidden lg:block w-64 h-full px-9">
                <div className="w-full h-58">
                    <img 
                        src={image}
                        alt="nutrition"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <div>
                    <h3 className="text-xl my-1 font-medium">{title}</h3>
                </div>
            </div>
        </>
    );
};

const NutritionCarouselCardContainerSm = ({image, title}) => {
    return(
        <>
            <div className="block lg:hidden bg-white shadow rounded-md w-24 md:w-56 px-3 md:px-4 h-full">
                <img 
                    src={image}
                    alt="nutrition"
                    className="w-full h-full object-cover rounded-t-md object-center"
                />
            </div>
            <div>
                <h3 className="text-sm md:text-xl my-1 text-center font-light ">{title}</h3>
            </div>
        </>
    );
};

function NutritionCarouselCard(props) {
    return (
        <div>
            <NutritionCarouselCardContainerSm {...props} />
            <NutritionCarouselCardContainerLg {...props} />
        </div>
    );
}

export default NutritionCarouselCard;
