import {GET} from '../api.service';

// GET
export const GetListProducts = (params) => {
  return GET('/GetProductLimit', {judulBuku: params});
};
