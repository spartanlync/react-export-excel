import babelParser from "@babel/eslint-parser";
export default [{
    ignores: [
        "node_modules/*",
        "coverage/*",
        "dist/*"
    ],
    languageOptions: {
        parser: babelParser,
        parserOptions: {
            requireConfigFile: false,  // Optional: Set to false if you don't have a Babel config file.
            babelOptions: {
                presets: ["@babel/preset-react"],  // React preset to support JSX.
            },
        },
    },
    rules: {
        // Your ESLint rules go here
    },
}];