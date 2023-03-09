/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        fontFamily: {
            'overpass': ['Overpass', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [require('daisyui')],

    daisyui: {
        styled: false, // true
        utils: false, // true
        logs: false, // true
        themes: [
            {
                mytheme: {
                    'primary': '#3a72ad',
                    'secondary': '#8270c9',
                    'accent': '#ed9e28',
                    'neutral': '#1B2731',
                    'base-100': '#39313F',
                    'info': '#9ACFDF',
                    'success': '#17A173',
                    'warning': '#F5BD14',
                    'error': '#E35F86',
                },
            },
        ],
    },
};
