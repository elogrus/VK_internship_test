import { List } from "@mui/material";
import { IItem } from "entity/Item/types/Item";
import { Item } from "../Item/Item";
import * as cls from "./ItemList.module.scss";

interface ItemListProps {
    items: IItem[];
    onEditItem: (id: number, newItem: IItem) => void;
    onDeleteItem: (id: number) => void;
}

export const ItemList = ({
    items,
    onEditItem,
    onDeleteItem,
}: ItemListProps) => {
    return (
        <List className={cls.ItemList}>
            {items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    onEditItem={onEditItem}
                    onDeleteItem={onDeleteItem}
                />
            ))}
        </List>
    );
};
