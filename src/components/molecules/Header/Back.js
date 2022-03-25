import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';
import Button from '../Button';

export default function Back(props) {
  return (
    <>
      <Button
        icon="mi arrow-back"
        iconSize={25}
        style={styles.btn}
        onPress={props.onPress}
      />
      <Text style={styles.title}>{props.title}</Text>
      <Gap width={20} />
    </>
  );
}

const styles = StyleSheet.create({
  btn: {backgroundColor: 'transparent'},
  title: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[700],
    fontSize: 15,
    fontWeight: 'bold',
  },
});
