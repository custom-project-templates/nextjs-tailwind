module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  corePlugins: {
    // disabled preflight to prevent styles being conflict with external ui libraries
    preflight: false,
  },
  important: true,
  theme: {},
  plugins: [],
};
