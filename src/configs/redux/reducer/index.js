import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import globalReducer from './globalReducer';
import stockReducer from './stockReducer';

const reducer = combineReducers({globalReducer, stockReducer});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
