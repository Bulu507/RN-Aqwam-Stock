import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Icons} from '../../components';
import {colors, fonts, materialColor} from '../../utils';
import {ILBooks} from '../../assets';

export default function Cards() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>Atomic Habbits</Text>
        <Gap height={5} />
        <Text style={styles.label}>
          Scans Buku: <Text style={styles.info}>{250}</Text>
        </Text>
      </View>
      <Picture image={ILBooks} />
    </View>
  );
}

const Picture = (props) => {
  const image = props.image;
  return (
    <View style={styles.imageWrapper}>
      {image ? (
        <Image source={image} style={styles.image} />
      ) : (
        <Icons icon="mc book-cancel" size={50} style={styles.icon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: 18,
    color: colors.text.primary,
  },
  label: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.primary,
  },
  info: {
    fontFamily: fonts.primary.bold,
    fontSize: 12,
    color: colors.text.primary,
  },
  imageWrapper: {
    height: 100,
    width: 75,
    backgroundColor: colors.tertiary,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  icon: {color: materialColor.Grey},
});
