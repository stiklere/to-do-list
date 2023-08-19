import React from "react";
import { List, ListItem } from "@mui/material";
import { ITEMS_MOCK } from "../mocks/Items.mock";
import { generateListItem } from "./GenerateListItem";

const items = ITEMS_MOCK;

const TodoList = () => {
  return (
    <div className="list-container">
      <List>{generateListItem(<ListItem></ListItem>, items)}</List>
    </div>
  );
};

export default TodoList;
