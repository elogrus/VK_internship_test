import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Card, CardActions, CardContent, IconButton } from "@mui/material";
import { IItem } from "entity/Item/types/Item";
import { memo, useRef, useState } from "react";
import * as cls from "./Item.module.scss";
import { LanguagePart } from "./parts/LanguagePart";
import { OwnerPart } from "./parts/OwnerPart";
import { ProjectPart } from "./parts/ProjectPart";

export interface ItemProps {
    item: IItem;
    onEditItem: (id: number, newItem: IItem) => void;
    onDeleteItem: (id: number) => void;
}
export interface IInputsRef {
    avatar?: string;
    login?: string;
    profileLink?: string;
    name?: string;
    description?: string;
    language?: string;
}

export interface PartProps extends ItemProps {
    InputsRef: ReturnType<typeof useRef<IInputsRef>>;
    isEdit: boolean;
}

export const Item = memo((props: ItemProps) => {
    const { item, onEditItem, onDeleteItem } = props;
    const [isEdit, setIsEdit] = useState(false);
    const InputsRef = useRef<IInputsRef>({});
    const onSave = () => {
        const newItem = {
            ...item,
            name: InputsRef.current?.name || item.name,
            description: InputsRef.current?.description || item.description,
            language: InputsRef.current?.language || item.language,
            owner: {
                ...item.owner,
                login: InputsRef.current?.login || item.owner.login,
                avatar_url: InputsRef.current?.avatar || item.owner.avatar_url,
                html_url: InputsRef.current?.profileLink || item.owner.html_url,
            },
        };
        onEditItem(item.id, newItem);
        setIsEdit(false);
    };

    const onStartEdit = () => {
        setIsEdit(true);
    };

    const onDelete = () => {
        onDeleteItem(item.id);
    };

    const onClear = () => {
        setIsEdit(false);
    };

    return (
        <Card data-testid="Item_root" className={cls.Item}>
            <CardContent className={cls.Content}>
                <OwnerPart
                    item={item}
                    isEdit={isEdit}
                    InputsRef={InputsRef}
                    {...props}
                />
                <ProjectPart
                    item={item}
                    isEdit={isEdit}
                    InputsRef={InputsRef}
                    {...props}
                />
                <LanguagePart
                    item={item}
                    isEdit={isEdit}
                    InputsRef={InputsRef}
                    {...props}
                />
            </CardContent>

            <CardActions data-testid="Item_buttons">
                <IconButton
                    onClick={!isEdit ? onStartEdit : onSave}
                    color="info"
                >
                    {!isEdit ? (
                        <EditIcon data-testid="Item_editButton" />
                    ) : (
                        <CheckIcon data-testid="Item_saveButton" />
                    )}
                </IconButton>
                <IconButton
                    color="error"
                    onClick={!isEdit ? onDelete : onClear}
                >
                    {!isEdit ? (
                        <DeleteIcon data-testid="Item_deleteButton" />
                    ) : (
                        <ClearIcon data-testid="Item_clearButton" />
                    )}
                </IconButton>
            </CardActions>
        </Card>
    );
});
