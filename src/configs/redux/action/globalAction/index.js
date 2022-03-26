import {AuthService} from '../../../../services';
import {showError} from '../../../../utils';

export const setLoadingGlobal = (value) => (dispatch) => {
  dispatch({type: 'SET_LOADING', value: value});
};

export const setLogout = (navigation) => async (dispatch) => {
  try {
    await AuthService.Logout();
    navigation.navigate('Login');
  } catch (error) {
    showError(error.response_message);
    console.log('error = ', error);
  }
};
