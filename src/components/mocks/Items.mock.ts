import { Item } from "../models/ListItem.interface";

export const ITEMS_MOCK: Item[] = [
  {
    id: "1",
    primaryText: "First item",
    secondaryText: "Secondary text",
    actions: {
      delete: true,
      complete: true,
    },
  },
  {
    id: "2",
    primaryText: "Second item",
    actions: {
      delete: true,
      complete: false,
    },
  },
  {
    id: "3",
    primaryText: "Third item",
    actions: {
      delete: true,
      complete: true,
    },
  },
  {
    id: "4",
    primaryText: "Fourth item",
    secondaryText: "Secondary text",
    actions: {
      delete: true,
      complete: false,
    },
  },
];
