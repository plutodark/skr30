import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
// import { routerReducer } from 'react-router-redux';
import Entities from './reducers';
import PhotoPage from '../pages/Photos/reducer';

const appliedMiddleware = applyMiddleware(thunk);

// Compose middleware and devTool
const composed = window.__REDUX_DEVTOOLS_EXTENSION__ ? compose(window.__REDUX_DEVTOOLS_EXTENSION__(), appliedMiddleware) : compose(appliedMiddleware);

// const Entities = combineReducers({
//   Photo,
//   // UserDetail,
//   Assets,
// });
// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    // routing: routerReducer,
    Entities,
    PhotoPage,
  }),
  {},
  composed
);

export default store;
