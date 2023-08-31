import { completeTask } from "../components/TodoList/TaskUtils";
import { Item } from "../components/models/ListItem.interface";

describe("#completeTask", () => {
  it("should complete an item when it exists in the array", () => {
    const items: Item[] = [
      {
        id: "item1",
        primaryText: "",
        actions: { complete: false, delete: true },
      },
    ];

    const updatedItemsMock = jest.fn();

    completeTask("item1", items, updatedItemsMock);
    expect(items[0].actions.complete).toBe(true);
    expect(updatedItemsMock).toHaveBeenCalledWith(items);
  });

  it("should do nothing when item does not exist in the array", () => {
    const items: Item[] = [
      {
        id: "item1",
        primaryText: "",
        actions: { complete: false, delete: false },
      },
    ];

    const updatedItemsMock = jest.fn();

    completeTask("item3", items, updatedItemsMock);

    expect(items[0].actions.complete).toBe(false);
    expect(updatedItemsMock).not.toHaveBeenCalled();
  });

  it("should handle empty items array", () => {
    const itemsMock: Item[] = [];
    const updatedItemsMock = jest.fn();

    completeTask("item1", itemsMock, updatedItemsMock);

    expect(updatedItemsMock).not.toHaveBeenCalled();
  });
});
