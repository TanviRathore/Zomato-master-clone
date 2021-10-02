import React from 'react'
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../CarouselArrows';
import CarouselPictureCard from '../Dining/CarouselPictureCard';

function NightLifeCarousel() {

    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full">
            <Slider {...settings} >
                <CarouselPictureCard />
                <CarouselPictureCard />
                <CarouselPictureCard />
                <CarouselPictureCard />
                <CarouselPictureCard />
                <CarouselPictureCard />
                <CarouselPictureCard />
                <CarouselPictureCard />
                <CarouselPictureCard />
            </Slider>
        </div>
    );
}

export default NightLifeCarousel;