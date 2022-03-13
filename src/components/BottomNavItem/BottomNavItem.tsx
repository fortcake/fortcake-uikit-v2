import React, { useContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuContext } from "../../widgets/Menu/context";
import { Flex } from "../Box";
import AnimatedIconComponent from "../Svg/AnimatedIconComponent";
import { StyledBottomNavItem, StyledBottomNavText } from "./styles";
import { BottomNavItemProps } from "./types";
import { GamesLink } from "../../widgets/Menu";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomNavItem: React.FC<
  BottomNavItemProps & { isInGamesPage: boolean; label: string }
> = ({ label, iconName, href, isActive = false, isInGamesPage, ...props }) => {
  const { linkComponent } = useContext(MenuContext);
  const bottomNavItemContent = (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      {label === GamesLink.label ? (
        <StyledLink to={GamesLink.link}>
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

  const aProps =
    label !== GamesLink.label
      ? {
          href,
          label,
        }
      : {};

  return (
    <StyledBottomNavItem
      as={label === GamesLink.label ? "button" : linkComponent}
      isInGamesPage={isInGamesPage}
      className={isInGamesPage && label === GamesLink.label ? "isDisabled" : ""}
      {...aProps}
      {...props}
    >
      {bottomNavItemContent}
    </StyledBottomNavItem>
  );
};

export default BottomNavItem;
