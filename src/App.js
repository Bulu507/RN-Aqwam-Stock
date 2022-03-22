import {LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Home} from './pages';

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return <Home />;
}

const styles = StyleSheet.create({});