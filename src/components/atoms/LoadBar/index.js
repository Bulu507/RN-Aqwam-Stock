import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default function LoadBar() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" animating />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {justifyContent: 'center', flex: 1},
});
