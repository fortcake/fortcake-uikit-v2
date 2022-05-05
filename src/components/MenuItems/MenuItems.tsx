import React from "react";
import { Flex } from "../Box";
import MenuItem from "../MenuItem/MenuItem";
import { MenuItemsProps } from "./types";

const MenuItems: React.FC<MenuItemsProps> = ({
  items = [],
  activeItem,
  ...props
}) => {
  return (
    <Flex {...props}>
      {items.map(
        ({
          label,
          items: menuItems = [],
          href,
          isExternal = false,
          useRouterLink = false,
        }) => {
          const statusColor = menuItems?.find(
            (menuItem) => menuItem.status !== undefined
          )?.status?.color;
          const isActive = activeItem === href;
          return (
            <MenuItem
              key={label}
              href={href}
              isActive={isActive}
              statusColor={statusColor}
              isExternal={isExternal}
              useRouterLink={useRouterLink}
            >
              {label}
            </MenuItem>
          );
        }
      )}
    </Flex>
  );
};

export default MenuItems;
