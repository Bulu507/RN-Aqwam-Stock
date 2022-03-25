import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {globalStyle} from '../../utils';
import {Button, Dropdown, Gap, Header, Input} from '../../components';

export default function Home({navigation}) {
  return (
    <View style={globalStyle.page}>
      <Header title="Header" />
      <View style={styles.body}>
        <Text>test</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {padding: 20},
});
