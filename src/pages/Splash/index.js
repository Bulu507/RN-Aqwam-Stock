import {StyleSheet, Dimensions, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {colors, materialColor} from '../../utils';
import {ILLogo} from '../../assets';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={ILLogo} style={styles.image} />
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const imageHeight = (windowHeight * 16) / 100;
const imageWidth = (windowWidth * 68) / 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'cover',
  },
});
