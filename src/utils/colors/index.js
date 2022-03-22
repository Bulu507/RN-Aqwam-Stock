import Color from 'react-native-material-color';
import {text} from './text';
import {mainColor} from './main';

export const colors = {
  white: mainColor.white,
  black: mainColor.black,
  primary: mainColor.blue[1],
  dark: mainColor.blue[2],
  light: mainColor.blue[3],
  tertiary: Color.GREY[200],
  background: Color.GREY[200],
  danger: Color.Red,
  warn: Color.Yellow,
  success: Color.GREEN[400],
  text,
};
