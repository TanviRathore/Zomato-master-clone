import React from 'react'
import NightLifeCarousel from './NightLifeCarousel';

function NightLife() {
    return (
        <div>
            <h1 className="text-lg my-4 md:my-8 md:text-3xl md:font-semibold lg:mx-4">Collections</h1>
            <h3 className="text-xl text-gray-400 p-4">
                Explore curated lists of top restaurants, cafes, pubs, and bars in Indore, based on trends
            </h3>
            <NightLifeCarousel />
        </div>
    );
}

export default NightLife;
