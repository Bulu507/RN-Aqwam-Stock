import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {colors, fonts, customizableStyle} from '../../../utils';

export default function CheckBox(props) {
  return (
    <View style={customizableStyle(styles.container, props.style)}>
      <Checkbox
        status={props.checked ? 'checked' : 'unchecked'}
        onPress={props.onPress}
        disabled={props.disabled}
      />
      <Text
        style={customizableStyle(
          styles.label(props.disabled),
          props.labelStyle,
        )}>
        {props.title} {props.required && <Text style={styles.required}>*</Text>}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: (disable) => ({
    color: disable ? colors.text.tertiary : colors.text.default,
    fontSize: 15,
    fontFamily: fonts.primary.normal,
    flexShrink: 1,
  }),
  required: {color: colors.danger},
});
