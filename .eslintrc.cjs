module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', "vite.config.js"],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', "prettier"],
  rules: {
    "prettier/prettier": "error",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    semi: "off",
    quotes: ["error", "double"],
    "comma-dangle": "off",
    "import/prefer-default-export": "off"
  },
}
