/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#2e3f6e',
                'primary-light': '#325096',
                'primary-button': '#4bacf1',
            },
        },
    },
    plugins: [],
};
