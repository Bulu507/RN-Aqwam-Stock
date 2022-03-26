import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import Button from '../Button';
import {Gap} from '../../atoms';

export default function Close(props) {
  return (
    <>
      <Gap width={20} />
      <Text style={styles.title}>{props.title}</Text>
      <Button
        icon="mc window-close"
        iconSize={25}
        style={styles.btn}
        onPress={props.onPress}
      />
    </>
  );
}

const styles = StyleSheet.create({
  btn: {backgroundColor: 'transparent'},
  title: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[700],
    fontSize: 18,
    fontWeight: 'bold',
  },
});
