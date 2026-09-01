/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                ink: "#0D0F14",       // page background
                surface: "#171A22",   // card / panel background
                surfaceAlt: "#1E2230",// secondary panel background
                paper: "#EDEBE4",     // primary text on dark
                dim: "#9AA0AE",       // secondary text
                amber: "#E8A33D",     // signature accent (marquee gold)
                cyan: "#4FD1C5",      // sparing secondary accent
            },
            fontFamily: {
                display: ["Oswald", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            letterSpacing: {
                tightish: "-0.01em",
            },
        },
    },
    plugins: [],
};