import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import mainReducer from '../modules/List/duck';
// import homeReducer from '../modules/Home/duck';
// import imageReducer from '../modules/Imagelist/duck';
// import formReducer from '../modules/Form/duck';

export const rootReducer = combineReducers({
  list: mainReducer,
  // home: homeReducer,
  // image:imageReducer,
  // form:formReducer,
})
