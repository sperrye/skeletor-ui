module.exports = {
  typescript: {
    reactDocgen: 'react-docgen',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.sass$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
      ],
    });
    return config;
  },
  stories: ['../src/**/*.stories.*'],
  addons: ['@storybook/addon-docs'],
};
