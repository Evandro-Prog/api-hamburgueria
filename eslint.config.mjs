import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import globals from "globals";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js, prettier }, extends: ["js/recommended", "prettier"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },

  {
    rules: {
      "prettier/prettier": "error"
    }
  }
]);