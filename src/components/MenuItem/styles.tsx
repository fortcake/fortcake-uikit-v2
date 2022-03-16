// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledMenuItemProps } from "./types";
import { GamesLink } from "../../widgets/Menu";

export const StyledLink = styled(Link)`
  padding: 20px 0;
`;

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;

  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: ${theme.colors.primary};
        border-radius: 2px 2px 0 0;
      }
    `};
`;

const StyledMenuItem = styled.a<
  StyledMenuItemProps & { isInGamesPage: boolean; label: string }
>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.secondary : theme.colors.textSubtle};
  font-size: 12px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
  }

  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
    padding: 0 11px;
    height: 48px;
  `
      : `
    padding: 4px 4px 0px 4px;
    height: 42px;
  `}

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 16px;
  }

  &:hover {
    background: ${({ theme, isInGamesPage, label }) =>
      isInGamesPage && label === GamesLink.label
        ? "transparent"
        : theme.colors.tertiary};
    ${({ $variant }) => $variant === "default" && "border-radius: 16px;"};
  }

  &.isDisabled {
    opacity: 0.5;
    text-decoration: none;
  }
`;

export default StyledMenuItem;
