import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, customizableStyle} from '../../../utils';
import BtnIcon from './BtnIcon';
import BtnDefault from './BtnDefault';

export default function ButtonContainer(props) {
  // eslint-disable-next-line no-shadow
  const BtnContent = (props) => {
    if (props.icon) {
      return <BtnIcon {...props} />;
    }
    return <BtnDefault {...props} />;
  };

  const containerStyle = customizableStyle(disableDefault, props.style);

  if (props.disable) {
    return (
      <View style={customizableStyle(containerStyle, styles.disable)}>
        <BtnContent {...props} />
      </View>
    );
  }
  return (
    <TouchableOpacity style={containerStyle} onPress={props.onPress}>
      <BtnContent {...props} />
    </TouchableOpacity>
  );
}

const disableDefault = {
  backgroundColor: colors.primary,
  paddingVertical: 5,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
};

const styles = StyleSheet.create({
  disable: {backgroundColor: colors.tertiary},
});
