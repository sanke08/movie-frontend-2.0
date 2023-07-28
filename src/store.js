import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import {authReducer} from "./reducers/authReducer"
import { videoReducer,singleVideoReducer } from "./reducers/videoReducer"



const reducer = combineReducers({
    user:authReducer,
    videos:videoReducer,
    video:singleVideoReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store