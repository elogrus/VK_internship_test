import { compareClasses as cmcl } from "shared/lib/classNames";
import * as cls from "./Error.module.scss";
import { ReactNode } from "react";

interface ErrorProps {
    className?: string;
    children: string;
}

export const Error = (props: ErrorProps) => {
    const { className, children, ...otherProps } = props;
    return (
        <div className={cmcl(cls.Error, {}, [className])} {...otherProps}>
            😢 Произошла ошибка: {children}
        </div>
    );
};
