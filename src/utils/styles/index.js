import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export const globalStyle = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.background},
});

export const customizableStyle = (defaultStyle, customStyle) => {
  const style = customStyle ? {...defaultStyle, ...customStyle} : defaultStyle;
  return style;
};
