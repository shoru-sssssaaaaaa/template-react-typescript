import React from "react";
import { shallow } from "enzyme";
import { Typography } from "@material-ui/core";
import App from "src/App";

describe("Component", () => {
  describe("App", (): void => {
    it("render the default app", (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Typography).exists()).toBeTruthy();
    });
  });
});
