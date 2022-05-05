import React from "react";
import BottomNavItem from "../BottomNavItem";
import StyledBottomNav from "./styles";
import { BottomNavProps } from "./types";
// import { GamesLink } from "../../widgets/Menu";

const BottomNav: React.FC<BottomNavProps> = ({ items = [], activeItem }) => {
  return (
    <StyledBottomNav justifyContent="space-around">
      {items.map(
        ({
          label,
          href,
          icon,
          showOnMobile = true,
          showItemsOnMobile = true,
          useRouterLink = false,
        }) =>
          showOnMobile && (
            <BottomNavItem
              key={label}
              href={href}
              useRouterLink={useRouterLink}
              isActive={href === activeItem}
              label={label}
              iconName={icon}
              showItemsOnMobile={showItemsOnMobile}
            />
          )
      )}
    </StyledBottomNav>
  );
};

export default BottomNav;
