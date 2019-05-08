import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk"
import userReducer from "./reducers/userReducer"
import loadingReducer from "./reducers/loadingReducer"

const rootReducer = combineReducers({
  loading: loadingReducer,
  response: userReducer
});

export const configureStore = () => {
  return createStore(rootReducer);
}

export default compose(applyMiddleware(thunk)(configureStore));