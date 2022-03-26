import {GetListProducts} from '../../../../services';
import {showError} from '../../../../utils';
import {setLoadingGlobal} from '../globalAction';

export const setBooks = (key, value) => (dispatch) => {
  dispatch({type: 'SET_BOOKS', key: key, value: value});
};

export const resetBooks = () => (dispatch) => {
  dispatch({type: 'RESET_BOOKS'});
};

export const replaceBooks = (value) => (dispatch) => {
  dispatch({type: 'REPLACE_BOOKS', value: value});
};

export const GetListBooks = (search) => async (dispatch) => {
  dispatch(setLoadingGlobal(true));
  try {
    const result = await GetListProducts(search);
    const data = result.data;
    dispatch(setBooks('listData', data));
    console.log('cek fetch', data);
  } catch (error) {
    console.log('error', error);
    showError('Terjadi kendala');
  }
  dispatch(setLoadingGlobal(false));
};
