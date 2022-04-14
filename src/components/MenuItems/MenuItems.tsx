import React from "react";
import { Flex } from "../Box";
import MenuItem from "../MenuItem/MenuItem";
import { MenuItemsProps } from "./types";
import { GamesLink } from "../../widgets/Menu";

const MenuItems: React.FC<MenuItemsProps & { isInGamesPage: boolean }> = ({
  items = [],
  activeItem,
  isInGamesPage,
  ...props
}) => {
  return (
    <Flex {...props}>
      {items.map(({ label, items: menuItems = [], href, isExternal = false }) => {
        const statusColor = menuItems?.find(
          (menuItem) => menuItem.status !== undefined
        )?.status?.color;
        const isActive = activeItem === href;
        return (
          <MenuItem
            key={label}
            isInGamesPage={isInGamesPage}
            label={label}
            href={isInGamesPage && label === GamesLink.label ? "#" : href}
            isActive={isActive}
            statusColor={statusColor}
            isExternal={isExternal}
          >
            {label}
          </MenuItem>
        );
      })}
    </Flex>
  );
};

export default MenuItems;
