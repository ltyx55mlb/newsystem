import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import mainReducer from '../modules/List/duck';
// import chartReducer from '../modules/Charts/duck';
// import imageReducer from '../modules/Imagelist/duck';
// import formReducer from '../modules/Form/duck';

export const rootReducer = combineReducers({
  list: mainReducer,
  // chart: chartReducer,
  // image:imageReducer,
  // form:formReducer,
})
