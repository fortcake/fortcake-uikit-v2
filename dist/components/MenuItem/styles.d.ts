/// <reference types="react" />
import { StyledMenuItemProps } from "./types";
export declare const StyledLink: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react-router-dom").LinkProps & import("react").RefAttributes<HTMLAnchorElement>>, import("styled-components").DefaultTheme, {}, never>;
export declare const StyledMenuItemContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyledMenuItemProps, never>;
declare const StyledMenuItem: import("styled-components").StyledComponent<"a", import("styled-components").DefaultTheme, StyledMenuItemProps & {
    isInGamesPage: boolean;
    label: string;
}, never>;
export default StyledMenuItem;
