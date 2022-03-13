import React from "react";
import { baseColors, darkColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import { StyledFooter, StyledList, StyledListItem, StyledText } from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import SocialLinks from "./Components/SocialLinks";
// import { Image } from "../Image";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  ...props
}) => {
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
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      color={
                        isHighlighted ? baseColors.warning : darkColors.text
                      }
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))}
          <Box display={["none", null, "block"]}>
            {/* <Image src={footerImg} width={200} height={34} /> */}
            {/* <LogoWithTextIcon isDark width="160px" /> */}
          </Box>
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
