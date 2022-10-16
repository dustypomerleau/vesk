const { boxShadow } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        colors: {
            black: colors.black,
            blue: {
                // atmos hue shift of #183863 255-275
                // todo: ticks, links, derive palettes from logoOrange and logoSky
                50: "#f3f7fb",
                100: "#d1e2f7",
                200: "#adcdf4",
                300: "#88b8f2",
                400: "#60a3ee",
                500: "#438ddf",
                600: "#3878c3",
                700: "#2e63a7",
                800: "#254f8b",
                900: "#193767"
            },
            current: "currentColor",
            gray: colors.gray,
            logoNavy: "#183863",
            logoOrange: "#ff7b00",
            logoSky: "#1785be",
            orange: colors.orange,
            sky: colors.sky,
            transparent: "transparent",
            white: colors.white
        },
        fontFamily: {
            sans: [
                "system-ui",
                "-apple-system",
                "Segoe UI",
                "Roboto",
                "Helvetica",
                "Arial",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji"
            ]
        },
        fontWeight: {
            light: 300,
            normal: 400,
            semibold: 600
        },
        extend: {
            backgroundImage: (theme) => ({
                hero: "url('hero.png');",
                check: 'url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%2724%27%20height%3D%2724%27%20fill%3D%27none%27%3E%3Cpath%20stroke%3D%27%232e63a7%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%271.5%27%20d%3D%27m5.75%2012.867%202.59%203.547a2%202%200%200%200%203.26-.043l6.65-9.621%27%2F%3E%3C%2Fsvg%3E");'
            }),
            boxShadow: {
                activeFooter: "0 -4px 0 0 #4b556399 inset",
                activeLink: "0 -4px 0 0 #438ddfbb inset",
                footer: "0 -4px 0 0 #4b556350 inset",
                link: "0 -4px 0 0 #438ddf60 inset"
            }
        }
    },
    plugins: [require("@tailwindcss/forms")]
};

module.exports = config;
