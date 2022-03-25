import {StyleSheet, Dimensions, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import Button from '../Button';
import Modal from 'react-native-modal';
import NotifInfo from '../NotifInfo';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {colors} from '../../../utils';
import Alert from '../Alert';

export default function OptionBar() {
  const H = Dimensions.get('window').height;
  const W = Dimensions.get('window').width;
  const [visible, setVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const globalReducer = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();

  // on will unmount (post cleanup)
  useFocusEffect(
    useCallback(() => {
      return () => {
        setVisible(false);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const handleOptionVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Alert
        visible={alertVisible}
        close={() => setAlertVisible(false)}
        message="Apakah anda yakin untuk keluar aplikasi ?"
        // onConfirm={() => handleLogout()}
      />
      <Button
        icon="mc dots-vertical"
        iconSize={20}
        style={styles.btn}
        onPress={() => handleOptionVisible()}
      />
      <Modal
        isVisible={visible}
        deviceHeight={H}
        deviceWidth={W}
        animationIn="fadeIn"
        animationOut="fadeOut"
        useNativeDriver={true}
        onBackdropPress={() => setVisible(false)}>
        <View style={styles.menu}>
          <NotifInfo
            icon="mi logout"
            title="Keluar"
            onPress={() => setAlertVisible(true)}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {position: 'relative'},
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderWidth: 2,
    borderColor: colors.white,
  },
  btn: {backgroundColor: 'transparent'},
  menu: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    right: 15,
    top: 35,
    zIndex: 20,
  },
  separator: {borderBottomWidth: 1, borderBottomColor: colors.border},
});
