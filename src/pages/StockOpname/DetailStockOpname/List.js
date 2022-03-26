import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts, materialColor} from '../../../utils';
import {Alert, Button} from '../../../components';

export default function List(props) {
  const data = props.data;
  const pic = data?.pic;
  const stock = data?.stock;

  return (
    <>
      <Alert
        visible={props.showAlert}
        close={() => props.setShowAlert(false)}
        message={`Apakah anda yakin untuk menghapus data "${pic}" ?`}
        onConfirm={props.onDeletePress}
      />
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.title}>{pic}</Text>
          <Text style={styles.subTitle}>
            Scan: <Text style={styles.info}>{stock}</Text>{' '}
          </Text>
        </View>
        <Button type="delete" onPress={() => props.setShowAlert(true)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: materialColor.GREY[400],
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    width: '70%',
  },
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: 16,
    color: colors.text.primary,
  },
  subTitle: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.primary,
  },
  info: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
    color: colors.text.primary,
  },
});
