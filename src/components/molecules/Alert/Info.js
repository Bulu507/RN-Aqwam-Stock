import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalsComponent from '../modal';
import {colors, fonts} from '../../../utils';
import {Gap, Icons} from '../../atoms';
import Button from '../Button';

export default function Info(props) {
  return (
    <ModalsComponent
      visible={props.visible}
      close={props.close}
      onModalWillHide={props.onModalWillHide}>
      <View style={styles.container}>
        <Icons size={60} icon="mc alert-octagon-outline" style={styles.icon} />
        <Gap height={15} />
        <Text style={styles.message}>{props.message}</Text>
        <Gap height={10} />
        {props.info && <Text style={styles.info}>{props.info}</Text>}
        <Gap height={20} />
      </View>
      <Button title="OK" onPress={props.onConfirm} style={styles.btnOk} />
    </ModalsComponent>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  icon: {color: colors.danger},
  message: {
    fontSize: 15,
    fontFamily: fonts.primary.normal,
    color: colors.text.default,
    textAlign: 'center',
  },
  info: {
    fontSize: 10,
    fontFamily: fonts.primary.normal,
    color: colors.danger,
    textAlign: 'center',
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
  },
  btnWrapper: {width: '45%'},
  btnNo: {backgroundColor: 'transparent'},
  labelStyle: {color: colors.danger},
  btnOk: {width: '100%'},
});
