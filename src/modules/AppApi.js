import axios from "axios";
import {
  getPropertyData,
  getPropertyDataError,
  getPropertyDataSuccess,
} from "./AppAction";

export const fetchPropertyData = () => {
  return (dispatch) => {
    dispatch(getPropertyData());
    return axios
      .get(process.env.REACT_APP_API_ENDPOINT + "/data")
      .then((res) => {
        let result = {};
        result.resultProperties = res.data?.results;
        result.savedProperties = res.data?.saved;
        dispatch(getPropertyDataSuccess(result));
      })
      .catch((err) => {
        dispatch(getPropertyDataError(err));
      });
  };
};
