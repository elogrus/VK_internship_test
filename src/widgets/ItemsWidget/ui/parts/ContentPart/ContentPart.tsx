import { Box, CircularProgress, Typography } from "@mui/material";
import { IItem, IItemList, ItemList } from "entity/Item";
import * as cls from "./ContentPart.module.scss";

interface ContentPartProps {
    list: IItemList;
    onEditItem: (id: number, newItem: IItem) => void;
    onDeleteItem: (id: number) => void;
    ObservantRef: React.MutableRefObject<HTMLDivElement>;
    isLoading: boolean;
}

export const ContentPart = (props: ContentPartProps) => {
    const { list, onEditItem, onDeleteItem, ObservantRef, isLoading } = props;
    return (
        <Box className={cls.Content}>
            {list.total_count > 0 && (
                <Typography color="primary" variant="h6">
                    Всего найдено: {list.total_count} записей
                </Typography>
            )}
            <ItemList
                items={list.items}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
            />
            <div
                data-testid="ItemsWidget_observant"
                ref={ObservantRef}
                className={cls.Observant}
            ></div>
            {isLoading && (
                <CircularProgress data-testid="ItemsWidget_progress" />
            )}
            {!isLoading && list.total_count === 0 && (
                <Typography variant="h6">Записи не найдены</Typography>
            )}
            {!isLoading &&
                list.total_count > 0 &&
                list.total_count <= list.items.length && (
                    <Typography variant="h6">Записи закончились</Typography>
                )}
        </Box>
    );
};
