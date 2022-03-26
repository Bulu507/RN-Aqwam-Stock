import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import React, {useState, useEffect} from 'react';
import {globalStyle} from '../../utils';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Header} from '../../components';

export default function ScanPage({navigation}) {
  const onSuccess = (data) => {
    console.log('cek event', data);
    navigation.navigate('UpdateStock', data);
    // Linking.openURL(e.data).catch((err) =>
    //   console.error('An error occured', err),
    // );
  };

  return (
    <View style={globalStyle.page}>
      <Header title="Scan Stock Opname" navigation={navigation} />
      <View style={styles.body}>
        <QRCodeScanner
          onRead={(value) => onSuccess(value)}
          containerStyle={styles.QRcontainer}
          cameraStyle={[styles.QRCamera]}
          // flashMode={RNCamera.Constants.FlashMode.torch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {flex: 1, justifyContent: 'center'},
  QRcontainer: {height: 300},
  QRCamera: {height: 300},
});
