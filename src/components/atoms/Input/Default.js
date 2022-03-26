import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {colors, customizableStyle, materialColor} from '../../../utils';

export default function Default(props) {
  return (
    <View>
      <TextInput
        style={customizableStyle(
          styles.input(props.border, props.disable),
          props.inputStyle,
        )}
        value={props.value}
        onChangeText={props.onChangeText}
        onBlur={props.onBlurForm}
        secureTextEntry={props.hidePassword}
        editable={!props.disable}
        selectTextOnFocus={!props.disable}
        textAlign={props.textAlign}
        onFocus={props.onFocusForm}
        keyboardType={props.keyboardType}
        placeholderTextColor={colors.text.tertiary}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        maxLength={props.maxLength}
        onSubmitEditing={props.onSubmitEditing}
        onChange={props.onChange}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: (border, disable) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 5,
    backgroundColor: disable ? colors.disable : colors.white,
    color: colors.text.primary,
    paddingHorizontal: 12,
    paddingVertical: 5,
    textAlign: 'center',
  }),
});
