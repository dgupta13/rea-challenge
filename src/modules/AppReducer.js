import {
  GET_PROPERTY_DATA,
  GET_PROPERTY_DATA_ERROR,
  GET_PROPERTY_DATA_SUCCESS,
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
    default:
      return state;
  }
};
