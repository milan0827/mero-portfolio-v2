/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    animation: {
      bounce: "bouncing-animation 500ms infinite alternate",
    },

    keyframes: {
      "bouncing-animation": {
        from: {
          transform: "translate3d(0, 0, 0)",
        },

        to: {
          transform: "translate3d(0, 10px, 0)",
        },
      },
    },
  },
  plugins: [],
};
