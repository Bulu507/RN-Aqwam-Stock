import {isEmpty} from 'lodash';

export const validateLogin = (values) => {
  if (isEmpty(values.email)) {
    return 'username belum diisi!';
  }

  if (isEmpty(values.password)) {
    return 'password belum diisi!';
  }

  return null;
};
