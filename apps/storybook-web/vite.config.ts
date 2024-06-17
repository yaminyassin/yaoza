import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'node:path';

const resolve = (aliasName: string, modulePath: string) => {
  return {
    find: aliasName,
    replacement: path.resolve(__dirname, modulePath),
  };
};

const resolveAccolade = (aliasName: string, modulename: string) => {
  return resolve(aliasName, `../../../packages/${modulename}`);
};
export default defineConfig({
  root: __dirname,
  plugins: [react(), nxViteTsPaths()],

  //TODO: Check if this is needed
  resolve: {
    alias: [
      resolveAccolade(
        '@bcp-nextgen-dx-component-factory/design-system',
        'design-system/src'
      ),
      resolveAccolade(
        '@bcp-nextgen-dx-component-factory/theme-accolade',
        'theme-accolade/src'
      ),
      resolveAccolade(
        '@bcp-nextgen-dx-component-factory/theme-foundation',
        'theme-foundation/src'
      ),
      resolveAccolade('@bcp-nextgen-dx-component-factory/atoms', 'atoms/src'),
      resolveAccolade('@bcp-nextgen-dx-component-factory/base', 'base/src'),
      resolveAccolade('@bcp-nextgen-dx-component-factory/core', 'core/src'),
      resolveAccolade('@bcp-nextgen-dx-component-factory/docs', 'docs/src'),
      resolveAccolade(
        '@bcp-nextgen-dx-component-factory/icons-accolade',
        'icons-accolade/src'
      ),
      resolveAccolade(
        '@bcp-nextgen-dx-component-factory/icons-foundation',
        'icons-foundation/src'
      ),
      resolveAccolade(
        '@bcp-nextgen-dx-component-factory/molecules',
        'molecules/src'
      ),
      resolveAccolade(
        '@bcp-nextgen-dx-component-factory/organisms',
        'organisms/src'
      ),
      resolveAccolade(
        '@bcp-nextgen-dx-component-factory/utilities',
        'utilities/src'
      ),
      resolveAccolade(
        '@bcp-nextgen-dx-component-factory/storybook-template',
        'storybook-template/src'
      ),
    ],
  },

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // build: {
  //   outDir: '../../dist/apps/yaoza',
  //   reportCompressedSize: true,
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //   },
  // },

  // test: {
  //   globals: true,
  //   cache: {
  //     dir: '../../node_modules/.vitest',
  //   },
  //   environment: 'jsdom',
  //   include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

  //   reporters: ['default'],
  //   coverage: {
  //     reportsDirectory: '../../coverage/apps/yaoza',
  //     provider: 'v8',
  //   },
  // },
});
