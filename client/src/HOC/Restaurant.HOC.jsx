import React from 'react';
import { Route } from 'react-router';
import RestaurantLayout from '../Layout/Restaurant.Layout';


function RestaurantHOC({component: Component, ...rest}) {
    return (
        <>
          <Route {...rest} component = {(props) => (
              <RestaurantLayout>
                  <Component {...props} />
              </RestaurantLayout>
          )} />
        </>
    );
}

export default RestaurantHOC;
