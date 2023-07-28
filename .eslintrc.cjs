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
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.js"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "prettier"],
  rules: {
    "prettier/prettier": ["error", {
      trailingComma: "es5",
      tabWidth: 2,
      semi: false,
      singeQuote: false,
      useTabs: false,
      printWidth: 80
    }],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    semi: "off",
    quotes: ["error", "double"],
    "comma-dangle": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "no-unused-vars": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "test.{js,jsx}",
          "test-*.{js,jsx}",
          "**/*{.,_}{test,spec}.{js,jsx}",
          "**/jest.config.js",
          "**/jest.setup.js"
        ],
        "optionalDependencies": false
      }
    ]
  },
}
