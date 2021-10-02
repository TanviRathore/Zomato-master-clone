import React from 'react';
import FoodTabs from '../Components/FoodTabs';
import Navbar from '../Components/Navbar';

function HomeLayout({children}) {
    return (
      <div>
          <Navbar />
          <FoodTabs />
          <div className="container px-4 mx-auto lg:px-20">{children}</div>
      </div> 
    );
}

export default HomeLayout;
