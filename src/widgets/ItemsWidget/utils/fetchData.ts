import { useAppDispatch } from "app/store";
import { IItemList } from "entity/Item";
import { addItems, setTotalCount } from "entity/Item/slice/ItemsSlice";
import { MutableRefObject } from "react";
import { IQueryRef } from "../ui/ItemsWidget";
import { Query } from "./query";

export const fetchData = async (
    queryRef: MutableRefObject<IQueryRef>,
    setIsLoading: (val: boolean) => void,
    dispatch: ReturnType<typeof useAppDispatch>
) => {
    setIsLoading(true);
    try {
        queryRef.current.blocked = true;
        const response = await fetch(
            Query.getURL(
                queryRef.current.queryString,
                queryRef.current.page,
                queryRef.current.sort
            )
        );
        if (response.status >= 400) throw Error(response.statusText);
        const data: IItemList = await response.json();
        queryRef.current.page += 1;
        dispatch(addItems(data.items));
        dispatch(setTotalCount(data.total_count));
    } catch (error) {
        queryRef.current.blocked = true;
    } finally {
        queryRef.current.blocked = false;
        setIsLoading(false);
    }
};
