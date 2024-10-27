import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Link,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import { IItemList } from "entity/Item/types/Item";
import GithubLanguageColors from "shared/util/GithubLanguageColors";
import { Item } from "../Item/Item";

interface ItemListProps {
    list: IItemList;
    className?: string;
}

export const ItemList = (props: ItemListProps) => {
    const { className, list } = props;
    return (
        <List>
            <ListItem>
                <Item editable={true} item={list.items[1]} />
            </ListItem>
            {list.items.map((item) => (
                <ListItem key={item.id}>
                    <Item item={item} />
                </ListItem>
            ))}
        </List>
    );
};
