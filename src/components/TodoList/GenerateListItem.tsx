import {
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./TodoList.css";
import { Item } from "../models/ListItem.interface";

export const generateListItem = (
  element: React.ReactElement,
  items: Item[]
) => {
  return items.map((value) =>
    React.cloneElement(element, {
      key: value.id,
      children: (
        <div className="list-items">
          <div>
            {value.actions.delete && (
              <ListItemSecondaryAction>
                {!value.actions.complete && (
                  <IconButton edge="end" aria-label="complete">
                    <CheckCircleOutlineIcon className="list-item__icon--complete" />
                  </IconButton>
                )}
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </div>
          <div className="list-item-text">
            {value.actions.complete ? (
              <ListItemAvatar>
                <Avatar>
                  <CheckCircleIcon className="list-item__icon--complete" />
                </Avatar>
              </ListItemAvatar>
            ) : (
              <ListItemAvatar>
                <Avatar>
                  <CheckCircleOutlineIcon />
                </Avatar>
              </ListItemAvatar>
            )}
            <ListItemText
              primary={value.primaryText}
              secondary={value.secondaryText}
            />
          </div>
        </div>
      ),
    })
  );
};
