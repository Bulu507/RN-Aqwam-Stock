import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {customizableStyle, fonts, colors} from '../../../utils';

export default function BtnDefault(props) {
  return (
    <View>
      <Text style={customizableStyle(styles.text, props.labelStyle)}>
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: fonts.primary.default,
    textAlign: 'center',
    color: colors.text.white,
  },
});
