import { Item } from "../models/ListItem.interface";

export const completeTask = (
  itemId: string,
  items: Item[],
  updatedItems: (updatedItems: Item[]) => void
) => {
  const itemToUpdate = items.find((item) => item.id === itemId);

  if (itemToUpdate) {
    itemToUpdate.actions.complete = true;
    updatedItems([...items]);
  }
};
