import { ThemeProvider } from '@bcp-nextgen-dx-component-factory/core';
import { view } from "./storybook.requires";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Accolade } from '@bcp-nextgen-dx-component-factory/theme-accolade';

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

const RootWithDesignSystem = () => {
  return (
    <ThemeProvider theme={Accolade}>
      <StorybookUIRoot />
    </ThemeProvider>);
}

export default RootWithDesignSystem;
