module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:json/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:typescript-sort-keys/recommended",
  ],
  ignorePatterns: ["node_modules", "package-lock.json"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "json",
    "jsx-a11y",
    "react",
    "react-hooks",
    "sort-destructure-keys",
    "sort-keys-fix",
    "typescript-sort-keys",
  ],
  root: true,
  rules: {
    "import/order": ["error", { alphabetize: { order: "asc", caseInsensitive: true } }],
    "react/jsx-curly-brace-presence": "warn",
    "react/display-name": "off",
    "react/jsx-sort-props": ["error", { ignoreCase: true }],
    "react-hooks/exhaustive-deps": "error",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "sort-destructure-keys/sort-destructure-keys": ["error", { caseSensitive: false }],
    "sort-keys-fix/sort-keys-fix": ["error", "asc", { caseSensitive: false }],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
};
