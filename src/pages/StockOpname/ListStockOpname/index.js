import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Gap, Header, Input, NullData, RefreshArea} from '../../../components';
import {globalStyle, showError, showWarning, useForm} from '../../../utils';
import Cards from './Cards';
import {useDispatch, useSelector} from 'react-redux';
import {GetListStock} from '../../../configs';
import {isEmpty} from 'lodash';

export default function ListStockOpname({navigation}) {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    search: '',
    searchParams: '',
  });
  const {listData} = useSelector((state) => state.stockReducer);

  useEffect(() => {
    dispatch(GetListStock(form.searchParams, navigation));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.searchParams]);

  const refresh = () => {
    dispatch(GetListStock(form.searchParams, navigation));
  };

  console.log('cek listData', listData);
  return (
    <View style={globalStyle.page}>
      <Header title="Stock Opname" navigation={navigation} />
      <View style={styles.body}>
        <Input
          type="search"
          placeholder="Masukan Nama Buku"
          returnKeyType="search"
          value={form.search}
          onChangeText={(value) => setForm('search', value)}
          onSubmitEditing={() => setForm('searchParams', form.search)}
        />
        <RefreshArea onRefresh={() => refresh()}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {isEmpty(listData) ? (
              <NullData />
            ) : (
              listData?.map((item, idx) => {
                return (
                  <Cards
                    key={idx}
                    data={item}
                    onPress={() =>
                      navigation.navigate('DetailStockOpname', item.idBuku)
                    }
                  />
                );
              })
            )}
            <Gap height={180} />
          </ScrollView>
        </RefreshArea>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {padding: 20},
  scrollView: {flexGrow: 1, paddingVertical: 20},
});
