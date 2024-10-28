import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box, List, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/store";
import { editItem, removeItem } from "entity/Item/slice/ItemsSlice";
import { IItem } from "entity/Item/types/Item";
import { useCallback } from "react";
import { Item } from "../Item/Item";
import * as cls from "./ItemList.module.scss";

export const ItemList = () => {
    const items = useAppSelector((state) => state.GithubItems.items);
    const dispatch = useAppDispatch();
    const onDeleteItem = useCallback((id: number) => {
        dispatch(removeItem(id));
    }, []);
    const onEditItem = useCallback((id: number, newItem: IItem) => {
        dispatch(editItem([id, newItem]));
    }, []);
    return (
        <>
            {items.length !== 0 ? (
                <List className={cls.ItemList}>
                    {items.map((item) => (
                        <Item
                            id={item.id}
                            key={item.id}
                            onEditItem={onEditItem}
                            onDeleteItem={onDeleteItem}
                        />
                    ))}
                </List>
            ) : (
                <Box className={cls.NotFound}>
                    <Typography variant="h4">Записи закончились</Typography>
                    <SentimentVeryDissatisfiedIcon fontSize="large" />
                </Box>
            )}
        </>
    );
};
