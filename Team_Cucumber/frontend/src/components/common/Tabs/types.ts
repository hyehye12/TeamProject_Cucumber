export interface TabContextType {
  selection: string;
  setSelection: (selection: string) => void;
  variant: TabsVariant;
}

export type TabsVariant = "line" | "subtle" | "enclosed" | "outline" | "plain";
