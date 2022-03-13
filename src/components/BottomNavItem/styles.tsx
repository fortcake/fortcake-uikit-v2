import styled from "styled-components";
import { Text } from "../Text";
import { GamesLink } from "../../widgets/Menu";

export const StyledBottomNavItem = styled.button<{
  isInGamesPage: boolean;
  label: string;
}>`
  display: block;
  border: 0;
  background: transparent;
  cursor: pointer;
  height: 44px;
  padding: 4px 12px;
  &:hover {
    border-radius: 16px;
  }
  &:hover,
  &:hover div {
    background: ${({ theme, isInGamesPage, label }) =>
      isInGamesPage && label === GamesLink.link
        ? "transparent"
        : theme.colors.tertiary};
  }
  &.isDisabled {
    opacity: 0.5;
    text-decoration: none;
  }
`;

export const StyledBottomNavText = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  user-select: none;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`;
