import {isEqual} from 'lodash';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';
import Back from './Back';
import Close from './Close';
import Option from './Option';

export default function Header(props) {
  const navigation = props.navigation;
  return (
    <View style={styles.containerRow}>
      <Content {...props} navigation={navigation} />
    </View>
  );
}

const Content = (props) => {
  const type = props.type;
  const navigation = props.navigation;
  if (isEqual(type, 'back')) {
    return <Back {...props} />;
  }
  if (isEqual(type, 'close')) {
    return <Close {...props} />;
  }
  return <Option {...props} navigation={navigation} />;
};

const windowHeight = Dimensions.get('window').height;
const height = (windowHeight * 8) / 100;
const styles = StyleSheet.create({
  containerRow: {
    backgroundColor: colors.primary,
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: height,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
