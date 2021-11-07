import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import ReactStars from 'react-rating-stars-component';

import { NextArrow, PrevArrow } from '../Components/CarouselArrows';
import { IoMdArrowDropright } from 'react-icons/io'
import MenuCollections from '../Components/Restaurant/MenuCollections';
import MenuSimilarRestaurantCards from '../Components/Restaurant/MenuSimilarRestaurantCards';
import ReviewCard from '../Components/Restaurant/ReviewCard';
import MapView from '../Components/Restaurant/MapView';

import { useDispatch, useSelector } from 'react-redux';
import {getImage} from '../Redux/Reducer/Image/Image.action';
import {getReviews} from '../Redux/Reducer/Reviews/reviews.action';


function Overview() {

    const {id} = useParams();
    const dispatch = useDispatch();

    const [menuImages, setMenuImages] = useState([]);
    const [Reviews, setReviews] = useState([]);

    const reduxState = useSelector((globalStore) => globalStore.restaurant.selectedRestaurant.restaurant);
    console.log(reduxState);

    useEffect(() => {
      if(reduxState) {
        dispatch(getImage(reduxState?.menuImages)).then((data) => {
          const images = [];
          data.payload.image.images.map(({location}) => images.push(location));
          setMenuImages(images);
        });

        dispatch(getReviews(reduxState?._id)).then((data) => {
          setReviews(data.payload.reviews);
        });
      }
    }, [reduxState]);
    
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };

    const getLatLong = (mapAddress) => {
      const data = mapAddress?.split(",").map((item) => parseFloat(item));
      console.log(data);
      return data;
    };

      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToScroll: 3,
              slidesToShow: 3,
              infinite: false,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
              dots: false,
            },
          },
        ],
      };

    return (
        <>
          <div className="flex flex-col md:flex-row gap-6 relative">
                <div className="w-full md:w-8/12">
                    <h2 className="font-semibold text-lg md:text-xl my-4">
                        About this place
                    </h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-Zomato-400">
                                See all menu <IoMdArrowDropright />
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 my-4">
                      <MenuCollections menuTitle="Menu" pages={menuImages.length} images={menuImages} />
                    </div>
                    <h4 className="text-lg font-medium my-4">Cuisines</h4>
                    <div className="flex flex-wrap gap-2">
                      {reduxState?.cuisines?.map((data) => (
                        <span className="border border-gray-400 text-green-700 rounded-full px-2 py-1">
                          {data}
                        </span>
                      ))}
                    </div>
                    <div className="my-4">
                      <h4 className="text-lg font-medium">Average Cost</h4>
                      <h6>${reduxState?.averageCost} for one order (approx.)</h6>
                      <small className="text-gray-500">
                        Exclusive of applicable taxes and service charges, if any
                      </small>
                    </div>
                    <div className="my-4">
                      <h4 className="text-lg font-medium">Similar Restaurants</h4>
                      <div>
                        <Slider {...settings}>
                          <MenuSimilarRestaurantCards 
                            image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                            title="Unplugged Courtyard"
                          />
                          <MenuSimilarRestaurantCards 
                            image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                            title="Unplugged Courtyard"
                          />
                          <MenuSimilarRestaurantCards 
                            image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                            title="Unplugged Courtyard"
                          />
                          <MenuSimilarRestaurantCards 
                            image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                            title="Unplugged Courtyard"
                          />
                          <MenuSimilarRestaurantCards 
                            image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                            title="Unplugged Courtyard"
                          />
                          <MenuSimilarRestaurantCards 
                            image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                            title="Unplugged Courtyard"
                          />
                          <MenuSimilarRestaurantCards 
                            image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                            title="Unplugged Courtyard"
                          />
                        </Slider>
                      </div>
                    </div>
                    <div className="my-4 flex flex-col gap-4 w-full md:hidden">
                    <MapView 
                      title={reduxState?.name}
                      phno={reduxState?.contactNumber}
                      mapLocation={getLatLong(reduxState?.mapLocation) }
                      address={reduxState?.address}
                    />
                    </div>
                    <div className="mb-4 mt-8">
                        <h4 className="text-lg font-medium">
                          Rate your delivery experience
                        </h4>
                        <ReactStars 
                          count={5}
                          onChange={ratingChanged}
                          activeColor="#ffd700"
                          size={24}
                        />
                        {Reviews?.map((reviewData) => (
                          <ReviewCard {...reviewData} />
                        ))}
                    </div>
                </div> 
                <aside style={{ height: "fit-content" }}
                 className="hidden md:flex sticky md:w-4/12 top-2 bg-white rounded-xl flex-col p-5 shadow-md gap-4 mx-1">
                  <MapView 
                    title={reduxState?.name}
                    phno={reduxState?.contactNumber}
                    mapLocation={getLatLong(reduxState?.mapLocation)} // problem 
                    address={reduxState?.address}
                  />
                </aside>
          </div>  
        </>
    )
}

export default Overview;
