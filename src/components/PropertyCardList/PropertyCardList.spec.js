import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import PropertyCardList from "./PropertyCardList";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import PropertyCard from "../PropertyCard/PropertyCard";
import { ADD_BUTTON_LABEL } from "../../lang/constants";

const mockStore = configureMockStore([thunk]);
const mockClick = jest.fn();
const mockProperties = [
  {
    price: "$726,500",
    id: "1",
  },
  {
    price: "$700,00",
    id: "2",
  },
];
let store;

describe("PropertyCardList", () => {
  let wrapper;
  beforeEach(() => {
    store = mockStore({});
    wrapper = mount(
      <Provider store={store}>
        <PropertyCardList
          title={"Test Result"}
          properties={mockProperties}
          label={ADD_BUTTON_LABEL}
          handleButtonClick={mockClick}
        />
      </Provider>
    );
  });
  it("should render PropertyCard child equal to number to mockProperites length", () => {
    expect(wrapper.find(PropertyCard).length).toEqual(2);
  });
});
