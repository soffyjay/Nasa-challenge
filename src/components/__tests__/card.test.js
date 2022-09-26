import Card from "../card/Card";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});
