import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cardReducer from "./reducers/cardReducer";
import bucketReducer from "./reducers/bucketReducer";
import { DELETE_BUCKET } from "./actions/actionTypes";


const rootReducer = combineReducers({
  cardState: cardReducer,
  bucketState: bucketReducer,
});
export const deleteBucket = (id) => {
  return {
    type: DELETE_BUCKET,
    payload: id,
  };
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
