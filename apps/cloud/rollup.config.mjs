import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  input: "src/main.ts",
  output: {
    dir: "dist",
    format: "cjs"
  },
  external: [
    "cookie-parser",
    "express",
    "@prisma/client",
    "@mium/tryrs",
    "node:crypto"
  ],
  plugins: [
    typescript(),
    terser({
      format: {
        comments: false
      }
    }),
    // resolve(),
    // commonjs()
  ]
});