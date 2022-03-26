import {GET, POST} from '../api.service';

// GET
export const GetListStockOpname = (params) => {
  return GET('/GetListStockOpnameAdmin', {judulBuku: params});
};

export const ShowStockOpname = (params) => {
  return GET('/GetDetailListStockOpnameAdmin', {idBuku: params});
};

// POST
export const DeleteStock = (params) => {
  return POST('/DeleteStockOpnameAdmin', {idSO: params});
};
