import React from "react";
import { MenuItemProps } from "./types";
declare const MenuItem: React.FC<MenuItemProps & {
    isInGamesPage: boolean;
    label: string;
}>;
export default MenuItem;
