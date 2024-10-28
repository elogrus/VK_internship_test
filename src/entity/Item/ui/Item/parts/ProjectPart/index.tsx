import { Box, Link, TextField, Typography } from "@mui/material";
import { ItemProps, PartProps } from "../../Item";
import * as cls from "./styles.module.scss";

export const ProjectPart = ({ isEdit, item, InputsRef }: PartProps) => (
    <Box>
        {!isEdit ? (
            <Link
                target="_blank"
                rel="noreferrer"
                href={item.html_url}
                underline="none"
                className={cls.ProjectWrapper}
            >
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="caption">{item.description}</Typography>
            </Link>
        ) : (
            <Box className={cls.ProjectWrapper}>
                <TextField
                    variant="standard"
                    aria-label="Изменить название"
                    helperText="Название"
                    size="small"
                    slotProps={{
                        input: {
                            sx: { fontSize: "var(--fz-big)" },
                        },
                    }}
                    defaultValue={item.name}
                    placeholder="Название"
                    onChange={(e) => {
                        InputsRef.current.name = e.currentTarget.value;
                    }}
                />
                <TextField
                    variant="standard"
                    helperText="Описание"
                    margin="dense"
                    size="small"
                    aria-label="Изменить описание"
                    defaultValue={item.description}
                    placeholder="Описание"
                    onChange={(e) => {
                        InputsRef.current.description = e.currentTarget.value;
                    }}
                />
            </Box>
        )}
    </Box>
);
