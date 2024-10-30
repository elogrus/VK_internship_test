import { IItem, IItemList } from "../types/Item";
import reducer, {
    addItems,
    editItem,
    removeItem,
    setItems,
    setTotalCount,
} from "./ItemsSlice";

const initialState: IItemList = {
    items: [],
    total_count: -1,
};

const getTestItem = (id: number, name = "name"): IItem => ({
    id,
    description: "some desc",
    full_name: "fullname",
    html_url: "htmlUrl",
    language: "HTML",
    name,
    owner: {
        avatar_url: "avatarUrl",
        html_url: "ownerHtmlUrl",
        id: 12345,
        login: "login",
        node_id: "nodeId",
    },
    private: false,
    topics: ["topic1", "topic2", "topic3"],
});

const itemsState: IItemList = {
    items: [getTestItem(1), getTestItem(2)],
    total_count: 1000,
};

describe("ItemsSlice", () => {
    it("initial state", () => {
        expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
    });
    it("add items", () => {
        expect(
            reducer(itemsState, addItems([getTestItem(3), getTestItem(4)]))
        ).toEqual({
            items: [
                getTestItem(1),
                getTestItem(2),
                getTestItem(3),
                getTestItem(4),
            ],
            total_count: 1000,
        });
    });
    it("set items", () => {
        expect(reducer(itemsState, setItems([getTestItem(3)]))).toEqual({
            items: [getTestItem(3)],
            total_count: 1000,
        });
    });
    it("edit item", () => {
        expect(
            reducer(itemsState, editItem([2, getTestItem(2, "anotherName")]))
        ).toEqual({
            items: [getTestItem(1), getTestItem(2, "anotherName")],
            total_count: 1000,
        });
    });
    it("remove item", () => {
        expect(reducer(itemsState, removeItem(1))).toEqual({
            items: [getTestItem(2)],
            total_count: 1000,
        });
    });
    it("set totalcount", () => {
        expect(reducer(itemsState, setTotalCount(1234))).toEqual({
            items: [getTestItem(1), getTestItem(2)],
            total_count: 1234,
        });
    });
});
