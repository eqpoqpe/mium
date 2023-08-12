import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default defineConfig({
  input: "src/main.ts",
  output: {
    dir: "dist",
    format: "commonjs"
  },
  // external: [
  //   "cookie-parser",
  //   "koa",
  //   "@koa/router",
  //   "@prisma/client",
  //   "@mium/tryrs",
  //   "crypto",
  //   "@koa/bodyparser",
  //   "@koa/cors"
  // ],
  plugins: [
    typescript(),
    terser({
      format: {
        comments: false
      }
    }),
    resolve(),
    commonjs(),
    json()
  ]
});