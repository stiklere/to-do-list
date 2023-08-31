export interface Item {
  id: string;
  primaryText: string;
  secondaryText?: string;
  actions: ItemActions;
}

interface ItemActions {
  delete: boolean;
  complete: boolean;
}
