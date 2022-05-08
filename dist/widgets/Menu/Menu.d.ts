import React, { ReactElement } from "react";
import Footer from "../../components/Footer";
import { NavProps } from "./types";
declare const Menu: React.FC<NavProps & {
    newsLetterComponent: ReactElement;
}>;
export default Menu;
export { Footer };
