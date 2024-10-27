import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    IconButton,
    Input,
    Link,
    Typography,
} from "@mui/material";
import { IItem } from "entity/Item/types/Item";
import GithubLanguageColors from "shared/util/GithubLanguageColors";
import * as cls from "./Item.module.scss";

interface ItemProps {
    item: IItem;
    editable?: boolean;
    onEdit?: () => {};
}

export const Item = (props: ItemProps) => {
    const { item, editable = false } = props;
    return (
        <Card className={cls.Item}>
            <CardContent className={cls.Content}>
                <Box>
                    {!editable ? (
                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={item.owner.html_url}
                            className={cls.OwnerWrapper}
                        >
                            <Avatar
                                className={cls.Avatar}
                                aria-label={item.owner.login}
                                src={item.owner.avatar_url}
                            />
                            <Typography variant="subtitle1">
                                {item.owner.login}
                            </Typography>
                        </Link>
                    ) : (
                        <Box className={cls.OwnerWrapper}>
                            <Avatar
                                className={cls.Avatar}
                                aria-label={item.owner.login}
                                src={item.owner.avatar_url}
                            />
                            <Input defaultValue={item.owner.login} />
                        </Box>
                    )}
                </Box>
                <Box>
                    {!editable ? (
                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={item.html_url}
                            underline="none"
                            className={cls.ProjectWrapper}
                        >
                            <Typography variant="h5">{item.name}</Typography>
                            <Typography variant="caption">
                                {item.description}
                            </Typography>
                        </Link>
                    ) : (
                        <Box className={cls.ProjectWrapper}>
                            <Input
                                aria-label="Изменить название"
                                defaultValue={item.name}
                                placeholder="Название"
                            />
                            <Input
                                aria-label="Изменить описание"
                                defaultValue={item.description}
                                placeholder="Описание"
                            />
                        </Box>
                    )}
                </Box>
                {item.language && (
                    <Box>
                        {!editable ? (
                            <Typography
                                className={cls.Language}
                                variant="subtitle2"
                            >
                                <div
                                    className={cls.ColorCircle}
                                    style={{
                                        backgroundColor:
                                            GithubLanguageColors[
                                                item.language
                                            ] ||
                                            GithubLanguageColors["NotFound"],
                                    }}
                                ></div>
                                {item.language}
                            </Typography>
                        ) : (
                            <Input
                                aria-label="Изменить язык"
                                defaultValue={item.language}
                                placeholder="Язык"
                            />
                        )}
                    </Box>
                )}
            </CardContent>

            <CardActions>
                <IconButton color="info">
                    {!editable ? <EditIcon /> : <CheckIcon />}
                </IconButton>
                <IconButton color="error">
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};
