import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';
import OptionBar from '../OptionBar';

export default function Option(props) {
  return (
    <>
      <Gap width={20} />
      <Text style={styles.title}>{props.title}</Text>
      <OptionBar />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[700],
    fontSize: 15,
    fontWeight: 'bold',
  },
});
