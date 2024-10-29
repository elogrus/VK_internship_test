import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { ItemsWidget } from "widgets/ItemsWidget";
import * as cls from "./App.module.scss";
import { store } from "./store";

export const App = () => {
    return (
        <Provider store={store}>
            <div className={cls.App}>
                <Suspense fallback={<CircularProgress size="80px" />}>
                    <ItemsWidget />
                </Suspense>
            </div>
        </Provider>
    );
};
