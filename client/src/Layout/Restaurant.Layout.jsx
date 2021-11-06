import React, {useEffect, useState} from "react";
import {TiStarOutline} from "react-icons/ti";
import {RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi";

// Components
import Tabs from "../Components/Restaurant/Tabs";
import RestaurantNav from "../Components/Navbar/RestaurantNavbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";
import InfoButtons from "../Components/Restaurant/InfoButtons";
import RestaurantInfo from "../Components/Restaurant/RestaurantInfo";
import CartContainer from "../Components/Cart/CartContainer";

// Redux
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {getImage} from "../Redux/Reducer/Image/Image.action";
import {getSpecificRestaurant} from "../Redux/Reducer/restaurant/restaurant.action";
import {getCart} from "../Redux/Reducer/Cart/cart.action";

function RestaurantLayout({children}) {

    const {id} = useParams();

    const [restaurant, setRestaurant] = useState({
        images: [],
        name: "",
        cuisine: "",
        address: "",
      });

      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(getSpecificRestaurant(id)).then((data) => {
          console.log(data);
          setRestaurant((prev) => ({
            ...prev,
            ...data.payload.restaurant,
          }));
          
          dispatch(getImage(data.payload.restaurant.photos)).then((data) => {
            setRestaurant((prev) => ({
              ...prev,
              ...data.payload.image,
            }));
          });
        });

        dispatch(getCart());
      }, []);

    return (
        <>
            <RestaurantNav />
            <div className="container mx-auto px-4 py-4 lg:px-20 pb-10 ">
              <ImageGrid images={restaurant.images} />
              <RestaurantInfo 
                name={restaurant?.name}
                restaurantRating={restaurant?.restaurantRating || 0}
                deliveryRating={restaurant?.deliveryRating || 0}
                cuisine={restaurant?.cuisine || 0}
                address={restaurant?.address || 0}
              />
              <div className="my-4 flex flex-wrap gap-3 sticky">
                <InfoButtons isActive>
                  <TiStarOutline /> Add Review
                </InfoButtons>
                <InfoButtons isActive>
                  <RiDirectionLine /> Direction
                </InfoButtons>
                <InfoButtons isActive>
                  <BiBookmarkPlus /> Bookmark
                </InfoButtons>
                <InfoButtons isActive>
                  <RiShareForwardLine /> Share
                </InfoButtons>
              </div>
              <div className="my-10">
                <Tabs />
              </div>
              {children}
            </div>
            <CartContainer />
        </>
    );
}

export default RestaurantLayout;
