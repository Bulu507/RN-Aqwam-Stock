import React, {useState} from 'react';
import {colors} from '../../../utils';
import Default from './Default';

export default function InputContent(props) {
  const [border, setBorder] = useState(colors.border);

  const onFocusForm = () => {
    setBorder(props.borderFocus ? props.borderFocus : colors.light);
  };

  const onBlurForm = () => {
    setBorder(colors.black);
  };

  return (
    <Default
      {...props}
      onFocusForm={onFocusForm}
      onBlurForm={onBlurForm}
      border={border}
    />
  );
}
