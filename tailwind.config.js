module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    // disabled preflight to prevent styles being conflict with external ui libraries
    preflight: false,
  },
  important: true,
  theme: {},
  plugins: [],
};
