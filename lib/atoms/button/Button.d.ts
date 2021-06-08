import React, { MouseEventHandler } from "react";
interface DefaultProps {
    children?: React.ReactNode;
    props?: any;
    primary?: boolean;
    round?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler;
    type?: "submit" | "reset" | "button";
}
declare const RRSButton: React.FC<DefaultProps>;
export { RRSButton };
