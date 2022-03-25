import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Gap, Icons} from '../../atoms';
import {colors, fonts} from '../../../utils';

export default function NotifInfo(props) {
  const infoShow = props.info && props.info !== 0 ? true : false;
  return (
    <TouchableOpacity style={styles.menuContainer} onPress={props.onPress}>
      <View style={styles.menu}>
        <Icons icon={props.icon} iconPos="left" style={styles.icon} />
        <Gap width={16} />
        <Text style={styles.title}>{props.title}</Text>
      </View>
      {infoShow && <Text style={styles.notif}>{props.info}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  menu: {flexDirection: 'row', alignItems: 'center'},
  title: {
    fontSize: 12,
    fontFamily: fonts.primary.bold,
    color: colors.text.primary,
  },
  icon: {color: colors.text.primary, fontSize: 20},
  notif: {
    backgroundColor: colors.danger,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 50,
    marginLeft: 20,
    fontSize: 10,
    fontFamily: fonts.primary.bold,
    color: colors.text.secondary,
  },
});
