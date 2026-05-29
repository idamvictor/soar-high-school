export type NavigateFn = (page: string) => void;

export interface PageDef {
  id: string;
  label: string;
}

export interface Stat {
  num: string;
  label: string;
}
