import React from "react";
import BottomNavItem from "../BottomNavItem";
import StyledBottomNav from "./styles";
import { BottomNavProps } from "./types";
import { GamesLink } from "../../widgets/Menu";

const BottomNav: React.FC<BottomNavProps & { isInGamesPage: boolean }> = ({
  items = [],
  activeItem = "",
  isInGamesPage,
}) => {
  return (
    <StyledBottomNav justifyContent="space-around">
      {items.map(
        ({
          label,
          href,
          icon,
          showOnMobile = true,
          showItemsOnMobile = true,
        }) =>
          showOnMobile && (
            <BottomNavItem
              key={label}
              href={isInGamesPage && label === GamesLink.label ? "#" : href}
              isActive={href === activeItem}
              label={label}
              iconName={icon}
              showItemsOnMobile={showItemsOnMobile}
              isInGamesPage={isInGamesPage}
            />
          )
      )}
    </StyledBottomNav>
  );
};

export default BottomNav;
