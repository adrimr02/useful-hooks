module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    overrides: [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json"
    },
    plugins: [
        "@typescript-eslint",
        "import"
    ],
    rules: {
        "@typescript-eslint/no-explicit-any": "off",

    },
    ignorePatterns: [
        "**/*.config.js",
        "**/*.config.ts",
        "**/*.config.cjs",
        ".eslintrc.cjs",
        "**/dist/**",
      ],
}
