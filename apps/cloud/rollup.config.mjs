import { defineConfig } from "rollup";
import typescript from 'rollup-plugin-typescript2';

export default defineConfig({
  input: "src/main.ts",
  output: {
    minifyInternalExports: true,
    dir: "dist",
    format: "cjs"
  },
  external: [
    "cookie-parser",
    "express",
    "@prisma/client",
    "@mium/tryrs"
  ],
  plugins: [
    typescript()
  ]
});