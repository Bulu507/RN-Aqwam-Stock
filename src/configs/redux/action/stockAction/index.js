import {isEqual} from 'lodash';
import {localDataPath} from '../../../../parameter';
import {GetListStockOpname, removeData} from '../../../../services';
import {showError} from '../../../../utils';
import {setLoadingGlobal, setLogout} from '../globalAction';

// Stock
export const setStock = (key, value) => (dispatch) => {
  dispatch({type: 'SET_STOCK', key: key, value: value});
};

export const resetStock = () => (dispatch) => {
  dispatch({type: 'RESET_STOCK'});
};

export const replaceStock = (value) => (dispatch) => {
  dispatch({type: 'REPLACE_STOCK', value: value});
};

export const GetListStock = (search, navigation) => async (dispatch) => {
  dispatch(setLoadingGlobal(true));
  try {
    const result = await GetListStockOpname(search);
    const data = result.data;
    dispatch(setStock('listData', data));
    console.log('cek fetch', data);
  } catch (error) {
    console.log('error', error);
    showError('Terjadi kendala');
    if (isEqual(error.status, 401)) {
      removeData(localDataPath.DATA_USER);
      navigation.replace('Login');
    }
  }
  dispatch(setLoadingGlobal(false));
};

// Stock Form
export const setStockForm = (key, value) => (dispatch) => {
  dispatch({type: 'SET_STOCK_FORM', key: key, value: value});
};

export const resetStockForm = () => (dispatch) => {
  dispatch({type: 'RESET_STOCK_FORM'});
};

export const replaceStockForm = (value) => (dispatch) => {
  dispatch({type: 'REPLACE_STOCK_FORM', value: value});
};
