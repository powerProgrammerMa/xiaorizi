import  reducers from "./reducers";
import thunk from "redux-thunk";
import promise from "redux-promise"

import {createStore,applyMiddleware} from "redux" 


var store = createStore(reducers,applyMiddleware(thunk,promise))

export default store;
