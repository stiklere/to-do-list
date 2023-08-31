import { ItemActions } from "../models/ItemActions.enum";
import { Item } from "../models/ListItem.interface";

export const handleTask = (
  action: ItemActions,
  itemId: string,
  items: Item[],
  updatedItems: (updatedItems: Item[]) => void
) => {
  if (!items.length) {
    return;
  }

  const itemToUpdate = items.find((item) => item.id === itemId);

  if (itemToUpdate && action === ItemActions.COMPLETE) {
    itemToUpdate.actions.complete = true;
    updatedItems([...items]);
  }

  if (itemToUpdate && action === ItemActions.DELETE) {
    const itemsList = items.filter((item) => item.id !== itemToUpdate.id);
    updatedItems([...itemsList]);
  }
};
