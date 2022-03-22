import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

export const showError = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.danger,
    color: colors.text.primary,
  });
};

export const showSuccess = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.success,
    color: colors.text.primary,
  });
};

export const showWarning = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.warn,
    color: colors.text.primary,
  });
};
