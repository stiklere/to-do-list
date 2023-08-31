import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList/TodoList";
import "@testing-library/jest-dom";

describe("#TodoList", () => {
  it("should render todo list", () => {
    render(<TodoList />);

    const todoListElement = screen.getAllByTestId("todo-list-item");

    expect(todoListElement.length).not.toBeLessThanOrEqual(0);
  });
});

describe("#updateItems", () => {
  it("should update 'complete' property after what it dissapead from UI", () => {
    render(<TodoList />);

    const allCompleteButtons = screen.getAllByTestId(
      "todo-list-complete-button"
    );

    fireEvent.click(allCompleteButtons[0]);

    const allCompleteButtonsAfterClick = screen.getAllByTestId(
      "todo-list-complete-button"
    );

    expect(allCompleteButtons.length).not.toEqual(
      allCompleteButtonsAfterClick.length
    );
  });
});
