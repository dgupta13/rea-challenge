import { ADD_PROPERTY, REMOVE_PROPERTY } from "../lang/constants";
import { result, saved } from "../testdata/propertyTestData";
import { appReducer } from "./AppReducer";

const initialState = {
  loading: false,
  savedProperties: saved,
  resultProperties: result,
  hasError: false,
};

describe("AppReducer", () => {
  it("ADD_PROPERTY action should add the item in savedProperties field while result should remain the same", () => {
    expect(initialState.savedProperties.length).toEqual(1);
    const newState = appReducer(initialState, {
      type: ADD_PROPERTY,
      payload: "2",
    });
    expect(newState.savedProperties.length).toEqual(2);
    expect(newState.resultProperties.length).toEqual(2);
    expect(newState.savedProperties[1].id).toEqual("2");
    expect(newState.savedProperties[1].price).toEqual("$560,520");
  });
  it("REMOVE_PROPERTY action should remove the item from savedProperties field while resultProperties should remain same", () => {
    expect(initialState.savedProperties.length).toEqual(1);
    const newState = appReducer(initialState, {
      type: ADD_PROPERTY,
      payload: "2",
    });
    expect(newState.savedProperties.length).toEqual(2);
    expect(newState.resultProperties.length).toEqual(2);
    const updatedState = appReducer(initialState, {
      type: REMOVE_PROPERTY,
      payload: "2",
    });
    expect(updatedState.savedProperties.length).toEqual(1);
    expect(updatedState.resultProperties.length).toEqual(2);
  });
  // Similar testcases can be written for other actions
});
