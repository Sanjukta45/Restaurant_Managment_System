import type { FoodItem } from "../../data/menuData";
import type {  PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface CartItems extends FoodItem{
    quantity : number
}

interface CartState {
    items : CartItems[]
}

const initialState : CartState = {
    items : [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart : (state, action : PayloadAction<FoodItem>) =>{
        const existingItem = state.items.find((item) => item.id === action.payload.id);

        if(existingItem){
            existingItem.quantity += 1;
        }
        else{
            state.items.push({
                ...action.payload,
                quantity : 1,
            });
        }
    },

    increaseItem : (state, action : PayloadAction<FoodItem>) =>{
        const item = state.items.find((item) => item.id === action.payload.id);
        if(item){
            item.quantity += 1;
        }
    },

    decreaseItem : (state, action : PayloadAction<FoodItem>) =>{
        const item = state.items.find((item) => item.id === action.payload.id);
        if(item){
            item.quantity -= 1;
        }
    },

    removeFromCart : (state, action : PayloadAction<FoodItem>) =>{
        state.items = state.items.filter(
            (item) => item.id !== action.payload.id
        )
    },

  },
});

export const {
  addToCart,
  increaseItem,
  decreaseItem,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;