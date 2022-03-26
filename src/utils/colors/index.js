import Color from 'react-native-material-color';
import {text} from './text';
import {mainColor} from './main';

export const colors = {
  white: mainColor.white,
  black: mainColor.black,
  primary: mainColor.red[1],
  dark: mainColor.red[2],
  light: mainColor.red[3],
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
