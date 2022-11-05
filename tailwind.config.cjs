/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "green-version": "#BCFCB2",
                "blue-instance": "#B2DEFC",
            },
        },
    },
    plugins: [],
};
