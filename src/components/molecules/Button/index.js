import React from 'react';
import ButtonContainer from './BtnContainer';
import BtnCustom from './BtnCustom';

export default function Button(props) {
  if (props.type) {
    return <BtnCustom {...props} />;
  } else {
    return <ButtonContainer {...props} />;
  }
}
