import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

export default function NullData({info}) {
  let title = info ? info : 'Data kosong';
  return (
    <View style={styles.info}>
      <Text style={styles.textInfo}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {padding: 30, justifyContent: 'center', alignItems: 'center'},
  textInfo: {
    color: colors.primary,
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    fontStyle: 'italic',
  },
});
