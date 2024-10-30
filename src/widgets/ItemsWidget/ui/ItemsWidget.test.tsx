import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import * as reduxHooks from "app/store";
import { IItemList } from "entity/Item";
import * as actions from "entity/Item/slice/ItemsSlice";
import { getTestItem } from "entity/Item/testHelpers/getItem";
import { intersect } from "setupTests";
import { GithubSorts } from "shared/consts/GithubSorts";
import { Query } from "../utils/query";
import ItemsWidget from "./ItemsWidget";

const ItemList: IItemList = {
    total_count: 1000,
    items: [
        getTestItem(1, "name1"),
        getTestItem(2, "name2"),
        getTestItem(3, "name3"),
    ],
};

describe("ItemsWidget", () => {
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValue(ItemList);
    const dispatch = jest.fn();
    jest.spyOn(reduxHooks, "useAppDispatch").mockReturnValue(dispatch);

    const renderWidget = () => render(<ItemsWidget />);

    it("renders", () => {
        renderWidget();
        const root = screen.getByTestId("ItemsWidget_root");
        expect(root).toBeInTheDocument();
        expect(root).toMatchSnapshot();
    });

    it("show items", () => {
        renderWidget();
        expect(screen.queryAllByTestId("Item_root").length).toBe(3);
    });

    it("show progress", async () => {
        global.fetch = jest.fn(() => new Promise(jest.fn()));
        renderWidget();
        await act(
            async () =>
                await intersect(
                    screen.getByTestId("ItemsWidget_observant"),
                    true
                )
        );
        expect(
            screen.queryByTestId("ItemsWidget_progress")
        ).toBeInTheDocument();
    });

    it("show progress on send click", async () => {
        // @ts-ignore
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(ItemList),
                status: 200,
                statusText: "OK",
            })
        );
        renderWidget();
        await act(
            async () =>
                await intersect(
                    screen.getByTestId("ItemsWidget_observant"),
                    true
                )
        );
        global.fetch = jest.fn(() => new Promise(jest.fn()));
        fireEvent.click(screen.getByTestId("ItemsWidget_sendButton"));
        expect(
            screen.queryByTestId("ItemsWidget_progress")
        ).toBeInTheDocument();
    });

    it("show no-items-text", () => {
        jest.spyOn(reduxHooks, "useAppSelector").mockReturnValue({
            total_count: 0,
            items: [],
        });
        renderWidget();
        expect(screen.queryByText("Записи не найдены")).toBeInTheDocument();
    });

    it("show items-ran-out-text #1 (less length)", () => {
        jest.spyOn(reduxHooks, "useAppSelector").mockReturnValue({
            ...ItemList,
            total_count: 1,
        });
        renderWidget();
        expect(screen.queryByText("Записи закончились")).toBeInTheDocument();
    });

    it("show items-ran-out-text #2 (equal length)", () => {
        jest.spyOn(reduxHooks, "useAppSelector").mockReturnValue({
            ...ItemList,
            total_count: 3,
        });
        renderWidget();
        expect(screen.queryByText("Записи закончились")).toBeInTheDocument();
    });

    it("fetch data", async () => {
        // @ts-ignore
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(ItemList),
                status: 200,
                statusText: "OK",
            })
        );
        renderWidget();
        const select = screen
            .getByTestId("ItemsWidget_select")
            .querySelector("input");
        const input = screen
            .getByTestId("ItemsWidget_input")
            .querySelector("input");
        const sendButton = screen.getByTestId("ItemsWidget_sendButton");

        fireEvent.change(select, { target: { value: GithubSorts.FORKS } });
        fireEvent.change(input, { target: { value: "paramparam" } });
        fireEvent.click(sendButton);

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(
                Query.getURL("paramparam", 1, GithubSorts.FORKS)
            );

            expect(dispatch).toHaveBeenCalledWith(
                actions.addItems(ItemList.items)
            );
            expect(dispatch).toHaveBeenCalledWith(
                actions.setTotalCount(ItemList.total_count)
            );
        });
    });

    it("on change item", () => {
        jest.spyOn(reduxHooks, "useAppSelector").mockReturnValue({
            total_count: 1000,
            items: [getTestItem(1, "name1")],
        });
        renderWidget();
        fireEvent.click(screen.queryByTestId("Item_editButton"));
        fireEvent.change(screen.getByPlaceholderText("Название"), {
            target: { value: "anotherName" },
        });
        fireEvent.click(screen.queryByTestId("Item_saveButton"));

        expect(dispatch).toHaveBeenCalledWith(
            actions.editItem([1, getTestItem(1, "anotherName")])
        );
    });

    it("on delete item", () => {
        jest.spyOn(reduxHooks, "useAppSelector").mockReturnValue({
            total_count: 1000,
            items: [getTestItem(1, "name1"), getTestItem(2, "name1")],
        });
        renderWidget();
        fireEvent.click(screen.queryAllByTestId("Item_deleteButton")[1]);

        expect(dispatch).toHaveBeenCalledWith(actions.removeItem(2));
    });
});
