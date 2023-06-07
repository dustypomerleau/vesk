const { boxShadow } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        colors: {
            black: colors.black,
            blue: {
                1: "#f1f6fa", // 50
                2: "#cee1f2", // 100
                3: "#accded", // 200
                4: "#86b8e9", // 300
                5: "#61a2e3", // 400
                6: "#468dd6", // 500
                7: "#3a77ba", // 600
                8: "#2f629e", // 700
                9: "#244f84", // 800
                10: "#183863", // 900
                11: "#10294e",
                12: "#081a37",
                13: "#030a1d",
            },
            current: "currentColor",
            gray: {
                1: "#f9fafb", // 50
                2: "#f6f7f7", // 100
                3: "#e9ebee", // 200
                4: "#d1d6dc", // 300
                5: "#b2bcc6",
                6: "#8e9bab", // 400
                7: "#6a7789", // 500
                8: "#4b5563", // 600
                9: "#323a45", // 700
                10: "#1f242d", // 800
                11: "#11151b", // 900
                12: "#0a0d13",
                13: "#080b12",
            },
            logoNavy: "#183863",
            logoOrange: "#ff7b00",
            logoSky: "#1785be",
            orange: {
                1: "#fcf3ed", // 50
                2: "#fbd6bb", // 100
                3: "#fcb889", // 200
                4: "#ff9348", // 300
                5: "#ff7b00", // 400
                6: "#d76203", // 500
                7: "#bb4f03", // 600
                8: "#a03d01", // 700
                9: "#872c00", // 800
                10: "#6b1c00", // 900
                11: "#500e00",
                12: "#380501",
                13: "#1d0101",
            },
            sky: {
                1: "#eff6fc", // 50
                2: "#c3e3fa", // 100
                3: "#95d1fa", // 200
                4: "#59bdfb", // 300
                5: "#1ea8ee", // 400
                6: "#1993d1", // 500
                7: "#1785be", // 600
                8: "#0f6795", // 700
                9: "#0a547a", // 800
                10: "#06405f", // 900
                11: "#032e45",
                12: "#021d2d",
                13: "#010d16",
            },
            transparent: "transparent",
            white: colors.white,
        },
        fontFamily: {
            sans: [
                "Albert",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
            ],
        },
        fontWeight: {
            light: 300,
            midlight: 350,
            normal: 400,
            medium: 500,
            semibold: 600,
        },
        extend: {
            backgroundImage: (theme) => ({
                hero: 'url("/images/hero.webp");',
                check: 'url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%2724%27%20height%3D%2724%27%20fill%3D%27none%27%3E%3Cpath%20stroke%3D%27%232e63a7%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%271.5%27%20d%3D%27m5.75%2012.867%202.59%203.547a2%202%200%200%200%203.26-.043l6.65-9.621%27%2F%3E%3C%2Fsvg%3E");',
            }),
            boxShadow: {
                activeBanner: "0 -4px 0 0 #accdeddd inset",
                activeFooter: "0 -4px 0 0 #4b556399 inset",
                activeLink: "0 -4px 0 0 #468dd6cc inset",
                banner: "0 -4px 0 0 #accded90 inset",
                footer: "0 -4px 0 0 #4b556350 inset",
                link: "0 -4px 0 0 #468dd660 inset",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

module.exports = config;
