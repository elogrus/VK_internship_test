import { useAppDispatch, useAppSelector } from "app/store";
import { IItem } from "entity/Item";
import { editItem, removeItem, setItems } from "entity/Item/slice/ItemsSlice";
import {
    MouseEventHandler,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { GithubSorts } from "shared/consts/GithubSorts";
import { fetchData } from "../utils/fetchData";
import * as cls from "./ItemsWidget.module.scss";
import { ContentPart } from "./parts/ContentPart/ContentPart";
import { FormPart } from "./parts/FormPart/FormPart";
import { Alert } from "@mui/material";

export interface IQueryRef {
    queryString: string;
    sort: GithubSorts;
    page: number;
    blocked: boolean;
}

const ItemsWidget = () => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const ObservantRef = useRef();
    const list = useAppSelector((state) => state.GithubItems);

    // Состояние после нажатия кнопки "найти", не меняется до следующего нажатия
    const queryRef = useRef<IQueryRef>({
        queryString: "javascript",
        sort: GithubSorts.STARS,
        page: 1,
        blocked: false,
    });

    // Всегда актуальное состояние инпутов
    const formRef = useRef<IQueryRef>({
        queryString: "javascript",
        sort: GithubSorts.STARS,
        page: 1,
        blocked: false,
    });

    useEffect(() => {
        const observer = new IntersectionObserver(async (entries) => {
            if (!queryRef.current.blocked && entries[0].isIntersecting) {
                fetchData(queryRef, setIsLoading, dispatch);
            }
        });
        observer.observe(ObservantRef.current);
    }, []);

    const onSend: MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch(setItems([]));
        queryRef.current = { ...queryRef.current, ...formRef.current };
        fetchData(queryRef, setIsLoading, dispatch);
    };

    const onEditItem = useCallback((id: number, newItem: IItem) => {
        dispatch(editItem([id, newItem]));
    }, []);

    const onDeleteItem = useCallback((id: number) => {
        dispatch(removeItem(id));
    }, []);

    return (
        <div className={cls.ItemsWidget}>
            <FormPart
                onInputChange={(e) =>
                    (formRef.current.queryString = e.currentTarget.value)
                }
                onSelectChange={(e) =>
                    (formRef.current.sort = e.target.value as GithubSorts)
                }
                onSend={onSend}
                queryRef={queryRef}
            />
            <ContentPart
                list={list}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
                ObservantRef={ObservantRef}
                isLoading={isLoading}
            />
        </div>
    );
};

export default ItemsWidget;
