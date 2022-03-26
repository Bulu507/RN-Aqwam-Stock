import {isNull} from 'lodash';
import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import {useDispatch} from 'react-redux';
import {ILLogo} from '../../assets';
import {Button, Gap, Input} from '../../components';
import {setLoadingGlobal} from '../../configs';
import {localDataPath} from '../../parameter';
import {AuthService, storeData} from '../../services';
import {colors, fonts, showError, useForm, validateLogin} from '../../utils';

const dummyUser = {
  email: 'sa_21@mail.com',
  password: '*kecil123',
};

export default function Login({navigation}) {
  const dispatch = useDispatch();
  // const [form, setForm] = useForm({
  //   email: '',
  //   password: '',
  // });
  const [form, setForm] = useForm(dummyUser);

  // // dummy auto login
  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  AndroidKeyboardAdjust.setAdjustPan();

  const handleSubmit = async () => {
    const check = validateLogin(form);
    if (!isNull(check)) {
      return showError(check);
    }

    console.log('cek masuk login');
    dispatch(setLoadingGlobal(true));
    try {
      const result = await AuthService.Login(form);
      const data = result.data.result;
      storeData(localDataPath.DATA_USER, data);
      navigation.replace('HomeScreen');
    } catch (error) {
      console.log('error', error);
      showError(error.response_msg);
    }
    dispatch(setLoadingGlobal(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.board} />
      <Image source={ILLogo} style={styles.image} />
      <Gap height={40} />
      <Text style={styles.title}>Login</Text>
      <Gap height={20} />
      <View style={styles.form}>
        <Input
          placeholder="Username"
          autoCapitalize="none"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={15} />
        <Input
          placeholder="Password"
          autoCapitalize="none"
          type="password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
        />
        <Gap height={60} />
        <Button title="Login" onPress={() => handleSubmit()} />
      </View>
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const height = (windowHeight * 100) / 100;
const width = (windowWidth * 100) / 100;
const imageHeight = (windowHeight * 16) / 100;
const imageWidth = (windowWidth * 68) / 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    position: 'absolute',
    bottom: '10%',
    height: height,
    width: width,
    backgroundColor: colors.background,
    borderRadius: 50,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: 18,
    color: colors.text.primary,
  },
  form: {
    width: '100%',
    padding: 20,
  },
});
