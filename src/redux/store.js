import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import favCardsReducer from "./reducers/favCardsReducer";
import userReducer from "./reducers/userReducer"
import thunk from "redux-thunk";

const reducers = combineReducers({ list: favCardsReducer });
const store = createStore(reducers, applyMiddleware(thunk));

export default store