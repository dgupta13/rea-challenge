import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import PropertyCardContent from "./PropertyCardContent";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([thunk]);
const mockClick = jest.fn();
let store;

describe("PropertyCardContent", () => {
  let wrapper;
  beforeEach(() => {
    store = mockStore({});
    wrapper = mount(
      <Provider store={store}>
        <PropertyCardContent
          showButton={true}
          buttonTitle={"test"}
          imgUrl={"http://test"}
          handleButtonClick={mockClick}
        />
      </Provider>
    );
  });
  it("should display button", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });
  it("button click", () => {
    wrapper.find("button").simulate("click");
    expect(mockClick).toHaveBeenCalled();
  });
});
