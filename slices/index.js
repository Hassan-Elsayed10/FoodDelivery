import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import resturantSlice from './resturantSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    resturant: resturantSlice
  },
})