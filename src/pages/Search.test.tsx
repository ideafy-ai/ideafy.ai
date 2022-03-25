import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "./Search";

test("renders user search", () => {
  render(<Search />);
  const searchUsername = screen.getByTestId("username");
  expect(searchUsername).toBeInTheDocument();
});

test("renders repository filter", () => {
  render(<Search />);
  const searchUsername = screen.getByTestId("username") as HTMLInputElement;
  (searchUsername as HTMLInputElement).value = "Dopeamin";
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key);
  };
  searchUsername.dispatchEvent(
    new KeyboardEvent("keypress", {
      key: "enter",
    })
  );
  const searchRepo = screen.getByTestId("repository");
  expect(searchRepo).toBeInTheDocument();
});
