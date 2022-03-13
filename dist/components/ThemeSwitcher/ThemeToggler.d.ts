import React from 'react';
interface Props {
    isDark: boolean;
    toggleTheme: (isDark: boolean) => void;
}
declare const ThemeToggler: React.FC<Props>;
export default ThemeToggler;
