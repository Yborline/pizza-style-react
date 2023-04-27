import { createAction } from '@reduxjs/toolkit';

export const addItemCart = createAction('cart/addItem');

export const changeDecrementItemCart = createAction('cart/itemDecrement');
export const changeIncrementItemCart = createAction('cart/itemIncrement');
export const deleteCartItem = createAction('cart/deleteItem');
export const deleteCart = createAction('cart/deleteCart');
