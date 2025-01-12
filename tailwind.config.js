/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                fraunces: ['Fraunces', 'serif'],
                barlow: ['Barlow', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
            },
            screens: {
                sm: '576px', // Custom breakpoint for `sm`
                md: '768px', // Custom breakpoint for `md`
                lg: '992px', // Custom breakpoint for `lg`
                xl: '1100px', // Custom breakpoint for `xl`
            },
            backgroundImage: {
                'nav-custom-background': 'linear-gradient(rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0))',
            }
        },
    },
    plugins: [],
}

