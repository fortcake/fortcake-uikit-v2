import React from "react";
import { BottomNavItemProps } from "./types";
declare const BottomNavItem: React.FC<BottomNavItemProps & {
    isInGamesPage: boolean;
    label: string;
}>;
export default BottomNavItem;
