const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/@vite/client",
        destination: "/@vite/client.js",
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
