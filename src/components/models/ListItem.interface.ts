export interface Item {
  id: string;
  primaryText: string;
  secondaryText?: string;
  actions: { delete: boolean; complete: boolean };
}
