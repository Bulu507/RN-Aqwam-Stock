import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputBox from '../InputBox';
import InputContent from './InputContent';

export default function Input(props) {
  return (
    <InputBox {...props}>
      <InputContent {...props} />
    </InputBox>
  );
}
