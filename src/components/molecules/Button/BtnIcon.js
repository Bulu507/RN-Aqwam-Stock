import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, customizableStyle, fonts} from '../../../utils';
import {Gap, Icons} from '../../atoms';

export default function BtnIcon(props) {
  let space = props.space ? props.space : 5;
  let posLeft = false;
  let posRight = false;
  let iconOnly = false;
  let iconSplit = props.icon.split(' ');
  let icon = `${iconSplit[0]} ${iconSplit[1]}`;
  let position = iconSplit[2];

  console.log('cek position', position);

  switch (position) {
    case 'left':
      posLeft = true;
      break;
    case 'right':
      posRight = true;
      break;
    case undefined:
      iconOnly = true;
      break;
    default:
      iconOnly = true;
      break;
  }

  return (
    <View style={styles.container}>
      {posLeft && (
        <>
          <Icons
            icon={icon}
            size={props.iconSize} //default icon size is 14
            style={customizableStyle(styles.icon, props.labelStyle)}
          />
          <Gap width={space} />
        </>
      )}
      <View>
        {iconOnly && (
          <Icons
            icon={icon}
            size={props.iconSize} //default icon size is 14
            style={customizableStyle(styles.icon, props.labelStyle)}
          />
        )}
        {!iconOnly && (
          <Text style={customizableStyle(styles.labelBtn, props.labelStyle)}>
            {props.title}
          </Text>
        )}
      </View>
      {posRight && (
        <>
          <Gap width={space} />
          <Icons
            icon={icon}
            size={props.iconSize}
            style={customizableStyle(styles.icon, props.labelStyle)}
          />
        </>
      )}
      {props.info > 0 && (
        <>
          <Gap width={space} />
          <View style={styles.info}>
            <Text style={styles.labelInfo}>{props.info}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', flexDirection: 'row'},
  icon: {color: colors.text.secondary},
  labelBtn: {
    fontFamily: fonts.primary.bold,
    fontSize: 12,
    color: colors.text.secondary,
  },
  info: {
    backgroundColor: colors.primary,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 50,
  },
  labelInfo: {
    fontFamily: fonts.primary.normal,
    fontSize: 8,
    color: colors.text.secondary,
  },
});
