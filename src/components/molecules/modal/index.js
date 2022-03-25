import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {customizableStyle} from '../../../utils';

export default function ModalsComponent(props) {
  const H = Dimensions.get('window').height;
  const W = Dimensions.get('window').width;

  return (
    <Modal
      isVisible={props.visible}
      deviceHeight={H}
      deviceWidth={W}
      onModalWillHide={props.onModalWillHide}
      onModalHide={props.onModalHide}
      onModalShow={props.onModalShow}
      useNativeDriver={true}
      onModalWillShow={props.onModalWillShow}
      hasBackdrop={props.hasBackdrop}
      onBackdropPress={() => props.close()}>
      <View style={styles.centeredView}>
        <View style={customizableStyle(styles.modalView, props.style)}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    position: 'relative',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
});
