import React, { ReactElement } from "react";
import Footer from "../../components/Footer";
import { NavProps } from "./types";
import { socialLinksTypes } from "../../components/Footer/config";
declare const Menu: React.FC<NavProps & {
    newsLetterComponent: ReactElement;
    socialLinks: socialLinksTypes[];
}>;
export default Menu;
export { Footer };
