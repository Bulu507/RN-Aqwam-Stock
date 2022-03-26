import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';

export default function Cards(props) {
  const data = props.data;
  const productName = data?.nama_product;
  const productCode = data?.code_product;
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.title}>{productName}</Text>
      <Text style={styles.subTitle}>{productCode}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: 18,
    color: colors.text.primary,
    flexShrink: 1,
  },
  subTitle: {
    fontFamily: fonts.primary.normal,
    fontSize: 15,
    color: colors.text.primary,
  },
});
