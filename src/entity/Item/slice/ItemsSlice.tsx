import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "entity/Item/types/Item";

export interface ItemsState {
    totalCount: number;
    items: IItem[];
}

const initialState = {
    items: [],
    totalCount: 0,
} satisfies ItemsState as ItemsState;

const ItemsSlice = createSlice({
    name: "Items",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<IItem>) {
            const item = action.payload;
            state.items.push(item);
            return state;
        },
        removeItemByIndex(state, action: PayloadAction<number>) {
            const index = action.payload;
            state.items.splice(index, 1);
            return state;
        },
        removeItemById(state, action: PayloadAction<number>) {
            const id = action.payload;
            const itemIndex = state.items.findIndex((item) => item.id === id);
            state.items.splice(itemIndex, 1);
            return state;
        },
    },
});

export const { addItem, removeItemByIndex, removeItemById } =
    ItemsSlice.actions;
export default ItemsSlice.reducer;
