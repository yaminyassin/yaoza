const { withNxMetro } = require('@nx/react-native');
const { getDefaultConfig, mergeConfig, } = require('@react-native/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const {
  getMetroAndroidAssetsResolutionFix,
} = require('react-native-monorepo-tools');

const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix();

const { generate } = require("@storybook/react-native/scripts/generate");
const path = require("path");

generate({
  configPath: path.resolve(__dirname, "./.ondevice"),
});

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    publicPath: androidAssetsResolutionFix.publicPath,
    unstable_allowRequireContext: true,
  },
  server: {
    enhanceMiddleware: (middleware) => {
      return androidAssetsResolutionFix.applyMiddleware(middleware);
    },
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg'],
    blockList: exclusionList([/^(?!.*node_modules).*\/dist\/.*/]),
    unstable_enableSymlinks: true,
    unstable_enablePackageExports: false,
  },
};

module.exports = withNxMetro(mergeConfig(defaultConfig, customConfig), {
  // Change this to true to see debugging info.
  // Useful if you have issues resolving modules
  debug: false,
  // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
  extensions: [],
  // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
  watchFolders: [],
});
