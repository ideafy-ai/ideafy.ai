import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Search from "./pages/Search";

test("renders header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Github Fetch/i);
  expect(linkElement).toBeInTheDocument();
});
