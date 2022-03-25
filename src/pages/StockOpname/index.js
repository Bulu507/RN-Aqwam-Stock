import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header, Input} from '../../components';
import {globalStyle} from '../../utils';
import Cards from './Cards';

export default function StockOpname({navigation}) {
  return (
    <View style={globalStyle.page}>
      <Header title="Stock Opname" navigation={navigation} />
      <View style={styles.body}>
        <Input
          type="search"
          placeholder="Masukan Nama Buku"
          returnKeyType="search"
        />
        <Gap height={20} />
        <Cards />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {padding: 20},
});
