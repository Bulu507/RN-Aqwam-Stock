import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {globalStyle} from '../../utils';
import {Button, Dropdown, Gap, Header, Input} from '../../components';

const listData = [
  {value: 1, label: 'option 1'},
  {value: 2, label: 'option 2'},
  {value: 3, label: 'option 3'},
];

export default function Home({navigation}) {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <View style={globalStyle.page}>
      <Header title="Header" />
      <View style={styles.body}>
        <Button
          icon="mc calendar left"
          title="test"
          onPress={() => navigation.navigate('ScanPage')}
        />
        <Gap height={20} />
        <Dropdown
          title="Nama Toko / Dealer"
          placeholder="Pilih Toko / Dealer"
          required
          value={selectedItem}
          items={listData}
          setValue={setSelectedItem}
          error="test"
        />
        <Gap height={20} />
        <Input title="Test" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {padding: 20},
});
