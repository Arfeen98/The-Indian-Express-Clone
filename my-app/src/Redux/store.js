import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { NewsReducer } from "./NewsReducer/reducer";

const reducer = combineReducers({
    news:NewsReducer,
});

export const store = legacy_createStore(reducer,applyMiddleware(thunk));