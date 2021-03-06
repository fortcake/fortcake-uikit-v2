import React, { useContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuContext } from "../../widgets/Menu/context";
import { Flex } from "../Box";
import AnimatedIconComponent from "../Svg/AnimatedIconComponent";
import { StyledBottomNavItem, StyledBottomNavText } from "./styles";
import { BottomNavItemProps } from "./types";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomNavItem: React.FC<
  BottomNavItemProps & { useRouterLink: boolean }
> = ({
  label,
  iconName,
  href,
  isActive = false,
  useRouterLink = false,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const bottomNavItemContent = (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      {useRouterLink ? (
        <StyledLink to={href}>
          <AnimatedIconComponent
            iconName={iconName ?? ""}
            height="22px"
            width="21px"
            color={isActive ? "secondary" : "textSubtle"}
            isActive={isActive}
            activeBackgroundColor="backgroundAlt"
          />
          <StyledBottomNavText
            color={isActive ? "secondary" : "textSubtle"}
            fontWeight={isActive ? "600" : "400"}
            fontSize="10px"
          >
            {label}
          </StyledBottomNavText>
        </StyledLink>
      ) : (
        <>
          <AnimatedIconComponent
            iconName={iconName ?? ""}
            height="22px"
            width="21px"
            color={isActive ? "secondary" : "textSubtle"}
            isActive={isActive}
            activeBackgroundColor="backgroundAlt"
          />
          <StyledBottomNavText
            color={isActive ? "text" : "textSubtle"}
            fontWeight={isActive ? "600" : "400"}
            fontSize="10px"
          >
            {label}
          </StyledBottomNavText>
        </>
      )}
    </Flex>
  );

  const aProps = !useRouterLink
    ? {
        href,
        label,
      }
    : {};

  return (
    <StyledBottomNavItem
      as={useRouterLink ? "button" : linkComponent}
      {...aProps}
      {...props}
    >
      {bottomNavItemContent}
    </StyledBottomNavItem>
  );
};

export default BottomNavItem;
