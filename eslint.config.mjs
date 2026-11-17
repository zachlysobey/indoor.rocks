import { defineConfig, globalIgnores } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import tsParser from "@typescript-eslint/parser";
import oxlint from "eslint-plugin-oxlint";
import globals from "globals";

// oxlint (.oxlintrc.json) does most of the linting. ESLint only runs what oxlint has no native
// version of: the rest of Next's core-web-vitals rules. eslint-plugin-oxlint goes last and turns off
// every rule oxlint already covers, so nothing is reported twice.
export default defineConfig([
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
    // Browser globals: no-location-assign-relative-destination only reports `window`/`location`
    // when they resolve to globals.
    languageOptions: { parser: tsParser, globals: globals.browser },
  },
  nextPlugin.configs["core-web-vitals"],
  ...oxlint.buildFromOxlintConfigFile("./.oxlintrc.json"),
]);
