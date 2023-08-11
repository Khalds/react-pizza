export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

export type Pizza = {
  id: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
  imageUrl: string;
};

export enum Status {
  LOADING = 'Loading',
  SUCCESS = 'Success',
  ERROR = 'Error',
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}
