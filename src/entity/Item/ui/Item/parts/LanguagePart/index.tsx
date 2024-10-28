import { Box, TextField, Typography } from "@mui/material";
import GithubLanguageColors from "shared/consts/GithubLanguageColors";
import { PartProps } from "../../Item";
import * as cls from "./styles.module.scss";

export const LanguagePart = ({ isEdit, item, InputsRef }: PartProps) => (
    <>
        {item.language && (
            <Box>
                {!isEdit ? (
                    <Typography className={cls.Language} variant="subtitle2">
                        <div
                            className={cls.ColorCircle}
                            style={{
                                backgroundColor:
                                    GithubLanguageColors[item.language] ||
                                    GithubLanguageColors["NotFound"],
                            }}
                        ></div>
                        {item.language}
                    </Typography>
                ) : (
                    <TextField
                        onChange={(e) => {
                            InputsRef.current.language = e.currentTarget.value;
                        }}
                        helperText="Язык программирования"
                        variant="standard"
                        aria-label="Изменить язык"
                        defaultValue={item.language}
                        placeholder="Язык"
                    />
                )}
            </Box>
        )}
    </>
);
