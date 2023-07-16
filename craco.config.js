/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@Images": path.resolve(__dirname, "src/images"),
    },
  },
};