import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      let newBasket = [...state.items];
      let itemIndex = state.items.findIndex(item => item.id == action.payload.id);
      if (itemIndex >= 0) {
        newBasket.splice(itemIndex, 1);
      } else {
        console.log("can't remove item as its not in the basket");
      }
      state.items = newBasket
    },
    emptyBasket: (state, action) => {
      state.items = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, emptyBasket } = cartSlice.actions

export const selectBasketItems = state => state.cart.items;

export const selectBasketItemsById = (state, id) => state.cart.items.filter(item => item.id == id);

export const selectBasketTotal = state => state.cart.items.reduce((total, item) => total = total += item.price, 0)

export default cartSlice.reducer