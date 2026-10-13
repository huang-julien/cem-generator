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

Depend on `typescript@^6` directly instead of the `@typescript/typescript6` alias. The alias is `typescript@6` under another name, so it could never be deduped against a project's own TypeScript and added a second 24 MB copy. Projects on TypeScript 6 now share one install.
