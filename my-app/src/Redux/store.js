import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { NewsReducer } from "./NewsReducer/reducer";
import { loginReducer } from "./Login/reducer";
import { RegistorReducer } from "./Registration/reducer";

const reducer = combineReducers({
    news:NewsReducer,
    login:loginReducer,
    registration: RegistorReducer,
});

export const store = legacy_createStore(reducer,applyMiddleware(thunk));