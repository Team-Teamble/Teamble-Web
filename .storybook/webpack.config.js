module.exports = ({ config }) => {
  const rules = config.module.rules;

  const fileLoaderRule = rules.find((rule) => rule.test.test(".svg"));
  fileLoaderRule.exclude = /\.svg$/;

  rules.push({
    test: /\.svg$/,
    exclude: /node_modules/,
    loader: "@svgr/webpack",
  });

  return config;
};
