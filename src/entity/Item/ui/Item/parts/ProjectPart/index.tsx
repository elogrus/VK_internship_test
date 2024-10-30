import { Box, Link, TextField, Typography } from "@mui/material";
import { PartProps } from "../../Item";
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
                data-testid="Item_project"
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
                    placeholder="Название"
                    size="small"
                    slotProps={{
                        input: {
                            sx: { fontSize: "1.5rem" },
                        },
                    }}
                    defaultValue={item.name}
                    onChange={(e) => {
                        InputsRef.current.name = e.currentTarget.value;
                    }}
                />
                <TextField
                    variant="standard"
                    helperText="Описание"
                    placeholder="Описание"
                    margin="dense"
                    size="small"
                    aria-label="Изменить описание"
                    defaultValue={item.description}
                    onChange={(e) => {
                        InputsRef.current.description = e.currentTarget.value;
                    }}
                />
            </Box>
        )}
    </Box>
);
