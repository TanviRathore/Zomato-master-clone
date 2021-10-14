import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './Reducer/rootReducer';

// redux middleware
const middleware = [thunk];

// only in development phase we want logger
if(process.env.NODE_ENV === "development"){
    const {logger} = require("redux-logger");

    middleware.push(logger);
}

const store = createStore(rootReducer, {}, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));                                           
    // we don't want applyMiddleware as 2nd parameter as it is invalid

export default store;