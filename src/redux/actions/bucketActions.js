import axios from "axios";
import {
  GET_BUCKETS,
  ADD_BUCKET,
  DELETE_BUCKET,
  EDIT_BUCKET,
} from "./actionTypes.js";

export const getBuckets = () => async (dispatch) => {
  const res = await axios.get("/buckets");
  dispatch({
    type: GET_BUCKETS,
    payload: res.data,
  });
};

export const addBucket = (bucket) => async (dispatch) => {
  const res = await axios.post("/buckets", bucket);
  dispatch({
    type: ADD_BUCKET,
    payload: res.data,
  });
};

export const deleteBucket = (id) => async (dispatch) => {
  await axios.delete(`/buckets/${id}`);
  dispatch({
    type: DELETE_BUCKET,
    payload: id,
  });
};

export const editBucket = (bucket) => async (dispatch) => {
  const res = await axios.put(`/buckets/${bucket.id}`, bucket);
  dispatch({
    type: EDIT_BUCKET,
    payload: res.data,
  });
};
