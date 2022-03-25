import {isEqual} from 'lodash';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';
import Back from './Back';
import Option from './Option';

export default function Header(props) {
  return (
    <View style={styles.containerRow}>
      <Content {...props} />
    </View>
  );
}

const Content = (props) => {
  const type = props.type;
  if (isEqual(type, 'back')) {
    return <Back {...props} />;
  }
  return <Option {...props} />;
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
  },
});
