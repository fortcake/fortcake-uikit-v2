import React, { useContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MenuContext } from "../../widgets/Menu/context";
import StyledMenuItem, { StyledLink } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<
  MenuItemProps & {
    isExternal: boolean;
    useRouterLink: boolean;
  }
> = ({
  children,
  href = "",
  isActive = false,
  variant = "default",
  statusColor,
  isExternal = false,
  useRouterLink = false,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const itemLinkProps: unknown = useRouterLink
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
      {...itemLinkProps}
      $isActive={isActive}
      $variant={variant}
      $statusColor={statusColor}
      {...props}
    >
      {useRouterLink ? <StyledLink to={href}>{children}</StyledLink> : children}
    </StyledMenuItem>
  );
};

export default MenuItem;
