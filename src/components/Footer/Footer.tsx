import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { baseColors, darkColors } from "../../theme/colors";
import { Flex } from "../Box";
import { Link } from "../Link";
import { StyledFooter, StyledList, StyledListItem, StyledText } from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import SocialLinks from "./Components/SocialLinks";
// import { Image } from "../Image";

const FlexItems = styled(Flex)`
  justify-content: space-between;
  flex-grow: 3;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`;

const MenuItem: React.FC<
  FooterProps & { newsLetterComponent: ReactElement }
> = ({ items, isDark, toggleTheme, newsLetterComponent, ...props }) => {
  return (
    <StyledFooter
      p={["40px 16px", null, "56px 40px 32px 40px"]}
      {...props}
      justifyContent="center"
    >
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <Flex
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >
          <FlexItems
            justifyContent="space-between"
            flexDirection={["column", null, "row"]}
          >
            {items?.map((item) => (
              <StyledList key={item.label}>
                <StyledListItem>{item.label}</StyledListItem>
                {item.items?.map(
                  ({
                    label,
                    href,
                    isHighlighted = false,
                    useRouterLink,
                    isExternal = true,
                  }) => {
                    const LinkProps: unknown = useRouterLink
                      ? { as: RouterLink, to: href }
                      : {
                          href,
                          external: isExternal,
                        };
                    return (
                      <StyledListItem key={label}>
                        {href ? (
                          <Link
                            {...LinkProps}
                            color={
                              isHighlighted
                                ? baseColors.warning
                                : darkColors.text
                            }
                            bold={false}
                          >
                            {label}
                          </Link>
                        ) : (
                          <StyledText>{label}</StyledText>
                        )}
                      </StyledListItem>
                    );
                  }
                )}
              </StyledList>
            ))}
          </FlexItems>
          {newsLetterComponent}
        </Flex>
        <Flex justifyContent="space-between">
          <SocialLinks />
          <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
        </Flex>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
