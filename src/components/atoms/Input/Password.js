import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Default from './Default';
import Icons from '../Icons';
import {colors} from '../../../utils';

export default function Password(props) {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.container}>
      <Default {...props} hidePassword={hidePassword} />
      <TouchableOpacity
        style={styles.showButton}
        onPress={() => setHidePassword(!hidePassword)}>
        <Icons
          icon={hidePassword ? 'fa eye' : 'fa eye-slash'}
          size={15}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {position: 'relative', justifyContent: 'center'},
  showButton: {position: 'absolute', right: 10, padding: 2, elevation: 10},
  icon: {color: colors.text.primary},
});
