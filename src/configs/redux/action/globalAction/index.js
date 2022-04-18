import {isEqual} from 'lodash';
import {localDataPath} from '../../../../parameter';
import {AuthService, removeData} from '../../../../services';
import {showError} from '../../../../utils';

export const setLoadingGlobal = (value) => (dispatch) => {
  dispatch({type: 'SET_LOADING', value: value});
};

export const setLogout = (navigation) => async (dispatch) => {
  try {
    await AuthService.Logout();
    navigation.replace('Login');
  } catch (error) {
    showError('Terjadi Kendala');
    if (isEqual(error.status, 401)) {
      removeData(localDataPath.DATA_USER);
      navigation.replace('Login');
    }
  }
};
