// Combine all the reducers into single one

import {combineReducers} from 'redux';

// multiple reducers
import restaurant from './Restaurant/restaurant.reducer';
import image from './Image/Image.reducer';
import food from './Food/Food.reducer';
import reviews from './Reviews/reviews.reducer';
import user from './User/user.reducer';

const rootReducer = combineReducers({
    restaurant,
    image,
    food,
    reviews,
    user,
});

export default rootReducer;