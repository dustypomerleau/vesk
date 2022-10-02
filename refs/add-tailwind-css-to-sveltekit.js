npm init svelte@next my-app
cd my-app

npm install -D tailwindcss postcss autoprefixer svelte-preprocess
npx tailwindcss init tailwind.config.cjs -p

// svelteconfig.js
import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

// tailwindconfig.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {}
    },
    plugins: []
  };

// ./src/app.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// ./src/routes/+layout.svelte
<script>
  import "../app.css";
</script>

<slot />

npm run dev

// add forms styling support
npm i -D @tailwindcss/forms

// in tailwindconfig.cjs
const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
      extend: {},
  },
  // Only add this if you installed the Tailwind CSS plugins:
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}

module.exports = config

// add css nano
npm i -D cssnano

// also in postcss.config.cjs add css nano for production
const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")

const mode = process.env.NODE_ENV
const dev = mode === "development"

const config = {
    plugins: [
        tailwindcss(), // first load Tailwind CSS
        autoprefixer(), // then run autoprefixer
        !dev && // optimize the code for production
            cssnano({
                preset: "default",
            }),
    ],
}
