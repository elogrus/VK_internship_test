import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IItem, IItemList } from "entity/Item/types/Item";

const initialState = {
    items: [],
    total_count: -1,
} satisfies IItemList as IItemList;

const ItemsSlice = createSlice({
    name: "Items",
    initialState,
    reducers: {
        setTotalCount(state, action: PayloadAction<number>) {
            state.total_count = action.payload;
            return state;
        },
        addItems(state, action: PayloadAction<IItem[]>) {
            const items = action.payload;
            state.items.push(...items);
            return state;
        },
        setItems(state, action: PayloadAction<IItem[]>) {
            const items = action.payload;
            state.items = items;
            return state;
        },
        editItem(state, action: PayloadAction<[id: number, newItem: IItem]>) {
            const [id, newItem] = action.payload;
            const itemIndex = state.items.findIndex((item) => item.id === id);
            state.items[itemIndex] = newItem;
            return state;
        },
        removeItem(state, action: PayloadAction<number>) {
            const id = action.payload;
            const itemIndex = state.items.findIndex((item) => item.id === id);
            state.items.splice(itemIndex, 1);
            return state;
        },
    },
});

export const { addItems, setItems, editItem, removeItem, setTotalCount } =
    ItemsSlice.actions;
export default ItemsSlice.reducer;
