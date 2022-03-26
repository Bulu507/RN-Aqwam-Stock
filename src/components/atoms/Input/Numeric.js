import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NumericInput from 'react-native-numeric-input';
import {defaultData} from '../../../utils';

export default function Numeric(props) {
  const totalHeight = defaultData(props.totalHeight, 40);
  const minValue = defaultData(props.minValue, 0);
  return (
    <View>
      <NumericInput
        {...props}
        onChange={props.onChangeText}
        type={props.inputType}
        minValue={minValue}
        totalHeight={totalHeight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
