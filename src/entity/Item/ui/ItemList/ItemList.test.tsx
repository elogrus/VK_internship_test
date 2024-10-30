import { fireEvent, render, screen } from "@testing-library/react";
import { IItem } from "entity/Item/types/Item";
import { ItemList } from "./ItemList";

const item: IItem = {
    id: 123,
    description: "some desc",
    full_name: "fullname",
    html_url: "htmlUrl",
    language: "HTML",
    name: "name",
    owner: {
        avatar_url: "avatarUrl",
        html_url: "ownerHtmlUrl",
        id: 12345,
        login: "login",
        node_id: "nodeId",
    },
    private: false,
    topics: ["topic1", "topic2", "topic3"],
};

const itemListProp: IItem[] = [
    { ...item, id: 1, name: "name1" },
    { ...item, id: 2, name: "name2" },
    { ...item, id: 3, name: "name3" },
];

const onEditItem = jest.fn();
const onDeleteItem = jest.fn();

describe("ItemList", () => {
    const renderItemList = () => {
        render(
            <ItemList
                items={itemListProp}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
            />
        );
    };
    it("renders", () => {
        renderItemList();
        const root = screen.getByTestId("ItemList_root");
        expect(root).toBeInTheDocument();
        expect(root).toMatchSnapshot();
    });
    it("renders all items", () => {
        renderItemList();
        const root = screen.getByTestId("ItemList_root");
        expect(root.children.length).toBe(itemListProp.length);

        for (const itemProp of itemListProp) {
            expect(screen.queryByText(itemProp.name)).toBeInTheDocument();
        }
    });
    it("onEditItem", () => {
        renderItemList();
        const root = screen.getByTestId("ItemList_root");
        for (let i = 0; i < itemListProp.length; i++) {
            const item = root.children[i];
            fireEvent.click(
                item.parentElement.querySelector(
                    "*[data-testid=Item_editButton]"
                )
            );
            fireEvent.click(
                item.parentElement.querySelector(
                    "*[data-testid=Item_saveButton]"
                )
            );
        }
        for (const itemProp of itemListProp) {
            const item = screen.queryByText(itemProp.name);
        }
        expect(onEditItem).toHaveBeenCalledTimes(itemListProp.length);
    });
    it("onDeleteItem", () => {
        renderItemList();
        const root = screen.getByTestId("ItemList_root");

        for (let i = 0; i < itemListProp.length; i++) {
            const item = root.children[i];
            fireEvent.click(
                item.parentElement.querySelector(
                    "*[data-testid=Item_deleteButton]"
                )
            );
        }
        expect(onDeleteItem).toHaveBeenCalledTimes(itemListProp.length);
    });
});
