module.exports = {
  presets:["module:@react-native/babel-preset",
    [
      "@babel/preset-typescript",
      {
        "allowDeclareFields": true
      }
    ]
  ],
  plugins: [
    "@babel/plugin-transform-export-namespace-from",
    [
      "module-resolver",
      {
        "root": ["./"],
        "extensions": [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
        "alias": {
          "@bcp-nextgen-dx-component-factory/atoms":
            "../../node_modules/@bcp-nextgen-dx-component-factory/atoms/src/index.native.js",
          "@bcp-nextgen-dx-component-factory/base":
            "../../node_modules/@bcp-nextgen-dx-component-factory/base/src/index.native.js",
          "@bcp-nextgen-dx-component-factory/core":
            "../../node_modules/@bcp-nextgen-dx-component-factory/core/src/index.native.js",
          "@bcp-nextgen-dx-component-factory/design-system":
            "../../node_modules/@bcp-nextgen-dx-component-factory/design-system/src/index.native.js",
          "@bcp-nextgen-dx-component-factory/icons-accolade":
            "../../node_modules/@bcp-nextgen-dx-component-factory/icons-accolade/src/index.native.js",
          "@bcp-nextgen-dx-component-factory/icons-foundation":
            "../../node_modules/@bcp-nextgen-dx-component-factory/icons-foundation/src/index.native.js",
          "@bcp-nextgen-dx-component-factory/molecules":
            "../../node_modules/@bcp-nextgen-dx-component-factory/molecules/src/index.native.js",
          "@bcp-nextgen-dx-component-factory/native-bindings":
            "../../node_modules/@bcp-nextgen-dx-component-factory/native-bindings/src/index.native.js",
          "@bcp-nextgen-dx-component-factory/organisms":
            "../../node_modules/@bcp-nextgen-dx-component-factory/organisms/src/index.native.js",
          "@bcp-nextgen-dx-component-factory/storybook-template":
            "../../node_modules/@bcp-nextgen-dx-component-factory/storybook-template/src/index.native.js",
          "@bcp-nextgen-dx-component-factory/theme-accolade":
            "../../node_modules/@bcp-nextgen-dx-component-factory/theme-accolade/src/index.native.js",
          "@bcp-nextgen-dx-component-factory/theme-foundation":
            "../../node_modules/@bcp-nextgen-dx-component-factory/theme-foundation/src/index.native.js",
          "@bcp-nextgen-dx-component-factory/utilities":
            "../../node_modules/@bcp-nextgen-dx-component-factory/utilities/src/index.native.js",
        }
      }
    ],
    "react-native-reanimated/plugin"
  ],
};
