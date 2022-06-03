import React from "react";
import { darkColors } from "../../../theme";
import { FlexProps } from "../../Box";
import Flex from "../../Box/Flex";
// import Dropdown from '../../Dropdown/Dropdown';
import Link from "../../Link/Link";
import IconComponent from "../../Svg/IconComponent";
import { socialLinksTypes } from "../config";
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints";

const SocialLinks: React.FC<
  FlexProps & { socialLinks: socialLinksTypes[] }
> = ({ socialLinks, ...props }) => {
  const { isMobile } = useMatchBreakpoints();
  return (
    <Flex {...props}>
      {socialLinks.map((social, index) => {
        const iconProps = {
          iconName: social.icon,
          width: "20px",
          color: darkColors.textSubtle,
          style: { cursor: "pointer" },
        };
        const lastIndex = index < socialLinks.length - 1;
        const mr =
          // eslint-disable-next-line no-nested-ternary
          lastIndex && !isMobile ? "24px" : lastIndex && isMobile ? "18px" : 0;
        return (
          <Link
            external
            key={social.label}
            href={social.href}
            aria-label={social.label}
            mr={mr}
          >
            <IconComponent {...iconProps} />
          </Link>
        );
      })}
    </Flex>
  );
};

export default React.memo(SocialLinks, () => true);
