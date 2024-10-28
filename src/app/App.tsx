//@ts-check

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IItemList, ItemList } from "entity/Item";
import { Provider } from "react-redux";
import * as cls from "./App.module.scss";
import { store } from "./store";
import { ItemsWidget } from "./widgets/ItemsWidget/ui/ItemsWidget";

export const App = () => {
    // const [isLoading, result, error] = useLoading<IItemList>(
    //     "https://api.github.com/search/repositories?q=javascript&sort=stars&order=asc&page=2"
    // );
    return (
        <Provider store={store}>
            <div className={cls.App}>
                {/* {isLoading && <div>Загрузка...</div>}
            {!isLoading && error && <Error>{error.message}</Error>}
            {!isLoading && result && ( */}
                <ItemsWidget />

                {/* )} */}
            </div>
        </Provider>
    );
};
