import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import globalReducer from './globalReducer';
import stockReducer from './stockReducer';
import booksReducer from './booksReducer';

const reducer = combineReducers({globalReducer, stockReducer, booksReducer});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
