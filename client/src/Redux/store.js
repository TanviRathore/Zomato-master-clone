import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// redux middleware
const middleware = [thunk];

// only in development phase we want logger
if(ProcessingInstruction.env.NODE_ENV === "development"){
    const {logger} = require("redux-logger");

    middleware.push(logger);
}

import rootReducer from './Reducer/rootReducer';

const store = createStore(rootReducer, {}, applyMiddleware(...middleware)); // we don't want applyMiddleware as 2nd parameter as it is invalid

export default store;