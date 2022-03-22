import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap} from '..';
import {colors, fonts} from '../../../utils';

export default function InputBox(props) {
  return (
    <View style={styles.container}>
      {props.title && (
        <>
          <Text style={styles.title}>
            {props.title}{' '}
            {props.required && <Text style={styles.required}>*</Text>}
          </Text>
          <Gap height={5} />
        </>
      )}
      {props.children}
      {props.error && <Text style={styles.error}>*{props.error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.primary,
  },
  required: {color: colors.danger},
  error: {
    color: colors.danger,
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    paddingVertical: 2,
    fontStyle: 'italic',
  },
});
