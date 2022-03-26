import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  colors,
  fonts,
  globalStyle,
  showError,
  showSuccess,
  useForm,
} from '../../utils';
import {Alert, Button, Gap, Header, Input} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {resetStockForm, setLoadingGlobal, setStockForm} from '../../configs';
import {AddStock} from '../../services';

export default function UpdateStock({navigation, route}) {
  const title = route.params;
  const dispatch = useDispatch();
  const {stockForm} = useSelector((state) => state.stockReducer);
  const [form, setform] = useForm({
    koli: 0,
    quantity: 1,
  });
  const [showAlert, setShowAlert] = useState(false);

  const onChangeText = (key, value) => {
    setform(key, value);
  };

  useEffect(() => {
    const countTotal = () => {
      // let quantity = form.quantity <= 1 ? 1 : form.quantity;
      let quantity = form.quantity;
      let koli = form.koli;
      let total = koli * quantity;
      dispatch(setStockForm('jumlah', total));
    };
    countTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.quantity, form.koli]);

  const handleSubmit = async () => {
    dispatch(setLoadingGlobal(true));
    try {
      const result = await AddStock(stockForm);
      dispatch(resetStockForm());
      console.log('cek add', result);
      showSuccess('Data Stock Opname Berhasil Diupdate!');
      // navigation.goBack();
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log('error', error);
      showError('Terjadi kendala');
    }
    setShowAlert(false);
    dispatch(setLoadingGlobal(false));
  };

  const handleBack = () => {
    dispatch(resetStockForm());
    navigation.goBack();
  };

  console.log('cek form', form);
  console.log('cek stockForm', stockForm);
  return (
    <View style={globalStyle.page}>
      <Alert
        visible={showAlert}
        close={() => setShowAlert(false)}
        message={'Apakah anda yakin dengan data tersebut ?'}
        onConfirm={() => handleSubmit()}
      />
      <Header
        type="close"
        title="Update Jumlah Buku"
        onPress={() => handleBack()}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.form}>
          <Text style={styles.title}>{title}</Text>
          <Gap height={30} />
          <View style={styles.row}>
            <Input
              type="numeric"
              title="Koli"
              required
              value={form.koli}
              onChangeText={(value) => onChangeText('koli', value)}
            />
            <Input
              type="numeric"
              title="Quantity"
              required
              minValue={1}
              value={form.quantity}
              onChangeText={(value) => onChangeText('quantity', value)}
            />
          </View>
          <Gap height={20} />
          <Input
            title="Total"
            disable
            value={stockForm.jumlah.toString()}
            inputStyle={styles.input}
          />
        </View>
        <Gap height={30} />
        <Button
          disable={stockForm.jumlah < 1}
          title="Update Stock Opname"
          onPress={() => setShowAlert(true)}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  form: {},
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: 18,
    color: colors.text.primary,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {fontSize: 20},
});
