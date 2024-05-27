import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '@bcp-nextgen-dx-component-factory/design-system';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    flexGrow: 0,
    backgroundColor: 'purple',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
});

export const MyButton = ({text, onPress, color, textColor}: ButtonProps) => (
  <View style={styles.buttonContainer}>
    <Button
      fullWidth
      size='large'
      onPress={onPress}
      >OLAAA</Button>
  </View>
);
