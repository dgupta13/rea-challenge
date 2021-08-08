import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Provider } from 'react-redux';
import configureStore from './store';

let wrapped = shallow(<Provider store={configureStore()}><App /></Provider>);

describe("App", () => {
  it("should render the App Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});