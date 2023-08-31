import React, { useState } from "react";
import { List, ListItem } from "@mui/material";
import { ITEMS_MOCK } from "../mocks/Items.mock";
import { generateListItem } from "./GenerateListItem";
import { Item } from "../models/ListItem.interface";

const TodoList = () => {
  const initialItems = ITEMS_MOCK;

  const [propertyToUpdate, setItemToUpdate] = useState(initialItems);

  const updateItems = (updatedItems: Item[]) => {
    setItemToUpdate(updatedItems);
  };

  return (
    <div className="list-container">
      <List>
        {generateListItem(
          <ListItem data-testid="todo-list-item"></ListItem>,
          propertyToUpdate,
          updateItems
        )}
      </List>
    </div>
  );
};

export default TodoList;
