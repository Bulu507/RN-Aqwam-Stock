import {isEqual} from 'lodash';
import React from 'react';
import Default from './Default';
import Numeric from './Numeric';
import Password from './Password';
import Search from './Search';

export default function InputContent(props) {
  const type = props.type;

  if (isEqual(type, 'password')) {
    return <Password {...props} />;
  }
  if (isEqual(type, 'search')) {
    return <Search {...props} />;
  }
  if (isEqual(type, 'numeric')) {
    return <Numeric {...props} />;
  }

  return <Default {...props} />;
}
