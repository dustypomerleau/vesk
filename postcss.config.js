export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        // todo: check to ensure this actually runs in prod
        ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
};
