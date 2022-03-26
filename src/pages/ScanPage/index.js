import React from 'react';
import {StyleSheet, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Header} from '../../components';
import {globalStyle, showError} from '../../utils';
import {useDispatch} from 'react-redux';
import {replaceStockForm, setLoadingGlobal} from '../../configs';
import {GetBooksByBarcode} from '../../services';

export default function ScanPage({navigation}) {
  const dispatch = useDispatch();

  const onSuccess = async (data) => {
    const barcode = data.data;
    dispatch(setLoadingGlobal(true));
    try {
      const result = await GetBooksByBarcode(barcode);
      const books = result.detail;
      dispatch(
        replaceStockForm({
          idBuku: books.idBuku,
          barcode: barcode,
        }),
      );
      navigation.navigate('UpdateStock', books.judulBuku);
      console.log('cek result detail', result.detail);
    } catch (error) {
      console.log('error', error);
      showError('Data Tidak Ditemukan!');
    }
    dispatch(setLoadingGlobal(false));
  };

  return (
    <View style={globalStyle.page}>
      <Header title="Scan Stock Opname" navigation={navigation} />
      <View style={styles.body}>
        <QRCodeScanner
          onRead={(value) => onSuccess(value)}
          containerStyle={styles.QRcontainer}
          cameraStyle={[styles.QRCamera]}
          reactivate={true}
          showMarker={true}
          reactivateTimeout={3000}
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
