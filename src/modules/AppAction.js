import {
  GET_PROPERTY_DATA,
  GET_PROPERTY_DATA_ERROR,
  GET_PROPERTY_DATA_SUCCESS,
} from "../lang/constants";

export const getPropertyData = () => {
  return {
    type: GET_PROPERTY_DATA,
    payload: "",
  };
};

export const getPropertyDataSuccess = (response) => {
  return {
    type: GET_PROPERTY_DATA_SUCCESS,
    payload: response,
  };
};

export const getPropertyDataError = (response) => {
  return {
    type: GET_PROPERTY_DATA_ERROR,
    payload: response,
  };
};
