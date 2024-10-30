import { fireEvent, render, screen } from "@testing-library/react";
import { IItem } from "entity/Item/types/Item";
import GithubLanguageColors from "shared/consts/GithubLanguageColors";
import { getTestItem } from "../../testHelpers/getItem";
import { Item } from "./Item";

const itemProp = getTestItem(123, "name");

const itemPropWithoutLanguage: IItem = {
    ...itemProp,
    language: "",
};

const onEditItem = jest.fn();
const onDeleteItem = jest.fn();

describe("Item", () => {
    const renderItem = (item: IItem = itemProp) => {
        render(
            <Item
                item={item}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
            />
        );
    };

    const checkExistInputs = (exists: boolean = true) => {
        if (exists) {
            expect(
                screen.queryByPlaceholderText("Ссылка на аватар")
            ).toBeInTheDocument();
            expect(screen.queryByPlaceholderText("Логин")).toBeInTheDocument();
            expect(
                screen.queryByPlaceholderText("Ссылка на профиль")
            ).toBeInTheDocument();
            expect(
                screen.queryByPlaceholderText("Название")
            ).toBeInTheDocument();
            expect(
                screen.queryByPlaceholderText("Описание")
            ).toBeInTheDocument();
            expect(
                screen.queryByPlaceholderText("Язык программирования")
            ).toBeInTheDocument();
        } else {
            expect(
                screen.queryByPlaceholderText("Ссылка на аватар")
            ).toBeNull();
            expect(screen.queryByPlaceholderText("Логин")).toBeNull();
            expect(
                screen.queryByPlaceholderText("Ссылка на профиль")
            ).toBeNull();
            expect(screen.queryByPlaceholderText("Название")).toBeNull();
            expect(screen.queryByPlaceholderText("Описание")).toBeNull();
            expect(
                screen.queryByPlaceholderText("Язык программирования")
            ).toBeNull();
        }
    };

    const changeInputs = () => {
        const loginInput = screen.queryByPlaceholderText("Логин");
        const avatarUrlInput =
            screen.queryByPlaceholderText("Ссылка на аватар");
        const profileUrlInput =
            screen.queryByPlaceholderText("Ссылка на профиль");
        const nameInput = screen.queryByPlaceholderText("Название");
        const descInput = screen.queryByPlaceholderText("Описание");
        const languageInput = screen.queryByPlaceholderText(
            "Язык программирования"
        );

        fireEvent.change(loginInput, { target: { value: "новый логин" } });
        fireEvent.change(avatarUrlInput, {
            target: { value: "новая ссылка на аватар" },
        });
        fireEvent.change(profileUrlInput, {
            target: { value: "новая ссылка на профиль" },
        });
        fireEvent.change(nameInput, { target: { value: "новое название" } });
        fireEvent.change(descInput, { target: { value: "новое описание" } });
        fireEvent.change(languageInput, {
            target: { value: "новый язык программирования" },
        });

        const newItem: IItem = {
            ...itemProp,
            owner: { ...itemProp.owner },
        };
        newItem.owner.login = "новый логин";
        newItem.owner.avatar_url = "новая ссылка на аватар";
        newItem.owner.html_url = "новая ссылка на профиль";
        newItem.name = "новое название";
        newItem.description = "новое описание";
        newItem.language = "новый язык программирования";

        return newItem;
    };

    it("renders", () => {
        renderItem();
        const root = screen.queryByTestId("Item_root");
        expect(root).toBeInTheDocument();
        expect(root).toMatchSnapshot();
    });

    it("shows owner info", () => {
        renderItem();

        const owner = screen.queryByTestId("Item_owner");
        expect(owner).toBeInTheDocument();
        expect(owner).toHaveAttribute("href", "ownerHtmlUrl");

        expect(screen.queryByText("login")).toBeInTheDocument();

        const avatar = screen.queryByTestId("Item_avatar");
        expect(avatar).toBeInTheDocument();
        expect(avatar.querySelector("img")).toHaveAttribute("src", "avatarUrl");
    });

    it("shows project info", () => {
        renderItem();

        const project = screen.queryByTestId("Item_project");
        expect(project).toBeInTheDocument();
        expect(project).toHaveAttribute("href", "htmlUrl");

        expect(screen.queryByText("name")).toBeInTheDocument();
        expect(screen.queryByText("some desc")).toBeInTheDocument();
    });

    it("shows language info", () => {
        renderItem();
        expect(screen.queryByText("HTML")).toBeInTheDocument();
        const colorCircle = screen.queryByTestId("Item_colorCircle");
        expect(colorCircle).toBeInTheDocument();
        expect(colorCircle).toHaveStyle(
            `backgroundColor: ${GithubLanguageColors["HTML"]}`
        );
    });

    it("don't shows language info with empty language", () => {
        renderItem(itemPropWithoutLanguage);
        expect(screen.queryByText("HTML")).toBeNull();
    });

    it("show buttons in not-edit mode", () => {
        render(
            <Item
                item={itemProp}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
            />
        );
        const buttons = screen.queryByTestId("Item_buttons");

        expect(
            buttons.querySelector("*[data-testid=Item_editButton]")
        ).toBeInTheDocument();
        expect(
            buttons.querySelector("*[data-testid=Item_deleteButton]")
        ).toBeInTheDocument();

        expect(
            buttons.querySelector("*[data-testid=Item_saveButton]")
        ).toBeNull();
        expect(
            buttons.querySelector("*[data-testid=Item_clearButton]")
        ).toBeNull();
    });

    it("show buttons in edit mode", () => {
        render(
            <Item
                item={itemProp}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
            />
        );
        const buttons = screen.queryByTestId("Item_buttons");
        const editButton = screen.queryByTestId("Item_editButton");
        fireEvent.click(editButton);
        expect(
            buttons.querySelector("*[data-testid=Item_editButton]")
        ).toBeNull();
        expect(
            buttons.querySelector("*[data-testid=Item_deleteButton]")
        ).toBeNull();

        expect(
            buttons.querySelector("*[data-testid=Item_saveButton]")
        ).toBeInTheDocument();
        expect(
            buttons.querySelector("*[data-testid=Item_clearButton]")
        ).toBeInTheDocument();
    });

    it("show inputs in edit mode", () => {
        render(
            <Item
                item={itemProp}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
            />
        );
        const editButton = screen.queryByTestId("Item_editButton");
        checkExistInputs(false);
        fireEvent.click(editButton);
        checkExistInputs(true);
    });

    it("onDelete", () => {
        render(
            <Item
                item={itemProp}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
            />
        );
        fireEvent.click(screen.queryByTestId("Item_deleteButton"));
        expect(onDeleteItem).toHaveBeenCalledTimes(1);
        expect(onDeleteItem).toHaveBeenCalledWith(123);
    });

    it("on change data", () => {
        render(
            <Item
                item={itemProp}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
            />
        );
        fireEvent.click(screen.queryByTestId("Item_editButton"));
        const newItem = changeInputs();
        fireEvent.click(screen.queryByTestId("Item_saveButton"));
        expect(onEditItem).toHaveBeenCalledTimes(1);
        expect(onEditItem).toHaveBeenCalledWith(123, newItem);
    });

    it("on clear don't change data", () => {
        render(
            <Item
                item={itemProp}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
            />
        );
        fireEvent.click(screen.queryByTestId("Item_editButton"));
        changeInputs();
        fireEvent.click(screen.queryByTestId("Item_clearButton"));
        expect(onEditItem).toHaveBeenCalledTimes(0);
    });
});
