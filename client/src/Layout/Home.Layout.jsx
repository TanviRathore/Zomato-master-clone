import React, { useEffect } from 'react';

import FoodTabs from '../Components/FoodTabs';
import Navbar from '../Components/Navbar';

import { useDispatch } from 'react-redux';
import {getCart} from '../Redux/Reducer/Cart/cart.action';

function HomeLayout({children}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

    return (
      <div>
          <Navbar />
          <FoodTabs />
          <div className="container px-4 mx-auto lg:px-20">{children}</div>
      </div> 
    );
}

export default HomeLayout;
