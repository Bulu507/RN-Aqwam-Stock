import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function Loading({type}) {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={colors.white} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backdrop,
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fonts.primary[600],
    marginTop: 16,
  },
});
