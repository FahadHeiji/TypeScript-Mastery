Sure, here's a revised explanation based on your provided information:

In TypeScript, you can initialize a new project configuration file named `tsconfig.json` in your project root by running the command `tsc --init`. This file is used to specify the root files and the compiler options required to compile the project.

Here's how you might modify the `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "sourceMap": true,
    "outDir": "./dist",
    "removeComments": true
  }
}
```

In this configuration:
- `"rootDir": "./src"` specifies the root directory of your source files.
- `"sourceMap": true` generates corresponding `.map` file.
- `"outDir": "./dist"` is the output directory for the compiled JavaScript files.
- `"removeComments": true` removes comments in the compiled files.

You can compile a specific TypeScript file, such as `index.ts`, by running the command `tsc index.ts`. 

If you want TypeScript to automatically recompile your `index.ts` file each time you save it, you can use the `-w` or `--watch` option with the `tsc` command like so: `tsc -w index.ts`.

For more detailed information about the compiler options in a `tsconfig`, you can check the TypeScript compiler help by running `tsc -h`. This will provide you with a list of available options and their descriptions.