import {GET, POST} from '../api.service';

// GET
export const GetListStockOpname = (params) => {
  return GET('/GetListStockOpnameAdmin', {judulBuku: params});
};

export const ShowStockOpname = (params) => {
  return GET('/GetDetailListStockOpnameAdmin', {idBuku: params});
};

export const GetBooksByBarcode = (params) => {
  return GET('/GetProductDetailbyBarcode', {barcode: params});
};

// POST
export const DeleteStock = (params) => {
  return POST('/DeleteStockOpnameAdmin', {idSO: params});
};

export const AddStock = (params) => {
  return POST('/AddStockOpnameAdmin', params);
};
