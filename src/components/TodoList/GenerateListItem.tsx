import React from "react";
import {
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./TodoList.css";
import { Item } from "../models/ListItem.interface";
import { handleTask } from "./TaskUtils";
import { ItemActions } from "../models/ItemActions.enum";

export const generateListItem = (
  element: React.ReactElement,
  items: Item[],
  updateItem: (updatedItems: Item[]) => void
) => {
  return items.map(({ id, actions, primaryText, secondaryText }) => {
    const isComplete = actions.complete;

    const isDeletable = actions.delete;

    const completeButton = !isComplete && (
      <IconButton
        edge="end"
        onClick={() => handleTask(ItemActions.COMPLETE, id, items, updateItem)}
      >
        <CheckCircleOutlineIcon
          data-testid="todo-list-complete-button"
          className="list-item__icon--complete"
        />
      </IconButton>
    );

    const deleteButton = isDeletable && (
      <IconButton
        edge="end"
        onClick={() => handleTask(ItemActions.DELETE, id, items, updateItem)}
      >
        <DeleteIcon />
      </IconButton>
    );

    return React.cloneElement(element, {
      key: id,
      children: (
        <div className="list-items">
          <div>
            <ListItemSecondaryAction>
              {completeButton}
              {deleteButton}
            </ListItemSecondaryAction>
          </div>
          <div className="list-item-text">
            <ListItemAvatar>
              <Avatar>
                {isComplete ? (
                  <CheckCircleIcon className="list-item__icon--complete" />
                ) : (
                  <CheckCircleOutlineIcon />
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={primaryText} secondary={secondaryText} />
          </div>
        </div>
      ),
    });
  });
};
