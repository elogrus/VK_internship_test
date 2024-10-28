import { ItemList } from "entity/Item";
import * as cls from "./ItemsWidget.module.scss";

export const ItemsWidget = () => {
    return (
        <div className={cls.ItemsWidget}>
            {/* <span>Результат: {items.total_count}</span> */}
            <ItemList />
        </div>
    );
};
