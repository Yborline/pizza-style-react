import { createReducer } from '@reduxjs/toolkit';
import {
  addItemCart,
  changeDecrementItemCart,
  changeIncrementItemCart,
  delereCartItem,
} from './cart-actions';

export const cart = createReducer(
  { cart: [] },
  {
    [addItemCart]: (state, { payload = {} }) => ({
      ...state,
      cart: [...state.cart, { ...payload, count: 1 }],
    }),
    [changeDecrementItemCart]: (state, { payload }) => ({
      ...state,
      cart: [
        ...state.cart.map(item =>
          item.id === payload
            ? {
                ...item,
                count: item.count - 1,
              }
            : item,
        ),
      ],
    }),

    [changeIncrementItemCart]: (state, { payload }) => ({
      ...state,
      cart: [
        ...state.cart.map(item =>
          item.id === payload
            ? {
                ...item,
                count: item.count + 1,
              }
            : item,
        ),
      ],
    }),

    [delereCartItem]: (state, { payload }) => ({
      ...state,
      cart: [...state.cart.filter(card => card.id !== payload)],
    }),
  },
);
