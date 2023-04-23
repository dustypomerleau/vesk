const { boxShadow } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        colors: {
            black: colors.black,
            blue: {
                1: "#dbeeff", // not p3, closest to oklch(94.1% 0.185 243.33)
                2: "#b6ddff", // not p3, closest to oklch(88.1% 0.175 244.66)
                3: "#90cbff", // not p3, closest to oklch(82.1% 0.165 245.99)
                4: "#69b8ff", // not p3, closest to oklch(76.1% 0.155 247.32)
                5: "#4ca4f4", // oklch(70.1% 0.145 248.65)
                6: "#4491db", // oklch(64.1% 0.135 249.98)
                7: "#3b7ec2", // oklch(58.1% 0.125 251.31)
                8: "#336ba9", // oklch(52.1% 0.115 252.64)
                9: "#2a5991", // oklch(46.1% 0.105 253.97)
                10: "#21487a", // oklch(40.1% 0.095 255.3)
                11: "#183863", // oklch(34.1% 0.085 256.63), logoNavy
                12: "#0f284d", // oklch(28.1% 0.075 257.96)
                13: "#071a38", // oklch(22.1% 0.065 259.29)
                50: "#f3f7fb",
                100: "#d1e2f7",
                200: "#accdf4",
                300: "#86b8f2",
                400: "#62a6ef",
                500: "#418edb",
                600: "#3778bf",
                700: "#2e64a3",
                800: "#245086",
                900: "#183863"
            },
            current: "currentColor",
            gray: colors.gray,
            logoNavy: "#183863",
            logoOrange: "#ff7b00",
            logoSky: "#1785be",
            orange: {
                1: "#ffdfc6", // not p3, closest to oklch(92.45% 0.789007315343796 61.340375131646900)
                2: "#ffc9a0", // not p3, closest to oklch(87.45% 0.639007315343796 58.740375131646900)
                3: "#ffb27a", // not p3, closest to oklch(82.45% 0.489007315343796 56.140375131646900)
                4: "#ff984f", // not p3, closest to oklch(77.45% 0.339007315343796 53.540375131646900)
                5: "#ff7b00", // closest to oklch(72.45% 0.189007315343796 50.9403751316469)
                6: "#e76904", // oklch(66.45% 0.179007315343796 48.3403751316469)
                7: "#cf5805", // oklch(60.45% 0.169007315343796 45.7403751316469)
                8: "#b84804", // oklch(54.45% 0.159007315343796 43.1403751316469)
                9: "#a03702", // oklch(48.45% 0.149007315343796 40.5403751316469)
                10: "#892800", // oklch(42.45% 0.139007315343796 37.9403751316469)
                11: "#721900", // closest to oklch(36.45% 0.129007315343796 35.3403751316469)
                12: "#5b0c00", // closest to oklch(30.45% 0.119007315343796 32.7403751316469)
                13: "#440200", // closest to oklch(24.45% 0.109007315343796 30.1403751316469)
                50: "#fcf5ee",
                100: "#fcd9b9",
                200: "#fdba80",
                300: "#ff9843",
                400: "#ff7b00",
                500: "#dd6200",
                600: "#c44d00",
                700: "#aa3900",
                800: "#902600",
                900: "#721900"
            },
            sky: {
                50: "#f4f7fc",
                100: "#d0e2fa",
                200: "#a7cefb",
                300: "#72bbfc",
                400: "#22abfb",
                500: "#1b92d4",
                600: "#1785be",
                700: "#106894",
                800: "#0a5476",
                900: "#063c54"
            },
            transparent: "transparent",
            white: colors.white
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
                "Segoe UI Symbol"
            ]
        },
        fontWeight: {
            light: 300,
            midlight: 350,
            normal: 400,
            medium: 500,
            semibold: 600
        },
        extend: {
            backgroundImage: (theme) => ({
                hero: 'url("/images/hero.webp");',
                check: 'url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%2724%27%20height%3D%2724%27%20fill%3D%27none%27%3E%3Cpath%20stroke%3D%27%232e63a7%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%271.5%27%20d%3D%27m5.75%2012.867%202.59%203.547a2%202%200%200%200%203.26-.043l6.65-9.621%27%2F%3E%3C%2Fsvg%3E");'
            }),
            boxShadow: {
                activeBanner: "0 -4px 0 0 #accdf4dd inset",
                activeFooter: "0 -4px 0 0 #4b556399 inset",
                activeLink: "0 -4px 0 0 #438ddfcc inset",
                banner: "0 -4px 0 0 #accdf490 inset",
                footer: "0 -4px 0 0 #4b556350 inset",
                link: "0 -4px 0 0 #438ddf60 inset"
            }
        }
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};

module.exports = config;
