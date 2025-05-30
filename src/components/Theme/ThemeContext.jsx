import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const THEME_KEY = 'SALUMERIA_THEME';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem(THEME_KEY);
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        localStorage.setItem(THEME_KEY, JSON.stringify(darkMode));
        if (darkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const value = {
        darkMode,
        toggleTheme
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
    }
    return context;
}