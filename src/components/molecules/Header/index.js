import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

export default function Header() {
  return (
    <View style={styles.containerRow}>
      <Text>Header</Text>
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;
const height = (windowHeight * 8) / 100;
const styles = StyleSheet.create({
  containerRow: {
    backgroundColor: colors.primary,
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: height,
  },
});
