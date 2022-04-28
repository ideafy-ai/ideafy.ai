import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button", () => {
  render(<Button />);
  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
});
