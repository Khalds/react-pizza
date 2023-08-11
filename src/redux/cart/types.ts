export type CartItem = {
  id: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
  imageUrl: string;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
