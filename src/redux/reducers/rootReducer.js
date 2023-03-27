import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import bucketReducer from './bucketReducer';

const rootReducer = combineReducers({
  cards: cardReducer,
  buckets: bucketReducer
});

export default rootReducer;
