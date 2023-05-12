import { cart } from './cart/cart-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const cartPersistConfig = {
  key: 'cart',
  storage,
};

export const store = configureStore({
  reducer: {
    shopping: persistReducer(cartPersistConfig, cart),
  },
  middleware,
});

export const persistor = persistStore(store);
