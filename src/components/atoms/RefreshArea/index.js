import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PTRView from 'react-native-pull-to-refresh';

export default function RefreshArea(props) {
  return <PTRView {...props} />;
}

const styles = StyleSheet.create({});
