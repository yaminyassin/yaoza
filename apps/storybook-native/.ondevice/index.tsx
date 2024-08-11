import {
  ThemeProvider,
  ToastProvider,
} from '@bcp-nextgen-dx-component-factory/design-system';
import { view } from './storybook.requires';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Accolade } from '@bcp-nextgen-dx-component-factory/theme-accolade';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

const RootWithDesignSystem = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={Accolade}>
        <ToastProvider>
          <StorybookUIRoot />
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default RootWithDesignSystem;
