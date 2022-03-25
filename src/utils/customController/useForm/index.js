import {useState} from 'react';

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  return [
    values,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setValues(initialValue);
      }
      if (formType === 'replace') {
        return setValues({...values, ...formValue});
      }
      return setValues({...values, [formType]: formValue});
    },
  ];
};
