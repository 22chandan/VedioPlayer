import axios from 'axios';

export const ADD_CARD = 'ADD_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const FETCH_CARDS = 'FETCH_CARDS';

export const addCard = (bucketId, card) => {
  return dispatch => {
    axios.post(`/api/buckets/${bucketId}/cards`, card)
      .then(response => {
        dispatch({
          type: ADD_CARD,
          payload: response.data
        });
      });
  };
};

export const updateCard = (bucketId, card) => {
  return dispatch => {
    axios.put(`/api/buckets/${bucketId}/cards/${card.id}`, card)
      .then(response => {
        dispatch({
          type: UPDATE_CARD,
          payload: response.data
        });
      });
  };
};

export const deleteCard = (bucketId, cardId) => {
  return dispatch => {
    axios.delete(`/api/buckets/${bucketId}/cards/${cardId}`)
      .then(() => {
        dispatch({
          type: DELETE_CARD,
          payload: cardId
        });
      });
  };
};

export const fetchCards = (bucketId) => {
  return dispatch => {
    axios.get(`/api/buckets/${bucketId}/cards`)
      .then(response => {
        dispatch({
          type: FETCH_CARDS,
          payload: response.data
        });
      });
  };
};
