module.exports = {
  eslint: {
    dirs:['api', 'styles', 'states', 'utils', 'pages', 'components']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: true,
};
