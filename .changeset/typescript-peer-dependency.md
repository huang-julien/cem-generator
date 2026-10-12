---
"@wc-toolkit/cem-generator-utils": minor
"@wc-toolkit/cem-generator": minor
"@wc-toolkit/cem-generator-cli": minor
"@wc-toolkit/cem-generator-fast": minor
"@wc-toolkit/cem-generator-lit": minor
"@wc-toolkit/cem-generator-preact": minor
"@wc-toolkit/cem-generator-solid": minor
"@wc-toolkit/cem-generator-stencil": minor
"@wc-toolkit/cem-generator-svelte": minor
"@wc-toolkit/cem-generator-vue": minor
---

`typescript` (`^5.0.0 || ^6.0.0`) is now a peer dependency instead of a bundled `@typescript/typescript6` copy. Install `typescript` alongside these packages; the CLI depends on it directly so `npx` runs keep working without setup. The generator now analyzes code with the same TypeScript instance your project uses, so callers that already hold a program can share it without a second compiler copy.
