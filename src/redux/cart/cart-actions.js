import { createAction } from '@reduxjs/toolkit';

export const addItemCart = createAction('cart/addItem');

export const changeDecrementItemCart = createAction('cart/itemDecrement');
export const changeIncrementItemCart = createAction('cart/itemIncrement');
export const delereCartItem = createAction('cart/deleteItem');
