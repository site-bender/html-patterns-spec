module.exports = {
  "stories": [
    "../atoms/**/*.story.ts",
    "../compounds/**/*.story.ts",
    "../molecules/**/*.story.ts"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/html",
  "core": {
    "builder": "storybook-builder-vite"
  }
}
