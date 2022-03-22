import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Gap, InputBox} from '../';
import {colors, fonts} from '../../../utils';

export default function Dropdown(props) {
  const [open, setOpen] = useState(false);

  return (
    <InputBox {...props}>
      <DropDownPicker
        open={open}
        value={props.value}
        items={props.items}
        setOpen={setOpen}
        setValue={props.setValue}
        setItems={props.setItems}
        placeholder={props.placeholder}
        style={styles.box(props.disable)}
        zIndex={5000}
        listMode="MODAL"
        placeholderStyle={styles.placeholder}
        searchable={true}
        disabled={props.disable}
        searchablePlaceholder="Search..."
        searchContainerStyle={{
          borderColor: colors.border,
        }}
        searchTextInputStyle={{
          color: colors.text.default,
        }}
        searchPlaceholderTextColor={colors.text.default}
        onChangeValue={props.onChangeValue}
        onClose={props.onClose}
        onOpen={props.onOpen}
        categorySelectable={props.categorySelectable}
        listParentLabelStyle={styles.parentLabel}
        listChildLabelStyle={styles.childLabel}
        textStyle={styles.labelStyle}
      />
    </InputBox>
  );
}

const styles = StyleSheet.create({
  box: (disable) => ({
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: disable ? colors.tertiary : colors.white,
    color: colors.text.secondary,
    paddingVertical: 8,
    height: 40,
    shadowColor: 'blue',
    shadowOpacity: 0.9,
    elevation: 10,
    textAlign: 'center',
  }),
  placeholder: {
    color: colors.text.default,
  },
  parentLabel: {
    color: colors.text.default,
    fontFamily: fonts.primary[700],
    fontSize: 12,
  },
  childLabel: {
    color: colors.text.default,
    fontFamily: fonts.primary.default,
    fontSize: 12,
  },
  labelStyle: {
    color: colors.text.default,
    fontFamily: fonts.primary.default,
    fontSize: 12,
  },
});
