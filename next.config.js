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

module.exports = nextConfig;
