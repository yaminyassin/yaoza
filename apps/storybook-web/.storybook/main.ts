import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  //TODO: Change when creating docs package
  stories: ['../src/app/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts',
      },
    },
  },

  docs: {
    autodocs: true,
  },
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
};

export default config;
//TODO: Check if i have to add ViteFinal here when adding CF to project

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
