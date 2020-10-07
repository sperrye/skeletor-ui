module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['airbnb-typescript', 'prettier', 'prettier/react', 'prettier/@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
  },
  ignorePatterns: ['dist', '.storybook', 'node_modules', '*.stories.js'],
};
