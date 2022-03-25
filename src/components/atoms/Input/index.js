import React, {useState} from 'react';
import InputBox from '../InputBox';
import InputContent from './InputContent';
import {colors} from '../../../utils';

export default function Input(props) {
  const [border, setBorder] = useState(colors.border);

  const onFocusForm = () => {
    setBorder(props.borderFocus ? props.borderFocus : colors.light);
  };

  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <InputBox {...props}>
      <InputContent
        {...props}
        onFocusForm={onFocusForm}
        onBlurForm={onBlurForm}
        border={border}
      />
    </InputBox>
  );
}
