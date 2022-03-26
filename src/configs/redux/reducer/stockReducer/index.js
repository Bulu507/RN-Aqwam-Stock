const stockForm = {
  idBuku: '',
  barcode: '',
  jumlah: 0,
};

const initialState = {
  listData: [],
  stockForm: stockForm,
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STOCK_FORM':
      return {
        ...state,
        stockForm: {
          ...state.stockForm,
          [action.key]: action.value,
        },
      };
    case 'REPLACE_STOCK_FORM':
      return {
        ...state,
        stockForm: {
          ...state.stockForm,
          ...action.value,
        },
      };
    case 'RESET_STOCK_FORM':
      return {
        ...state,
        stockForm: stockForm,
      };
    case 'SET_STOCK':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'REPLACE_STOCK':
      return {
        ...state,
        ...action.value,
      };
    case 'RESET_STOCK':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default stockReducer;
