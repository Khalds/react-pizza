import { createAsyncThunk } from '@reduxjs/toolkit';
import { Pizza, SearchPizzaParams } from './types';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzaStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;

    const { data } = await axios.get<Pizza[]>(
      `https://645e3f4912e0a87ac0eb6446.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data;
  },
);
