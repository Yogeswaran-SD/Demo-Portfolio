/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#667eea',
                    dark: '#764ba2',
                },
                accent: {
                    DEFAULT: '#4facfe',
                    light: '#00f2fe',
                },
                bg: {
                    primary: '#0a0e27',
                    secondary: '#0f1629',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                code: ['Fira Code', 'monospace'],
            },
            backgroundImage: {
                'primary-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'secondary-gradient': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'accent-gradient': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            },
            animation: {
                'float': 'float 20s ease-in-out infinite',
                'pulse-slow': 'pulse 2s ease infinite',
                'bounce-slow': 'bounce 2s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                }
            }
        },
    },
    plugins: [],
}
