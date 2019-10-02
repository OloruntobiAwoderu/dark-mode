import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initalValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initalValue
    });
   

    const setValue = value => {
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    }
    return [storedValue, setValue];
}

export const useDarkMode = () => {
    const [isDark, setIsDark] = useLocalStorage('dark', false)
    const toggleDark = () => {
        document.body.classList.toggle('dark-mode')
        setIsDark(!isDark);
    }
    useEffect(() => {
        isDark 
        ? document.body.classList.add('dark-mode') :
        document.body.classList.remove('dark-mode')
    }, [isDark]);

    return [isDark, toggleDark]
}

