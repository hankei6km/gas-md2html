import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const extensions = [".ts", ".js"];

export default {
  input: "./src/main.ts",
  output: {
    dir: "build",
    format: "umd",
    name: "_entry_point",
  },
  plugins: [
    typescript(),
    nodeResolve({
      extensions,
    }),
    commonjs({}),
  ],
};
