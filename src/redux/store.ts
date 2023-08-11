import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filter/slice';
import cartReducer from './cart/slice';
import pizzaReducer from './pizza/slice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    pizzas: pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
