import {
  ADD_PROPERTY,
  GET_PROPERTY_DATA,
  GET_PROPERTY_DATA_ERROR,
  GET_PROPERTY_DATA_SUCCESS,
  REMOVE_PROPERTY,
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

export const addProperty = (propertyId) => {
  return {
    type: ADD_PROPERTY,
    payload: propertyId
  };
};

export const removeProperty = (propertyId) => {
  return {
    type: REMOVE_PROPERTY,
    payload: propertyId
  };
};
