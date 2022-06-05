import React, { useContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
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
  const itemLinkProps: unknown = isExternal
    ? {
        target: isExternal ? "_blank" : "",
      }
    : {};

  return (
    <StyledMenuItem
      {...itemLinkProps}
      as={linkComponent}
      href={href}
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
