import {GetListStockOpname} from '../../../../services';
import {showError} from '../../../../utils';
import {setLoadingGlobal} from '../globalAction';

export const setStock = (key, value) => (dispatch) => {
  dispatch({type: 'SET_STOCK', key: key, value: value});
};

export const resetStock = () => (dispatch) => {
  dispatch({type: 'RESET_STOCK'});
};

export const replaceStock = (value) => (dispatch) => {
  dispatch({type: 'REPLACE_STOCK', value: value});
};

export const GetListStock = (search) => async (dispatch) => {
  dispatch(setLoadingGlobal(true));
  try {
    const result = await GetListStockOpname(search);
    const data = result.data;
    dispatch(setStock('listData', data));
    console.log('cek fetch', data);
  } catch (error) {
    console.log('error', error);
    showError('Terjadi kendala');
  }
  dispatch(setLoadingGlobal(false));
};
