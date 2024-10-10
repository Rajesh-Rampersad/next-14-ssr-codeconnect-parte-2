'use client'
import { useState, useEffect } from 'react';

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md"
    >
      {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
}
