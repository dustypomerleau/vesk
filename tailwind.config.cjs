const { boxShadow } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        colors: {},
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
        // todo fix this https://tailwindcss.com/docs/font-weight#customizing-your-theme
        // probably just use the defaults and change the names so you can delete this section
        // looks like that would just mean changing medium to normal (others are the same)
        fontWeight: {
            // light: 300,
            // normal: 400,
            // semibold: 600
        },
        extend: {
            backgroundImage: (theme) => ({
                hero: "url('hero.png');",
                check:
                    'url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%2724%27%20height%3D%2724%27%20fill%3D%27none%27%3E%3Cpath%20stroke%3D%27%230369a1%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%271.5%27%20d%3D%27m5.75%2012.867%202.59%203.547a2%202%200%200%200%203.26-.043l6.65-9.621%27%2F%3E%3C%2Fsvg%3E");'
            }),
            boxShadow: {
                link: "0 -4px 0 0 #0284c750 inset",
                activeLink: "0 -4px 0 0 #fdba74 inset"
            }
        }
    },
    plugins: [require("@tailwindcss/forms")]
};

module.exports = config;
