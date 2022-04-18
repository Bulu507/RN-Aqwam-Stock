import {isEqual} from 'lodash';
import {localDataPath} from '../../../../parameter';
import {GetListProducts, removeData} from '../../../../services';
import {showError} from '../../../../utils';
import {setLoadingGlobal, setLogout} from '../globalAction';

export const setBooks = (key, value) => (dispatch) => {
  dispatch({type: 'SET_BOOKS', key: key, value: value});
};

export const resetBooks = () => (dispatch) => {
  dispatch({type: 'RESET_BOOKS'});
};

export const replaceBooks = (value) => (dispatch) => {
  dispatch({type: 'REPLACE_BOOKS', value: value});
};

export const GetListBooks = (search, navigation) => async (dispatch) => {
  dispatch(setLoadingGlobal(true));
  try {
    const result = await GetListProducts(search);
    const data = result.data;
    dispatch(setBooks('listData', data));
    console.log('cek fetch', data);
  } catch (error) {
    console.log('error list Book', error);
    console.log('error status', error.status);
    showError('Terjadi kendala');
    if (isEqual(error.status, 401)) {
      removeData(localDataPath.DATA_USER);
      navigation.replace('Login');
    }
  }
  dispatch(setLoadingGlobal(false));
};
