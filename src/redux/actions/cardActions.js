import axios from 'axios';

export const ADD_CARD = 'ADD_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const FETCH_CARDS = 'FETCH_CARDS';

export const addCard = async (bucketId, card) => {
  try {
    const response = await axios.post(`/api/buckets/${bucketId}/cards`, card);
    return {
      type: ADD_CARD,
      payload: response.data
    };
  } catch (error) {
    console.log(error);
  }
};

export const updateCard = async (bucketId, card) => {
  try {
    const response = await axios.put(`/api/buckets/${bucketId}/cards/${card.id}`, card);
    return {
      type: UPDATE_CARD,
      payload: response.data
    };
  } catch (error) {
    console.log(error);
  }
};

export const deleteCard = async (bucketId, cardId) => {
  try {
    await axios.delete(`/api/buckets/${bucketId}/cards/${cardId}`);
    return {
      type: DELETE_CARD,
      payload: cardId
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchCards = async (bucketId) => {
  try {
    const response = await axios.get(`/api/buckets/${bucketId}/cards`);
    return {
      type: FETCH_CARDS,
      payload: response.data
    };
  } catch (error) {
    console.log(error);
  }
};
