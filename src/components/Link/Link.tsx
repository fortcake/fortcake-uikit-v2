import React, { useContext } from "react";
import styled from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Text from "../Text/Text";
import { LinkProps } from "./types";
import { MenuContext } from "../../widgets/Menu/context";

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`;

const Link: React.FC<LinkProps & { bold?: boolean }> = ({
  external,
  bold,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const isBold = bold ? { bold: true } : {};
  const internalProps = external ? getExternalLinkProps() : {};
  return (
    <StyledLink as={linkComponent} {...internalProps} {...isBold} {...props} />
  );
};

Link.defaultProps = {
  color: "primary",
  bold: true,
};

export default Link;
