import SendIcon from "@mui/icons-material/Send";
import {
    IconButton,
    InputBase,
    MenuItem,
    Paper,
    TextField,
} from "@mui/material";
import { ChangeEvent, MouseEventHandler, MutableRefObject } from "react";
import { GithubSorts } from "shared/consts/GithubSorts";
import { IQueryRef } from "../../ItemsWidget";
import * as cls from "./FormPart.module.scss";

interface FormPartProps {
    queryRef: MutableRefObject<IQueryRef>;
    onSelectChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSend: MouseEventHandler<HTMLButtonElement>;
}

export const FormPart = (props: FormPartProps) => {
    const { onSelectChange, onInputChange, onSend, queryRef } = props;
    return (
        <Paper component="form" className={cls.Form}>
            <TextField
                className={cls.Sort}
                label="Сортировать по"
                onChange={onSelectChange}
                defaultValue={GithubSorts.STARS}
                data-testid="ItemsWidget_select"
                select
            >
                <MenuItem value={GithubSorts.STARS}>Звездам</MenuItem>
                <MenuItem value={GithubSorts.FORKS}>Форкам</MenuItem>
                <MenuItem value={GithubSorts.UPDATED}>Обновлениям</MenuItem>
            </TextField>

            <InputBase
                data-testid="ItemsWidget_input"
                fullWidth
                defaultValue={queryRef.current.queryString}
                onChange={onInputChange}
            />

            <IconButton
                data-testid="ItemsWidget_sendButton"
                onClick={onSend}
                color="primary"
            >
                <SendIcon />
            </IconButton>
        </Paper>
    );
};
