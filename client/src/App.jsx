import React, { useEffect } from "react";
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantHOC from "./HOC/Restaurant.HOC";
import {Route, Redirect} from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { getMySelf } from "./Redux/Reducer/User/user.action";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// pages
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Photos from "./pages/Photos";
import Menu from "./pages/Menu";
import Reviews from "./pages/Reviews";
import OrderOnline from "./pages/OrderOnline";
import CheckoutLayoutHOC from "./HOC/Checkout.HOC";
import Checkout from "./pages/Checkout";
import RestaurantRedirect from "./pages/RestaurantRedirect";
import GoogleAuth from "./pages/GoogleAuth";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.zomatoUser) {
      dispatch(getMySelf());
    }
  }, []);

  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />
      <Route path="/restaurant/:id" exact component={RestaurantRedirect} />
      <RestaurantHOC path="/restaurant/:id/overview" exact component={Overview} />
      <RestaurantHOC path="/restaurant/:id/order-online" exact component={OrderOnline} />
      <RestaurantHOC path="/restaurant/:id/reviews" exact component={Reviews} />
      <RestaurantHOC path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantHOC path="/restaurant/:id/photos" exact component={Photos} />
      <CheckoutLayoutHOC path="/checkout/orders" exact component={Checkout} />
    </div>
  );
}

export default App;
