import {StyleSheet, ScrollView, View} from 'react-native';
import React, {useEffect} from 'react';
import {globalStyle, useForm} from '../../utils';
import {Gap, Header, Input, NullData} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {GetListBooks, replaceStockForm} from '../../configs';
import {isEmpty} from 'lodash';
import Cards from './Cards';

export default function ListBooks({navigation}) {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    search: '',
    searchParams: '',
  });
  const {listData} = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(GetListBooks(form.searchParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.searchParams]);

  const handleOnPress = (item) => {
    console.log('cek item', item);
    dispatch(
      replaceStockForm({
        idBuku: item.code_product,
        barcode: item.barcode,
      }),
    );
    navigation.navigate('UpdateStock', item.nama_product);
  };

  console.log('cek listData', listData);
  return (
    <View style={globalStyle.page}>
      <Header title="List Buku Stock Opname" navigation={navigation} />
      <View style={styles.body}>
        <Input
          type="search"
          placeholder="Masukan Nama Buku"
          returnKeyType="search"
          value={form.search}
          onChangeText={(value) => setForm('search', value)}
          onSubmitEditing={() => setForm('searchParams', form.search)}
        />
        <ScrollView contentContainerStyle={styles.scrollView}>
          {isEmpty(listData) ? (
            <NullData />
          ) : (
            listData?.map((item, idx) => {
              return (
                <Cards
                  key={idx}
                  data={item}
                  onPress={() => handleOnPress(item)}
                />
              );
            })
          )}
          <Gap height={180} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {padding: 20},
  scrollView: {flexGrow: 1, paddingVertical: 20},
});
