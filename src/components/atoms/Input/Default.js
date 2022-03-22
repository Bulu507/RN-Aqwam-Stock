import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {colors, customizableStyle} from '../../../utils';

export default function Default(props) {
  return (
    <View>
      <TextInput
        style={customizableStyle(
          styles.input(props.border, props.disable),
          props.style,
        )}
        value={props.value}
        onChangeText={props.onChangeText}
        editable={!props.disable}
        selectTextOnFocus={!props.disable}
        textAlign={props.textAlign}
        onFocus={props.onFocusForm}
        onBlur={props.onBlurForm}
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        placeholderTextColor={colors.text.tertiary}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        maxLength={props.maxLength}
        onSubmitEditing={props.onSubmitEditing}
        autoCapitalize={props.autoCapitalize}
        onChange={props.onChange}
        onEndEditing={props.onEndEditing}
        autoCompleteType={props.autoCompleteType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: (border, badge, badgePos, disable) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 5,
    borderBottomLeftRadius: badge && badgePos === 'left' ? 0 : 5,
    borderTopLeftRadius: badge && badgePos === 'left' ? 0 : 5,
    borderBottomRightRadius: badge && badgePos === 'right' ? 0 : 5,
    borderTopRightRadius: badge && badgePos === 'right' ? 0 : 5,
    backgroundColor: disable ? colors.tertiary : colors.white,
    color: colors.text.normal,
    paddingHorizontal: 12,
    paddingVertical: 5,
    textAlign: 'center',
  }),
});
