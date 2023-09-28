/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
export const theme = {
  extend: {
    colors: {
      orange: '#ee4d2d',
      cloud: '#ffffff',
      darkness: '#000000',
      bgside: '#f0f2f5',
      bgGreen: '#33cd32',
      bgOverlay: 'rgba(0, 0, 0, 0.05)'
    }
  }
}
export const plugins = []
