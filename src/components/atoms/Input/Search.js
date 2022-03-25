import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Default from './Default';
import Icons from '../Icons';
import {colors} from '../../../utils';

export default function Search(props) {
  return (
    <View style={styles.container}>
      <Default {...props} inputStyle={styles.input} />
      <View style={styles.iconWrapper}>
        <Icons
          icon="ion md-search"
          size={20}
          style={styles.icon(props.border)}
        />
        <View style={styles.separator(props.border)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {paddingLeft: 45},
  iconWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: '25%',
    left: 5,
  },
  icon: (border) => ({
    color: border,
    marginHorizontal: 5,
  }),
  separator: (border) => ({
    borderRightWidth: 1,
    borderRightColor: border,
    height: '100%',
  }),
});
