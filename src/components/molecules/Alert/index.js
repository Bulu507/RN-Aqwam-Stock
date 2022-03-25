import {isEqual} from 'lodash';
import React from 'react';
import Default from './Default';
import Info from './Info';

export default function Alert(props) {
  const handleClose = () => {
    if (props.onCancel) {
      props.onCancel();
    } else {
      props.close();
    }
  };

  if (isEqual(props.type, 'info')) {
    return <Info {...props} close={() => handleClose()} />;
  }
  return <Default {...props} close={() => handleClose()} />;
}
