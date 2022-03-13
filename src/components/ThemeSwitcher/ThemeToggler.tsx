import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';
import Flex from '../Box/Flex';
import { Button } from '../Button';
import { MoonIcon, SunIcon } from '../Svg';
import { dark } from '../../theme';

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const CustomButton = styled(Button)`
  border: 0;
  &:hover {
    background-color: #353547;
  }
  &:active {
    transform: translateY(0px);
  }
  &:focus {
    box-shadow: 0 0 0 2px;
  }
`;

const ThemeToggler: React.FC<Props> = ({ isDark, toggleTheme }) => {
  return (
    <CustomButton variant="secondary" onClick={() => toggleTheme(!isDark)}>
      {/* alignItems center is a Safari fix */}
      <Flex alignItems="center">
        <SunIcon color={isDark ? 'textDisabled' : '#32fa99'} width="24px" />
        <Text color={dark.colors.textDisabled} mx="4px">
          /
        </Text>
        <MoonIcon color={isDark ? 'text' : '#3c3742'} width="24px" />
      </Flex>
    </CustomButton>
  );
};

export default ThemeToggler;
