import { ADD_CARD, EDIT_CARD, DELETE_CARD, MOVE_CARD } from "../actions/actionTypes";

const initialState = {
  cards: [
  {
    "id": 1,
    "name": "Sample Card",
    "link": "https://www.example.com/video.mp4",
    "onDelete": "function() { console.log('Delete function'); }",
    "onMove": "function() { console.log('Move function'); }"
  }
  ]
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };
    case EDIT_CARD:
      const editedCards = state.cards.map((card) => {
        if (card.id === action.payload.id) {
          return action.payload;
        } else {
          return card;
        }
      });
      return {
        ...state,
        cards: editedCards
      };
    case DELETE_CARD:
      const filteredCards = state.cards.filter((card) => {
        return card.id !== action.payload;
      });
      return {
        ...state,
        cards: filteredCards
      };
    case MOVE_CARD:
      const movedCards = state.cards.map((card) => {
        if (card.id === action.payload.id) {
          return {
            ...card,
            bucket: action.payload.bucket
          };
        } else {
          return card;
        }
      });
      return {
        ...state,
        cards: movedCards
      };
    default:
      return state;
  }
};

export default cardReducer;
