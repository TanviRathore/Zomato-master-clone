// Combine all the reducers into single one

import {combineReducers} from 'redux';

// multiple reducers
import restaurant from './restaurant/restaurant.reducer';

const rootReducer = combineReducers({
    restaurant,
});

export default rootReducer;