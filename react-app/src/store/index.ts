import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const store = createStore({useReducer}, applyMiddleware(thunk))

export default store