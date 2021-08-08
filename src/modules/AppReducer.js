import {
  ADD_PROPERTY,
  GET_PROPERTY_DATA,
  GET_PROPERTY_DATA_ERROR,
  GET_PROPERTY_DATA_SUCCESS,
  REMOVE_PROPERTY,
} from "../lang/constants";

const initialState = {
  loading: false,
  savedProperties: [],
  resultProperties: [],
  hasError: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTY_DATA:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case GET_PROPERTY_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        hasError: false,
        savedProperties: action.payload.savedProperties,
        resultProperties: action.payload.resultProperties,
      };
    case GET_PROPERTY_DATA_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    case ADD_PROPERTY:
      let newAddedItem = state.resultProperties.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        savedProperties: [...state.savedProperties, newAddedItem]
      };
    case REMOVE_PROPERTY:
      let itemToRemove = state.savedProperties.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        savedProperties: itemToRemove
      }; 
    default:
      return state;
  }
};
