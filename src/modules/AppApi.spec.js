import axios from "axios";
import { italic } from "chalk";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { apiResponseTestData } from "../testdata/apiResponseTestData";
import { result, saved } from "../testdata/propertyTestData";
import { fetchPropertyData } from "./AppApi";

const mockStore = configureMockStore([thunk]);
jest.mock("axios");

describe("AppApi", () => {
  it("test fetchPropertyData api success", async () => {
    const store = mockStore({});
    axios.get.mockResolvedValue(apiResponseTestData);
    const expectedActions = [
      { type: "GET_PROPERTY_DATA" },
      {
        type: "GET_PROPERTY_DATA_SUCCESS",
        payload: {
          resultProperties: result,
          savedProperties: saved,
        },
      },
    ];
    await store.dispatch(fetchPropertyData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("test fetchPropertyData api error", async () => {
    const store = mockStore({});
    const errorResponse = {
      error: "Error",
    };
    axios.get.mockRejectedValue(errorResponse);
    const expectedActions = [
      { type: "GET_PROPERTY_DATA" },
      { type: "GET_PROPERTY_DATA_ERROR", payload: errorResponse },
    ];
    await store.dispatch(fetchPropertyData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
