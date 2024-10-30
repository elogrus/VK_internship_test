import { Avatar, Box, Link, TextField, Typography } from "@mui/material";
import { PartProps } from "../../Item";
import * as cls from "./styles.module.scss";

export const OwnerPart = ({ isEdit, item, InputsRef }: PartProps) => (
    <Box>
        {!isEdit ? (
            <Link
                target="_blank"
                rel="noreferrer"
                data-testid="Item_owner"
                href={item.owner.html_url}
                className={cls.OwnerWrapper}
            >
                <Avatar
                    data-testid="Item_avatar"
                    className={cls.Avatar}
                    aria-label={item.owner.login}
                    src={item.owner.avatar_url}
                />
                <Typography
                    className="MuiTypography-subtitle1"
                    variant="subtitle1"
                >
                    {item.owner.login}
                </Typography>
            </Link>
        ) : (
            <Box>
                <TextField
                    size="small"
                    helperText="Ссылка на аватар"
                    placeholder="Ссылка на аватар"
                    variant="standard"
                    fullWidth
                    defaultValue={item.owner.avatar_url}
                    onChange={(e) => {
                        InputsRef.current.avatar = e.currentTarget.value;
                    }}
                />
                <TextField
                    size="small"
                    helperText="Логин"
                    placeholder="Логин"
                    variant="standard"
                    fullWidth
                    defaultValue={item.owner.login}
                    onChange={(e) => {
                        InputsRef.current.login = e.currentTarget.value;
                    }}
                />
                <TextField
                    helperText="Ссылка на профиль"
                    placeholder="Ссылка на профиль"
                    variant="standard"
                    margin="dense"
                    fullWidth
                    size="small"
                    defaultValue={item.owner.html_url}
                    onChange={(e) => {
                        InputsRef.current.profileLink = e.currentTarget.value;
                    }}
                />
            </Box>
        )}
    </Box>
);
