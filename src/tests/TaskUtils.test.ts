import { handleTask } from "../components/TodoList/TaskUtils";
import { ItemActions } from "../components/models/ItemActions.enum";
import { Item } from "../components/models/ListItem.interface";

describe("Task Utils", () => {
  describe("completeTask", () => {
    let existingItem: Item;
    let itemsWithExistingItem: Item[];
    let updatedItemsMock: jest.Mock;

    beforeEach(() => {
      existingItem = {
        id: "item1",
        primaryText: "",
        actions: { complete: false, delete: true },
      };

      itemsWithExistingItem = [existingItem];
      updatedItemsMock = jest.fn();
    });

    it("should complete an item when it exists in the array", () => {
      handleTask(
        ItemActions.COMPLETE,
        "item1",
        itemsWithExistingItem,
        updatedItemsMock
      );
      expect(existingItem.actions.complete).toBe(true);
      expect(updatedItemsMock).toHaveBeenCalledWith(itemsWithExistingItem);
    });

    it("should do nothing when item does not exist in the array", () => {
      handleTask(
        ItemActions.COMPLETE,
        "item3",
        itemsWithExistingItem,
        updatedItemsMock
      );
      expect(existingItem.actions.complete).toBe(false);
      expect(updatedItemsMock).not.toHaveBeenCalled();
    });

    it("should handle empty items array", () => {
      const emptyItems: Item[] = [];
      handleTask(ItemActions.COMPLETE, "item1", emptyItems, updatedItemsMock);
      expect(updatedItemsMock).not.toHaveBeenCalled();
    });
  });

  describe("deleteTask", () => {
    let itemsToDelete: Item[] = [];
    let updatedItemsMock: jest.Mock;

    beforeEach(() => {
      itemsToDelete = [
        {
          id: "item1",
          primaryText: "",
          actions: { complete: false, delete: true },
        },
        {
          id: "item2",
          primaryText: "",
          actions: { complete: false, delete: true },
        },
      ];

      updatedItemsMock = jest.fn();
    });

    it("should delete an item when it exists in the array", () => {
      handleTask(ItemActions.DELETE, "item1", itemsToDelete, updatedItemsMock);
      expect(updatedItemsMock).toHaveBeenCalledWith([itemsToDelete[1]]);
    });

    it("should do nothing when item does not exist in the array", () => {
      handleTask(ItemActions.DELETE, "item3", itemsToDelete, updatedItemsMock);
      expect(itemsToDelete.length).toBe(2);
      expect(updatedItemsMock).not.toHaveBeenCalled();
    });

    it("should handle empty items array", () => {
      const emptyItems: Item[] = [];
      handleTask(ItemActions.DELETE, "item1", emptyItems, updatedItemsMock);
      expect(updatedItemsMock).not.toHaveBeenCalled();
    });
  });
});
