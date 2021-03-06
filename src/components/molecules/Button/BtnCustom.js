import {isEqual} from 'lodash';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, customizableStyle} from '../../../utils';
import ButtonContainer from './BtnContainer';

export default function BtnCustom(props) {
  if (props.type === 'delete') {
    return (
      <ButtonContainer
        {...props}
        icon="mc trash-can-outline left"
        title="Hapus"
        style={customizableStyle(styles.btnDelete, props.style)}
        labelStyle={customizableStyle({}, props.labelStyle)}
      />
    );
  }
  return (
    <View>
      <Text />
    </View>
  );
}

const styles = StyleSheet.create({
  btnIcon: (ph, pv) => ({
    backgroundColor: 'transparent',
    paddingHorizontal: ph || ph === 0 ? ph : 10,
    paddingVertical: pv || pv === 0 ? pv : 5,
  }),
  labelBtnIcon: (color, size) => ({
    color: color ? color : colors.primary,
    fontSize: size ? size : 16,
  }),
  btnDelete: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: colors.danger,
  },
});
