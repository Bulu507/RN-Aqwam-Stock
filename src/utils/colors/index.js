import Color from 'react-native-material-color';
import {text} from './text';
import {mainColor} from './main';

export const colors = {
  white: mainColor.white,
  black: mainColor.black,
  primary: Color.Red,
  dark: Color.RED[800],
  light: Color.RED[300],
  tertiary: Color.GREY[200],
  disable: Color.GREY[400],
  background: Color.GREY[200],
  backdrop: mainColor.black1,
  border: Color.GREY[300],
  danger: Color.Red,
  warn: Color.Yellow,
  success: Color.GREEN[400],
  text,
};

export const materialColor = Color;
