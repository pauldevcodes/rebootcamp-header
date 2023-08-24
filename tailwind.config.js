/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: false,
  content: [
    './public/index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: { // TODO: Progressively fill out with UI deisgn tokens
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: {
        10: '#F0CCCC',
        20: '#E5AAAA',
        30: '#D88080',
        40: '#CC5555',
        50: '#BF2B2B',
        60: '#B20000',
        70: '#B20000',
        80: '#940000',
        90: '#770000',
        100: '#590000',
        110: '#3B0000',
        120: '#240000',
      },
      black: {
        10: '#D2D2D2',
        20: '#B3B3B3',
        30: '#8D8D8D',
        40: '#686868',
        50: '#424242',
        60: '#1C1C1C',
        70: '#1C1C1C',
        80: '#171717',
        90: '#131313',
        100: '#0E0E0E',
        110: '#090909',
        120: '#060606',
      },
      gray: {
        10: '#E5E5E6',
        20: '#D4D4D6',
        30: '#BEBFC1',
        40: '#A9AAAC',
        50: '#939498',
        60: '#7E7F83',
        70: '#7E7F83',
        80: '#696A6D',
        90: '#545557',
        100: '#3F4042',
        110: '#2A2A2C',
        120: '#19191A',
      },
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#0284c7',
        700: '#0369a1',
        800: '#1e40af',
        900: '#1e3a8a'
      },
      white: '#ffffff',
      green: {},
    },
    fontFamily: {
      sans: ['Lato', ...defaultTheme.fontFamily.sans],
    },
    boxShadow: {
      xs: '0 1px 2px 0 rgba(16, 24, 40, 0.05)',
      sm: '0 1px 2px 0 rgba(16, 24, 40, 0.06), 0 1px 3px 0 rgba(16, 24, 40, 0.10)',
      md: '0 2px 4px -2px rgba(16, 24, 40, 0.06), 0 4px 8px -2px rgba(16, 24, 40, 0.10)',
      lg: '0 4px 6px -2px rgba(16, 24, 40, 0.03), 0 12px 16px -4px rgba(16, 24, 40, 0.08)',
      xl: '0 8px 8px -4px rgba(16, 24, 40, 0.03), 0 20px 24px -4px rgba(16, 24, 40, 0.08)',
      '2xl': '0 24px 48px -12px rgba(16, 24, 40, 0.18)',
      '3xl': '0 32px 64px -12px rgba(16, 24, 40, 0.14)',
    },
    extend: {
      screens: {
        '2xl': '90rem',
      },
      spacing: {
        30: '7.5rem',
      },
    },
  },
  plugins: [],
}
