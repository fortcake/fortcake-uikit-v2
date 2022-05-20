import React, { useContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import { MenuContext } from "../../widgets/Menu/context";
import StyledMenuItem from "./styles";
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
        as: Link,
        to: href,
      }
    : {
        as: useRouterLink ? Link : linkComponent,
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
      {children}
    </StyledMenuItem>
  );
};

export default MenuItem;
