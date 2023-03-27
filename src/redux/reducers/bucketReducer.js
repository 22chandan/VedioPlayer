import { ADD_BUCKET, EDIT_BUCKET, DELETE_BUCKET } from "../actions/actionTypes";

const initialState = {
  buckets: []
};

const bucketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUCKET:
      return {
        ...state,
        buckets: [...state.buckets, action.payload]
      };
    case EDIT_BUCKET:
      const editedBuckets = state.buckets.map((bucket) => {
        if (bucket.id === action.payload.id) {
          return action.payload;
        } else {
          return bucket;
        }
      });
      return {
        ...state,
        buckets: editedBuckets
      };
    case DELETE_BUCKET:
      const filteredBuckets = state.buckets.filter((bucket) => {
        return bucket.id !== action.payload;
      });
      return {
        ...state,
        buckets: filteredBuckets
      };
    default:
      return state;
  }
};

export default bucketReducer;
