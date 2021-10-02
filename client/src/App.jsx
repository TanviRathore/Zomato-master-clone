import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantHOC from "./HOC/Restaurant.HOC";
 import {Route, Redirect} from "react-router";
 import Temp from "./Components/Temp";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Photos from "./pages/Photos";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantHOC path="/restaurant/:id" exact component={Temp} />
      <RestaurantHOC path="/restaurant/:id/overview" exact component={Overview} />
      <RestaurantHOC path="/restaurant/:id/order-online" exact component={Temp} />
      <RestaurantHOC path="/restaurant/:id/reviews" exact component={Temp} />
      <RestaurantHOC path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantHOC path="/restaurant/:id/photos" exact component={Photos} />
    </div>
  );
}

export default App;
