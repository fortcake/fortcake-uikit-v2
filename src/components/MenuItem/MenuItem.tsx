import React, { useContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MenuContext } from "../../widgets/Menu/context";
import StyledMenuItem, { StyledLink } from "./styles";
import { MenuItemProps } from "./types";
import { GamesLink } from "../../widgets/Menu";

const MenuItem: React.FC<
  MenuItemProps & { isInGamesPage: boolean; label: string; isExternal: boolean }
> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  isInGamesPage,
  label,
  isExternal = false,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const itemLinkProps: unknown =
    label === GamesLink.label
      ? {
          as: "div",
        }
      : {
          as: linkComponent,
          href,
          target: isExternal ? "_blank" : "",
        };
  return (
    <StyledMenuItem
      label={label}
      isInGamesPage={isInGamesPage}
      {...itemLinkProps}
      $isActive={isActive}
      $variant={variant}
      $statusColor={statusColor}
      className={isInGamesPage && label === GamesLink.label ? "isDisabled" : ""}
      {...props}
    >
      {label === GamesLink.label ? (
        <StyledLink to={GamesLink.link}>{children}</StyledLink>
      ) : (
        children
      )}
    </StyledMenuItem>
  );
};

export default MenuItem;
