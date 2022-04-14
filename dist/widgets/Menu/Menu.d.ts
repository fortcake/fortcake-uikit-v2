import React, { ReactElement } from "react";
import { NavProps } from "./types";
declare const Menu: React.FC<NavProps & {
    isInGamesPage: boolean;
    newsLetterComponent: ReactElement;
}>;
export default Menu;
